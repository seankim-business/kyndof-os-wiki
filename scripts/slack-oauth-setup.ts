#!/usr/bin/env tsx

/**
 * Slack OAuth Setup Helper
 *
 * Interactive script to verify Slack OAuth configuration and test connection.
 *
 * Usage:
 *   npm run slack:setup
 *   tsx scripts/slack-oauth-setup.ts
 */

import * as fs from 'fs';
import * as path from 'path';

// ANSI color codes for terminal output
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  bold: '\x1b[1m',
};

function log(message: string, color: string = colors.reset) {
  console.log(`${color}${message}${colors.reset}`);
}

function success(message: string) {
  log(`✓ ${message}`, colors.green);
}

function error(message: string) {
  log(`✗ ${message}`, colors.red);
}

function warning(message: string) {
  log(`⚠ ${message}`, colors.yellow);
}

function info(message: string) {
  log(`ℹ ${message}`, colors.blue);
}

interface EnvStatus {
  exists: boolean;
  hasToken: boolean;
  tokenValue?: string;
}

interface SlackAuthResponse {
  ok: boolean;
  url?: string;
  team?: string;
  user?: string;
  team_id?: string;
  user_id?: string;
  bot_id?: string;
  error?: string;
}

interface SlackChannel {
  id: string;
  name: string;
  is_private: boolean;
  is_member: boolean;
}

interface SlackChannelsResponse {
  ok: boolean;
  channels?: SlackChannel[];
  error?: string;
}

/**
 * Check if .env file exists and contains SLACK_BOT_TOKEN
 */
function checkEnvFile(): EnvStatus {
  const envPath = path.join(process.cwd(), '.env');

  if (!fs.existsSync(envPath)) {
    return { exists: false, hasToken: false };
  }

  const envContent = fs.readFileSync(envPath, 'utf-8');
  const tokenMatch = envContent.match(/^SLACK_BOT_TOKEN=(.+)$/m);

  if (!tokenMatch) {
    return { exists: true, hasToken: false };
  }

  const tokenValue = tokenMatch[1].trim();
  return {
    exists: true,
    hasToken: true,
    tokenValue: tokenValue || undefined,
  };
}

/**
 * Validate token format (should start with xoxb-)
 */
function validateTokenFormat(token: string): boolean {
  return token.startsWith('xoxb-');
}

/**
 * Test Slack connection using auth.test API
 */
async function testSlackConnection(token: string): Promise<SlackAuthResponse> {
  try {
    const response = await fetch('https://slack.com/api/auth.test', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    const data = await response.json();
    return data as SlackAuthResponse;
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    return {
      ok: false,
      error: `Network error: ${message}`,
    };
  }
}

/**
 * List accessible channels using conversations.list API
 */
async function listChannels(token: string): Promise<SlackChannel[]> {
  try {
    const response = await fetch('https://slack.com/api/conversations.list', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    const data = await response.json() as SlackChannelsResponse;

    if (!data.ok) {
      error(`Failed to list channels: ${data.error}`);
      return [];
    }

    return data.channels || [];
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    error(`Error listing channels: ${message}`);
    return [];
  }
}

/**
 * Main setup flow
 */
async function main() {
  log('\n========================================', colors.bold);
  log('  Slack OAuth Setup Helper', colors.bold);
  log('========================================\n', colors.bold);

  // Step 1: Check .env file
  info('Step 1: Checking environment configuration...\n');

  const envStatus = checkEnvFile();

  if (!envStatus.exists) {
    error('.env file not found');
    warning('Create a .env file in the project root');
    info('Example:\n');
    console.log('  SLACK_BOT_TOKEN=xoxb-your-token-here\n');
    process.exit(1);
  }

  success('.env file exists');

  if (!envStatus.hasToken) {
    error('SLACK_BOT_TOKEN not found in .env');
    warning('Add your Slack bot token to .env file');
    info('Get token from: https://api.slack.com/apps > OAuth & Permissions\n');
    process.exit(1);
  }

  success('SLACK_BOT_TOKEN found in environment');

  // Step 2: Validate token format
  info('\nStep 2: Validating token format...\n');

  const token = envStatus.tokenValue!;

  if (!validateTokenFormat(token)) {
    error('Token format invalid');
    warning('Slack bot tokens should start with "xoxb-"');
    info(`Current token starts with: ${token.substring(0, 10)}...\n`);
    process.exit(1);
  }

  success('Token format valid (xoxb-*)');

  // Step 3: Test connection
  info('\nStep 3: Testing Slack connection...\n');

  const authTest = await testSlackConnection(token);

  if (!authTest.ok) {
    error(`Authentication failed: ${authTest.error}`);
    warning('Common issues:');
    console.log('  - Token may be expired or revoked');
    console.log('  - Token may not have required scopes');
    console.log('  - Network connectivity issues\n');
    info('Try regenerating token at: https://api.slack.com/apps\n');
    process.exit(1);
  }

  success(`Connected to workspace: ${authTest.team}`);
  success(`Bot user: @${authTest.user}`);

  // Step 4: List accessible channels
  info('\nStep 4: Checking accessible channels...\n');

  const channels = await listChannels(token);

  if (channels.length === 0) {
    warning('No accessible channels found');
    info('Invite the bot to channels using:');
    console.log(`  /invite @${authTest.user}\n`);
  } else {
    success(`Found ${channels.length} accessible channel(s):\n`);

    const publicChannels = channels.filter(c => !c.is_private && c.is_member);
    const privateChannels = channels.filter(c => c.is_private && c.is_member);

    if (publicChannels.length > 0) {
      log('  Public channels:', colors.blue);
      publicChannels.forEach(c => {
        console.log(`    - #${c.name}`);
      });
      console.log();
    }

    if (privateChannels.length > 0) {
      log('  Private channels:', colors.blue);
      privateChannels.forEach(c => {
        console.log(`    - #${c.name} 🔒`);
      });
      console.log();
    }
  }

  // Step 5: Verify required scopes (basic check)
  info('Step 5: Verifying OAuth scopes...\n');

  const requiredScopes = [
    'channels:history',
    'channels:read',
    'groups:history',
    'groups:read',
    'users:read',
    'reactions:read',
  ];

  warning('Cannot verify scopes via API - please confirm manually:');
  console.log();
  requiredScopes.forEach(scope => {
    console.log(`  [ ] ${scope}`);
  });
  console.log();
  info('Check scopes at: https://api.slack.com/apps > OAuth & Permissions\n');

  // Success summary
  log('========================================', colors.bold);
  success('Setup verification complete!');
  log('========================================\n', colors.bold);

  info('Next steps:');
  console.log('  1. Ensure all required scopes are enabled (see above)');
  console.log('  2. Invite bot to desired channels');
  console.log('  3. Run sync: npm run sync:slack\n');
}

// Run the script
main().catch(err => {
  error(`\nUnexpected error: ${err.message}`);
  console.error(err);
  process.exit(1);
});
