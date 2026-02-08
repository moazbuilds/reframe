const path = require('node:path');
const promptsDir = path.join(__dirname, '..', 'prompts', 'templates');

module.exports = [
  // ========================================
  // Reframe Workflow
  // ========================================
  {
    id: 'lens',
    name: 'Lens | Reframe Consultant',
    description: 'Problem-solving guide grounded in Polya, de Bono, and Kahneman — helps people find and solve the real problem',
    promptPath: [
      path.join(promptsDir, 'reframe', 'lens', 'persona.md'),
      path.join(promptsDir, 'reframe', 'lens', 'workflow.md'),
    ],
    chainedPromptsPath: [
      path.join(promptsDir, 'reframe', 'lens', 'chained', 'step-01-surface.md'),
      path.join(promptsDir, 'reframe', 'lens', 'chained', 'step-02-untangle.md'),
      path.join(promptsDir, 'reframe', 'lens', 'chained', 'step-03-diagnose.md'),
      path.join(promptsDir, 'reframe', 'lens', 'chained', 'step-04-challenge.md'),
      path.join(promptsDir, 'reframe', 'lens', 'chained', 'step-05-design.md'),
      path.join(promptsDir, 'reframe', 'lens', 'chained', 'step-06-act.md'),
      path.join(promptsDir, 'reframe', 'lens', 'chained', 'step-07-check.md'),
    ],
    engine: 'claude',
  },
];
