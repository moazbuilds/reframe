#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const ROOT = __dirname;
const SRC = path.join(ROOT, 'prompts', 'templates', 'reframe');
const OUT = path.join(ROOT, 'skills', 'reframe');
const STEPS_OUT = path.join(OUT, 'steps');

// ---------------------------------------------------------------------------
// Step 1: Read all source files
// ---------------------------------------------------------------------------

const persona = fs.readFileSync(path.join(SRC, 'lens', 'persona.md'), 'utf8');
const systemRules = fs.readFileSync(path.join(SRC, 'shared', 'system-rules.md'), 'utf8');
const workflow = fs.readFileSync(path.join(SRC, 'lens', 'workflow.md'), 'utf8');

const stepFiles = fs.readdirSync(path.join(SRC, 'lens', 'chained'))
  .filter(f => /^step-\d+-.*\.md$/.test(f))
  .sort();

const steps = stepFiles.map(f => ({
  name: f,
  content: fs.readFileSync(path.join(SRC, 'lens', 'chained', f), 'utf8'),
}));

// ---------------------------------------------------------------------------
// Step 2: Text replacements
// ---------------------------------------------------------------------------

function applyReplacements(text) {
  const replacements = [
    // Order matters — more specific patterns first to avoid partial matches
    ['You are an agent inside the **CodeMachine Workflow System**.', 'You are an agent inside the **Reframe Workflow System**.'],
    ['The system will inject your Step 1 prompt when the user presses Enter.', 'When the user types `next`, read the Step 1 file and execute it.'],
    ['The system injects the next step', 'Read the next step file'],
    ['the **system** (not you) loads the next step prompt', 'you read the next step file from the paths below'],
    ['Wait for the system to inject the next step.', 'Wait for the user to type `next`, then read the next step file.'],
    ['Wait for the system to inject the next step', 'Wait for the user to type `next`, then read the next step file'],
    ['## WHAT "PRESS ENTER TO CONTINUE" MEANS', '## WHAT "TYPE NEXT" MEANS'],
    ['The **system** (not you) loads the next step prompt', 'you read the next step file from the paths below'],
    ['.codemachine/reframe/session-', '.reframe/session-'],
    ['CodeMachine Workflow System', 'Reframe Workflow System'],
    // Enter replacements — most specific first
    ['user presses Enter', 'user types `next`'],
    ['user to press Enter', 'user to type `next`'],
    ['Press `ENTER`', 'Type `next`'],
    ['Press ENTER', 'Type `next`'],
    ['press `ENTER`', 'type `next`'],
    ['presses Enter', 'types `next`'],
    ['pressed Enter', 'typed `next`'],
    ['press Enter', 'type `next`'],
  ];

  let result = text;
  for (const [find, replace] of replacements) {
    result = result.split(find).join(replace);
  }
  return result;
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function stripFrontmatter(text) {
  const match = text.match(/^---\n[\s\S]*?\n---\n/);
  if (match) {
    return text.slice(match[0].length).replace(/^\n+/, '');
  }
  return text;
}

// ---------------------------------------------------------------------------
// Step 5: Clean output directory
// ---------------------------------------------------------------------------

const skillsDir = path.join(ROOT, 'skills');
if (fs.existsSync(skillsDir)) {
  fs.rmSync(skillsDir, { recursive: true, force: true });
}
fs.mkdirSync(STEPS_OUT, { recursive: true });

// ---------------------------------------------------------------------------
// Step 3: Build SKILL.md
// ---------------------------------------------------------------------------

const frontmatter = `---
name: reframe
description: "Problem-solving consultant grounded in Polya, de Bono, and Kahneman — helps you find and solve the real problem. Type /reframe to start a session."
---
`;

const personaBody = applyReplacements(stripFrontmatter(persona));
const systemRulesBody = applyReplacements(stripFrontmatter(systemRules));

// For workflow: strip frontmatter, remove the {reframe_system_rules} placeholder
// (system rules are already inlined above), then apply replacements
let workflowBody = stripFrontmatter(workflow);
workflowBody = workflowBody.replace(/\{reframe_system_rules\}\n*/g, '');
workflowBody = applyReplacements(workflowBody);

const stepPathMap = `## STEP FILE PATHS

When the user types \`next\`, read the next step file using the Read tool. The step files are located relative to this SKILL.md file:

| Step | File |
|------|------|
| 1. Surface | \`./steps/step-01-surface.md\` |
| 2. Untangle | \`./steps/step-02-untangle.md\` |
| 3. Diagnose | \`./steps/step-03-diagnose.md\` |
| 4. Challenge | \`./steps/step-04-challenge.md\` |
| 5. Design | \`./steps/step-05-design.md\` |
| 6. Act | \`./steps/step-06-act.md\` |
| 7. Check | \`./steps/step-07-check.md\` |

**How to load steps:** Use the Read tool to read the file path. The path is relative to this skill's directory. Resolve it from the directory where this SKILL.md is located.
`;

const skillMd = [
  frontmatter,
  personaBody,
  '\n',
  systemRulesBody,
  '\n',
  workflowBody,
  '\n',
  stepPathMap,
].join('\n');

fs.writeFileSync(path.join(OUT, 'SKILL.md'), skillMd);

// ---------------------------------------------------------------------------
// Step 4: Copy and transform step files
// ---------------------------------------------------------------------------

for (const step of steps) {
  const transformed = applyReplacements(stripFrontmatter(step.content));
  fs.writeFileSync(path.join(STEPS_OUT, step.name), transformed);
}

// ---------------------------------------------------------------------------
// Report
// ---------------------------------------------------------------------------

console.log('Build complete!');
console.log(`  SKILL.md  → ${path.relative(ROOT, path.join(OUT, 'SKILL.md'))}`);
for (const step of steps) {
  console.log(`  ${step.name} → ${path.relative(ROOT, path.join(STEPS_OUT, step.name))}`);
}
