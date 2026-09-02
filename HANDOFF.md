# 📌 Project Handoff — JavaScript Essentials (5-Part Series)

> **Purpose:** Everything a fresh session (human or AI) needs to continue this repo confidently — rules, conventions, architecture, verification steps, and what's done vs. left for later. Read this first.

---

## 1. Project Overview

A complete, beginner-friendly, **ADHD/autistic-friendly** study guide that teaches JavaScript → MERN apps → production. Everything ships in a **consistent three-edition format** per part.

| Part | Title | Sections | Covers |
|---|---|---|---|
| 1 | Core | 16 | variables, control flow, functions/closures, arrays, strings, objects, pitfalls |
| 2 | Async/OOP | 9 | promises, async/await, error handling, classes, modules |
| 3 | MERN Bridge | 10 | Map/Set, generators, regex, DOM/events, fetch, Node core |
| 4 | MERN Foundations | 17 | Express, Mongoose/MongoDB, React, fetch, CORS, Node, TypeScript + 2 mini-projects |
| 5 | Production | 16 | bcrypt hashing, JWT, protected routes, React token flow, deployment (Render/Vercel/Atlas), testing, React Router |

**Status:** ✅ Complete. All committed & pushed to `main`. Working tree clean.

**Repo:** https://github.com/Rohithr1008/javascript-essentials

---

## 2. File Naming Convention (learn this — everything follows it)

For each Part N:
- `Javascript_essentials_partN_with_examples.md` — **plain** Markdown (no HTML; print/PDF friendly)
- `Javascript_essentials_partN_interactive.md` — **interactive** Markdown (`<style>`, quiz-boxes, flashcards, sandboxes, mood checks, embedded `<script>`)
- `Javascript_essentials_partN_study_app.html` — **standalone** study app (self-contained, runs offline)
- `PARTN_PLAN.md` — planning doc
- `JAVASCRIPT_ESSENTIALS_PARTN_CONTEXT.md` — context/transfer doc (per-part)
- `index.html` — landing page with a card per part × edition
- `README.md` — top-level doc with a section per part

---

## 3. Per-Edition Structure

### Plain markdown (`with_examples.md`)
```markdown
# JavaScript Essentials — Part N (title)
> Study guide note (plain edition)...
### 🗺 Your path — where Part N fits
## Table of Contents
## N. <section heading>   ← one per section
> 🚩 **Why it matters:** ...
...code blocks, tables, real-world anchors...
### 🧪 Quiz
## Practice / Challenges / Answer key
<!--PN-END-->                    ← sentinel at EOF
```

### Interactive markdown
- A `<style>` block near the top defining: `.tip`, `.warn`, `.chall`, `.why`, `.quiz-box`, `.flashcard`, `.mood`, `.sandbox`, `.layer-legend`, dark-mode `@media`.
- A **part-navigation bar** linking Parts 1→N.
- `quiz-box` = click-to-reveal `<details>`; `flashcard` = flip; `mood` = radio self-check.
- A final `<script>` block with demo functions (named like `p5iDemoX`, `p5iExpand`, `p5iFocus`).
- Sentinel `<!--PNI-END-->` at EOF.

### Study app (`.html`)
- Single `<script>` pair (never more). Self-contained (inline CSS + JS, no external deps).
- Feature set reused across ALL parts (see §5) — keep it consistent.
- Sentinel `<!--PNH-END-->` at EOF (Parts 2–5; Part 1 historically has none — don't add one there).
- **Skip link**: `<a class="skip-link" href="#progressBar">Skip to content</a>` right after `<body>`.

---

## 4. The Section Canon (same order every part)
1. Foundation / intro concept that shows "why it matters"
2. ...through...
N. Common pitfalls
N+1. Practice exercises
N+2. Auto-graded challenges (pure functions)
N+3. Answer key
Then a 🎉 Congratulations closing.

Every section opens with a **`> 🚩 Why it matters:`** line (the ADHD/context anchor).

---

## 5. Study-App Feature Set (apply to every app — consistency is an accessibility feature)

- 🌙 **Theme toggle** (`force-dark`/`force-light`) with `applySysDark()` on load
- 🔤 **Font zoom** (A−/A/A+): classes `font-sm/font-md/font-lg`
- 📊 **Progress bar** + "Mark Complete" via `toggleSection(n)` (localStorage keys `pN-sec-N`)
- 🧭 **Learning Path** recommendations (`updateLearningPathN`)
- 🃏 **SRS flashcards** (new→learning→mastered) + shuffle; keys `pN-sr`, `pN-sr-shuffle`
- ⚡ **XP / streak / confetti / toast**; keys `pN-boost`
- 🧠 **Focus sprint timer**, 🎲 **Surprise** jump button
- 🧘 **Focus Mode** (`focusModeN(btn)`): hides Progress/Boost/LearningPath/SRS panels, closes all details, adds `body.focus-mode`
- 📖/📕 **Collapse / Expand-all** (`collapseAllN`)
- 🝀 **Accessibility**: `aria-pressed`, `role="status"`, `@media (prefers-reduced-motion)`, `@media print`, skip link
- Per-part **live in-page mock** (learners interact with zero install):
  - Part 4: mock MERN server (`mockRun`) + animated layer diagram (`layerLit4`, `mockAutoplay`) + 2 mini-app demos
  - Part 5: mock auth server (`authDemo`) + JWT viewer (3 chips)
- **Auto-graded challenges**: `runTest(n)` builds a `new Function` harness combining user code + `PN_TESTS[n]`, plus XP/confetti on pass.

**Naming rule:** every global in app N is suffixed with its part (`fontZoom3`, `boostSurprise4`, `focusMode5`, etc.) to keep the parts isolated.
---

## 6. Key Implementation Rules / Gotchas

1. **Never store plain-text passwords** — always `bcrypt.hash`. `findByIdAndUpdate(id, upd, { new: true })` returns the NEW doc; omitting `{new}` returns the old.
2. **JWT must be exactly 3 dot-separated parts.** (Fixed a bug where a signature containing a `.` in an email made it 4 parts.) Use base64url (`.replace(/[+/=]/g,...)`) and a dot-free signature.
3. **Challenges = pure functions only** so they're auto-gradable via `new Function`. Canonical solutions live in the answer-key section AND are validated.
4. **Challenge test data must be self-consistent** (earlier a freq test expected `the=1` on a string with "the" twice — validate expected counts).
5. **`new Function(harness)`** (NOT `new Function("return " + harness)` which gives `return return`) — a bug hit in Part 2 & 3 and fixed.
6. **Every JS snippet in the guides is Node-validated** — output comments must match real `node` output. Run anything you add.
7. Keep **huge apps as a single `<script>` block**; edit incrementally in small chunks (files are large — P1 ~290 KB).

---

## 7. Verification Checklist (run before any "done" claim)

```powershell
# 1. JS compiles (extract the app's single script)
$c  = Get-Content "Javascript_essentials_partN_study_app.html" -Raw
$m  = [regex]::Match($c,'(?s)<script>(.*?)</script>')
Set-Content _v.js $m.Groups[1].Value -NoNewline
node --check _v.js

# 2. Interactive md scripts compile (extract every <script> block and node --check them)

# 3. Structural: 1 script pair, DOCTYPE, </body>, </html>, sentinel present, no stray temp files

# 4. Functional (DOM-mock): load each app's real JS; check toggleSection, markButtons,
#    updateProgress, SRS start, focusMode toggle, part mock, and challenge solutions

# 5. Clean up: Remove-Item any `_*.cjs` / `_*.ps1` temp test files BEFORE committing
```

**Known environment quirk:** PowerShell one-liners with `[` / `{` / `|` can break parsing. When in doubt write a small `.ps1`/`.cjs` file and run it, then delete it. Also watch for a recurring **path typo** `C:\Users\rohit\.clinete\...` (a stray folder was created once and removed) — always double-check the path.

---

## 8. What's Done vs. Later

### ✅ Done
- Parts 1–5, three editions each, all pushed
- Part 4 + 5 polish (animated mock demos, glossaries, onboarding, skip links)
- Full smoke test: all scripts compile; core systems load/run; 11/11 challenge solutions pass

### 🔜 Natural next steps (not started — only continue if asked)
- **Scaling / reliability**: CI/CD (auto-deploy on push), monitoring & logging, performance tuning
- **Advanced security**: refresh tokens, rate limiting, HTTPS/headers, role-based access control (RBAC)
- **Deploy-to-cloud walkthrough** with a real (free) account, or a "deploy one real project" applied exercise
- Mobile/keyboard E2E pass (Playwright), or a one-time real **a11y scan** (axe DevTools) to *prove* compliance

---

## 9. Quick Pitfalls from this session (memories to reuse)
- A **focus-mode harness false-positive** was a mock artifact — isolate the function in a minimal test to confirm app code is fine.
- **README/interactive demos** that show `node -e` output should be run once to confirm the comment matches.
- "Part N complete" was corrected twice when the **context doc / index.html / README** were still missing Part N — always update those three together with a new part.

---

*Handoff created: 2026-09-02 · Series complete · Repo clean on `main`.*