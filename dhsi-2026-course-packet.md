# DHSI 2026: DH Programming Pedagogy in the Age of AI

**Instructors:** Anastasia Salter & John T. Murray
**Dates:** June 8–12, 2026 (Week 1)
**Location:** DHSI, Montréal
**Format:** 9 sessions (Monday–Friday, AM/PM blocks; Wednesday PM free)

---

## Course Description

This workshop guides humanities scholars through the emerging landscape of agentic coding—building functional tools and applications through collaboration with AI, rather than writing code from scratch. We begin with Claude Artifacts for rapid prototyping and Claude Code Web for browser-based development, then transition to the Claude Code CLI for the remainder of the week. Participants will work through Simon Willison's agentic engineering framework, learn to build and share reusable skills using the Superpowers methodology, integrate external tools via the Model Context Protocol (MCP), and deploy smaller open-source models from Hugging Face for specialized tasks like transcription. The final deliverable is a working tool with either a local model or MCP integration relevant to participants' own research and teaching.

No prior programming experience is required—but bring curiosity, a laptop with admin access, and a willingness to think critically about what it means to build with AI.

---

## Prerequisites

Before arriving, please complete the following:

- **Claude Pro subscription** — Required for full access to Artifacts, Code Web, and Claude Code CLI. Sign up at [claude.ai](https://claude.ai).
- **GitHub account** — Use a .edu email if possible for GitHub Education benefits. Create one at [github.com](https://github.com).
- **Visual Studio Code** — Install from [code.visualstudio.com](https://code.visualstudio.com).
- **Claude Code CLI** — We will walk through installation on Day 2, but you can get started early by following [the setup guide](https://docs.anthropic.com/en/docs/claude-code).
- **Administrative laptop access** — You will need to install software during the workshop.

---

## Pre-Workshop Readings

Complete these before the first session. They provide the conceptual framework we'll build on all week.

- Martin, Meredith. "Command Lines for the Humanities." *PMLA* 139.3 (2024): 541–547.
- Mitchell, Melanie. ["On Evaluating Cognitive Capabilities in Machines (and Other 'Alien' Intelligences)."](https://aiguide.substack.com/p/on-evaluating-cognitive-capabilities) *AI: A Guide for Thinking Humans*. January 14, 2026.
- Benjamin, Ruha. ["The New Artificial Intelligentsia."](https://lareviewofbooks.org/article/the-new-artificial-intelligentsia/) *Los Angeles Review of Books*. October 18, 2024.
- Ford, Paul. ["The A.I. Disruption We've Been Waiting For Has Arrived."](https://aboard.com/my-new-york-times-op-ed-on-vibe-coding/) *The New York Times*. February 18, 2026.
- Willison, Simon. ["Not All AI-Assisted Programming is Vibe Coding (But Vibe Coding Rocks)."](https://simonwillison.net/2025/Mar/19/vibe-coding/) *simonwillison.net*. March 19, 2025.
- Noble, Safiya Umoja. ["Algorithms Aren't Neutral: Safiya Noble on AI, Bias, and Building Public-Interest Technology."](https://calearninglab.org/myrobotteacher/mrt6/) *My Robot Teacher* podcast. California Education Learning Lab. 2025. (Transcript available on [Substack](https://calearninglab.substack.com/s/my-robot-teacher-podcast).)

---

## Schedule

### Day 1: Monday, June 8 — From Artifacts to Code

#### Session 1 (AM): Positioning and Prototyping with Artifacts

**Readings:**

- Mollick, Ethan. ["Claude Code and What Comes Next."](https://www.oneusefulthing.org/p/claude-code-and-what-comes-next) *One Useful Thing*. January 7, 2026.
- Willison, Simon. ["Agentic Engineering Patterns" (Introduction and "What is Agentic Engineering?").](https://simonwillison.net/2026/Feb/23/agentic-engineering-patterns/) *simonwillison.net*. February 23, 2026.
- Cohen, Dan. ["The Index and the Vector."](https://newsletter.dancohen.org) *Humane Ingenuity*.

**Topics:**

- Welcome and introductions: who's in the room, what do you want to build?
- The agentic coding spectrum: vibe coding → distant coding → agentic engineering
- Willison's framework: what changes when code is cheap to write?
- Hands-on: Claude Artifacts for rapid prototyping — building a text analysis tool, a quiz, or a timeline in the browser without leaving the chat
- Discussion: what can Artifacts do, and where do they hit a wall?

**Exercise:** Build a small interactive artifact relevant to your research or teaching. Share it with the group. We'll revisit this project on Day 5.

---

#### Session 2 (PM): Claude Code Web — Beyond the Chat Window

**Readings:**

- Willison, Simon. ["Beyond Vibe Coding."](https://simonwillison.net/2025/Sep/4/beyond-vibe-coding/) *simonwillison.net*. September 4, 2025.
- Cohen, Dan. ["The Writing Is on the Wall for Handwriting Recognition."](https://newsletter.dancohen.org/archive/the-writing-is-on-the-wall-for-handwriting-recognition/) *Humane Ingenuity*.

**Topics:**

- From Artifacts to Code Web: when you need files, persistence, and real deployment
- Working in Code Web: projects, file management, GitHub integration
- Demo: building a multi-page GitHub Pages site from a research project
- Discussion: the spectrum from chat to code — when do you need each tool?

**Exercise:** Take the artifact you built this morning and rebuild or extend it in Code Web. Deploy it to GitHub Pages.

---

### Day 2: Tuesday, June 9 — Entering the CLI

#### Session 3 (AM): Claude Code CLI — Setup and First Principles

**Readings:**

- Willison, Simon. ["Writing Code Is Cheap Now"](https://simonwillison.net/guides/agentic-engineering-patterns/) (Chapter from *Agentic Engineering Patterns*).
- Willison, Simon. ["Using Git with Coding Agents."](https://simonwillison.net/guides/agentic-engineering-patterns/) (Chapter from *Agentic Engineering Patterns*).

**Topics:**

- Installing and configuring Claude Code CLI
- The terminal as creative workspace: navigating the command line for humanists
- Running terminal commands from within Claude: how the agent executes bash, installs packages, and interacts with your file system — and when to let it vs. when to intervene
- Slash commands: built-in commands (`/help`, `/init`, `/clear`, `/compact`) and how they structure your workflow ([Claude Code CLI reference](https://docs.anthropic.com/en/docs/claude-code); see also Babich, Nick. ["7 Essential Claude Code Slash Commands."](https://uxplanet.org/7-advanced-claude-code-slash-commands-db4c9be3e38c) *UX Planet*. March 2026.)
- Building a custom slash command: creating `.claude/commands/` files as reusable prompt templates for your own research workflows ([Custom slash commands guide](https://code.claude.com/docs/en/skills))
- Context engineering: CLAUDE.md files, project memory, and teaching the agent about your work
- Git basics for agentic workflows: why version control matters more, not less, with AI
- Demo: setting up a project from scratch with Claude Code, including writing a custom slash command

**Exercise:** Initialize a new project with Claude Code. Write a CLAUDE.md file that describes your research domain and goals. Create a custom slash command for a task you repeat often (e.g., `/analyze-text`, `/format-citations`, `/summarize-source`). Use Claude Code to scaffold a basic tool.

---

#### Session 4 (PM): Red/Green TDD and Agentic Patterns

**Readings:**

- Willison, Simon. ["Red/Green TDD"](https://simonwillison.net/guides/agentic-engineering-patterns/) (Chapter from *Agentic Engineering Patterns*).
- Willison, Simon. ["Hoard Things You Know How to Do."](https://simonwillison.net/guides/agentic-engineering-patterns/) (Chapter from *Agentic Engineering Patterns*).

**Topics:**

- Test-driven development as a conversation with your agent: write a test, let the agent pass it
- Why TDD works better with agents than without them
- Subagents and parallel work: how Claude Code delegates
- Practical patterns: when to intervene, when to let the agent run
- Demo: building a text processing tool using red/green TDD

**Exercise:** Write three tests that describe what you want your tool to do. Let Claude Code implement the code to pass them. Iterate.

---

### Day 3: Wednesday, June 10 — MCP and Model Integration

#### Session 5 (AM): The Model Context Protocol

**Readings:**

- Anthropic. ["Introduction to Model Context Protocol."](https://docs.anthropic.com/en/docs/build-with-claude/mcp) Anthropic Documentation.
- Cohen, Dan. ["AI and Libraries, Archives, and Museums, Loosely Coupled."](https://newsletter.dancohen.org) *Humane Ingenuity*.
- Cohen, Dan. ["The Reboot of Digital Humanities Now."](https://newsletter.dancohen.org/archive/the-reboot-of-digital-humanities-now) *Humane Ingenuity*.

**Topics:**

- What is MCP? The "USB-C for AI" — connecting Claude to external tools and data
- The MCP ecosystem: servers, clients, and the community registry
- Demo: connecting Claude Code to GitHub, a file system, and a web browser via MCP
- The Hugging Face MCP: accessing open-source models from within Claude Code
- Demo: using the Hugging Face MCP to find and deploy a transcription model (Whisper) for archival audio
- Discussion: what data sources and tools matter for your research?

**Exercise:** Configure at least one MCP server with your Claude Code installation. Use the Hugging Face MCP to identify a small model relevant to your research (transcription, OCR, classification, translation). Build a simple pipeline that integrates it.

#### Wednesday PM: Free

---

### Day 4: Thursday, June 11 — Superpowers and Skills

#### Session 6 (AM): The Superpowers Workflow

**Readings:**

- Vincent, Jesse. ["Superpowers: How I'm Using Coding Agents in October 2025."](https://blog.fsck.com/2025/10/09/superpowers/) *blog.fsck.com*. October 9, 2025.
- Willison, Simon. ["Subagents"](https://simonwillison.net/guides/agentic-engineering-patterns/subagents/) (Chapter from *Agentic Engineering Patterns*).

**Topics:**

- The Superpowers framework: Brainstorm → Spec → Plan → TDD → Subagent Development → Review → Finalize
- Installing and configuring the Superpowers plugin
- The /brainstorm command: Socratic dialogue before code
- Subagent-driven development: dispatching parallel tasks with built-in review
- Demo: walking through the full Superpowers workflow on a real DH tool
- Discussion: structured methodology vs. improvisation — when does each serve humanities work?

**Exercise:** Use the full Superpowers workflow to brainstorm, plan, and begin implementing your final project tool.

---

#### Session 7 (PM): Building and Sharing Skills

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

---

### Day 5: Friday, June 12 — Integration and Futures

#### Session 8 (AM): Building Your Tool

**Readings:**

- Underwood, Ted. ["A More Interesting Upside of AI."](https://tedunderwood.com/2025/07/02/a-more-interesting-upside-of-ai/) *The Stone and the Shell*. July 2, 2025.
- Underwood, Ted. ["The Marionette Theater of AI."](https://tedunderwood.com/2026/02/08/the-marionette-theater-of-ai/) *The Stone and the Shell*. February 8, 2026.
- MLA Executive Council. ["Educational Technologies and AI Agents."](https://news.mla.hcommons.org/2026/01/30/educational-technologies-and-ai-agents/) *MLA News*. January 30, 2026.

**Topics:**

- Dedicated build session: complete your final tool with instructor support
- Integration patterns: combining MCP connections, local models, and custom skills into a single workflow
- Troubleshooting and peer review
- Deployment options: GitHub Pages, local tools, shareable packages

---

#### Session 9 (PM — short session): Presentations and Futures

**Readings:**

- Mollick, Ethan. ["The Future of Education in a World of AI."](https://www.oneusefulthing.org/p/the-future-of-education-in-a-world) *One Useful Thing*.

**Topics:**

- Participant presentations: demo your tool, explain your process, reflect on what you learned
- Discussion: what does this mean for how we teach programming in DH?
- Pedagogical takeaways: designing assignments around agentic coding for your own courses
- Resources for continuing: communities, documentation, and next steps

**Deliverable:** A working tool with either local model or MCP integration, deployed or shareable, accompanied by a brief reflection on the process of building it.

---

## Resources

### Agentic Engineering

- Willison, Simon. [*Agentic Engineering Patterns*](https://simonwillison.net/guides/agentic-engineering-patterns/) (full guide, updated regularly)
- Vincent, Jesse. [Superpowers](https://github.com/obra/superpowers) (GitHub repository and documentation)
- Anthropic. [Claude Code Documentation](https://docs.anthropic.com/en/docs/claude-code)
- Anthropic. [MCP Documentation](https://docs.anthropic.com/en/docs/build-with-claude/mcp)
- Anthropic. [Skilljar: Introduction to Model Context Protocol](https://anthropic.skilljar.com/introduction-to-model-context-protocol) (free course)

### Hugging Face and Open Models

- Hugging Face. [Open Source Models Hub](https://huggingface.co/models)
- Hugging Face. ["Supercharge Your OCR Pipelines with Open Models"](https://huggingface.co/blog/ocr-open-models)
- OpenAI. [Whisper (speech-to-text)](https://huggingface.co/openai/whisper-small) on Hugging Face

### Digital Humanities and AI Pedagogy

- Salter, Anastasia & John Murray. [DHSI 2025: DH Programming Pedagogy in the Age of AI](https://anastasiasalter.net/DHProgramming/) (previous iteration)
- Salter, Anastasia & Lai-Tze Fan. [Distant Coding for the Digital Humanities](https://anastasiasalter.net/DistantCoding/) (MLA 2026)
- Johnson, Emily K. & Anastasia Salter. [*Critical Making in the Age of AI*](https://github.com/amsucf/CritMakingAgeOfAI) (companion resources)
- Locke, Brandon. "Digital Humanities Pedagogy as Essential Liberal Education." *DHQ* 11.3 (2017).

### Practitioner Blogs

- Mollick, Ethan. [*One Useful Thing*](https://www.oneusefulthing.org/) (Substack)
- Willison, Simon. [*simonwillison.net*](https://simonwillison.net/)
- Cohen, Dan. [*Humane Ingenuity*](https://newsletter.dancohen.org/)
- Underwood, Ted. [*The Stone and the Shell*](https://tedunderwood.com/)
