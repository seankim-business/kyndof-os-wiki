# Slack Integration Setup Guide

This guide walks you through setting up the Slack integration for the Kyndof Wiki to sync Slack conversations into your knowledge graph.

## Prerequisites

- Admin access to your Slack workspace
- Node.js installed locally
- Access to the Kyndof Wiki repository

## Step 1: Create a Slack App

1. Go to [https://api.slack.com/apps](https://api.slack.com/apps)
2. Click **"Create New App"**
3. Select **"From scratch"**
4. Enter App Name: `Kyndof Wiki Bot` (or your preferred name)
5. Select your workspace from the dropdown
6. Click **"Create App"**

![Create App Screenshot Placeholder]

## Step 2: Configure OAuth Scopes

OAuth scopes define what permissions your bot has in the workspace.

1. In the left sidebar, click **"OAuth & Permissions"**
2. Scroll down to **"Scopes"** section
3. Under **"Bot Token Scopes"**, click **"Add an OAuth Scope"**
4. Add the following scopes one by one:

   | Scope | Purpose |
   |-------|---------|
   | `channels:history` | Read messages from public channels |
   | `channels:read` | View basic channel information |
   | `groups:history` | Read messages from private channels |
   | `groups:read` | View private channel information |
   | `users:read` | Get user display names and profiles |
   | `reactions:read` | See emoji reactions on messages |

![OAuth Scopes Screenshot Placeholder]

### Why These Scopes?

- **channels:*** - Access public channel messages and metadata
- **groups:*** - Access private channels the bot is invited to
- **users:read** - Resolve user IDs to readable names
- **reactions:read** - Capture context from emoji reactions

## Step 3: Install App to Workspace

1. Scroll back up on the **"OAuth & Permissions"** page
2. Click **"Install to Workspace"** button
3. Review the permissions summary
4. Click **"Allow"** to authorize the app

![Install to Workspace Screenshot Placeholder]

After installation, you'll see a **Bot User OAuth Token** displayed.

## Step 4: Copy Bot Token to Environment

1. Copy the **Bot User OAuth Token** (starts with `xoxb-`)
2. Open your project's `.env` file (create if it doesn't exist)
3. Add this line:

   ```bash
   SLACK_BOT_TOKEN=xoxb-your-actual-token-here
   ```

4. Save the file

**Security Note:** Never commit `.env` files to version control. The token should remain private.

## Step 5: Invite Bot to Channels

The bot can only read channels it's a member of.

For each channel you want to sync:

1. Open the channel in Slack
2. Click the channel name at the top
3. Select **"Integrations"** tab
4. Click **"Add apps"**
5. Find your bot (`Kyndof Wiki Bot`)
6. Click **"Add"**

**Or** use the slash command in any channel:
```
/invite @Kyndof Wiki Bot
```

![Invite Bot Screenshot Placeholder]

## Step 6: Verify Setup

Run the OAuth setup helper to verify your configuration:

```bash
npm run slack:setup
```

### Expected Output

**✅ Success:**
```
✓ SLACK_BOT_TOKEN found in environment
✓ Token format valid (xoxb-*)
✓ Connected to workspace: Your Workspace Name
✓ Bot user: @kyndof-wiki-bot

Accessible channels:
  - #general (public)
  - #engineering (public)
  - #product-discussions (private)

Setup complete! Run 'npm run sync:slack' to start syncing.
```

**❌ Common Errors:**

| Error | Solution |
|-------|----------|
| `SLACK_BOT_TOKEN not found` | Add token to `.env` file |
| `Invalid token format` | Ensure token starts with `xoxb-` |
| `invalid_auth` | Token may be expired, regenerate in Slack app settings |
| `No accessible channels` | Invite bot to channels using `/invite @bot-name` |

## Step 7: Run Initial Sync

Once setup is verified, run your first sync:

```bash
npm run sync:slack
```

This will:
- Fetch all messages from accessible channels
- Create markdown files in `src/content/slack/`
- Build the knowledge graph with Slack nodes
- Link conversations by participants and topics

## Ongoing Usage

### Scheduled Syncs

Add to your CI/CD or cron:
```bash
# Daily at 2am
0 2 * * * cd /path/to/wiki && npm run sync:slack
```

### Manual Syncs

Run anytime to pull latest messages:
```bash
npm run sync:slack
```

### Monitoring

Check sync logs:
```bash
tail -f logs/slack-sync.log
```

## Troubleshooting

### Bot Can't See Messages

**Problem:** Bot is in channel but messages aren't syncing.

**Solution:**
1. Check bot was invited *after* messages were posted (bot can't see history before joining)
2. Verify scopes include `channels:history` or `groups:history`
3. Re-install app if scopes were changed

### Private Channels Not Syncing

**Problem:** Public channels work, private don't.

**Solution:**
1. Ensure `groups:history` and `groups:read` scopes are added
2. Re-install app after adding scopes
3. Manually invite bot to each private channel

### Rate Limiting

**Problem:** Sync fails with `rate_limited` error.

**Solution:**
1. Slack API allows 1 request per second for most methods
2. The sync script includes automatic rate limiting
3. For large workspaces, sync may take several minutes

### Token Expired

**Problem:** `invalid_auth` or `token_revoked` error.

**Solution:**
1. Go to [api.slack.com/apps](https://api.slack.com/apps)
2. Select your app
3. Go to **OAuth & Permissions**
4. Click **"Reinstall to Workspace"**
5. Copy new token to `.env`

## Next Steps

- [Graph Data Structure](./graph-data-structure.md) - Understand how Slack data is modeled
- [Sync Configuration](./sync-configuration.md) - Customize sync behavior
- [Search Guide](./search-guide.md) - Query Slack conversations in the graph

## Security Best Practices

1. **Token Storage:** Never commit `.env` to git. Add to `.gitignore`.
2. **Scope Minimization:** Only request scopes you actually need.
3. **Token Rotation:** Regenerate tokens periodically (every 90 days recommended).
4. **Access Control:** Limit who has admin access to the Slack app.
5. **Audit Logs:** Review Slack's audit logs for app activity regularly.

## Support

Questions or issues?
- Open an issue on GitHub
- Check existing issues for solutions
- Review Slack API docs: [api.slack.com/docs](https://api.slack.com/docs)
