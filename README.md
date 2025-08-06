# 🎬 Netflix Clone

![React](https://img.shields.io/badge/React-19.1-blue)
![Firebase](https://img.shields.io/badge/Firebase-12.0-orange)
![License](https://img.shields.io/badge/License-MIT-green)
[![Live Demo](https://img.shields.io/badge/🚀_Live_Demo-000?style=for-the-badge&logo=vercel&logoColor=white)](https://netflix-zone.vercel.app/)

A responsive **Netflix Clone** built with **React.js** and **Firebase**, featuring user authentication, movie browsing, and a custom video player. This application provides a Netflix-like experience with a modern UI and smooth navigation.

🔗 **Live Website:** [https://netflix-zone.vercel.app/](https://netflix-zone.vercel.app/)

## 🖥️ Preview

![Netflix Clone UI](./public/UI.png)

---

## 🎯 Key Features

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

## 🛠️ Built With

### Frontend
- **React 19.1** - JavaScript library for building user interfaces
- **React Router v7** - For client-side routing
- **React Hooks** - For state and side effects
- **Context API** - For global state management
- **CSS Modules** - For scoped styling
- **React Icons** - For beautiful icons
- **React Toastify** - For notifications

### Backend & Authentication
- **Firebase Authentication** - For user authentication
- **Firebase Hosting** - For deployment
- **Firebase Firestore** - For database (if implemented)

### Development Tools
- **Vite** - Next Generation Frontend Tooling
- **ESLint** - For code linting
- **Git** - For version control
- **GitHub** - For code hosting
- **Vercel** - For deployment and hosting

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have met the following requirements:
- **Node.js** (v14 or higher) - [Download & Install Node.js](https://nodejs.org/)
- **npm** or **yarn** - Package managers
- **Git** - Version control system
- **Firebase Account** - For authentication and hosting

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/netflix-clone.git
   cd netflix-clone
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up Firebase**
   - Create a new project on [Firebase Console](https://console.firebase.google.com/)
   - Enable Authentication (Email/Password)
   - Create a new web app in Firebase and get your configuration

4. **Configure environment variables**
   Create a `.env` file in the root directory and add your Firebase configuration:
   ```env
   VITE_FIREBASE_API_KEY=your-api-key
   VITE_FIREBASE_AUTH_DOMAIN=your-project-id.firebaseapp.com
   VITE_FIREBASE_PROJECT_ID=your-project-id
   VITE_FIREBASE_STORAGE_BUCKET=your-bucket.appspot.com
   VITE_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
   VITE_FIREBASE_APP_ID=your-app-id
   ```

5. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```
   The application will be available at `http://localhost:5173`

## 🚀 Deployment

The application is deployed on Vercel. To deploy your own version:

1. Push your code to a GitHub repository
2. Connect the repository to Vercel
3. Add the same environment variables to your Vercel project
4. Deploy!

## 📝 Features in Detail

### 🔐 Authentication
- Email/Password authentication using Firebase
- Protected routes for authenticated users
- Persistent login state
- User profile management

### 🎬 Content Browsing
- Responsive grid layout for content display
- Multiple content categories
- Search functionality
- Content details on hover

### 🎥 Video Player
- Custom video player interface
- Fullscreen mode
- Playback controls
- Responsive design for all devices

### 🎨 UI/UX
- Dark theme
- Smooth animations and transitions
- Mobile-responsive design
- Intuitive navigation

---

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

---

## 🛠️ Development

### Available Scripts

In the project directory, you can run:

- `npm run dev` or `yarn dev` - Runs the app in development mode
- `npm run build` or `yarn build` - Builds the app for production
- `npm run preview` or `yarn preview` - Previews the production build locally
- `npm run lint` or `yarn lint` - Runs ESLint

### Code Structure

The codebase is organized as follows:

- `src/` - Contains all the source code
  - `assets/` - Static assets like images and icons
  - `components/` - Reusable UI components
  - `pages/` - Page components for different routes
  - `context/` - React context for state management
  - `hooks/` - Custom React hooks
  - `utils/` - Utility functions and helpers
  - `styles/` - Global styles and themes

### Styling

This project uses:
- CSS Modules for scoped styling
- CSS Variables for theming
- Responsive design principles
- Mobile-first approach

---

## 🔧 Environment Variables

To run this project, you'll need to set up the following environment variables in your `.env` file:

```env
# Firebase Configuration
VITE_FIREBASE_API_KEY=your-api-key
VITE_FIREBASE_AUTH_DOMAIN=your-project-id.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-bucket.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
VITE_FIREBASE_APP_ID=your-app-id

# Optional: API Keys for additional services
# VITE_TMDB_API_KEY=your-tmdb-api-key
# VITE_YOUTUBE_API_KEY=your-youtube-api-key
```

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

## 🙏 Acknowledgments

- [Create React App](https://create-react-app.dev/)
- [Firebase](https://firebase.google.com/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [Vercel](https://vercel.com/) for hosting
- All the amazing open-source libraries used in this project

## 📧 Contact

Your Name - [@your_twitter](https://twitter.com/your_username) - your.email@example.com

Project Link: [https://github.com/your-username/netflix-clone](https://github.com/your-username/netflix-clone)

## Show your support

Give a ⭐️ if this project helped you!

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
