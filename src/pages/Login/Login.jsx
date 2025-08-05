import React, { useState } from "react";
import "./Login.css";
import logo from "../../assets/logo.png";
import { login,  signup } from "../../firebase";
import netlfix_spinner from "../../assets/netflix_spinner.gif";

const Login = () => {
  const [signState, setSignState] = useState("Sign In");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading,setLoading] = useState(false)

  const user_auth = async(event)=>{
    event.preventDefault();
    setLoading(true);
    if(signState === "Sign In"){
      await login(email , password);
    }
    else{
      await signup(name , email , password);
    }
    setLoading(false);
  }
  return (
    loading ? <div className="login-spinner">
      <img src={netlfix_spinner} alt="" />
    </div>: 
  
    <div className="login">
      <img src={logo} alt="" className="login-logo" />
      <br/><br/><br/><br/>
      <div className="login-form">
        <h1>{signState}</h1>
        <form>
          {signState === "Sign Up" ? (
            <input value={name} onChange={(e) => {setName(e.target.value)}}
             type="text" placeholder="Your Name" />
          ) : (
            <></>
          )}
          <input value={email} onChange={(e) => {setEmail(e.target.value)}} type="email" placeholder=" Email" />
          <input value={password} onChange={(e) =>{setPassword(e.target.value)}} type="password" placeholder="Password" />
          <button onClick={user_auth} type="submit">{signState}</button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="">Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <form action="">
          <div className="form-switch">
            {signState === "Sign In" ? (
              <p>
                New to Netflix? <span onClick={() => { setSignState("Sign Up") }}>Sign up Now</span>
              </p>
            ) : (
              <p onClick={() => { setSignState("Sign In") }}>
                Already have account? <span>Sign in Now</span>
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
