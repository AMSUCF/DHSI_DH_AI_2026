---
layout: default
title: "Day 1 AM Recap: Why Agentic Tools, Not Chatbots"
---

<p class="page-prompt">$ day-1 --am · session recap</p>

## Day 1 AM Recap — Why Agentic Tools, Not Chatbots

<p class="page-lead" markdown="1">The opening session set the week's central argument: the chatbot most campuses have licensed is the <em>least</em> interesting thing AI can do, and the goal here is to move past the chat window as quickly as possible toward <strong>agentic tools</strong> — Claude Code chief among them. The morning paired that provocation with a first, practical orientation to Claude on the web and the settings that make computational work possible, stopping right at the threshold of the afternoon's distant-reading exercise.</p>

A note on this recap: it follows the framing argument and the hands-on setup. The round of participant introductions has been omitted, but the diversity of the room is worth naming — historians, librarians, graduate students, educational developers, and computer scientists, ranging from people who had never written a line of code to those who teach it, many wrestling with the same question of what AI means for their classrooms and research.

### Housekeeping and prerequisites

A few practical markers before the provocation:

- All materials are posted to the **course repository** (linked from the site) and announced on **Blue Sky** (search "DHSI").
- **Claude Pro** is the baseline subscription — Free won't run the tools we use. A **GitHub account** is needed starting this afternoon (make one over the lunch break if you don't have one). **VS Code, Git, GitHub Desktop, the Claude Code CLI, and Ollama** come tomorrow.
- **Administrative laptop access matters.** If you can't install software, problems start tomorrow — flag it with John at lunch. *"There are ways around it… they're just annoying and you will have regrets."*

### The provocation — get off the chatbot

The framing question opened with a show of hands: whose campus has licensed an AI tool students are told to use? Who's on a **Copilot** campus? A **Gemini** campus? Anyone with a real **OpenAI or Anthropic** partnership? Almost everyone was on the Microsoft/Google side — which is exactly the problem.

- **Microsoft's offering is "the gamification era of AI"** — a chatbot "that's not really good for anything," a few years of faculty-center "literacy" that amounts to **"chocolate-covered broccoli"**: using AI to write quiz questions and the like, "very tired and not very useful."
- The point was made, with relish, via **Copilot's own terms of service** — that it's "for entertainment purposes only," "can make mistakes," "may not work as intended," and shouldn't be relied on "for important advice." What that really concedes is that **the chatbot-as-interface is built to produce slop** — output that's fast, shallow, and "requires less effort to produce than it does to consume." Bring that interface into a classroom and you've pre-set the worst kind of engagement with AI.
- **Agentic AI is the actual shift.** Borrowing **Ethan Mollick's** image of a "tireless team of little computer people… reasonable approximations of a compression of the knowledge of humanity that take 15 minutes or so to complete some tasks," the distinction landed: agentic tools take the same models inside the chatbots and *purpose them toward problem-solving*, with interfaces that let them run software, manage a Python environment, handle Git and version control — *"all of the things that an agent can now do for you that even when we taught this class a year ago, it could not do."*
- **DH is already reckoning with this.** **Lincoln Mullen's** essay was recommended — a scholar who thought of himself as a programmer using a chatbot for AI-assisted coding, until he tried **Claude Code** and realized how far behind he'd been. The takeaway: if you've only worked with chatbots or campus commercial tools, *"you're basically not working with modern AI systems in a way that is useful."* Claude Code isn't just an interface for code — it's an agentic tool for complex, data-driven problems, whose output ranges from whole websites and Python tools to entire research papers and book manuscripts (with all the disruption that implies).
- **The institutional bind**, again via Mollick: AI decisions are being made by **IT departments** treating it "like any other technology" — buy an enterprise subscription and declare everyone covered. That fails, because agentic tools are "weird and powerful and not easily regulated," and most campuses won't even let you install them. *"UCF will not let me install any of the things we're going to show you."* So the week is also about how to bring these tools into institutions that aren't ready for them.
- **The hopeful example: Chatterbox** — a bot trained on **Victorian-era texts**, built with Claude Code by someone *without* deep coding or machine-learning background. Its responses "don't feel like a typical frontier AI system at all" — full of period knowledge limits and choices that make it a genuinely interesting historical DH project. The lesson: the chatbot reframed *not* as something students passively consume but as **a playful interface students can build and control** — work that used to require a team and collaborators.
- **The arc of the technology:** conventional LLM (the first chatbots — limited, hallucination-prone) → **reasoning LLM** (trained on feedback from solving problems, much better at code) → **the LLM inside an agentic harness**, which is what the week is about. A returning participant confirmed it: a year on, *"none of the tools are the same, really."*

The through-line of the provocation: agentic tools are a way to build *"all of the things that we normally just dreamed we could do… to help solve all the digital humanities projects no one will fund."*

### First orientation — Claude on the web, and its settings

The pre-lunch stretch ("always awkwardly short") started the first experiment: getting to know **Claude on the web**, used deliberately because students are often on locked-down laptops or lab machines where nothing can be installed. *"It's good to know everything that can be done in a browser before we get into the heavy-duty tools."*

A guided tour of **Settings**, with the recurring discipline of *checking settings before blaming the model*:

- **Capabilities → memory and chat references.** Turning on **memory from chat history** improves answers across related chats — and it's **editable**, so you can refine what Claude remembers about you.
- **Tool access / connectors.** Left off by default here — connectors reach outside services, and the preference is to install them *deliberately* rather than have Claude constantly suggest them.
- **The capabilities that matter for today** (not all on by default — *check yours*): **Artifacts** (create, run, and share web content), **AI-powered artifacts** (wrappers that put Claude inside your own interface), **inline visualizations**, and most importantly **code execution and file creation** — *"it has to be able to run code for you,"* which is what makes computational text analysis possible at all.
- **Network access.** To do anything code-related on the web, Claude needs network access to fetch packages and libraries from **GitHub** — "it doesn't have everything built into Claude itself." You can restrict this to **package managers only**, but the honest caveat followed: *that's not real security.* Packages can carry malicious code, GitHub hosts prompt-injection risks, so **treat anything you have it work on as not fully private** — and when something must stay private, work fully locally (the motivation for the local-models thread later in the week).

### Projects — and a teachable bug

**Projects** (a folder in the sidebar) are the easiest way to work across multiple files with students — a container that holds your texts and a **project memory** that gradually builds up the agent's understanding of the goal, into which you can add explicit instructions (e.g., "do everything in Python"). Creating the *Distant Read of Sci-Fi Texts* project threw a **"permission denied"** error — which Anastasia deliberately *didn't* chase, a quick search confirming it was a known passing bug. The point was the pedagogy: *"there's always going to be weird technological quirks — build your students' resilience for interface crises."*

A practical aside on plans and models:

- **Free won't cut it** — projects and (this afternoon's) Claude Code Web don't run on Free; **Pro is the minimum** for everything this week. (John's anecdote: a web course where students bought one month of Claude Pro, resisted, then kept paying voluntarily — *"why didn't we ever get exposed to this before?"*)
- **Model choice:** **Opus 4.8** (released a couple of weeks earlier, the most powerful) for coding-heavy work — *"throwing the most powerful model at the problem will get you the most coherent code fastest."* Drop to **Sonnet 4.6** if you hit rate limits; **Haiku** only for narrow, non-reasoning tasks. **Effort** is adaptive — high is usually plenty, "extra" for genuinely complex builds — and **thinking** (on by default for Pro) breaks a big request into smaller pieces, which fixes the old problem of students "asking for too much at once."

### Lead-in to lunch

The homework was a setup task for the afternoon's distant reading: **pick a small set of texts** to analyze. John would demo with ~five short stories from **Project Gutenberg**. The key tip — **start from plain text, not PDF**: text, Markdown, RTF, or XML use far fewer tokens and are far easier for the model than "absurd proprietary formats with a bunch of extra information."

---

**Through-line of the session:** the morning was a deliberate reframing. The chatbot everyone arrived knowing is the floor, not the ceiling — designed for fast, shallow consumption — while the agentic harness is where AI is actually changing research and the work our students will do. Everything that follows this week builds from that single move: **off the chat window, into tools you can direct, inspect, and control.**
