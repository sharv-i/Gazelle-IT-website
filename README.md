# 🦌 Gazelle IT — Supply Chain Transformation Website

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Responsive](https://img.shields.io/badge/Responsive-Design-green?style=for-the-badge)
![Dark Mode](https://img.shields.io/badge/Dark-Mode-121212?style=for-the-badge)

> A modern, responsive corporate website for **Gazelle Information Technologies** — a supply chain transformation consulting firm. Built with pure HTML, CSS, and Vanilla JavaScript.

---

## 🌐 Live Preview

> Open `index.html` in your browser to view the website locally.

---

## 📸 Sections Overview

| Section | Description |
|---|---|
| 🔝 Navbar | Sticky navbar with nested dropdown menus & dark mode toggle |
| 🎬 Hero | Full-width video hero with CTA button |
| 🏭 Our Industries | 6 industry cards with hover animations |
| 🔁 Dual Tone | Split-screen feature highlight section |
| 🤖 Technologies | 9 transformation technology cards |
| 💬 Testimonials | Auto-sliding testimonial carousel |
| 🏆 Trusted Brands | Infinite scrolling logo carousel |
| 📦 Products | Gazelle product showcase cards |
| 📊 Insights | Key metrics with animated stat cards |
| 🥇 Awards | Certifications and recognition display |
| 🦶 Footer | Multi-column footer with quick links |

---

## ✨ Features

- ✅ **Sticky Navbar** with multi-level dropdown menus
- ✅ **Dark / Light Mode** toggle with smooth transitions
- ✅ **Auto Testimonial Slider** with prev/next controls
- ✅ **Infinite Logo Carousel** (pauses on hover)
- ✅ **Fully Responsive** — works on mobile, tablet, desktop
- ✅ **CSS Variables** for easy theme customization
- ✅ **Hover Animations** on cards, buttons, and images
- ✅ **Nested Submenus** in navbar dropdowns
- ✅ **No frameworks** — pure HTML, CSS, and JavaScript

---

## 🛠️ Tech Stack

| Technology | Usage |
|---|---|
| **HTML5** | Page structure and semantic markup |
| **CSS3** | Styling, animations, CSS Grid, Flexbox |
| **CSS Variables** | Theme management (light/dark mode) |
| **Vanilla JavaScript** | Dropdowns, slider, theme toggle |

---

## 📁 Project Structure

```
gazelle-it-website/
│
├── index.html               # Main HTML file
├── style.css                # All styles and theme variables
├── script.js                # JavaScript for interactivity
│
└── images/                  # All image assets
    ├── supplychain.jpg
    ├── warehouse.jpg
    ├── growth.jpg
    ├── gif_edited.mp4       # Hero background video
    ├── goodyear.png
    ├── syngenta.png
    ├── gulf.png
    ├── adani.png
    └── ...
```

---

## 🚀 How to Run Locally

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/gazelle-it-website.git
   ```

2. **Navigate to the project folder**
   ```bash
   cd gazelle-it-website
   ```

3. **Open in browser**
   ```bash
   # Simply open index.html in any browser
   # OR use Live Server in VS Code for hot reload
   ```

> 💡 **Tip:** Use the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) VS Code extension for the best development experience.

---

## 🎨 Theme Customization

All colors are controlled via CSS variables in `style.css`:

```css
:root {
  --bg: #faf7f4;
  --section-bg: #ffffff;
  --text: #2f2f2f;
  --subtext: #6b625c;
  --primary: #b08a60;
  --card-bg: #faf7f4;
}
```

Simply change these values to restyle the entire website instantly.

---

## 🌙 Dark Mode

Dark mode is toggled via the 🌙 button in the navbar. It applies a separate set of CSS variables:

```css
body.dark {
  --bg: #121212;
  --section-bg: #1e1e1e;
  --text: #f5f5f5;
  --primary: #d1a76c;
}
```

---

## 🐛 Known Issues

- [ ] No hamburger menu for mobile navbar (planned)
- [ ] Form submission requires a backend server (`localhost:3000`)
- [ ] Submenu hover may not work perfectly on touch devices

---

## 🔮 Future Improvements

- [ ] Add hamburger/mobile menu for small screens
- [ ] Connect contact form to a live backend (Node.js / EmailJS)
- [ ] Add page transitions and scroll animations
- [ ] Add SEO meta tags
- [ ] Deploy to Netlify / Vercel

---

## 🏢 About Gazelle IT

**Gazelle Information Technologies** provides supply chain consulting, digital transformation, and analytics solutions. Their clients include industry leaders across manufacturing, FMCG, automotive, aerospace, and e-commerce sectors.

---

## 📄 License

This project is proprietary to **Gazelle Information Technologies**.  
© 2026 Gazelle Information Technologies — All rights reserved.
