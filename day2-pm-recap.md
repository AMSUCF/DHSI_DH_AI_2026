---
layout: default
title: "Day 2 PM Recap: Ethics, Labor, and the Economics of Local Models"
---

<p class="page-prompt">$ day-2 --pm · session recap</p>

## Day 2 PM Recap — Ethics, Labor, and the Economics of Local Models

<p class="page-lead" markdown="1">Where Day 1 PM was tool-driven, this session was deliberately <strong>conceptual</strong> — grounding the week's technical work in the ethics of AI use, the labor and pedagogy stakes, and the political economy of frontier models. The argument it builds toward: <strong>safety controls depend on closed weights</strong>, which is precisely why a humanist might want <strong>local, open-weight models</strong> they fully control. That argument is the bridge into the Ollama tutorial that closed the afternoon.</p>

A note on coverage: the first half of this session was **discussion and context-setting** — the instructor noted he had "taken us completely off agenda" — before the class turned back to **hands-on setup**: installing Git, pulling a first local model with Ollama, and getting Claude Code running for the first time, all under the live chaos of a frontier-model launch. The recap below follows the discussion and model-release walkthrough first, then the hands-on segment that closed the afternoon.

### MLA case studies — AI, IP, and human-centered expertise

The session opened on the **MLA "AI and the Humanities: A Framework"** case studies — realistic provocations with no clean solution.

- **Case 1 — cursive manuscript transcription.** A researcher uses an AI tool to transcribe cursive manuscripts, checking output against a model that hallucinates *unlike* a human. The catch: the model is **not private** — data goes to company servers and may be retained. The group weighed **rights and licensing** (public-domain status changes everything); **digitization labor** (even for public-domain originals, the cleaned-up digitized copy is owned by the institution that produced it — e.g., the **Billy Ireland Cartoon Library**, which permits AI use only on images it has itself digitized); and **ownership of the output** (copyright offices recognize only **human authorship**).
- **Transcription vs. translation** (a recurring through-line). Translation is legally and intellectually a **creative, authorial act** — the translator is an author. Transcription generally is not, *unless* the source is so degraded that heavy inference is required, at which point it edges toward translation. A participant suggested borrowing norms from **translation studies**; others noted DH's move *away* from a single "authoritative copy" toward valuing the full **corpus** of versions.
- **Case 4 — unwitting use of AI in translation.** A real anecdote: a master's student not fluent in written English used AI translation tools without realizing it, and a journal's **AI-detector** flagged the text. The ethical workaround — write fully in your strongest language, supply both the original and the machine translation, be able to **validate** the translation yourself, and **explicitly disclose** the tool. Broader points: disclosure scope is genuinely unsettled (AI contributions can't be traced like scholarly sources); AI **cannot** hold copyright or authorship; and **asymmetric training data** (vastly more digitized English than other languages) motivates **language-specific models**, increasingly built in **Indigenous communities** to encode their own thought patterns.

The section closed on the "existential crisis" the MLA committee faced: should human expertise *always* be valued over AI even when AI performs better — or is that a stance bound up with identity and careers rather than objectivity?

### AI, labor, and pedagogy

- **Student attitudes.** A viral commencement moment — graduates **booing** a speaker who called AI "the new industrial revolution" — read as students being **emotionally opposed** to AI's current power structures, which is compatible with becoming **AI-literate**.
- **Teaching stance.** A web-design course assigned Claude Pro on the reasoning that sending students into the profession with *no* agentic-AI experience would fail them worse; most became "AI-literate, not necessarily AI-optimist." The advocated policy: **don't mandate and don't police** — **AI detectors don't work** — but **show the value of expertise that builds on what AI does well**.
- **Labor framing.** Extended debate on analogies (the internet created remote white-collar work; the computer eliminated secretary pools and telephone operators; industrialization destabilized rural labor). The worry specific to AI: it may mass-produce **personalized expertise for every student**, raising "haves vs. have-nots" of human-touch education — while a reported **~20% decline in entry-level programming positions** suggests real disruption. The humanities, especially language-focused fields, have staying power because natural language is "the new programming language."
- **Instrumental vs. authored use.** A useful line between work one would never AI-author (a research article) and **instrumental** materials one might (lecture slides built from one's own content, reviewed before delivery).

### The model release — and why it points toward local models

A major model release dropped over lunch and was walked through as a live example of AI-safety rhetoric and the economics behind local models. **Fable 5** — the launch the morning's Day 2 PM demo links to — was framed as a more capable model made "safe for general use."

- **How the safeguards work.** Beyond in-model **guardrails** (fine-tuning that teaches refusal, historically defeated via **jailbreaking** and "in a fictional world…" attacks), the new model adds an external layer: **fast classifier models inspect inputs and outputs**, and requests touching high-risk areas (cybersecurity, biology) are **automatically downgraded to a less capable model (Opus 4.8)** — the same dynamic model-switching seen in Claude Code Web. These classifiers are **tuned conservatively**, accepting more **false positives** to avoid dangerous false negatives. The key point: this control is only possible when users **don't have direct access to the weights** — the stated justification for *not* releasing such models as open-weights, and the direct motivation for the local-models topic.
- **Benchmarks cited.** **SWE-bench Pro** agentic coding jumped from **69% to 80%**; **Humanity's Last Exam** (expert-level, multidisciplinary) rose from roughly **49% / 57%** to **59% / 64%** (without tools / with tools), with safeguards dragging cyber/biology scores down. (Figures are as stated aloud in session.)

### Billing change and harness economics

- **Sessions → token budget.** Anthropic is moving off flat per-session/weekly caps to a **token-budget** model. The reasoning: a more capable, more expensive model plus the **end of subsidized pricing** — today's usage sits below at-cost compute, the "cheap-until-you're-hooked" playbook.
- **Harness steering.** Anthropic's installed harness gets a token discount versus Claude Code Web, on the theory that cloud compute for Code Web costs Anthropic more than running on the user's own machine — a reason to suspect Code Web is being deliberately deprioritized.
- **Practical takeaway (the segue to local models).** Don't use the frontier model for everything — use it to **orchestrate**, reserve it for hard problems, and push **grunt work** (assembling HTML, routine conversions) onto cheaper or **local** models.

### Back to tutorial mode — and a direct answer on safety

As the class transitioned to hands-on work, the recurring anxiety — *if I let AI onto my computer, can it read or delete everything?* — got a direct answer: the Claude Code CLI follows the **principle of least access**, with heavy **sandboxing** scoped to a piece of the file system rather than the whole machine. The caveat: third-party harnesses strip those safety features — full power, full risk (*"if you hook up OpenClaw to it, all bets are off"*).

### Git — a time machine for your agents

The hands-on portion opened on **Git**, framed through **Simon Willison** (praised as an "outsider" educator whose *Agentic Engineering Patterns* guide carries "a lot of real craft knowledge"). The core idea: **"Git is basically a time machine for your agents"** — it lets you run in **YOLO mode** without fearing "the blast radius," because even a deleted codebase is recoverable. A useful distinction landed here: **Git ≠ GitHub** — *"GitHub is kind of like Facebook, whereas Git itself is kind of like a local program that can talk to Facebook."* You can run Git entirely locally and never touch GitHub, which matters for private or sensitive data. The pedagogical goal is the **mental model**, not the commands — so that when an agent hits a "force push" or "diverging branches," you can actually converse about it instead of it being "all Greek."

A sharp tangent on **prompt injection** illustrated why agents need guardrails: instructions hidden in web pages or documents (academics burying white-on-white text to manipulate AI peer reviewers; instructors planting hidden prompts in assignments to catch AI-assisted cheating) can hijack an agent that ingests them.

### First contact with Ollama and local models

The class then met **Ollama** — *"the easiest way to build with open models,"* a desktop app plus a searchable model catalog at **ollama.com**. The model theory, kept concrete:

- **Parameters** are "a set of numbers" (DevStral = 24B); bigger usually means more capable. **Mixture-of-Experts** means only a fraction is active at once. **Gemma "E2B/E4B"** = *effectively* 2 or 4 billion — small enough to run on a phone.
- **Hardware guidance:** aim for **≤20B parameters** (closer to 5–10B for good performance on a laptop); bigger models need NVIDIA cards or, at the top end, data-center hardware. The shortcut: **ask Claude "what models would run on my hardware?"** with your specs.
- A safety flag: a **cloud icon** next to a model means it runs on Ollama's *paid servers*, not locally.

Everyone ran **`ollama pull`** to download a first model — **Gemma 4 E2B** (~7.2 GB, multimodal/vision-capable) — seeding the week's payoff: soon you can have a **local AI critique writing that never leaves your computer.**

### The Fable launch, live — and an overnight plan

Setup ran straight into history: Anthropic launched its frontier **Fable** model *mid-session*, and *"everyone in the world now is updating their Claude Code."* Between Anthropic's melting servers and the whole room downloading Ollama models on one Wi-Fi router, installs crawled. The pragmatic call: **Ctrl-C** the model downloads (taught as "the universal command to stop or exit a program"), focus on getting **Claude Code** installed, and **download the local models overnight** on hotel internet. A recurring point of confusion got named here too: **Claude Desktop ≠ the Claude Code CLI** — installing the app doesn't give you the command.

Anastasia gave a quick tour of the broader **Claude ecosystem** — the Desktop app, the **Co-work** entry point for non-programmers (works "in any folder," keeps data local; real examples: DocX→Markdown conversion via **Pandoc**, pulling old citations into **BibTeX**, fixing course-caption author names by having it read the video and syllabus in the same folder), and the "weird hybrid" desktop Claude Code interface she "never uses" because *"it's not as powerful or flexible as the command line tool."* She also flagged **Fable's token cost**: the **1M-context** version re-reads accumulating context every turn and burns tokens fast, and **fast mode** is "twice as fast but cost twice as much."

To show what the new model could do, Fable built — from a one-sentence prompt, in about 18 minutes — a working **command-line-based educational game inspired by *Carmen Sandiego*** (the [Claude Fable Demo](https://github.com/AMSUCF/CommandLineDemo) linked from the schedule), with a live preview and a plan to publish it on GitHub Pages. *"So this is how you learn the command line."*

### The payoff — and the catch — of a local model in the harness

A final teaser pointed at the rest of the week. A tiny local model (**DeepCoder 1.5B**) visibly "thought out loud" before answering — illustrating **chain-of-thought** ("it actually performs better by trying to verbalize… rather than one-shot it"). But dropped into the Claude Code harness, it **failed to write a file** — it only printed instructions, because small models must be specifically *trained to use tools*. The metaphor stuck: **"even though Claude Code was able to put the LLM in the engine, the LLM didn't know how to press the gas."** The command that makes the swap possible — **`ollama launch claude`**, driving the Claude Code harness with a local model — was previewed, with **Ollama positioning itself as "the lingua franca of the harnesses and the models."** The homework: download a working set overnight (**Gemma 4 E2B** for vision, **Qwen 2.5 Coder** for code, a general model for text) so Day 3 can start with the engines already in the garage.

---

**Through-line of the session:** the afternoon grounded the week's technical work in the ethics of IP and disclosure, the labor and pedagogy stakes of agentic AI, and the political economy of frontier models — arriving at the case for **local, open-weight models** a humanist can fully control — and then started building toward it: Git as a safety net, Ollama as the engine swap, and a first, imperfect taste of running your own model inside the agent. That argument, and that setup, are the bridge into the rest of the week.
