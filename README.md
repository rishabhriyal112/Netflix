# 🎬 Netflix Clone

![React](https://img.shields.io/badge/React-19.1-blue)
![Firebase](https://img.shields.io/badge/Firebase-12.0-orange)
![License](https://img.shields.io/badge/License-MIT-green)

A responsive **Netflix Clone** built with **React.js** and **Firebase**, featuring user authentication, movie browsing, and a custom video player. This application provides a Netflix-like experience with a modern UI and smooth navigation.

---

## 🚀 Features

- **User Authentication**
  - Secure login with Firebase Authentication
  - Protected routes for authenticated users
  
- **Content Browsing**
  - Home page with featured content
  - Dedicated sections for Movies and TV Shows
  - New & Popular content section
  
- **Video Player**
  - Custom video player page
  - Responsive design for all devices
  - Playback controls
  
- **Responsive Design**
  - Works on desktop, tablet, and mobile
  - Modern UI with smooth animations
  - Intuitive navigation

---

## 🛠️ Tech Stack

- **Frontend:** React 19.1
- **Routing:** React Router v7
- **Authentication:** Firebase Authentication
- **Styling:** CSS Modules
- **State Management:** React Hooks
- **Notifications:** React Toastify

---

## 📂 Project Structure

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

---

## ⚙️ Setup & Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Firebase account

### 1. Clone the repository
```bash
git clone https://github.com/your-username/netflix-clone.git
cd netflix-clone
```

### 2. Install dependencies
```bash
npm install
# or
yarn install
```

### 3. Set up Firebase
1. Create a new Firebase project at [Firebase Console](https://console.firebase.google.com/)
2. Set up Authentication (Email/Password)
3. Create a `.env` file in the root directory and add your Firebase config:
```env
VITE_FIREBASE_API_KEY=your-api-key
VITE_FIREBASE_AUTH_DOMAIN=your-project-id.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-bucket.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
VITE_FIREBASE_APP_ID=your-app-id
```

### 4. Start the development server
```bash
npm run dev
# or
yarn dev
```

### 5. Build for production
```bash
npm run build
# or
yarn build
```

---

## 🔒 Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
VITE_FIREBASE_API_KEY=your-api-key
VITE_FIREBASE_AUTH_DOMAIN=your-project-id.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-bucket.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
VITE_FIREBASE_APP_ID=your-app-id
```

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🚧 Future Improvements

* 🔑 Add Firebase authentication (Login/Signup)
* ⭐ Add "Add to Favorites" functionality
* 🌐 Multi-language support
* 📱 PWA support for offline viewing

---

## 🤝 Contributing

Pull requests are welcome!

1. Fork the repository
2. Create a feature branch
3. Submit a pull request

---

## 📜 License

This project is licensed under the [MIT License](LICENSE).

```

Would you like me to also add a **live demo section** (with deployment steps) if you host this project on **Vercel/Netlify**?
```
