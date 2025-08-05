# 🎬 Netflix Clone

![React](https://img.shields.io/badge/React-18.2-blue)
![TMDB API](https://img.shields.io/badge/TMDB-API-orange)
![License](https://img.shields.io/badge/License-MIT-green)

A fully responsive **Netflix Clone** built with **React.js**, featuring a movie listing, trailer player, and dynamic content fetched from **TMDB API**. The app allows users to explore trending movies and watch trailers in a custom player with smooth navigation and a Netflix-like UI.

---

## 🚀 Features

- **Home Page:** Displays trending movies in a Netflix-style layout  
- **Movie Cards:** Dynamic fetching and rendering from **TMDB API**  
- **Search Functionality:** Search movies by name (using TMDB query)  
- **Trailer Player:**  
  - Opens a dedicated player page  
  - Embedded **YouTube iframe** for trailers  
  - Responsive video player with custom background  
- **Navbar and Footer:** Styled navigation bar and footer for easy browsing  
- **Fully Responsive:** Works across desktop, tablet, and mobile  
- **Back Navigation:** Quick return to previous page  
- **Styled Components:** Custom CSS with gradients, hover effects, and dark UI  

---

## 🛠️ Tech Stack

- **Frontend:** React.js (with React Router DOM)  
- **Styling:** CSS3 + Tailwind (optional enhancements)  
- **API:** [TMDB Developer API](https://developer.themoviedb.org) for movies and trailers  
- **Icons:** Custom assets for play, info, and back buttons  
- **Hosting:** GitHub Pages / Vercel / Netlify *(optional)*  

---

## 📂 Project Structure

```

src/
│── assets/                 # Images and icons
│── components/
│   ├── Navbar/              # Top navigation bar
│   ├── Footer/              # Footer section
│   ├── TitleCards/          # Movie cards component
│── pages/
│   ├── Home.jsx             # Home page with movie listing
│   ├── Player.jsx           # Trailer player page
│── App.jsx
│── index.jsx
│── styles/                  # CSS files

````

---

## ⚙️ Setup & Installation

### 1️⃣ Clone the repository
```bash
git clone https://github.com/YOUR_USERNAME/netflix-clone.git
cd netflix-clone
````

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Add TMDB API Key

* Create a `.env` file in the project root:

```env
VITE_TMDB_API_KEY=your_tmdb_api_key_here
```

* Replace your Bearer token in `Player.jsx` with environment variable usage (optional).

### 4️⃣ Start the development server

```bash
npm run dev
```

---

## 🎥 Screenshots

### 🏠 Home Page

*(Add screenshot link here)*

### ▶️ Player Page

*(Add screenshot link here)*

---

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
