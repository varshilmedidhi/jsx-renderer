# 🪶 Simple JSX Renderer

A **sub‑1 KB** experiment that shows the entire JSX → virtual DOM → real DOM pipeline in just a few lines of vanilla JavaScript. No React, no build step—just a single file you can drop into any web page.

<p align="center">
  <img src="https://github.com/your‑username/simple‑jsx‑renderer/assets/demo.gif" alt="Demo animation showing JSX source, the JSON VDOM it produces, and the rendered DOM" width="600">
</p>

---

## ✨ Features

| What | Details |
|------|---------|
| **Tiny** | ~35 sloc, no dependencies, zero bundlers |
| **Standard JSX** | Works with any transpiler (Babel, SWC, esbuild) using `/** @jsx h */` pragma |
| **Virtual DOM** | Each element is a plain object: `{ nodeName, attributes, children }` |
| **Hyperscript runtime** | The `h()` function glues the transpiled JSX to the renderer |
| **Recursive renderer** | Converts the virtual tree to actual DOM nodes with attribute + child handling |
| **Educational** | Clear, readable source ideal for learning how React‑style renderers tick |

---

## 🚀 Quick Start

1. **Clone the repo**

   ```bash
   git clone [https://github.com/your‑username/simple‑jsx‑renderer.git](https://github.com/varshilmedidhi/jsx-rendere)
   cd jsx‑renderer
