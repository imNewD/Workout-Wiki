# GRND // Workout Wiki

> A free, open-source bodyweight training reference — exercises, progressions, and Hall of Fame feats.

**Live site →** [imnewd.github.io/Workout-Wiki](https://imnewd.github.io/Workout-Wiki/)

---

## What is GRND?

GRND is a single-page bodyweight training wiki designed to be fast, free, and no-account-required. It covers:

- **Exercise Library** — searchable and filterable catalogue of bodyweight movements with difficulty ratings, muscle tags, and joint breakdown
- **Progression Trees** — structured paths from beginner to advanced for push-ups, pull-ups, dips, squats, handstands, and more
- **Hall of Fame** — milestone achievements and legendary feats of bodyweight strength
- **Pantheon** — the highest tier of difficulty; elite-level challenges
- **Dev Log** — in-app changelog tracking version history

No sign-up. No ads. No tracking. Works offline once loaded.

---

## Features

| Feature | Detail |
|---|---|
| 🌙 Themes | Light, Dark, and category-specific unlockable themes |
| 📱 PWA | Installable on iOS and Android via the browser |
| 🔍 Search & Filter | Filter exercises by category, difficulty, muscle group |
| 🏅 Hall of Fame | Animated achievement cards for milestone lifts |
| ⭐ Pantheon | Gold-marble animated background for elite exercises |
| 💾 Local Profile | Skill level and avatar stored in `localStorage` — no server |

---

## File Structure

```
Workout-Wiki/
├── index.html            # Entire app (single-file)
├── media/
│   ├── themes.css        # Theme overrides (light, dark, category modes)
│   └── animations.js     # HOF shimmer + Pantheon shooting-star canvas
├── favicon.svg           # Browser tab icon
├── apple-touch-icon.png  # iOS home screen icon (180×180)
├── manifest.json         # PWA manifest
├── robots.txt            # Crawler rules
├── 404.html              # GitHub Pages custom error page
├── LICENSE               # MIT
└── README.md             # This file
```

---

## Running Locally

No build step needed — it's plain HTML/CSS/JS.

```bash
git clone https://github.com/imNewD/Workout-Wiki.git
cd Workout-Wiki

# Any static server works, e.g.:
npx serve .
# or
python3 -m http.server 8080
```

Then open `http://localhost:8080` in your browser.

---

## Contributing

Contributions are welcome! Feel free to open an issue or a PR for:

- New exercises or progression steps
- Bug fixes or accessibility improvements
- Theme suggestions
- Typos, incorrect muscle tags, or difficulty ratings

Please keep the single-file architecture in mind — CSS and JS currently live inside `index.html` and are split into labelled sections.

---

## License

[MIT](./LICENSE) © 2025 Samuel Billa
