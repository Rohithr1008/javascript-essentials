# ⚡ JavaScript Essentials — Part 1

A hands-on study kit covering the JavaScript fundamentals: variables, control flow, functions, closures, arrays, strings, objects, and the classic pitfalls — in **three editions**, from print-friendly to fully interactive.

> **Progress:** Part 1 ✅ complete · Part 2 (promises, async/await, classes, modules) ✅ complete

---

## 📚 Choose your edition

| Edition | Best for | Link |
|---|---|---|
| 🖥️ **Interactive Study App** | Studying in the browser — dark mode, saved progress, syntax highlighting | [**Open the live app**](https://rohithr1008.github.io/javascript-essentials/) (also works offline: download `Javascript_essentials_part1_study_app.html` and double-click) |
| 📝 **Interactive Markdown** | VS Code / Typora users — quizzes, flashcards & hint cards inline | [View on GitHub](Javascript_essentials_part1_interactive.md) — open in VS Code preview with `Ctrl+Shift+V` |
| 📄 **Plain Markdown** | Printing, PDF export, distraction-free reading | [View on GitHub](Javascript_essentials_part1_with_examples.md) |

All three editions contain identical content — pick the format that fits how you study.

---

## 🗂️ What's covered (16 sections)

1. Variables: `let`, `const`, `var` · 2. Conditions · 3. Loops · 4. Logical operators · 5. Data types & NaN · 6. Mutable vs immutable (+ `Object.freeze`) · 7. Operators & `Math` · 8. Functions, arrows, closures, hoisting · 9. Arrays & methods (incl. ES2023 `toSorted`/`with`) · 10. Strings & methods (+ template literals) · 11. Objects, methods & `this` · 12. Symbols cheat sheet · 13. 13 common pitfalls · 14. 10 practice exercises · 15. 9 challenges · 16. Answer key

## 🧪 Built-in interactivity

- 🧪 **9 self-test quizzes** with click-to-reveal answers
- 🤔 **15 predict-the-output cards** (logic, mutability, array traps)
- 🃏 **16 flashcards** + symbol drills
- 🟢🟡🔴 **Difficulty & time badges** with 💡 hints on all 19 exercises/challenges
- 🐞 **Spot-the-bug** final boss quiz
- 😅 **Mood checks** after every self-test · 📅 7-day study plan · 🏆 completion certificate
- *(App edition)* 🌙 dark mode · 📊 progress bar that persists via localStorage · 🧭 scrollspy navigation

## 🚀 Quick start

```bash
git clone https://github.com/Rohithr1008/javascript-essentials.git
```

1. **Easiest:** open `Javascript_essentials_part1_study_app.html` in any browser (or use the [live version](https://rohithr1008.github.io/javascript-essentials/)).
2. **In VS Code:** open either `.md` file and press `Ctrl+Shift+V` for the interactive preview.
3. **On paper:** print the plain edition — code blocks and tables are print-friendly.

Run any snippet as you read:

```bash
node -e "console.log([10,1,2].sort())"   # [1, 10, 2] 😱 — see pitfall #2!
```

---

*Made for hands-on learning — read a little, guess the output, flip the card, break the code.* ❤️

---

## ⚡ Part 2 — Intermediate (promises, async/await, classes, modules)

The same three-edition study kit, now for the **intermediate** level.

### 📚 Choose your edition

| Edition | Best for | Link |
|---|---|---|
| 🖥️ **Interactive Study App** | Browser study — dark mode, saved progress, learning path, spaced repetition, **5 auto-graded challenges** | [Open the live app](https://rohithr1008.github.io/javascript-essentials/Javascript_essentials_part2_study_app.html) — or open the file offline by double-clicking |
| 📝 **Interactive Markdown** | VS Code / Typora — Promise Simulator, code sandbox, quizzes & flashcards | [`Javascript_essentials_part2_interactive.md`](Javascript_essentials_part2_interactive.md) — open with `Ctrl+Shift+V` |
| 📄 **Plain Markdown** | Printing / PDF / distraction-free reading | [`Javascript_essentials_part2_with_examples.md`](Javascript_essentials_part2_with_examples.md) |

### 🗂️ What's covered (9 sections)

1. Promises · 2. async / await · 3. Error Handling · 4. Classes & OOP · 5. Modules · 6. Common Pitfalls · 7. Practice Exercises (8) · 8. Challenges (5, auto-graded) · 9. Answer Key

### 🚀 Part 2 quick start

```bash
# Try a challenge solution right in the terminal
node -e "async function inSequence(t){const r=[];for(const x of t)r.push(await x());return r;} ; inSequence([async()=>1,async()=>2]).then(console.log)  # [1, 2]"
```

See [`JAVASCRIPT_ESSENTIALS_PART2_CONTEXT.md`](JAVASCRIPT_ESSENTIALS_PART2_CONTEXT.md) for the full context/transfer notes, and [`index.html`](index.html) to launch either part.
