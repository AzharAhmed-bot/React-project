import React, { useEffect, useState } from 'react';
import { FaGithub, FaApple, FaGoogle,FaFacebook } from 'react-icons/fa';
import Signin from '../assets/signin.png';
import CustomNavbar from '../components/CustomNavbar';
import Header from "../components/Header";
import '../Styles/Login.css';
import supabase from '../Config/supabase';
import { useAppContext } from '../components/AppProvider';

const Login = () => {
  const {user,setUser}=useAppContext();

  console.log(user);

  useEffect(() => {
    const getSession = async () => {
      const { data: session, error } = await supabase.auth.getSession();
      
      if (error) {
        console.error('Error fetching session:', error.message);
        return;
      }
  
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
  

  const login = async (provider) => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: provider
    });
    if (error) {
      console.error('Error logging in with GitHub:', error.message);
    } else {
      console.log(data);
    }
  };

  return (
    <>
      {user?<Header/> : <CustomNavbar/> }
      <div className="Login">
        <div className="signin">
          {!user ? (
            <div className="form">
              <h1>Welcome Back!!</h1>
              <button className="login-btn github" onClick={()=>login('github')}>
                <FaGithub className="icon" />
                Log in with GitHub
              </button>
              <button className="login-btn apple" onClick={()=>login('facebook')}>
                <FaFacebook className="icon" />
                Log in with Facebook
              </button>
              <button className="login-btn google" onClick={()=>login('google')}>
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
