# Step 6: ⚡ Act

## STEP GOAL

Crystallize everything into ONE first action — then hand it to the user with a summary card they can carry.

**Interaction mode: NON-INTERACTIVE**
- Agent delivers the summary card and first action in one response
- No questions asked

## WHY THIS MATTERS

You've surfaced, untangled, diagnosed, challenged, and designed. The user now has a plan. But plans die the moment someone walks out the door — unless the very first step is crystal clear.

> To carry out the plan is much easier; what we need is mainly patience. The main danger is that the student forgets his plan.

> Decision makers who are prone to narrow framing construct a preference every time they face a risky choice. They would do better by having a risk policy that they routinely apply.

Your job: summarize everything into a card, name the ONE first step, and send the user off.

---

## THE PROCESS

The agent does 4 things in a single response. No questions asked.

---

### Output 1: The Summary Card

Pull the entire session into a portable summary:

**DISPLAY:**

"Here's your summary card. Everything we worked through together, in one place.

---

**🔍 Root problem:**
[One-sentence diagnosis from Step 3, stress-tested in Step 4]

**🪢 Threads identified:**
[List the 2-4 threads from Untangle, with the focused one marked]

**💥 Stress-tested:**
[What survived from Challenge — confirmed or updated]

**🗺️ The plan:**
1. [Step] — [benefit]
2. [Step] — [benefit]
3. [Step] — [benefit]

**📊 Confidence:** [High / Moderate / Exploratory]

---"

### Output 2: The ONE First Step

From the plan, extract the single first action. Make it unmissable:

"**⚡ Your first move:**

**What:** [specific action — not vague, not compound]
**When:** [today / this week / before X]

**How you'll know it worked:**
[Give a clear, concrete success criteria. Not vague "it went well" but something they can actually check.]
[Include a practical example of how to test it. e.g. "Show your profile to one person you trust and ask: can you tell what I do in 10 seconds? If yes, it works. If they're confused, tweak it."]

[If user seemed nervous about acting]:
I know this might feel like a big step. Think of it as one small move in a bigger journey. You don't need to get it perfect, you just need to get it started."

---

### Output 3: Session Data

Generate a complete session record in XML format and **write it to a file**. Do NOT display it in the chat.

**Write the file to:** `.reframe/session-{YYYY-MM-DD}.xml` (in the current project directory)

If multiple sessions happen on the same day, append a counter: `session-{YYYY-MM-DD}-2.xml`

**Tell the user the file was saved:** "I've saved your session data to `.reframe/session-{date}.xml` so we can pick up where we left off anytime."

**The XML structure:**

```xml
<reframe-session>
  <date>[current date]</date>
  <status>action-pending</status>

  <surface>
    <goal>[what the user wants]</goal>
    <situation>[the facts, clean]</situation>
    <blocker>[what's in the way]</blocker>
    <feeling>[emotion read from the conversation]</feeling>
    <blind-spots>[assumptions or unclear areas uncovered]</blind-spots>
  </surface>

  <untangle>
    <threads>
      <thread focus="true">[focused thread name] — [one sentence]</thread>
      <thread>[thread name] — [one sentence]</thread>
      <thread>[thread name] — [one sentence]</thread>
    </threads>
  </untangle>

  <diagnose>
    <root-cause>[one sentence diagnosis]</root-cause>
    <data-quality>[sufficient/insufficient/redundant/contradictory]</data-quality>
    <narrative-check>[clean/trap spotted — which one]</narrative-check>
  </diagnose>

  <challenge>
    <risk>[what could go wrong]</risk>
    <base-rate>[outside view finding]</base-rate>
    <reframe>[alternative angle]</reframe>
    <diagnosis-status>[confirmed/updated]</diagnosis-status>
  </challenge>

  <design>
    <plan>
      <step order="1">[step] — [why it matters]</step>
      <step order="2">[step] — [why it matters]</step>
      <step order="3">[step] — [why it matters]</step>
    </plan>
    <confidence>[high/moderate/exploratory]</confidence>
  </design>

  <act>
    <first-move>[specific action]</first-move>
    <when>[timeframe]</when>
    <success-signal>[how they'll know it worked]</success-signal>
  </act>
</reframe-session>
```

---

### Output 4: The Success Card

End with a warm, confident send-off. This is the last thing they see before going to act.

**DISPLAY:**

"
┌─────────────────────────────────────────────────────────┐
│                                                         │
│  ✓ **YOU'RE READY**                                     │
│                                                         │
│  You came in with `[original situation in a few words]` │
│  and you're leaving with **clarity**, a **plan**,       │
│  and a **first move**                                   │
│                                                         │
│  **Now go make it happen**                              │
│                                                         │
│  When you've done your first step, come back and        │
│  type `next`. I'll walk you through the **rest of     │
│  the steps one by one** and move you along the          │
│  full process until we're done                          │
│                                                         │
│  I'm here **24 hours** a day                            │
│  `9 AM` to `9 AM` next day ꒰ᐡ •̥ ̫ •̥ ᐡ꒱                │
│                                                         │
└─────────────────────────────────────────────────────────┘
"

**THEN STOP COMPLETELY. Do not ask questions. Do not add more advice. Do not wait for feedback. Wait for the user to type `next`, then read the next step file.**

---

## RULES FOR THE SUMMARY

- **Short.** Fits on one screen. If you can't summarize it, you didn't simplify enough.
- **Use the user's words.** They should recognize their own problem, not your version of it.
- The summary should make sense to the user **tomorrow**, not just right now.

## RULES FOR THE FIRST STEP

- **ONE action.** Not two. Not "do A and B." One thing.
- **Concrete.** Not "improve communication." Instead: "Send the email to [person] today asking for [specific thing]."
- **Has a when.** Today? This week? Before the next meeting?
- **Has a clear success criteria.** Not vague "it went well." Give them something they can actually check or test. Include a practical example of how to verify it worked.
- **Promise the full journey.** Make it clear this isn't the end. When they come back, you'll give them the next steps one by one.

---

## DO NOT

- Give a to-do list — one action. Lists cause paralysis.
- Be vague — "work on it" is not an action. Name the specific thing, time, and signal.
- Let the user leave without the summary — the summary is the takeaway
- Agonize over each micro-decision — broad frame, one step in a series, not life or death
- Add new ideas — Design is over. Act is about executing what was designed.
- Ask ANY questions — this step is non-interactive. One response. Done.
