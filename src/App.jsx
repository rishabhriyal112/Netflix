import React, { useEffect } from "react";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Player from "./pages/Player/Player";
import { Route, Routes, useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { ToastContainer  } from 'react-toastify';
import Movies from "./pages/Movies/Movies";


const App = () => {

  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth , async (user) => {
      if(user){
        console.log("Logged In");
        navigate('/')
      }
      else{
        console.log("Logged Out");
        navigate('/login')
      }
    })
  } , [ ])

  return (
    <div>
      <ToastContainer theme="dark" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/player/:id" element={<Player/>}/>
        <Route path="/movies" element={<Movies/>}/>
      </Routes>
      
    </div>
  );
};

export default App;
