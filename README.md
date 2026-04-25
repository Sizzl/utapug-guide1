# utapug-guide1

UTAPug Guide rebuilt as a static Vue app for GitHub Pages.

## Development

Install dependencies:

```bash
npm install
```

Start the local dev server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Hosting on GitHub Pages

This app uses Vite and hash-based routing, which keeps direct links working on GitHub Pages without server rewrites.

### One-time GitHub setup

1. Push this repository to GitHub.
2. In the GitHub repository, open **Settings** -> **Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.
4. Make sure your default branch is `main`, or update `.github/workflows/deploy-pages.yml` if you deploy from a different branch.

### Deploy flow

1. Commit and push your changes to `main`.
2. GitHub Actions will run `.github/workflows/deploy-pages.yml`.
3. When the workflow finishes, GitHub Pages will publish the contents of `dist/` automatically.

### Notes

- The Vite `base` path is derived automatically from the GitHub repository name during the Actions build, so you do not need to hard-code the repo name.
- Local development still works with `npm run dev`.
- If you later use a custom domain, the workflow can stay the same.
