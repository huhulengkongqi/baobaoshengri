# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**baobaoshengri** - A Vue 2 birthday celebration web application. This is a multi-page photo album and love letter site for a birthday celebration.

## Common Commands

**Install dependencies:**
```bash
npm install
```

**Development mode (hot-reload):**
```bash
npm run serve
```

**Build for production:**
```bash
npm run build
```

**Lint and fix files:**
```bash
npm run lint
```

**Deploy to GitHub Pages:**
```bash
npm run deploy
```

## Code Architecture

### Tech Stack
- **Vue 2.6.14** - Framework
- **Vue Router 3.6.5** - Client-side routing (history mode)
- **Vue CLI 5** - Build tool
- **gh-pages** - GitHub Pages deployment

### Project Structure

```
├── src/
│   ├── App.vue          # Root component (navbar + router-view)
│   ├── main.js          # App entry
│   ├── router/
│   │   └── index.js     # Router configuration (4 pages)
│   ├── views/           # Page components (HomePage, Page1-3, Pageforfuture)
│   ├── components/      # Reusable components (HelloWorld)
│   └── assets/          # Images (jpg/png), background-music.mp3
├── public/              # Static assets (favicon, index.html)
└── vue.config.js        # Build config (publicPath: /baobaoshengri/ for GitHub Pages)
```

### Navigation

`App.vue` contains a fixed top navbar with links to all pages:
- `/` - HomePage (主页)
- `/page1` - Page1 (回忆 - Photo gallery)
- `/page2` - Page2 (关于宝宝 - Profile)
- `/page3` - Page3 (信 - Love letter)

### Adding a New Page

1. Create a new `.vue` file in `src/views/`
2. Add route entry in `src/router/index.js`
3. Add `router-link` to navbar in `src/App.vue`

### Deployment Notes

- Production build outputs to `dist/` directory
- GitHub Pages is configured with `publicPath: '/baobaoshengri/'`
- Use `npm run deploy` to deploy `dist/` to `gh-pages` branch
