import React, { useEffect, useRef } from 'react';
import logo from '../assets/logo.png'; 
import "../Styles/Header.css"
import { useAppContext } from './AppProvider';
import supabase from '../Config/supabase';

const Header = () => {
  const {user,setUser}=useAppContext();
  const navLinksRef = useRef(null);
  const searchBarRef = useRef(null);

  useEffect(() => {
    const menuBar = document.getElementById('menuBar');
    const menu = document.getElementById('menu');

    const handleMenuToggle = () => {
      console.log("clicked");
      menu.classList.toggle('active');
    };

    menuBar.addEventListener('click', handleMenuToggle);

    // Cleanup event listener on component unmount
    return () => {
      menuBar.removeEventListener('click', handleMenuToggle);
    };
  }, []);

  const performSearch = () => {
    const query = searchBarRef.current.value;
    if (query) {
      alert(`Searching for: ${query}`);
    } else {
      alert('Please enter a search term.');
    }
  };

  // Event handler for menu bar toggle
  const handleMenuBarClick = () => {
    navLinksRef.current.classList.toggle('active');
  };


  const handleLogOut=async()=>{
    const {error}=await  supabase.auth.signOut();
    if (error) {
      console.error('Error logging out:', error.message);
    } else {
      setUser(null);
    }

  }
  return (
    <header className='Header'>
      <nav className="navbar">
        <div className="logo">
            <a href="/"><img src={logo} alt="KonnectMe Logo"/></a>    
        </div>
        <ul className="nav_links" ref={navLinksRef}>
            <li><i className="fas fa-home"></i><a href="/home">Home</a></li>
		    <li><i className="fas fa-info"></i><a href="/about">About</a></li>
		    <li><i className="fas fa-question-circle"></i><a href="/faq">FAQs</a></li>
            <li ><i className="fas fa-user"></i><a href="/profile">My Profile</a></li>
            <li className='logout' onClick={handleLogOut}>Log out</li>
        </ul>
        <div className="search">
          <input ref={searchBarRef} type="text" className="search_input" placeholder="Type your text" />
          <button onClick={performSearch} className="search_button">
            <svg className="search__icon" aria-hidden="true" viewBox="0 0 24 24">
              <g>
                <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
              </g>
            </svg>
          </button>
        </div>
        <div className="menuBar" id="menuBar" onClick={handleMenuBarClick}>☰</div>
    </nav>
    </header>
  );
};

export default Header;
