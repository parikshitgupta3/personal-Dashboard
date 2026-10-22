# Personal Dashboard

A simple personal dashboard built for stability and compatibility.

## Stack

- **Next.js 15.5** (App Router, webpack)
- **React 19**
- **TypeScript 5**
- **Tailwind CSS 3.4**
- **ESLint 9** with `eslint-config-next`

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run build` | Create a production build |
| `npm start` | Serve the production build |
| `npm run lint` | Run ESLint |

## Structure

```
app/                  # Routes (App Router)
  layout.tsx          # Root layout, fonts, metadata
  page.tsx            # Dashboard page
components/           # UI components
  dashboard-clock.tsx  # Live clock (client)
  dashboard-tasks.tsx  # Interactive task list (client)
```
