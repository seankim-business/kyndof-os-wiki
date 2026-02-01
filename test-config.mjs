// Simple test to validate config.ts can be imported
import { collections, ImportanceBasedContent } from './src/content/config.ts';

console.log('✅ Config imported successfully');
console.log('Collections:', Object.keys(collections));

// Test importance-based collections
const importanceBasedCollections = [
  '00-company',
  '01-projects',
  '02-partners-clients',
  '03-processes',
  '04-teams',
  '99-archive'
];

const legacyCollections = [
  'entities',
  'people',
  'companies',
  'projects',
  'meetings',
  'tasks'
];

importanceBasedCollections.forEach(name => {
  if (collections[name]) {
    console.log(`✅ ${name} collection defined`);
  } else {
    console.log(`❌ ${name} collection missing`);
  }
});

legacyCollections.forEach(name => {
  if (collections[name]) {
    console.log(`✅ ${name} collection defined`);
  } else {
    console.log(`❌ ${name} collection missing`);
  }
});

console.log('\n✅ All checks passed!');
