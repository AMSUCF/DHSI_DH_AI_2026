---
layout: default
title: "Day 3 PM Recap: Local Models, MCP, and the Superpowers Workflow"
---

<p class="page-prompt">$ day-3 --pm · session recap</p>

## Day 3 PM Recap — Local Models, MCP, and the Superpowers Workflow

<p class="page-lead" markdown="1">A long, solo-John afternoon (Anastasia was away — <em>"just me and not Anastasia"</em>) that moved from the economics and mechanics of <strong>local and open-weight models</strong> through to the two frameworks that make agentic work scale: the <strong>Model Context Protocol (MCP)</strong> for connecting Claude to outside tools, and the <strong>Superpowers</strong> plugin for disciplined, reviewable development. Along the way Claude built and published a working MCP server and reviewed its own code.</p>

The organizing idea, returned to repeatedly: knowing the **stack** is what turns the agent from magic into something you can troubleshoot. *"Think of it as a stack. Bash is lower down, and Claude sits on top of it."* Skip to Claude Code Web and you hide that layer — which also removes your ability to change parts of it, feed it gigabytes of local data, or choose which computer does the work. *"If you didn't understand how Claude interacts with a computer, then it's just magic… AI literacy without computational literacy is weird."*

### The model is a swappable engine

Carrying forward the harness/car metaphor, the **LLM is the engine** — and you can swap it (gas, diesel, electric). **Ollama** positions itself as the *"travel adapter for all the engines,"* working across the different agentic harnesses. Anthropic, naturally, would rather you didn't: *"Claude doesn't want you to do that, because they want you to use Claude"* — the desktop app locks you to Claude's models, while the **CLI** is what gives you the freedom to swap.

Over lunch John had pointed Claude Code at **Minimax M3** (running on Ollama's cloud) and rebuilt the DHSI repo into a **p5.js retro arcade shooter**, auto-published to GitHub Pages — in about seven minutes, on a free model. Minimax M3 is open-weight, US-hosted with **zero data retention** on Ollama's cloud, has a **1-million-token context window**, and scores **~80.5 on SWE-bench** (roughly Claude Sonnet 4.6 territory). The economics are the point: about **$0.30 / $1.20 per million input/output tokens** versus **Fable at $10 / $50** — a 30–60× difference. Run out of Claude tokens? Swap to an open model and keep going.

### A detour on environmental and ethical cost

A student's question about the energy cost of all this opened a real debate. The honest answer is *it depends on where the compute runs*: a student had calculated that AI is "better" in **Massachusetts** (~20% renewable) than gas-heavy **Indiana**; **Quebec** is hydroelectric, **Iceland** near-ideal (geothermal, natural cooling). The harder argument was that abstaining isn't automatically the ethical choice — environmental-justice workers, **AI mammogram detection**, or a programmer's tool to fight insurance denials may do real good — so *"which is the most ethical to use… really depends on your ethics."* Part of the opposition, John argued, is *"emotional and non-rational"* and seeking a rationalization — and **local AI** will soon undercut the environmental argument anyway, since it runs on hardware you already own and power you can choose.

### How models are made smaller (and why it matters)

A clear tour of the techniques that let big models run on small hardware:

- **Parameters & Mixture-of-Experts.** Minimax M3 has **456 billion parameters** but only ~10–13B active per token — it doesn't "Plinko" through all of them, which is what makes it efficient.
- **Quantization** — compress 16-bit weights down to 8-, 4-, even 1-bit. Same parameter count, smaller footprint, runs on weaker hardware.
- **Distillation** — *"what DeepSeek did"*: a big model trains a smaller one on its outputs. This is *"why they started redacting all those thinking tokens"* — hiding reasoning traces makes a model harder to distill.
- **Fine-tuning / LoRA** — cheap: freeze the base layers and adjust only the last ones. You could fold in a corpus of **Victorian literature** (echoing the from-scratch Victorian-English model Anastasia demoed earlier). **Unsloth** + free **Google Colab** compute can fine-tune **Gemma 4** models (E2B trains in 8GB VRAM, E4B in 10GB).
- **Hardware reality check.** Running Minimax M3 yourself means ~4 data-center GPUs at ~$36,800 each; the full 1M-context version needs a B200 cluster. This is why renting matters — and why these techniques scale up to a **grant budget** for cloud GPU time in a data center whose energy source you've chosen.

An aside on Anthropic's guardrails: Claude will **downgrade** you if you try to use it to build a *competing* frontier model — both via distillation and via direct help — the same "Mythos"-class concern from the day before.

### Hands-on — driving Claude Code with a local model

We launched the agent on a non-Anthropic engine: **`ollama launch`** → choose the **Claude** harness → select **Minimax M3**. (Repeated warning: *"don't launch OpenClaw, for God's sake."*) Troubleshooting was real — a German and a Canadian phone number both failed Ollama registration (workaround: sign up with GitHub/Gmail, or just use a local model like **Qwen 2.5 Coder**), and a shell-path issue needed `source ~/.zshrc`.

Chatting with a **raw** model (`ollama run`) made two things visible: local models **always expose their thinking tokens** ("they can't redact it"), and a raw model has **no tool use** — no web search, everything pulled from its frozen weights (cutoff January 2026). Which led to the key reframe of **hallucination as a compression artifact**: *"these strings… are not actually strings inside that model… it's just a bunch of values."* Compress terabytes of knowledge and you get artifacts. **Grounding** — handing the model the facts and asking it to work with them — is what prevents it.

### Building an app on the Ollama API (and the CORS lesson)

Because **Ollama exposes an API on a port** (`ollama serve`), other programs — even on another computer — can talk to it as a service. We had Claude *"create a bare minimum chat web app that uses the Ollama API."* This surfaced a classic beginner wall: a double-clicked `file://` page **cannot** connect to localhost (cross-origin). The fix is to run a local web server — *"localhost can connect to localhost, but C drive can't connect to localhost."* Hence the push to install **Python** and use its built-in server (`python -m http.server`): *"once you have Python, you can serve anything, anywhere, all the time."* (With extended live cleanup of Conda/Miniforge stomping on PATH — *"that's what Claude's for… use the better model when you're dealing with system stuff."*) **Google Colab** came up again as free research compute — change the runtime to an **A100** you'd otherwise pay ~$10k to own, or rent for a few dollars an hour.

A practical context-management note landed here too: **`/context`** shows how many tokens you're using (system prompts + tools alone run ~21K), which is why **`/clear`** and **`/compact`** matter — `/compact` "runs the agent on its own conversation and compacts it."

> **Day 3 PM proper — "We are on day 3 PM, Superpowers Framework."**

### MCP — the USB-C port for agents

**MCP (Model Context Protocol)** is the protocol that lets Claude *"call and interact with other services"* and pull a tool into its toolset. Without it, hitting the Ollama API would mean a hand-rolled curl/bash script every time; MCP **bundles** the interaction so the agent knows what it can do, the input format, and what comes back. The metaphor: if the harness is the computer, **MCP is the USB-C port** — universal, versus Apple's proprietary Lightning (*"Lightning port sucked… it was absolutely a money grab"*). It's **agent-agnostic**: Anthropic introduced it, but Codex, Claude, and others all "speak MCP."

- **Where to find servers:** **AwesomeMCPServers.org** (and an "awesome skills" directory for skills).
- **Examples named:** **Zotero** (John built his own — upload local papers, merge duplicates, full-text search, pull metadata/tags, import/export BibTeX), plus **Atlassian, Canvas, Figma**, and a **Chrome DevTools** server.
- **MCP as a control surface, not just convenience:** tools *constrain and shape* what an agent can do — allow some database writes but not others, guarantee it won't corrupt a JSON file, let multiple agents share data reliably. Most MCP servers run **locally in Python over an HTTP port** (which is why we'd just installed Python). The caveat: third-party servers may be unmaintained or insecure — prefer first-party/company-maintained ones.

### Live build — a Notebook MCP server

To make it concrete, John launched `claude --dangerously-skip-permissions`, switched to **Fable**, and asked it to *"create a simple MCP server using Python that creates notebooks and reads and writes them with tags and a full search tool."* In about ten minutes it produced — autonomously — a single **SQLite** database with an **FTS5** full-text index kept in sync by triggers (real search, not substring matching), **five tools** (create notebook, create/read/update note, search), running over MCP's STDIO transport with a real client connection, hooked up via `claude mcp add`. It then **published the project to GitHub** with a getting-started README — no manual web steps. *"It's almost like we write these READMEs now for agents more than we do for humans."* (Students had built their own MCP servers as a class assignment; you can point Claude at a repo URL and say "install the MCP server at this GitHub repository.")

### Skills and the Superpowers framework

**Skills** are *"a library of prompts that tell the agent how to perform certain types of tasks"* — the counterpart to MCP's programs. A skill may bundle a tool (a "docx" skill teaches the agent to reach for **Pandoc**) — *"a cheat sheet for its exam."* Anastasia's own setup uses skills around retro aesthetics so she can reuse them.

**Superpowers** is *"one particular set of skills I recommend everyone installs right now"* — so popular that **Anthropic adopted it as a first-party plugin**, and it works across harnesses (Codex CLI, OpenCode, …).

- **Install:** `/plugin install superpowers@claude-plugins-official`, then `/reload-plugins`.
- **What it encodes:** software-engineering conventions — **YAGNI** ("you ain't gonna need it"), **red-green TDD**, **brainstorming before implementing**, and **plan mode** — delivered as skills, hooks, and slash commands. A **SessionStart hook** activates it each session; skills load **opportunistically** so they don't bloat the context window. The Matrix line did the work: *"Remember when he plugs in — 'I know kung fu.' That's skills. We now know kung fu."*

We watched two skills run on the afternoon's projects:

- **brainstorming** — it interviewed John about combining the chat app and the arcade shooter (talking enemies, an AI trash-talking commentator, chat that modifies the game), landing on a **Monkey's-Paw genie** persona — *"a good metaphor for LLMs in general."* The room even **voted** (by show of hands) for the game to pause "between waves" during chat.
- **code-review** — the agent reviewed its *own* MCP server: *"6 finder angles… 30-plus candidates after dedupe, 9 went to verification, 1 was refuted… 6 findings survive,"* each with file, line number, and failure scenario — *"what a senior engineer would do."* Then: "go ahead and fix them" → *"All six findings fixed and verified."* (John routinely runs ~20 agents at once.)

### Tools and proof points worth a look

- **Claude Fable 5 beats Pokémon FireRed using only vision** — raw screenshots, no maps or game-state — the kind of environment-exploration challenge earlier models repeatedly failed (≈121K views on the official channel).
- **Voxtral** — open-source, Docker-based transcription John uses for all his lectures (~12.5 tokens/sec, ~480ms delay, matching leading offline transcribers).
- **Whisper** — base transcription model; a student fine-tuned it for **Arabic emotional-expression** classification.
- **Qwen 2.5 Coder in the browser via WebGPU** — no Ollama needed; powers John's "learn Python through narrative" project.
- **Image Sorcery MCP** — local image processing / object detection for any agent (alt-text captions, video summaries) — all on-device, for participants interested in local image work.

### Housekeeping — a correction on billing

A correction to a Day 2 claim: Anthropic is **not** wholesale switching Claude subscriptions to metered tokens. The real change (the **OpenClaw** dispute, effective ~June 15): using a *different* harness against the Claude API on a subsidized subscription gets metered at API rates — but **Claude Code in the terminal stays on subscription session limits**. Also noted: the **Fable** model goes away after June 22. *"Congratulations on making it through just my day… I hope you all have great plans for Montreal tonight."*

---

**Through-line of the session:** the afternoon connected the small to the large. The same moves you make on a laptop — swapping in an open model, grounding it against hallucination, wiring a tool in through MCP, letting Superpowers brainstorm and *review* the work — are exactly the moves that scale to rented GPUs and twenty parallel agents. And the recurring discipline underneath all of it: **constrain and verify.** MCP constrains what an agent can touch; Superpowers makes it prove its work; knowing the stack means you can always ask *what is it actually doing, and where?*
