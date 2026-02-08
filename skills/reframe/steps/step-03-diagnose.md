# Step 3: 🔍 Diagnose

## STEP GOAL

The agent does the hard thinking — runs 3 internal checks on the picked thread, then delivers ONE clear diagnosis. This step is NOT interactive. The agent works silently, then presents the result.

**Interaction mode: NON-INTERACTIVE**

## WHY THIS MATTERS

People feel like they understand their problem. They don't. Their brain already built a neat story with clear villains and obvious causes — but the story is probably wrong.

> We believe we understand the past, which implies that the future also should be knowable, but in fact we understand the past less than we believe we do.

> We get the causal relationship backward: we are prone to believe that the firm fails because its CEO is rigid, when the truth is that the CEO appears to be rigid because the firm is failing.

The agent's job: don't trust the user's story. Check the data. Find the real root cause. But when you deliver the result, be warm and human about it. The user just opened up to you. Respect that.

---

## THE PROCESS

Run 3 internal checks on the **picked thread** from Untangle. No questions asked — just analysis. Then one output.

**Do ALL of this in a single response.**

---

### Check 1: Is the Data Enough?

Run a 4-way test on what the user gave you:

| Test | What to look for |
|------|--------------------|
| **Sufficient?** | Do I have enough facts to actually diagnose this? Or am I guessing? |
| **Insufficient?** | What's missing? What did the user NOT tell me that I'd need to know? |
| **Redundant?** | Did the user repeat the same thing in different words? (Feels like 3 problems but it's really 1) |
| **Contradictory?** | Did the user say two things that can't both be true? ("Team is great" + "nothing gets done") |

→ **If sufficient** → you have what you need. Move to Check 2.
→ **If insufficient** → flag the gap. You'll note it in the output.
→ **If redundant** → collapse the duplicates. The thread is simpler than it looked.
→ **If contradictory** → the contradiction IS the diagnosis. Name it.

---

### Check 2: Is the Story Real?

The user already has a story about why this is happening. Check it for 3 traps:

| Trap | What it looks like | How to catch it |
|------|-------------------|-----------------|
| **Narrative fallacy** | A clean cause-and-effect story that's too tidy | Ask yourself: "Could I have predicted this outcome in advance from this cause?" If no — the story is made up after the fact |
| **Halo effect** | One bad thing makes everything look bad (or one good thing makes everything look good) | Ask yourself: "Is the user judging [X] because of [X], or because of how [Y] turned out?" |
| **Hindsight bias** | "I knew it would happen" / "It was obvious" | Ask yourself: "Was it actually obvious BEFORE it happened? Or does it only look obvious now?" |

→ **If the story passes** → it's probably real. Use it.
→ **If you spot a trap** → the user's explanation is wrong. Your diagnosis should name the REAL cause, not the story.

---

### Check 3: Map the Terrain

Before naming the root cause, step back. Build a quick internal map:

- **What the user WANTS** (from Surface)
- **What's actually IN THE WAY** (from the data, not the story)
- **What the user THINKS is in the way** (their narrative)
- **Where these differ** ← this gap is where the real diagnosis lives

---

## THE OUTPUT

After running all 3 checks, deliver everything in ONE response. Format:

**DISPLAY:**

"I've spent some time sitting with everything you shared with me. Here's what I'm seeing.

**What I had to work with:**
[Summarize whether you had enough to go on. If something was missing, name it warmly: "There's one piece I'd love to know more about, but I can work with what we have." If contradictions existed, name them gently: "I noticed something interesting — you mentioned [X] but also [Y]. That tension actually tells me a lot."]

**What's really going on:**
- What you're going after: [goal]
- What you feel is in the way: [their version]
- What I'm seeing underneath that: [what the data actually shows]
[If these differ, explain warmly: "I know that might land differently than what you expected. Let me walk you through why I see it that way."]

**Here's what I think it comes down to:**

**[The diagnosis in one clear sentence.]**

[If data was insufficient]: I'm missing one piece to be fully sure: [specific gap]. But based on everything you've given me, this is my best read.

[If the diagnosis contradicts their story]: I know this might not be what you expected to hear. You came in thinking [their version], and that makes complete sense given what you've been through. But when I look at everything together, it's pointing to [your version]. Here's why: [brief reasoning].

┌─────────────────────────────────────────────────────────┐
│  ✓ READY TO CONTINUE                                    │
│                                                         │
│  → Type `next` to proceed to Challenge                  │
└─────────────────────────────────────────────────────────┘"

**THEN STOP COMPLETELY. Do not ask questions. Do not wait for feedback. Do not start challenging. Wait for the user to type `next`, then read the next step file.**

---

## RULES FOR THE DIAGNOSIS

- **ONE sentence.** Not a paragraph. Not a list. One clear statement.
- **Name the root cause**, not the symptom. ("It's not a hiring problem, it's a retention problem.")
- **Use their own words** where possible. They'll trust it more.
- **If it contradicts their story**, be honest but kind. Don't hide the disagreement, but acknowledge that their version made sense from where they were standing.

---

## DO NOT

- Ask the user to diagnose themselves — that's YOUR job now. They already gave you everything in Surface + Untangle.
- Trust the user's explanation at face value — their brain built a tidy story. Tidy stories are usually wrong.
- Confuse cause and effect — "The CEO is rigid" might be the RESULT of failure, not the cause.
- Give multiple diagnoses — one root cause. If you name 3 things, you haven't diagnosed, you've listed symptoms.
- Diagnose with missing data without flagging it — if Check 1 found gaps, say so.
- Propose solutions — diagnosis is NOT a prescription. Name the disease. The cure comes in Design (Step 5).
- Ask ANY questions — this step is non-interactive. One response. Done.
