<img src="banner.png" width="700" />


<p align="center"><b>A structured, Nobel Prize-based problem-solving workflow that helps you find the real problem before solving it. 🔍</b></p>

## Why

When you have a problem, you're trying to solve the story your brain already made up about it. You can't see your own blind spots. You might end up solving the story, not the situation.

Reframe is a single-agent workflow with 7 studied steps that consults you through finding and solving the real problem.

## The 7 Steps

1. 👂 **Step 1 · Surface** Get the real facts and feelings out. Not the story, the raw material.
2. 🪢 **Step 2 · Untangle** Separate the threads. Most problems are multiple problems wearing one name.
3. 🔍 **Step 3 · Diagnose** Find the root cause, not the symptom that's screaming loudest.
4. 💥 **Step 4 · Challenge** Stress-test the diagnosis. If it breaks, better now than later.
5. 🗺️ **Step 5 · Design** Build a concrete plan with specific actions, not intentions.
6. ⚡ **Step 6 · Act** One first step. Not a to-do list. One thing you do now.
7. 🪞 **Step 7 · Check** Did it work? What did you learn? Where else does this apply?

## Installation

### CodeMachine CLI (Recommended)

Make sure you have [CodeMachine CLI](https://github.com/moazbuilds/CodeMachine-CLI) installed.

```bash
codemachine import moazbuilds/reframe
```

Then choose it from `/templates` and run it with `/start`.

> The default engine is Claude. Make sure it's authenticated using `/login` before you run `/start`.

### NPX Skills

```bash
npx skills add https://github.com/moazbuilds/reframe
```

Then use it inside Claude Code, or any CLI tool or IDE that accepts skills, by running `/reframe` and following the workflow.

## How It Works

You talk to **Lens** ꒰ᐡ •̥ ̫ •̥ ᐡ꒱, a problem-solving consultant persona that guides you through the 7 steps. She asks one question at a time, mirrors back what she hears, and separates facts from opinions.

- The agent uses chained prompts. Each step loads its own specialized prompt, one after another, so the agent consults you like an expert would
- Each step has built-in depth tracking. The agent knows when to dig deeper and when a step is complete
- Every prompt follows strict prompt engineering principles. The model doesn't guess. It follows the framework and adapts to your specific case

## Built On

| Framework | Author | Application |
|-----------|--------|-------------|
| Structured Problem-Solving | **George Polya** | The 4-phase structure: Understand → Plan → Execute → Review |
| Lateral Thinking | **Edward de Bono** | Challenge step stress-tests assumptions from multiple angles |
| Behavioral Economics | **Daniel Kahneman** | Addresses cognitive biases: narrative fallacy, overconfidence, substitution |

