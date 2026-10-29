# TwoTick — bilingual company website

A responsive, light-theme company website built with Vite, HTML, CSS, and JavaScript. It includes English/Arabic language switching, RTL support, an app showcase for Sajil, service cards, a simple process section, contact links, and a basic privacy note.

## 1. Requirements

Install Node.js (LTS) from https://nodejs.org/ and use a terminal such as PowerShell.

## 2. Run locally

Open PowerShell in this project folder and run:

```powershell
npm install
npm run dev
```

Vite will print a local URL, usually `http://localhost:5173`. Open it in your browser.

## 3. Test a production build

```powershell
npm run build
npm run preview
```

The production files will be created in `dist/`.

## 4. Customize before publishing

Edit `src/main.js`:

- The company name is set to `TwoTick` and the supplied logo is installed.
- The contact address is set to `info@twotick.com`. You must own/register `twotick.com` and set up an email mailbox or email hosting service before it can receive messages.
- Update the Sajil description and status to match what the app actually does.
- Add real app screenshots and a real download/demo URL when available.
- Review the Arabic and English copy.
- Update the page title and description in `index.html`.

Do not advertise a download link until the app is ready and the link has been tested. The current Sajil listing is deliberately marked as in development.

## 5. Publish for free with Cloudflare Pages

1. Create a GitHub account at https://github.com/ if you do not already have one.
2. Create a new repository for this project and upload the project files (do not upload `node_modules/`).
3. Create or sign in to a Cloudflare account at https://dash.cloudflare.com/.
4. Open **Workers & Pages** and create a Pages project connected to your GitHub repository.
5. Configure the build:
   - Build command: `npm run build`
   - Build output directory: `dist`
6. Deploy and open the generated `pages.dev` address.
7. Test on phone and desktop, and test both English and Arabic before sharing it publicly.

Cloudflare's free-plan limits and terms can change. Check the current official documentation before deployment: https://developers.cloudflare.com/pages/platform/limits/

## 6. Important limitations of this first version

- The contact button opens the visitor's email app; it does not submit a website form.
- There is no database, login, checkout, analytics, or admin dashboard.
- This is a company marketing website and app catalogue, not a hosted version of the Sajil app itself.
- A custom domain usually costs money even when hosting is free.
- If you add forms, analytics, accounts, or payments, implement appropriate privacy, security, and legal requirements.
