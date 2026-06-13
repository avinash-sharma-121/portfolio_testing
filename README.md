# 🚀 React Portfolio with Auto-Deployment

A sleek, modern, single-page developer portfolio built with React. This project features a **Premium Light Mode Emerald Theme** utilizing glassmorphism effects, responsive CSS grid layouts, and clean micro-animations.

The highlight of this repository is its **Fully Automated CI/CD Pipeline**. Powered by GitHub Actions, any code pushed to the `main` branch is automatically built and deployed to GitHub Pages!

---

## ✨ Features

- **Premium UI Design**: A minimalist light slate background paired with striking Emerald green (`#10b981`) accents.
- **Glassmorphism Components**: Semi-transparent, blur-backed cards for a modern, floating depth effect.
- **Responsive Layout**: Designed mobile-first to look stunning on desktops, tablets, and phones.
- **Lucide Icons**: Crisp, clean, customizable SVG icons natively integrated.
- **Zero-Touch Deployment**: Out-of-the-box GitHub Actions workflow handles dependency installation, building, and deploying to GitHub Pages natively (`actions/deploy-pages`).

---

## 🛠️ Tech Stack

- **Frontend Framework**: [React.js](https://reactjs.org/)
- **Styling**: Vanilla CSS (CSS Variables, Flexbox, Grid)
- **Icons**: [Lucide React](https://lucide.dev/)
- **CI/CD**: GitHub Actions
- **Hosting**: GitHub Pages

---

## ⚙️ How the Auto-Deployment Works

This repository contains a `.github/workflows/deploy.yml` workflow file. 

Whenever you run `git push origin main`, GitHub Actions automatically spins up a virtual machine and:
1. Checks out your code.
2. Installs the npm packages (`npm install`).
3. Compiles an optimized React build (`npm run build`).
4. Uploads the generated `build/` folder as a secure artifact.
5. Deploys that artifact natively to your repository's GitHub Pages URL.

*Note: There is no messy `gh-pages` branch. The deployment uses the modern `actions/upload-pages-artifact` and `actions/deploy-pages` architecture!*

---

## 🚀 Running Locally

If you want to modify the portfolio or test it locally before pushing:

### 1. Clone the repository
```bash
git clone https://github.com/avinash-sharma-121/portfolio_project_auto_deployment.git
cd portfolio_project_auto_deployment
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start the development server
```bash
npm start
```
Open [http://localhost:3000](http://localhost:3000) to view it in your browser. The page will reload when you make changes.

---

## 🎨 Customizing the Portfolio

1. **Content**: Open `src/App.js` to change your Name, Bio, Projects, and Social Links.
2. **Icons**: Need different icons? Browse [Lucide React](https://lucide.dev/icons) and update the imports at the top of `src/App.js`.
3. **Colors**: Open `src/index.css` and modify the `:root` variables. To change the Emerald theme to Blue, simply swap `--primary` to `#3b82f6`!

---

## 🔧 GitHub Pages Configuration

To ensure this template works on a fork or a new repository:
1. Open `package.json` and update the `"homepage"` URL to your specific GitHub Pages URL (e.g., `https://your-username.github.io/your-repo-name`).
2. Go to your repository **Settings > Pages** on GitHub.
3. Under **Build and deployment**, ensure the **Source** is set to **GitHub Actions**.

---
*Built with ❤️ using React and GitHub Actions.*
# portfolio_testing
