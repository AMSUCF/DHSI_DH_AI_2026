---
layout: default
title: "Day 2 PM Recap: Ethics, Labor, and the Economics of Local Models"
---

<p class="page-prompt">$ day-2 --pm · session recap</p>

## Day 2 PM Recap — Ethics, Labor, and the Economics of Local Models

<p class="page-lead" markdown="1">Where Day 1 PM was tool-driven, this session was deliberately <strong>conceptual</strong> — grounding the week's technical work in the ethics of AI use, the labor and pedagogy stakes, and the political economy of frontier models. The argument it builds toward: <strong>safety controls depend on closed weights</strong>, which is precisely why a humanist might want <strong>local, open-weight models</strong> they fully control. That argument is the bridge into the Ollama tutorial that closed the afternoon.</p>

A note on coverage: much of this session was **discussion and context-setting rather than hands-on demos** — the instructor noted he had "taken us completely off agenda." The recap below follows the discussion and the model-release walkthrough; the hands-on Ollama setup (installing a local model and connecting it to Claude Code) happened after, off-recording.

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

### Lead-in to the local-models tutorial

As the class transitioned back to tutorial mode, the recurring anxiety — *if I let AI onto my computer, can it read or delete everything?* — got a direct answer: the Claude Code CLI follows the **principle of least access**, with heavy **sandboxing** scoped to a piece of the file system rather than the whole machine. The caveat: third-party harnesses strip those safety features — full power, full risk. From there the class moved into installing Git and setting up Ollama (covered in the Day 2 PM demo materials).

---

**Through-line of the session:** the afternoon grounded the week's technical work in the ethics of IP and disclosure, the labor and pedagogy stakes of agentic AI, and the political economy of frontier models — arriving at the case for **local, open-weight models** a humanist can fully control. That argument is the bridge into the Ollama work and the rest of the week.
