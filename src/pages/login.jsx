import React, { useEffect, useState } from 'react';
import { FaGithub, FaApple, FaGoogle } from 'react-icons/fa';
import Signin from '../assets/signin.png';
import CustomNavbar from '../components/CustomNavbar';
import '../Styles/Login.css';
import supabase from '../Config/supabase';

const Login = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getSession = async () => {
      const { data: session, error } = await supabase.auth.getSession();
  
      if (error) {
        console.error('Error fetching session:', error.message);
        return;
      }
      const {user}=session;
  
      console.log(session);
      if (session) {
        console.log(user);
      }
  
      supabase.auth.onAuthStateChange((event, session) => {
        switch (event) {
          case 'SIGNED_IN':
            setUser(session?.user);
            break;
          case 'SIGNED_OUT':
            setUser(null);
            break;
          default:
            break;
        }
      });
    };
  
    getSession();
  }, []);
  

  const githubLogin = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'github'
    });
    if (error) {
      console.error('Error logging in with GitHub:', error.message);
    } else {
      console.log(data);
    }
  };

  return (
    <>
      <CustomNavbar />
      <div className="Login">
        <div className="signin">
          {!user ? (
            <div className="form">
              <h1>Welcome Back!!</h1>
              <button className="login-btn github" onClick={githubLogin}>
                <FaGithub className="icon" />
                Log in with GitHub
              </button>
              <button className="login-btn apple">
                <FaApple className="icon" />
                Log in with Apple
              </button>
              <button className="login-btn google">
                <FaGoogle className="icon" />
                Log in with Google
              </button>
            </div>
          ) : (
            <div className="logged-in-message">
              <p>You are logged in.</p>
            </div>
          )}
          <div className="bg-image">
            <img src={Signin} alt="Sign In" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
