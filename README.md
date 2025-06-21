# Gramin Go 🚜 – Online Platform for Agricultural Equipment Bookings

Gramin Go is a modern, premium web application that lets farmers effortlessly **browse** and **book** agricultural vehicles and equipment (tractors, tillers, harvesters, etc.) without requiring an account.

---

## ✨ Key Features

1. **Glassmorphism Design** – Frosted-glass panels, soft blur, and depth effects.
2. **Green Themed UI** – Colour palette inspired by nature & agriculture.
3. **Instant Exploration** – No login/registration needed.
4. **Smart Search** – Filter by location & category.
5. **Responsive Listings** – Cards show price, availability, and quick "Book Now" CTA.
6. **Calendar-based Booking** – Pick any date range with a single tap.
7. **Multilingual** – English & Hindi (easily extendable).
8. **About Us & Contact Us** – Share the Gramin Go story and accept enquiries.

---

## 🌈 Colour Palette

| Role            | Hex      | Usage                                   |
|-----------------|----------|-----------------------------------------|
| Primary         | `#4CAF50`| Buttons, highlights                     |
| Secondary       | `#2E7D32`| Navigation bar, accents                 |
| Accent          | `#8BC34A`| Icons, hover states                     |
| Background      | `#F1F8E9`| Base page background                    |
| Glass Surface   | `rgba(255,255,255,0.15)` | Semi-transparent cards |
| Text Primary    | `#1B5E20`| Headlines, body text                    |
| Text Inverse    | `#FFFFFF`| Text on dark/primary surfaces           |

Tailwind is pre-configured with these colours via the **`tailwind.config.cjs`** file.

---

## 🏗️ Tech Stack

| Layer   | Choice            | Why?                                   |
|---------|-------------------|----------------------------------------|
| Build   | **Vite**          | Fast HMR & modern bundling             |
| UI      | **React 18 + TS** | Component-driven, type-safe            |
| Styling | **Tailwind CSS**  | Utility-first, easy customisation      |
| i18n    | **react-i18next** | Simple, scalable translations          |
| Dates   | **react-calendar**| Quick booking calendar                 |

---

## 🚀 Quick Start

```bash
# 1. Install deps
cd frontend
npm install

# 2. Start dev server
a) With npm:
   npm run dev
b) With yarn:
   yarn dev

# 3. Open in browser
http://localhost:5173
```

### Production build
```bash
npm run build
npm run preview  # Local preview of the static build
```

---

## 📂 Project Structure (Frontend)
```
frontend/
 ├─ public/            # Static assets
 ├─ src/
 │   ├─ components/    # Re-usable UI widgets
 │   ├─ pages/         # Route-level pages (Home, Browse, …)
 │   ├─ data/          # Mock-data JSON/TS files
 │   ├─ i18n.ts        # Translation setup
 │   ├─ AppRouter.tsx  # React-Router declarations
 │   └─ main.tsx       # Vite entry point
 ├─ tailwind.config.cjs
 ├─ vite.config.ts
 └─ index.html
```

---

## 🌐 Extending Translations

Add a new language JSON under `src/locales/*/translation.json` and update `i18n.ts`. Keys are shared across languages.

---

## 🤝 Contributing

1. Fork / clone repository.
2. Create a new branch `feat/<feature>`.
3. Commit using conventional commits.
4. Open a PR – maintainers will review.

---

Made with ❤️ & 🌾 for India's hardworking farmers. 