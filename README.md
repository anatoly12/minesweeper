Hello!

# 🧨 Minesweeper Game

A classic **Minesweeper** game built using **React 19**, **Vite 6**, and **TypeScript**, styled with **MUI** and **Emotion**.  
Play through an 8x8 grid with 10 hidden mines — just like the original Windows game!

---

## 🎮 Gameplay Features

- 🔲 8×8 grid of hidden tiles
- 💣 10 randomly placed mines
- 🔍 Reveal cells to uncover adjacent mine counts (0–8)
- 🚩 Flag suspected mines
- 🧠 Recursive reveal when a `0` cell is clicked
- ❌ Game over on mine click

---

## 🚀 Getting Started

### 📦 Install dependencies

```bash
yarn install
```

### ▶️ Start the dev server

```bash
yarn dev
```

### 🛠️ Run ESLint

```bash
yarn lint
```

### 🏗️ Build for production

```bash
yarn build
```

### 🔍 Preview production build

```bash
yarn preview
```

---

## 🛠️ Tech Stack

- ⚛️ React 19
- ⚡ Vite 6
- 🟦 TypeScript 5.7
- 🎨 MUI 7 + Emotion
- 🧶 Yarn
- 📏 ESLint 9

---

## 📁 Project Structure

```
src/
├── assets/               # Static assets like SVGs
├── components/           # Cell.tsx and game UI
├── hooks/                # useRevealRecursive.ts
├── lib/                  # Game logic: mines, grid generation, neighbors
├── types/                # Shared type definitions
├── App.tsx
├── main.tsx
```

---

## ✅ TODO (Optional Enhancements)

- 🕒 Add timer and mine counter
- 🏆 Win condition logic
- 🎨 Better visual feedback and animations

---

## 💬 Feedback

If you have suggestions or run into issues, feel free to open an issue or pull request!