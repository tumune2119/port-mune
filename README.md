# Port-Mune

A minimal, dark-first portfolio site built with Next.js, React, and Tailwind CSS. It includes a hero section, featured work, an experience timeline, and a contact form wired to EmailJS.

## Clone and run locally

### 1. Prerequisites

Make sure you have Node.js 20+ and npm installed.

### 2. Clone the repository

```bash
git clone <your-repo-url>
cd port-mune
```

### 3. Install dependencies

```bash
npm install
```

### 4. Set up environment variables

Create a file named `.env.local` in the project root and add the EmailJS values:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

If you are continuing from this repo on another machine, you can reuse the existing `.env.local` file from this project.

### 5. Start the development server

```bash
npm run dev
```

Open http://localhost:3000 to view the site.

## Useful scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Project structure

- `src/app` — app routes and page entry points
- `src/components` — reusable UI sections such as the hero, header, work cards, timeline, and contact form
- `src/data/portfolio.ts` — portfolio content and milestone data
- `src/app/globals.css` — global theme variables and base styling
