---
layout: default
title: "Day 4 AM Recap: What You Still Need to Know — Verification, Trust, and Building Your Project"
---

<p class="page-prompt">$ day-4 --am · session recap</p>

## Day 4 AM Recap — What You Still Need to Know: Verification, Trust, and Building Your Project

<p class="page-lead" markdown="1">A reflective, discussion-heavy morning that asked the course's central question out loud — <em>how much do you actually need to know to build software with an agent?</em> — and answered it by naming the one skill that doesn't go away: <strong>verification</strong>. From there it turned practical, laying out two ways to develop a project, how to brief Claude about who you are, and how to keep prototypes cheap, before a candid demo of local coding models <em>failing</em> in the Claude Code harness.</p>

A scheduling note up front: the plan had been to spend this session **building a skill**. John changed it — building an actual **project** "is slightly more valuable in terms of showing off the capability" and "will look better tomorrow at the show and tell." So the morning became about *how* to take a project from idea to working tool.

### The opening provocation

A show of hands: *"How many people here feel like they can write a program from scratch… without using AI, without using Claude?"* — something slightly more than "Hello World," that takes input and processes a file. About eight hands. The follow-up did the real work: *"Was this true before you started this class?"* The point being that the course never taught Python 101 — those who could already do it could do it on Monday. Then the inverse: everyone who *didn't* raise a hand could now **direct Claude** to write that program. That gap — between hand-coding and software *creation* — is the whole course.

Handed the mic "for the record," a computer scientist in the room put it bluntly: *"The age of coding by humans is coming to an end… reading code might be a skill, but writing code will not be a skill anymore"* — and added that they were "currently thinking about redoing my entire curriculum."

### Programming-light, software-development-heavy

John reframed **AI literacy** as understanding *"where does computing take place? Where does data go to and from? What are the things the computer is doing"* — **not** "the metallurgy or the core nuts and bolts of the exact syntax." His own CS degree, he noted, was upfront that it wasn't teaching you "to be a programmer" but "to be a computer scientist" — discrete math, algorithms, architecture — and he still remembers being graded on **Java written in longhand on paper**: *"I'm not subjecting any of my humanities students to that hazing."* Hence the course's self-description: **a programming-light course, but a software-development-heavy course.** Part of the job is making visible the decisions the AI quietly makes for you — like steering you toward paid cloud APIs when you never said you wanted to run things locally, "because it doesn't advantage them."

The **Y2K-style worry** surfaced — as fewer people can read the code everything runs on, isn't that dangerous? The answer leaned on a survival-skills analogy (industrial society has already let basic self-reliance atrophy; *"there is no way that any of you are going to create a microchip in this lifetime"*) and a hopeful turn toward **local models and "sovereign AI"** as a way to "not simply abdicate all of that to the cloud providers."

### The stages of grief — and the skill that remains

This is genuinely hard for people who "built their entire careers around a certain type of knowledge" that was "a ticket to a white-collar, middle-class job." John named the **stages of grief** directly, including his own — *"what did I do with my life all those years?"* — and predicted the field's first defensive move: *"yes, the AI can do it, but **you** need to be able to do it to drive it." "That argument's getting weaker and weaker."* So is the security-and-verification defense, as models begin finding **20-year-old vulnerabilities humans never did** (the radiologist who insists "I'm better than the AI" is the cautionary figure).

What's left — the **bedrock skill** — is *managing something better at a task than you are.* Like a manager evaluating an expert developer, or an administrator overseeing specialists, you don't need to do the work; you need to know whether it was done. The computer-science framing that makes this concrete is the **Traveling Salesman Problem**: solving it is enormously expensive, but **verifying** a proposed solution is cheap when you're handed conclusive evidence — *"a warrant, as it were."* That maps exactly onto an agent that just did minutes or hours of work you can't read line by line.

The crucial distinction: **don't trust the AI's words about its own work** — *"if you ask the agent, did you do the right job, they'll say, of course I did"* (overconfidence and a lack of self-knowledge). **Do** trust it when you make it **produce evidence**: shown a result that contradicts its assumptions, it self-corrects — *"better than a lot of humans, honestly."* In practice that means:

- Have the agent **test everything**, and have it **test itself** — launch a browser, navigate, take screenshots, verify. *"I use this technique all the time."*
- Generate **unit tests *and* end-to-end tests** (with **Playwright**) that walk every user path and check behavior **against the spec** — because *"the spec itself is the guarantee of what the behavior needs to be."*
- These are **instrumented by Superpowers**, which gives more confidence than reading code line by line. *"There's my argument."*

### Two ways to develop your project

With the show-and-tell looming (John gets 3 minutes to present the class; students get an optional "cocktail table" demo, possibly a "super page" of live GitHub Pages projects), the morning turned to method:

- **Strategy 1 — Exploratory / iterative** ("get to the other side of the building"): you know the *direction* but not the exact path. Rather than authoring "a lovely, perfect spec" up front, build something minimal that *informs your next set of design decisions*, then iterate.
- **Strategy 2 — Reverse / spec-driven**: best when your project resembles something that exists. If there's an open-source version, "use their map." If the tool you admire is **proprietary**, build a narrower open-source version — read its documentation, pick the features you want, and ask Claude to "create a pathway to implementing these things," weighing the trade-offs. (*"That's why all those software companies are losing all their money."*)

### Tell Claude who you are: CLAUDE.md

A key lever: the **CLAUDE.md** file (and memory), loaded into context every session. Ask Claude to help you *write* one that states your actual level of expertise — because **"Claude is kind of like an author"** with an implied reader, and *"the implied reader of Claude knows more about software than most of the people in this room."* Tell it you're not a software engineer and it will pitch its explanations of technical trade-offs accordingly. A sample framing offered: *"I want to implement a small version of this; discuss the trade-offs, but assume I don't know anything about the technologies involved."* Once you know what to build, **Superpowers** can run the final spec interview and walk you through implementation — but only *after* you've shaped the idea with one of the two strategies above.

### Keep prototypes cheap and disposable

Be confident you can **throw the prototype away.** Prototypes aren't engineered with real connections — they often embed **sample data right in the JavaScript**, have no server, etc. — so it's frequently better to use the prototype as a *reference* and then build the real thing from scratch. John called this *"the paper-prototyping version of AI development"*: deliberately don't architect it correctly, keep it low-cost, get to a mock interface, give feedback, then implement.

And **scope it like any DH project.** Ask Claude to *teach* you about the decisions that matter — it's "a good tutor… it can identify your gaps." For-loops won't come up; these will: **space and processing needs, hardware requirements, and especially cloud-vs-local** — *"a requirement to run locally will change the entire project,"* including timing (a local model on CPU won't respond instantly) and storage (how much space N images need).

### Token and prompt discipline

- **Be mindful of tokens.** Don't let a run "go forever"; **stop or rewind it** if it heads the wrong way, and don't keep going after a mistake.
- **Spend time on your prompts** — the *"monkey's paw."* One stray word "can give Claude a completely different perception of the project." *"Don't dash them off as if they're a text message to your buddy."*
- **Batch thoughtfully.** Several short, sequential messages each become their own turn, each consuming context — so sometimes batch related questions into one prompt. But "don't batch everything."

### Demo — local coding models, and an instructive failure

We returned to **Ollama** to try running a coding model entirely locally inside the Claude Code harness. State-of-the-art **cloud** models are available with no paid upgrade — **Minimax M3**, NVIDIA's **Nemotron**, a **Gemma** cloud model — and for local work the guidance was firm: don't trust local-model code unless it can use roughly **12–18 GB of VRAM**. The demo model was **Qwen 2.5 Coder 7B**, prompted to *"create a simple tic-tac-toe game in JavaScript"* — a task John assigns his most advanced undergraduates.

It **broke** — *"Claude's response exceeded the 32,000 output token maximum"* — and that was the lesson. Local models often misbehave in the Claude Code harness because each is trained on different data and **not all are trained on Claude's agent tools**: *"you can put OpenAI's model into Claude as a harness, but it won't know the tools as well as one natively trained on them."* This is the line between an **agentic** model (fine-tuned to use tools) and a **regular** one that just emits language — and **all frontier models are agentic by default; not every small model is.** Other harness-compatible options noted: **Devstral** (a ~14 GB Mistral model John has "had a lot of success with"), **Hermes**, and IBM's tiny, efficient **Granite** series (Granite 4 at ~2.1 GB).

The closing recommendation: **use cloud models while you have the tokens** (Ollama's free tier for now), and treat **local models as task processors** — captioning, text processing — *not* your "main coding workforce" unless you have a strong GPU, since CPU inference is simply too slow.

---

**Through-line of the session:** the morning answered the anxiety it opened with. You don't need to hand-write the code — but you do need to be the manager who can make the agent **prove it did the job**, the scholar who can **scope** a project honestly, and the writer who can **say who they are** to the tool. The skill that survives the shift isn't syntax; it's judgment about evidence. Everything after lunch is putting that to work on your own project.
