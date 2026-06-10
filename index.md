---
layout: default
---

<details class="accordion-section" open>
<summary>
  <span class="prompt-text">$ course --description</span>
  <span class="leader"></span>
  <span class="indicator"><span class="plus">[+]</span><span class="minus">[-]</span></span>
</summary>
<div class="accordion-content" markdown="1">

This workshop guides humanities scholars through the emerging landscape of agentic coding—building functional tools and applications through collaboration with AI, rather than writing code from scratch. We begin with Claude Artifacts for rapid prototyping and Claude Code Web for browser-based development, then transition to the Claude Code CLI for the remainder of the week. Participants will work through Simon Willison's agentic engineering framework, learn to build and share reusable skills using the Superpowers methodology, integrate external tools via the Model Context Protocol (MCP), and deploy smaller open-source models from Hugging Face for specialized tasks like transcription. The final deliverable is a working tool with either a local model or MCP integration relevant to participants' own research and teaching.

No prior programming experience is required—but bring curiosity, a laptop with admin access, and a willingness to think critically about what it means to build with AI.

</div>
</details>

<details class="accordion-section">
<summary>
  <span class="prompt-text">$ course --prerequisites</span>
  <span class="leader"></span>
  <span class="indicator"><span class="plus">[+]</span><span class="minus">[-]</span></span>
</summary>
<div class="accordion-content" markdown="1">

- **Claude Pro subscription** — Required for full access to Artifacts, Code Web, and Claude Code CLI. Sign up at [claude.ai](https://claude.ai).
- **GitHub account** — Use a .edu email if possible for GitHub Education benefits. Create one at [github.com](https://github.com).
- **Visual Studio Code** — Install from [code.visualstudio.com](https://code.visualstudio.com).
- **Git** — Install from [git-scm.com](https://git-scm.com). Required for version control in agentic workflows.
- **GitHub Desktop** (optional) — A visual Git client if you prefer not to use the command line. Install from [desktop.github.com](https://desktop.github.com).
- **Claude Code CLI** — We will walk through installation on Day 2, but you can get started early by following [the setup guide](https://docs.anthropic.com/en/docs/claude-code).
- **Ollama** — For running local models. Install from [ollama.com](https://ollama.com). We will configure it on Day 2, but having it installed in advance saves time.
- **Administrative laptop access** — You will need to install software during the workshop.

</div>
</details>

<details class="accordion-section">
<summary>
  <span class="prompt-text">$ course --readings</span>
  <span class="leader"></span>
  <span class="indicator"><span class="plus">[+]</span><span class="minus">[-]</span></span>
</summary>
<div class="accordion-content" markdown="1">

Complete these before the first session. They provide the conceptual framework we'll build on all week.

- Martin, Meredith. "Command Lines for the Humanities." *PMLA* 139.3 (2024): 541–547.
- Mitchell, Melanie. ["On Evaluating Cognitive Capabilities in Machines (and Other 'Alien' Intelligences)."](https://aiguide.substack.com/p/on-evaluating-cognitive-capabilities) *AI: A Guide for Thinking Humans*. January 14, 2026.
- Benjamin, Ruha. ["The New Artificial Intelligentsia."](https://lareviewofbooks.org/article/the-new-artificial-intelligentsia/) *Los Angeles Review of Books*. October 18, 2024.
- Ford, Paul. ["Timing My Vibe Coding."](https://ftrain.com/aboard-podcast-timing-my-vibe-coding) *The Aboard Podcast*. July 29, 2025.
- Willison, Simon. ["Not All AI-Assisted Programming is Vibe Coding (But Vibe Coding Rocks)."](https://simonwillison.net/2025/Mar/19/vibe-coding/) *simonwillison.net*. March 19, 2025.
- Noble, Safiya Umoja. ["Algorithms Aren't Neutral: Safiya Noble on AI, Bias, and Building Public-Interest Technology."](https://calearninglab.org/myrobotteacher/mrt6/) *My Robot Teacher* podcast. California Education Learning Lab. 2025. (Transcript available on [Substack](https://calearninglab.substack.com/s/my-robot-teacher-podcast).)

</div>
</details>

<details class="accordion-section">
<summary>
  <span class="prompt-text">$ day-1 --am</span>
  <span class="leader"></span>
  <span class="indicator"><span class="plus">[+]</span><span class="minus">[-]</span></span>
</summary>
<div class="accordion-content" markdown="1">
<span class="session-title">Session 1: Positioning and Prototyping with Artifacts</span>

**Slides:** [Introduction — Pragmatic Agentic AI in the Digital Humanities]({{ '/intro.html' | relative_url }})

**Demo:** [Distant Reading with Claude Projects]({{ '/distant-reading.html' | relative_url }})

**Readings:**

- Mollick, Ethan. ["Claude Code and What Comes Next."](https://www.oneusefulthing.org/p/claude-code-and-what-comes-next) *One Useful Thing*. January 7, 2026.
- Willison, Simon. ["Agentic Engineering Patterns" (Introduction and "What is Agentic Engineering?").](https://simonwillison.net/2026/Feb/23/agentic-engineering-patterns/) *simonwillison.net*. February 23, 2026.
- Cohen, Dan. ["The Index and the Vector."](https://newsletter.dancohen.org) *Humane Ingenuity*.

**Topics:**

- Welcome and introductions: who's in the room, what do you want to build?
- The agentic coding spectrum: vibe coding → distant coding → agentic engineering
- Willison's framework: what changes when code is cheap to write?
- Hands-on: distant reading with Claude Projects and Artifacts — moving a small corpus through a stopword → bag-of-words → key phrases → network → comparative pipeline and visualizing the findings ([Distant Reading with Claude Projects]({{ '/distant-reading.html' | relative_url }}))
- Discussion: what does the distant view reveal, where does it hit a wall, and where does Claude get it wrong?

**Exercise:** Work through the [Distant Reading with Claude Projects]({{ '/distant-reading.html' | relative_url }}) demo with a *different* set of texts of your own, using Claude Projects and Artifacts. Generate at least five visualizations, and document one place Claude got it wrong.

</div>
</details>

<details class="accordion-section">
<summary>
  <span class="prompt-text">$ day-1 --pm</span>
  <span class="leader"></span>
  <span class="indicator"><span class="plus">[+]</span><span class="minus">[-]</span></span>
</summary>
<div class="accordion-content" markdown="1">
<span class="session-title">Session 2: From Artifacts to Claude Code Web and GitHub Pages</span>

**Demos:**

- [Distant Coding: A Recommendation System with Artifacts]({{ '/distant-coding.html' | relative_url }})
- [Coding AI Interfaces with Claude]({{ '/ai-interfaces.html' | relative_url }})
- [Deploying to GitHub Pages with Claude Code for Web]({{ '/deploying-github-pages.html' | relative_url }})

**Session recap:** [Day 1 PM Recap — From Artifacts to Claude Code Web and GitHub Pages]({{ '/day1-pm-recap.html' | relative_url }})

**Readings:**

- Willison, Simon. ["Beyond Vibe Coding."](https://simonwillison.net/2025/Sep/4/beyond-vibe-coding/) *simonwillison.net*. September 4, 2025.
- Cohen, Dan. ["The Writing Is on the Wall for Handwriting Recognition."](https://newsletter.dancohen.org/archive/the-writing-is-on-the-wall-for-handwriting-recognition/) *Humane Ingenuity*.

**Topics:**

- From Artifacts to Code Web: when you need files, persistence, and real deployment
- The progression we'll demo: a prompt-built Artifact → an AI-powered app → a version-controlled site on GitHub Pages
- Walking the three demos above: distant coding, AI interfaces, and deploying with Claude Code for Web
- Agentic development: plan mode, `/init`, and iterating with an agent that edits real files
- Discussion: the spectrum from chat to code — when do you need each tool?

The capstone that builds on these demos — [Agentic Code with Claude Code for Web]({{ '/final-exercise.html' | relative_url }}) — opens Day 2, where we'll walk through it together with full time to plan, build, and deploy.

</div>
</details>

<details class="accordion-section">
<summary>
  <span class="prompt-text">$ day-2 --am</span>
  <span class="leader"></span>
  <span class="indicator"><span class="plus">[+]</span><span class="minus">[-]</span></span>
</summary>
<div class="accordion-content" markdown="1">
<span class="session-title">Session 3: Claude Code on the Web — Building and Deploying in the Browser</span>

**Note on the live session:** We didn't reach the Claude Code CLI this morning — we worked in **Claude Code Web** instead, building and deploying agentically straight from the browser with no local setup. The Claude Code CLI overview has moved to **Day 3 AM**. One heads-up from class: there is currently a bug in Claude Code Web's **GitHub connector** that requires setting up a **personal access token (PAT)** to connect your repositories. Generate a token in GitHub (Settings → Developer settings → Personal access tokens) with repo access and use it when prompted to authorize the connection.

**Opening walkthrough:** We work through the Day 1 capstone we didn't reach — [Agentic Code with Claude Code for Web]({{ '/final-exercise.html' | relative_url }}) — *together, as a group*. We plan, build, and deploy an ambitious public-facing site to GitHub Pages, working agentically with Claude Code Web (plan mode → iterate → deploy), so everyone has the moves down.

**Session recap:** [Day 2 AM Recap — Building and Deploying with Claude Code Web]({{ '/day2-am-recap.html' | relative_url }})

**Readings:**

- Willison, Simon. ["Writing Code Is Cheap Now"](https://simonwillison.net/guides/agentic-engineering-patterns/) (Chapter from *Agentic Engineering Patterns*).
- Babich, Nick. ["7 Essential Claude Code Slash Commands."](https://uxplanet.org/7-advanced-claude-code-slash-commands-db4c9be3e38c) *UX Planet*. March 2026.

**Demos:**

- [Distant Coding with Claude Code (UMKC)](https://anastasiasalter.net/DistantCodingUMKC/) — a collection of sample exercises to draw from
- [Image Metadata with Claude Code]({{ '/image-metadata.html' | relative_url }}) — setting up a project from scratch and running an end-to-end task: identifying, describing, and renaming a set of images, then building a slideshow from them

**Topics:**

- Claude Code Web: building and deploying from the browser with no local install
- Connecting GitHub: repositories, and the personal access token workaround for the current connector bug
- Agentic development in the browser: plan mode, iterating with the agent that edits real files, and deploying to GitHub Pages
- Working through the capstone together: planning, building, and shipping an ambitious public-facing site
- Discussion: what the browser-based workflow makes easy, and what we'll gain by moving to the CLI on Day 3

**Exercise:** Following the [Image Metadata with Claude Code]({{ '/image-metadata.html' | relative_url }}) demo, gather a set of images you have rights to (personal photographs, public domain, or Creative Commons), create a new repository with GitHub Desktop, and run `claude` to generate descriptive alt text, rename the files to match their contents, and build a slideshow presenting them.

</div>
</details>

<details class="accordion-section">
<summary>
  <span class="prompt-text">$ day-2 --pm</span>
  <span class="leader"></span>
  <span class="indicator"><span class="plus">[+]</span><span class="minus">[-]</span></span>
</summary>
<div class="accordion-content" markdown="1">
<span class="session-title">Session 4: Context Engineering and Local Models</span>

**Session recap:** [Day 2 PM Recap — Ethics, Labor, and the Economics of Local Models]({{ '/day2-pm-recap.html' | relative_url }})

**Readings:**

- Willison, Simon. ["Using Git with Coding Agents."](https://simonwillison.net/guides/agentic-engineering-patterns/) (Chapter from *Agentic Engineering Patterns*).
- Willison, Simon. ["Hoard Things You Know How to Do."](https://simonwillison.net/guides/agentic-engineering-patterns/) (Chapter from *Agentic Engineering Patterns*).
- Willison, Simon (with Grace Huckins). ["How to Run an LLM on Your Laptop."](https://simonwillison.net/2025/Jul/18/how-to-run-an-llm-on-your-laptop/) *MIT Technology Review*. July 17, 2025.

**Demo:**

- Setting up Ollama, running a local model, and connecting it to Claude Code for a text analysis task

**Topics:**

- Context engineering: CLAUDE.md files, project memory, and teaching the agent about your work
- Git basics for agentic workflows: why version control matters more, not less, with AI
- Why local models? Privacy, cost, offline access, and running specialized tasks without the cloud
- Installing and configuring Ollama: pulling models, understanding model sizes and hardware requirements
- Connecting Ollama to Claude Code: using `ollama launch claude` and environment variable configuration ([Ollama integration guide](https://docs.ollama.com/integrations/claude-code))
- When to use local vs. cloud models: the tradeoffs for humanities researchers

**Demo:** [Claude Fable Demo](https://github.com/AMSUCF/CommandLineDemo) — an educational game teaching the command line, inspired by *Carmen Sandiego*, generated from a one-sentence prompt ("make an educational game teaching the command line inspired by Carmen Sandiego") with today's launch of Fable.

</div>
</details>

<details class="accordion-section">
<summary>
  <span class="prompt-text">$ day-3 --am</span>
  <span class="leader"></span>
  <span class="indicator"><span class="plus">[+]</span><span class="minus">[-]</span></span>
</summary>
<div class="accordion-content" markdown="1">
<span class="session-title">Session 5: The Claude Code CLI and the Model Context Protocol</span>

**Claude Code CLI — Setup and First Principles:** We open Day 3 by moving from the browser to the terminal — installing the Claude Code CLI and working agentically from the command line (this overview moved here from Day 2 AM, where we worked in Claude Code Web instead).

- Installing and configuring Claude Code CLI
- The terminal as creative workspace: navigating the command line for humanists
- Opening a repository in the terminal with GitHub Desktop and launching `claude`
- Running terminal commands from within Claude: how the agent executes bash, installs packages, and interacts with your file system — and when to let it vs. when to intervene
- Slash commands: built-in commands (`/help`, `/init`, `/clear`, `/compact`) and how they structure your workflow ([Claude Code CLI reference](https://docs.anthropic.com/en/docs/claude-code))

**Links**
- [Homebrew](https://brew.sh/)
- [GitHub CLI](https://cli.github.com/)
- [Notebook MCP server]([https://cli.github.com/](https://github.com/lucidbard/notebook-mcp-server))

**Readings:**

- Anthropic. ["Introduction to Model Context Protocol."](https://docs.anthropic.com/en/docs/build-with-claude/mcp) Anthropic Documentation.
- Cohen, Dan. ["AI and Libraries, Archives, and Museums, Loosely Coupled."](https://newsletter.dancohen.org) *Humane Ingenuity*.
- Cohen, Dan. ["The Reboot of Digital Humanities Now."](https://newsletter.dancohen.org/archive/the-reboot-of-digital-humanities-now) *Humane Ingenuity*.

**Topics:**

- What is MCP? The "USB-C for AI" — connecting Claude to external tools and data
- The MCP ecosystem: servers, clients, and the community registry
- Demo: connecting Claude Code to GitHub, a file system, and a web browser via MCP
- The Zotero MCP: connecting your reference library directly to Claude for citation-aware workflows
- The Hugging Face MCP: accessing open-source models from within Claude Code
- Demo: using the Hugging Face MCP to find and deploy a transcription model (Whisper) for archival audio
- Discussion: what data sources and tools matter for your research?

**Exercise:** Configure at least one MCP server with your Claude Code installation. Use the Hugging Face MCP to identify a small model relevant to your research (transcription, OCR, classification, translation). Build a simple pipeline that integrates it.


</div>
</details>

<details class="accordion-section">
<summary>
  <span class="prompt-text">$ day-3 --pm</span>
  <span class="leader"></span>
  <span class="indicator"><span class="plus">[+]</span><span class="minus">[-]</span></span>
</summary>
<div class="accordion-content" markdown="1">
<span class="session-title">Session 6: The Superpowers Workflow</span>

**Readings:**

- Vincent, Jesse. ["Superpowers: How I'm Using Coding Agents in October 2025."](https://blog.fsck.com/2025/10/09/superpowers/) *blog.fsck.com*. October 9, 2025.
- Willison, Simon. ["Subagents"](https://simonwillison.net/guides/agentic-engineering-patterns/subagents/) (Chapter from *Agentic Engineering Patterns*).

**Topics:**

- The Superpowers framework: Brainstorm → Spec → Plan → Subagent Development → Review → Finalize
- Installing and configuring the Superpowers plugin
- The /brainstorm command: Socratic dialogue before code
- Subagent-driven development: dispatching parallel tasks with built-in review
- Demo: walking through the full Superpowers workflow on a real DH tool
- Discussion: structured methodology vs. improvisation — when does each serve humanities work?

**Exercise:** Use the full Superpowers workflow to brainstorm, plan, and begin implementing your final project tool.

</div>
</details>

<details class="accordion-section">
<summary>
  <span class="prompt-text">$ day-4 --am</span>
  <span class="leader"></span>
  <span class="indicator"><span class="plus">[+]</span><span class="minus">[-]</span></span>
</summary>
<div class="accordion-content" markdown="1">
<span class="session-title">Session 7: Building and Sharing Skills</span>

**Readings:**

- Willison, Simon. ["2025: The Year in LLMs."](https://simonwillison.net) *simonwillison.net*. December 31, 2025.
- Mollick, Ethan. ["On Holding Back the Strange AI Tide."](https://www.oneusefulthing.org/p/on-holding-back-the-strange-ai-tide) *One Useful Thing*.

**Topics:**

- What are skills? Reusable SKILL.md files that encode expertise
- Anatomy of a skill: frontmatter, instructions, examples, and pressure-testing
- Building a custom skill for a humanities workflow (e.g., a "distant reading" skill, a "metadata extraction" skill, an "archival transcription" skill)
- Sharing skills: the community ecosystem and the Anthropic marketplace
- Demo: authoring, testing, and installing a custom skill

**Exercise:** Design and write a skill that encodes a workflow from your discipline. Test it by having Claude Code use it on a sample project. Share it with the group.

</div>
</details>

<details class="accordion-section">
<summary>
  <span class="prompt-text">$ day-4 --pm</span>
  <span class="leader"></span>
  <span class="indicator"><span class="plus">[+]</span><span class="minus">[-]</span></span>
</summary>
<div class="accordion-content" markdown="1">
<span class="session-title">Session 8: Building Your Tool</span>

**Readings:**

- Underwood, Ted. ["A More Interesting Upside of AI."](https://tedunderwood.com/2025/07/02/a-more-interesting-upside-of-ai/) *The Stone and the Shell*. July 2, 2025.
- Underwood, Ted. ["The Marionette Theater of AI."](https://tedunderwood.com/2026/02/08/the-marionette-theater-of-ai/) *The Stone and the Shell*. February 8, 2026.
- MLA Executive Council. ["Educational Technologies and AI Agents."](https://news.mla.hcommons.org/2026/01/30/educational-technologies-and-ai-agents/) *MLA News*. January 30, 2026.

**Topics:**

- Dedicated build session: complete your final tool with instructor support
- Integration patterns: combining MCP connections, local models, and custom skills into a single workflow
- Troubleshooting and peer review
- Deployment options: GitHub Pages, local tools, shareable packages

</div>
</details>

<details class="accordion-section">
<summary>
  <span class="prompt-text">$ day-5 --am</span>
  <span class="leader"></span>
  <span class="indicator"><span class="plus">[+]</span><span class="minus">[-]</span></span>
</summary>
<div class="accordion-content" markdown="1">
<span class="session-title">Session 9: Presentations and Futures</span>

**Readings:**

- Mollick, Ethan. ["The Future of Education in a World of AI."](https://www.oneusefulthing.org/p/the-future-of-education-in-a-world) *One Useful Thing*.

**Topics:**

- Participant presentations: demo your tool, explain your process, reflect on what you learned
- Discussion: what does this mean for how we teach programming in DH?
- Pedagogical takeaways: designing assignments around agentic coding for your own courses
- Resources for continuing: communities, documentation, and next steps

**Deliverable:** A working tool with either local model or MCP integration, deployed or shareable, accompanied by a brief reflection on the process of building it.

**Friday PM:** Free

</div>
</details>

<details class="accordion-section">
<summary>
  <span class="prompt-text">$ course --resources</span>
  <span class="leader"></span>
  <span class="indicator"><span class="plus">[+]</span><span class="minus">[-]</span></span>
</summary>
<div class="accordion-content" markdown="1">

#### Agentic Engineering

- Willison, Simon. [*Agentic Engineering Patterns*](https://simonwillison.net/guides/agentic-engineering-patterns/) (full guide, updated regularly)
- Vincent, Jesse. [Superpowers](https://github.com/obra/superpowers) (GitHub repository and documentation)
- Anthropic. [Claude Code Documentation](https://docs.anthropic.com/en/docs/claude-code)
- Anthropic. [MCP Documentation](https://docs.anthropic.com/en/docs/build-with-claude/mcp)
- Anthropic. [Skilljar: Introduction to Model Context Protocol](https://anthropic.skilljar.com/introduction-to-model-context-protocol) (free course)

#### Local Models and Ollama

- Ollama. [Quickstart Guide](https://docs.ollama.com/quickstart)
- Ollama. [Claude Code Integration](https://docs.ollama.com/integrations/claude-code)
- Ollama. ["ollama launch."](https://ollama.com/blog/launch) *Ollama Blog*. January 23, 2026.
- Willison, Simon (with Grace Huckins). ["How to Run an LLM on Your Laptop."](https://simonwillison.net/2025/Jul/18/how-to-run-an-llm-on-your-laptop/) *MIT Technology Review*. July 17, 2025.

#### Hugging Face and Open Models

- Hugging Face. [Open Source Models Hub](https://huggingface.co/models)
- Hugging Face. ["Supercharge Your OCR Pipelines with Open Models"](https://huggingface.co/blog/ocr-open-models)
- OpenAI. [Whisper (speech-to-text)](https://huggingface.co/openai/whisper-small) on Hugging Face

#### Digital Humanities and AI Pedagogy

- Modern Language Association. ["AI and the Humanities: A Framework for Language and Literary Scholarship."](https://mlaai.hcommons.org/ai-and-the-humanities-a-framework-for-language-and-literary-scholarship/) *MLA Humanities Commons*.
- Salter, Anastasia & John Murray. [DHSI 2025: DH Programming Pedagogy in the Age of AI](https://anastasiasalter.net/DHProgramming/) (previous iteration)
- Salter, Anastasia & Lai-Tze Fan. [Distant Coding for the Digital Humanities](https://anastasiasalter.net/DistantCoding/) (MLA 2026)
- Johnson, Emily K. & Anastasia Salter. [*Critical Making in the Age of AI*](https://github.com/amsucf/CritMakingAgeOfAI) (companion resources)
- Locke, Brandon. "Digital Humanities Pedagogy as Essential Liberal Education." *DHQ* 11.3 (2017).

#### Practitioner Blogs

- Mollick, Ethan. [*One Useful Thing*](https://www.oneusefulthing.org/) (Substack)
- Willison, Simon. [*simonwillison.net*](https://simonwillison.net/)
- Cohen, Dan. [*Humane Ingenuity*](https://newsletter.dancohen.org/)
- Underwood, Ted. [*The Stone and the Shell*](https://tedunderwood.com/)

</div>
</details>
