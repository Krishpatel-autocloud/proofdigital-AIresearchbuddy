# Research Buddy - Modern SaaS Landing Page

A beautiful, modern SaaS landing page built with React, TypeScript, and Vite featuring dark/light mode and premium aesthetics.

## ✨ Features

- 🎨 **Modern Design** - Clean, professional UI with premium aesthetics
- 🌓 **Dark/Light Mode** - Seamless theme switching with persistent preferences
- 🎭 **Smooth Animations** - Beautiful transitions and hover effects
- 📱 **Fully Responsive** - Optimized for desktop, tablet, and mobile
- ⚡ **Performance** - Built with Vite for lightning-fast development and builds
- 🎯 **TypeScript** - Type-safe codebase with full TypeScript support
- 🧩 **Component-Based** - Reusable, modular React components

## 🚀 Tech Stack

- **React 19** - Latest React with hooks and modern patterns
- **TypeScript** - Type safety and better developer experience
- **Vite 7** - Next-generation frontend tooling
- **CSS3** - Modern CSS with custom properties and animations
- **Context API** - Theme management with React Context

## 📦 Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🎨 Design System

### Colors
- **Primary**: Soft lavender/purple gradient (#a855f7 → #9333ea)
- **Dark Mode**: Enhanced purple shades for better contrast
- **Backgrounds**: Light gray (light mode) / Dark navy (dark mode)

### Typography
- **Font**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700, 800
- **Scale**: Responsive typography with clear hierarchy

### Components
- **Cards**: Rounded (24px), elevated shadows, hover effects
- **Buttons**: Gradient primary, smooth transitions, ripple effects
- **Forms**: Clean inputs with focus states and validation
- **Theme Toggle**: Animated sun/moon icon in header

## 📐 Component Structure

```
src/
├── components/
│   ├── Header/              # Navigation with theme toggle
│   ├── Hero/                # Hero section with stats
│   ├── LocalAnalysis/       # Local competitor analysis
│   ├── OnlineAnalysis/      # Online competitor analysis
│   ├── MarketResearch/      # Market insights section
│   ├── Footer/              # Footer with links
│   ├── ui/                  # Reusable UI components
│   └── icons/               # SVG icon components
├── context/
│   └── ThemeContext.tsx     # Theme management
├── data/
│   └── mockData.ts          # Mock API data
├── types/
│   └── index.ts             # TypeScript interfaces
└── styles/
    └── variables.css        # CSS custom properties
```

## 🎯 Key Sections

1. **Hero Section**
   - Bold headline and subtitle
   - Primary/secondary CTAs
   - Animated dashboard mockup
   - Trust indicators (stats)

2. **Local Competitive Analysis**
   - Multi-field form (state, city, industry, etc.)
   - Competitor cards with hover effects
   - Download options (PDF/Docs)

3. **Online Competitive Analysis**
   - Website URL input
   - List view with metrics
   - Domain authority, traffic, backlinks

4. **Market Research Insights**
   - Market overview with growth stats
   - Key players ranking
   - Trends & opportunities with badges

## 🌓 Dark Mode

The app supports both light and dark themes:
- **Automatic Detection**: Respects system preferences on first visit
- **Manual Toggle**: Click the sun/moon icon in the header
- **Persistent**: Theme choice saved in localStorage
- **Smooth Transitions**: All colors animate on theme change

## 🎨 Customization

### Change Theme Colors

Edit `src/styles/variables.css`:

```css
:root[data-theme='light'] {
  --primary-500: #your-color;
  --primary-600: #your-color;
}
```

### Modify Components

All components are in `src/components/` with their own CSS files for easy customization.

## 📱 Responsive Breakpoints

- **Desktop**: 1024px and above
- **Tablet**: 768px to 1023px
- **Mobile**: Below 768px

## 🚢 Deployment

```bash
# Build production bundle
npm run build

# The built files will be in the `dist/` directory
# Deploy to any static hosting service (Vercel, Netlify, etc.)
```

## 📄 License

This project is open source and available for personal and commercial use.

---

**Built with ❤️ using React + TypeScript + Vite**
