import React, { useEffect } from 'react';
import { FaGithub, FaGoogle, FaFacebook } from 'react-icons/fa';
import Signin from '../assets/signin.png';
import CustomNavbar from '../components/CustomNavbar';
import Header from "../components/Header";
import '../Styles/Login.css';
import supabase from '../Config/supabase';

const Login = ({ user, setUser }) => {
  useEffect(() => {
    const getSession = async () => {
      const { data: { session }, error } = await supabase.auth.getSession();
      if (error) {
        console.error('Error fetching session:', error.message);
        return;
      }

      if (session) {
        setUser(session.user); 
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
  }, [setUser]);

  const login = async (provider) => {
    const { error } = await supabase.auth.signInWithOAuth({ provider });
    if (error) {
      console.error(`Error logging in with ${provider}:`, error.message);
    }
  };

  return (
    <>
      {user ? <Header /> : <CustomNavbar />}
      <div className="Login">
        <div className="signin">
          {user ? (
            <div className="welcome-message">
              <h1>Welcome Back!</h1>
              <p>We're glad to see you again {user?.user_metadata?.name}.</p>
            </div>
          ) : (
            <div className="form">
              <h1>Welcome Back!!</h1>
              <button className="login-btn github" onClick={() => login('github')}>
                <FaGithub className="icon" />
                Log in with GitHub
              </button>
              <button className="login-btn facebook" onClick={() => login('facebook')}>
                <FaFacebook className="icon" />
                Log in with Facebook
              </button>
              <button className="login-btn google" onClick={() => login('google')}>
                <FaGoogle className="icon" />
                Log in with Google
              </button>
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
