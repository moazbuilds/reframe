const path = require('node:path');

module.exports = {
  // User directory placeholders (resolved from user's project root)
  userDir: {},

  // Package directory placeholders (resolved from CodeMachine installation)
  packageDir: {
    reframe_system_rules: path.join('prompts', 'templates', 'reframe', 'shared', 'system-rules.md'),
  },
};
