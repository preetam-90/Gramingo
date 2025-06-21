# Gramin Go

A modern, premium web platform that lets farmers browse and book agricultural vehicles and equipment online. Built with React, Vite, TypeScript and Tailwind CSS (glassmorphism style).

## 🌱 Color Palette

| Token | Hex |
|-------|------|
| primary | `#3AA855` |
| primary-light | `#5FCF79` |
| primary-dark | `#2C7A3E` |
| secondary | `#A1C181` |
| secondary-light | `#C4E3A3` |
| secondary-dark | `#799C5F` |
| accent | `#FFD670` |
| background | `#F5FFF7` |
| glass (transparent) | `rgba(255,255,255,0.15)` |

## 🚀 Getting Started

1. **Install dependencies**

   ```bash
   npm install
   # or
   yarn
   ```

2. **Run the development server**

   ```bash
   npm run dev
   ```

   The app will open at http://localhost:5173.

3. **Build for production**

   ```bash
   npm run build
   ```

## 📂 Project Structure

```
/ public            – static assets (images, icons)
/ src
  |-- components    – reusable UI components
  |-- contexts      – React context (locale)
  |-- data          – mock listing data
  |-- pages         – route pages
  |-- index.css     – Tailwind directives & custom classes
  |-- App.tsx       – root component with routes
```

## 🗺️ Roadmap

- Real backend & database (e.g. Supabase/Firebase) for listings and bookings
- Authentication (owner & farmer roles)
- Payment integration
- PWA offline support
- Push notifications
- Advanced calendar & availability management

---

Made with ❤️ for the farming community. 