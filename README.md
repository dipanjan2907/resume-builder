# **README.md**

````markdown
# Xenvra - AI-Powered Resume Builder

Xenvra is a web-based, interactive resume builder designed to help users create professional, ATS-friendly resumes effortlessly. Built with **ReactJS** and **TypeScript**, Xenvra combines a real-time editor, live preview, and an AI-powered assistant to simplify the resume creation process.

---

## **Features**

- **Real-Time Resume Preview:** Dual-pane interface to see changes instantly.
- **AI Assistant:** Contextual suggestions for skills, summaries, and job descriptions.
- **Dynamic Templates:** Switch between Modern, Minimal, and Professional layouts.
- **Client-Side PDF Export:** Export resumes as high-quality PDFs using `html2canvas` and `jsPDF`.
- **Responsive Design:** Works seamlessly on desktop and mobile devices.
- **Lightweight and Privacy-Friendly:** All data processed locally in the browser.

---

## **Tech Stack**

- **Frontend:** ReactJS (v18), TypeScript
- **Build Tool:** Vite
- **Icons:** Lucide React
- **PDF Generation:** html2canvas, jsPDF
- **Styling:** CSS-in-JS / Tailwind CSS (if used)

---

## **Getting Started**

### **1. Clone the Repository**

```bash
git clone https://github.com/YOUR-USERNAME/REPO-NAME.git
cd REPO-NAME
```
````

### **2. Install Dependencies**

```bash
npm install
```

### **3. Start Development Server**

```bash
npm run dev
```

The app will run at `http://localhost:5173` (default Vite port).

---

## **Building for Production**

```bash
npm run build
```

The production-ready files will be in the `dist/` folder.

---

## **Deploying to GitHub Pages**

1. Install `gh-pages` if not already installed:

```bash
npm install --save-dev gh-pages
```

2. Add these scripts to your `package.json`:

```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

3. Deploy:

```bash
npm run deploy
```

Visit: `https://YOUR-USERNAME.github.io/REPO-NAME`

---

## **Project Structure**

```
resume/
├─ src/             # Source code (components, pages, styles)
├─ public/          # Public assets (favicon, index.html)
├─ dist/            # Production build folder
├─ package.json     # Project metadata & scripts
├─ tsconfig.json    # TypeScript configuration
├─ vite.config.ts   # Vite configuration
└─ .gitignore       # Ignored files/folders (node_modules, dist)
```

---

## **Contributing**

Contributions are welcome! Please fork the repository and submit a pull request.

---

## **License**

This project is open-source under the MIT License.

```

---

If you want, I can also **make a more “fancy GitHub-ready” version** with badges (like build status, license, GitHub pages link) and a demo screenshot — it’ll make your repo look professional AF.

Do you want me to do that?
```
