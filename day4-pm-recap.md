---
layout: default
title: "Day 4 PM Recap: Power Tools for Building — VS Code, Sub-agents, and Remote Control"
---

<p class="page-prompt">$ day-4 --pm · session recap</p>

## Day 4 PM Recap — Power Tools for Building: VS Code, Sub-agents, and Remote Control

<p class="page-lead" markdown="1">A short, practical lead-in to the afternoon build block: three "power tools" for the <em>execution</em> side of a project — running Claude Code inside <strong>VS Code</strong>, offloading work to <strong>sub-agents</strong>, and steering a long job from your <strong>phone</strong> — before everyone broke off to make progress on their own tools with one-on-one help.</p>

### Claude Code inside VS Code

We'd been living in the terminal; this session showed the editor surface. **VS Code is a Microsoft/GitHub product**, which makes its relationship to Claude Code a little fraught — *"they're both incredibly threatened by [Claude] Code, but they also have plugins to support [Claude] Code."* Its built-in **Copilot** chat is Microsoft's own side-panel agent. (Last year, in fact, the course taught Claude Code *through* Copilot so an agent could manipulate code in the editor.)

A nice surprise: VS Code automatically surfaces your **existing Claude Code sessions** — even ones you never ran through Copilot — because every session is saved to a known file location on disk, and VS Code just looks there and renders it. In the demo it was reading the same transcript John had open in the CLI, here driven by **Claude Haiku 4.5**.

- **Extensions** add capabilities — for example previewing format-specific files like **`.ink`** (interactive fiction) or even a **3D model** right in the editor, no custom web interface required.
- The **official Claude Code extension** (search "Claude" under Extensions) gives the real Claude Code experience *inside* VS Code: the same model selection and switching, the same accept/reject edits, an **auto-edit** mode — but now sitting next to the actual source files, so you can watch and open whatever it's editing. Closer to the CLI than the desktop app is.

### Sub-agents — the one piece we hadn't covered

When you have a spec and implementation plan (built via **Superpowers**), it offers two ways to execute: **inline** or **sub-agent-driven**. Sub-agents were the new idea: Claude Code *"can create a little Claude Code that goes off and does all the work, and then it reports back to the main instance."*

The point isn't just parallelism — it's **context hygiene**. The implementation detail fills the *sub-agent's* context window, not the planning agent's, so the main instance never loses the overall project plan. In Superpowers you type **"1"** for sub-agent execution; it loads the sub-agent skill and launches them, and you can watch which agents are running at the bottom of the CLI. The trade-off, stated plainly: sub-agents *"can go through your tokens."*

### Reviewing the agent's work in VS Code

Two more editor conveniences for keeping an eye on what the agent produces:

- **Markdown preview** (top menu → "open as preview" / "open to the side") renders the Markdown files the agent is writing exactly as GitHub would — an easy way to review plans and docs for approval.
- **Git integration** — if you're authenticated to GitHub, VS Code shows commit history and diffs. You can simply ask Claude *"when did this change happen?"* or *"can you restore this code?"* and it operates Git for you — *"so you don't have to learn all the Git commands"* — while the visual diff view is still there when you want it.

### A candid aside on Copilot's limits

Copilot's right-click **"Explain"** can describe a snippet using the Claude model it provides — again **Haiku 4.5** — but the demo wouldn't even explain the snippet asked of it. That set up an honest point about tooling economics: students get some AI access through a **Copilot Education** subscription, but **not the frontier models**. Microsoft has *"basically nerfed the student and educator"* tier — a year ago Copilot was a cheap path to the best models; now you need **Copilot Pro+/Business/Enterprise**, and with Education *"you're probably only going to get Haiku."* (John shared Microsoft's guide, *"Make Your Copilot Credits Count,"* in the notes.) The takeaway: this is **why the course recommends the paid Claude subscription** rather than relying on Copilot credits.

### Remote control — drive it from your phone

The crowd-pleaser. Turning on **remote control** lets you monitor and steer a running session from a **web link on your phone** while logged into your Claude account — *"I can do this on my phone while my computer is doing the heavy lift[ing]."* The job still runs **on your computer** (it's not in the cloud), so the machine has to stay **on, online, and awake** — *"like, oh, I just had to do this long job, and it went to sleep."* In the demo the phone showed a live "spec review" task, the agent's progress, and the commands it was running, with the option to hand it back control.

### Into the build

*"VS Code and remote control and sub-agents are some really powerful tools to leverage as you get into the execution side of your projects."* With that, the morning's instruction wrapped and the afternoon became dedicated **build time** — make progress on your tool, try Claude Code in VS Code, maybe leave the laptop running in the hotel and drive it from your phone — while John circulated to help "those that need it the most."

---

**Through-line of the session:** these are the tools that take you from *getting an agent to work* to *running real work at scale* — an editor that keeps the code and the agent side by side, sub-agents that protect your planning context, and a phone link that frees the long job from your desk. Power that comes, as always, with a cost to keep in view: tokens, and a laptop that has to stay awake.
