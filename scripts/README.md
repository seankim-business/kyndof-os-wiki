# Wiki Scripts

Scripts for generating dashboard data and other wiki content.

## generate-dashboard.ts

Generates dashboard data from the World Model by running all aggregation modules.

### Usage

```bash
npm run generate:dashboard
```

### What it does

1. Loads the WorldModelGraph from `runtime/src/graph`
2. Runs all 4 aggregation functions:
   - `calculateGoalProgress()` - Goal completion statistics
   - `calculateProjectHealth()` - Project health scores
   - `analyzeTeamWorkload()` - Team workload analysis
   - `analyzeKPITrends()` - KPI performance trends
3. Saves combined results to `wiki/src/data/dashboard.json`

### Output Format

```json
{
  "generatedAt": "ISO timestamp",
  "goalProgress": { ... },
  "projectHealth": { ... },
  "teamWorkload": { ... },
  "kpiTrends": { ... }
}
```

### Dependencies

- Requires `runtime` to be built first: `cd ../runtime && npm run build`
- Reads from `world-model/databases/*.json`

### Example Output

```
📈 Summary:
   Goals: 31 total, 0.0% complete
   Projects: 177 total, 72.2 avg health
   Team Workload: 0 open tasks, 0 avg score
   KPIs: 6 total, 21.7% avg achievement
```
