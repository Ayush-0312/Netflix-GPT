# 🎬 Cinemix

AI-Powered Movie Discovery Platform

🔗 **Live:** https://cinemix.theayushgupta.in

---

## 📌 Project Summary

Cinemix is a scalable, production-ready movie discovery platform that combines AI-driven recommendations with real-time movie data from TMDB.

The application focuses on:

- Clean architecture
- Optimized state management
- API efficiency
- Component reusability
- UX polish & responsiveness
- Scalable routing structure

---

## 🏗 Architecture Overview

### 🔹 Frontend

- React (Create React App)
- Redux Toolkit for centralized state management
- React Router for dynamic routing
- Tailwind CSS for utility-first styling

### 🔹 Backend

- Firebase Authentication (Auth & session management)
- TMDB API (Movie metadata & videos)
- Google Gemini API (AI-powered recommendations)

---

## 🧠 Engineering Highlights

### 1️⃣ Centralized State Management

- Implemented Redux Toolkit slices for:
  - User authentication state
  - Movies & video caching
  - GPT search results
- Reduced redundant API calls using store-based caching strategy.
- Used dynamic maps (`movieVideosMap`) for scalable video data storage.

---

### 2️⃣ Custom Hooks Architecture

Abstracted data fetching logic into reusable hooks:

- `useNowPlayingMovies`
- `usePopularMovies`
- `useTopRatedMovies`
- `useUpcomingMovies`
- `useMovieDetails`
- `useMovieVideos`

This ensures:

- Separation of concerns
- Reusable logic
- Cleaner UI components
- Easier scalability

---

### 3️⃣ Dynamic Routing System

Routes handled using a layout-based architecture:

- `/` → Login
- `/browse` → Main Dashboard
- `/ai` → AI Search
- `/movie/:movieId` → Dynamic Movie Page

Implemented:

- Scroll-to-top behavior on route change
- Protected route logic
- Redirect logic based on auth state

---

### 4️⃣ Performance Optimizations

- API result caching via Redux
- Reduced duplicate fetch calls
- Shimmer UI for perceived performance improvement
- Optimized scroll behavior
- Efficient conditional rendering for loading states

---

### 5️⃣ UI/UX Engineering

- Responsive design for mobile & desktop
- Shimmer loading placeholders
- Splash screen boot animation
- Smooth navigation transitions
- Hidden scrollbars while maintaining scroll functionality

---

## 🔐 Authentication Flow

- Firebase email/password authentication
- Session persistence via `onAuthStateChanged`
- Auto-redirect logic:
  - Unauthenticated users → `/`
  - Authenticated users → `/browse`
- Profile updates on signup

---

## 🤖 AI Recommendation Flow

1. User enters query.
2. Gemini API generates 5 movie suggestions.
3. TMDB API searches each suggestion.
4. Results are mapped into reusable `MovieList` components.
5. Stored in Redux to prevent re-fetching.

---

## 🛠 Technical Stack

| Layer      | Technology    |
| ---------- | ------------- |
| UI         | React         |
| State      | Redux Toolkit |
| Styling    | Tailwind CSS  |
| Routing    | React Router  |
| Auth       | Firebase      |
| API        | TMDB          |
| AI         | Google Gemini |
| Deployment | Vercel        |

---

## 📊 Feature Breakdown

### 🔐 Authentication

- Sign up / Sign in
- Protected routes
- Session persistence

### 🎥 Browse Page

- Hero trailer autoplay (muted)
- Movie categories (Now Playing, Popular, Top Rated, Upcoming)
- Horizontal carousel UI

### 🎬 Movie Page

- Dynamic movie details
- Embedded YouTube trailers
- Cached video results

### 🤖 AI Search

- Multi-language support
- AI-powered movie suggestions
- Reusable result components

---

## 👨‍💻 Author

### Ayush Gupta

- Portfolio: https://theayushgupta.in
- GitHub: https://github.com/Ayush-0312
