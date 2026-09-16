# Elevated India – Nikhil Sharma (Founder & CEO)

Official portfolio and platform showcasing bespoke luxury experiential travel across India & Nepal, founded by **Nikhil Sharma**. Featuring private access journeys, dedicated ground infrastructure, high-altitude Himalayan expeditions, and curated heritage itineraries.

---

## 🚀 Tech Stack

- **Framework**: [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) + PostCSS + Autoprefixer
- **Icons**: [Lucide React](https://lucide.dev/)
- **Deployment**: [Vercel](https://vercel.com/) (configured with SPA rewrites & Edge caching in `vercel.json`)

---

## 🛠️ Local Development

### 1. Clone & Install Dependencies

```bash
# Clone your repository
git clone https://github.com/<your-username>/elevated-india.git
cd elevated-india

# Install dependencies
npm install
# or: bun install
```

### 2. Start Local Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) (or the port shown in your terminal).

### 3. Build for Production

```bash
npm run build
```

This generates optimized, production-ready static assets in the `dist/` directory.

### 4. Preview Production Build

```bash
npm run preview
```

---

## 📦 Pushing to Git (GitHub / GitLab)

If you haven't linked this repository to your GitHub account yet, follow these steps:

### 1. Create a New Repository on GitHub
Go to [github.com/new](https://github.com/new) and create a repository (e.g. `elevated-india`). Do not initialize it with a README or .gitignore (those are already configured).

### 2. Add Remote & Push

```bash
# Verify Git status
git status

# Add files and commit
git add .
git commit -m "feat: complete Elevated India luxury portfolio with Vercel deployment config"

# Link your GitHub repository
git remote add origin https://github.com/<your-username>/<your-repo-name>.git

# Rename branch to main if needed
git branch -M main

# Push to GitHub
git push -u origin main
```

---

## ⚡ Deploying to Vercel

This project is pre-configured with `vercel.json` for immediate 1-click deployment.

### Method A: Connect via GitHub (Recommended)

1. Go to [vercel.com](https://vercel.com) and log in.
2. Click **"Add New..."** ➔ **"Project"**.
3. Import your GitHub repository (`elevated-india`).
4. Vercel will automatically detect the settings:
   - **Framework Preset**: Vite
   - **Build Command**: `vite build` (or `npm run build`)
   - **Output Directory**: `dist`
5. Click **"Deploy"**.
6. Your live website will be available at `https://<your-project>.vercel.app` in under 60 seconds!

### Method B: Deploy using Vercel CLI

```bash
# Install Vercel CLI globally
npm i -g vercel

# Deploy directly from terminal
vercel

# Deploy to production
vercel --prod
```

---

## 📁 Key File Structure

```
├── public/                 # Static assets (favicons, manifest, luxury photography)
│   ├── assets/             # Brand logos and high-resolution expedition images
│   ├── favicon.svg         # SVG vector favicon
│   └── site.webmanifest    # Web manifest metadata
├── src/
│   ├── assets/             # Section banner images
│   ├── components/         # Modular React components
│   │   ├── Navbar.jsx
│   │   ├── HeroSection.jsx
│   │   ├── PhilosophySection.jsx  # "Travel Crafted with Uncompromising Depth"
│   │   ├── PillarsSection.jsx     # 5 Pillars of Elevated India
│   │   ├── ItinerarySection.jsx   # Curated expeditions
│   │   ├── AdaptiveImage.jsx      # Multi-source resilient image loader
│   │   └── ...
│   ├── context/            # ThemeContext (Dark/Light mode state)
│   ├── data/               # Nikhil Sharma and Elevated India content data
│   ├── App.jsx             # Root layout component
│   └── main.jsx            # Application entry point
├── vercel.json             # Vercel SPA routing and Edge CDN caching rules
├── vite.config.js          # Vite configuration
└── package.json            # Project manifest and scripts
```

---

## 📄 License

Private property of Elevated India & Nikhil Sharma. All rights reserved.
