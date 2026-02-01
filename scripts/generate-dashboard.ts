#!/usr/bin/env tsx
/**
 * Dashboard Data Generator
 *
 * Generates dashboard data by running all aggregation modules and saving the results.
 *
 * Usage:
 *   npm run generate:dashboard
 *   tsx scripts/generate-dashboard.ts
 */

import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

// Import graph layer
import { buildIndex } from '../../runtime/dist/graph/index.js';

// Import aggregation modules
import { calculateGoalProgress } from '../../runtime/dist/aggregation/goal-progress.js';
import { calculateProjectHealth } from '../../runtime/dist/aggregation/project-health.js';
import { analyzeTeamWorkload } from '../../runtime/dist/aggregation/team-workload.js';
import { analyzeKPITrends } from '../../runtime/dist/aggregation/kpi-trends.js';

// Resolve paths
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DATABASES_PATH = path.resolve(__dirname, '../../world-model/databases');
const OUTPUT_PATH = path.resolve(__dirname, '../src/data/dashboard.json');

/**
 * Dashboard data structure
 */
interface DashboardData {
  generatedAt: string;
  goalProgress: ReturnType<typeof calculateGoalProgress>;
  projectHealth: ReturnType<typeof calculateProjectHealth>;
  teamWorkload: ReturnType<typeof analyzeTeamWorkload>;
  kpiTrends: ReturnType<typeof analyzeKPITrends>;
}

/**
 * Main execution function
 */
async function main() {
  console.log('🚀 Generating dashboard data...\n');

  // Verify databases directory exists
  if (!fs.existsSync(DATABASES_PATH)) {
    console.error(`❌ Databases directory not found: ${DATABASES_PATH}`);
    console.error('   Please ensure world-model/databases exists with JSON files.');
    process.exit(1);
  }

  console.log(`📂 Loading databases from: ${DATABASES_PATH}`);

  // Build graph index
  const index = buildIndex(DATABASES_PATH);

  console.log(`✅ Loaded ${index.entities.size} entities from ${index.byDatabase.size} databases\n`);

  // Run aggregation modules
  console.log('📊 Running aggregation modules...');

  console.log('  1️⃣  Calculating goal progress...');
  const goalProgress = calculateGoalProgress(index);

  console.log('  2️⃣  Calculating project health...');
  const projectHealth = calculateProjectHealth(index);

  console.log('  3️⃣  Analyzing team workload...');
  const teamWorkload = analyzeTeamWorkload(index);

  console.log('  4️⃣  Analyzing KPI trends...');
  const kpiTrends = analyzeKPITrends(index);

  console.log('✅ Aggregation complete\n');

  // Build dashboard data
  const dashboardData: DashboardData = {
    generatedAt: new Date().toISOString(),
    goalProgress,
    projectHealth,
    teamWorkload,
    kpiTrends,
  };

  // Ensure output directory exists
  const outputDir = path.dirname(OUTPUT_PATH);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // Save to file
  console.log(`💾 Saving dashboard data to: ${OUTPUT_PATH}`);
  fs.writeFileSync(OUTPUT_PATH, JSON.stringify(dashboardData, null, 2), 'utf-8');

  console.log('✅ Dashboard data generated successfully!\n');

  // Print summary
  console.log('📈 Summary:');
  console.log(`   Goals: ${goalProgress.totalGoals} total, ${goalProgress.overallCompletionRate.toFixed(1)}% complete`);
  console.log(`   Projects: ${projectHealth.totalProjects} total, ${projectHealth.averageHealth.toFixed(1)} avg health`);
  console.log(`   Team Workload: ${teamWorkload.totalOpenTasks} open tasks, ${teamWorkload.averageWorkloadScore} avg score`);
  console.log(`   KPIs: ${kpiTrends.totalKPIs} total, ${kpiTrends.averageAchievementRate.toFixed(1)}% avg achievement`);
  console.log(`\n✨ Done! Dashboard data is ready at ${OUTPUT_PATH}`);
}

// Execute
main().catch((error) => {
  console.error('❌ Error generating dashboard data:', error);
  process.exit(1);
});
