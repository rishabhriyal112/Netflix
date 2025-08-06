# 🎬 Netflix Clone

![React](https://img.shields.io/badge/React-19.1-blue)
![Firebase](https://img.shields.io/badge/Firebase-12.0-orange)
![License](https://img.shields.io/badge/License-MIT-green)

A responsive **Netflix Clone** built with **React.js** and **Firebase**, featuring user authentication, movie browsing, and a custom video player. This application provides a Netflix-like experience with a modern UI and smooth navigation.

🔗 **Live Website:** [https://netflix-zone.vercel.app/](https://netflix-zone.vercel.app/)

## 🖥️ Preview

![Netflix Clone UI](./public/UI.png)

---

## 🎯 Key Features

✅ User Authentication – Sign up, Login, Logout using Firebase.
✅ Firebase Firestore Integration – Store and manage user data.
✅ Responsive Navbar – Includes hamburger menu for tablets and mobile.
✅ Search Functionality – Search movies using TMDB API with live dropdown results.
✅ Movies & TV Shows Pages – Browse top-rated, trending, and new content.
✅ Player Page – Watch movie trailers (YouTube embed).
✅ Dynamic Routing – Each movie card links to its player page using react-router-dom.
✅ Protected Routes – Redirects unauthenticated users to login.
✅ Footer with Useful Links – Responsive design.
✅ Dark Overlay Backgrounds – Netflix-like visuals for hero sections.

---

## 🛠️ Tech Stack
- Frontend: React.js, CSS (Responsive)
- Backend: Firebase Authentication, Firebase Firestore
- API: TMDB API
- Routing: React Router v6
- Notifications: React Toastify
- Deployment: Vercel



## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have met the following requirements:
- **Node.js** (v14 or higher) - [Download & Install Node.js](https://nodejs.org/)
- **npm** or **yarn** - Package managers
- **Git** - Version control system
- **Firebase Account** - For authentication and hosting

### Installation

# Clone the repository
git clone https://github.com/your-username/netflix-clone.git

# Navigate to project folder
cd netflix-clone

# Install dependencies
npm install

# Run the project
npm run dev

## 🗂️ Project Structure

```
src/
├── assets/               # Static assets (images, icons)
│   ├── cards/           # Movie/TV show cards
│   └── icons/           # Application icons
├── components/          # Reusable components
│   ├── Navbar/          # Navigation bar
│   ├── Footer/          # Footer component
│   ├── TitleCards/      # Content cards
│   └── SearchBar/       # Search functionality
├── pages/               # Application pages
│   ├── Home/            # Home page
│   ├── Login/           # Login page
│   ├── Player/          # Video player
│   ├── Movies/          # Movies page
│   ├── TV_Shows/        # TV Shows page
│   └── New_Popular/     # New & Popular content
├── App.jsx              # Main application component
├── main.jsx             # Application entry point
└── firebase.js          # Firebase configuration
```

## Show your support

Give a ⭐️ if this project helped you!

---

## 📜 License

This project is licensed under the [MIT License](LICENSE).

