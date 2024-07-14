import React, { useEffect, useRef, useState } from 'react';
import Person1 from "../assets/person1.jpg"
import Post1 from "../assets/post1.png"
import Post2 from "../assets/post2.png"
import Post3 from "../assets/post3.png"
import Post4 from "../assets/post4.png"
import Post5 from "../assets/post5.png"
import Postperson1 from "../assets/postperson1.png"
import Postperson2 from "../assets/postperson2.png"
import Postperson3 from "../assets/postperson3.png"
import Postperson4 from "../assets/postperson4.png"
import Postperson5 from "../assets/postperson5.png"
import Postperson6 from "../assets/postperson6.png"
import Mentor from "../assets/mentor.png"
import Mentee from "../assets/mentee.jpg"
import Google from "../assets/google.png"
import Strath from "../assets/strath.png"
import Header from '../components/Header';
import "../Styles/Home.css"
import supabase from '../Config/supabase';


const Home = () => {
    const [showReadMore, setShowReadMore] = useState(false);

    console.log(supabase)
  
    // Refs for DOM elements
    const contentTextRef = useRef(null);
  
    useEffect(() => {
      const contentText = contentTextRef.current;
      // Check if the content text is overflowing
      if (contentText.scrollHeight > contentText.clientHeight) {
        setShowReadMore(true);
      }
    }, []);
  
    // Event handler for read more button
    const handleReadMoreClick = () => {
      contentTextRef.current.style.maxHeight = "none";
      setShowReadMore(false);
    };
  
    return (
      <div className="Home">
        <Header />
        <div className="left-content">
          <div className="profile-card">
            <img src={Person1} alt="Profile Picture" className="profile-pic" />
            <div className="profile-info">
              <span className="profile-name">John Doe</span>
              <span className="profile-title">Senior Mentor at TechCorp</span>
              <span className="profile-view"><a href="/profile">View Profile</a></span>
            </div>
            <div className="separator"></div>
            <div className="connections">
              <span>
                <div className="connection-stats">
                  <span>Connections</span>
                  <p className="connection-number">25</p>
                </div>
                <span>Connected with alumnis</span>
              </span>
            </div>
            <div className="separator"></div>
            <div className="saved-items">
              <span>Saved Items</span>
            </div>
          </div>
          <div className="recents">
            <span>Recents</span>
            <p>Mentors monetizing their sessions</p>
            <p>Mentors working efficiently</p>
            <span>Groups</span>
            <p>KonnectMe</p>
            <p>MentorMe</p>
            <p>See all</p>
            <button className='discover-button'>Discover more</button>
          </div>
        </div>
        <div className="all-posts">
          <div className="post-card">
            <div className="post-header">
              <img src={Postperson1} alt="Profile Picture" className="profile-pic" />
              <div className="user-info">
                <span className="user-name">John Doe</span>
                <span className="user-title">Senior mentor</span>
              </div>
            </div>
            <div className="post-content" id="post-content">
              <details>
                <summary>Mentoring is a powerful tool for personal and professional growth. By connecting with experienced mentors, individuals gain invaluable insights, guidance, and support that can shape their careers and lives.</summary>
                <p ref={contentTextRef} className="content-text">
                  Whether navigating new challenges or honing existing skills, the mentor-mentee relationship fosters mutual learning and growth.
                </p>
              </details>
              {showReadMore && (
                <span className="read-more" onClick={handleReadMoreClick}>Read more</span>
              )}
            </div>
            <div>
              <img src={Post1} alt="" />
            </div>
            <div className="post-footer">
              <span className="footer-item">👍 Like</span>
              <span className="footer-item">💬 Comment</span>
              <span className="footer-item">
                <svg width="20" height="20" viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M832 64H192C174.3 64 160 78.3 160 96V928C160 945.7 174.3 960 192 960H832C849.7 960 864 945.7 864 928V96C864 78.3 849.7 64 832 64ZM668 345.9L621.5 312L572 347.4V124H668V345.9Z" fill="blue" />
                </svg>
                book
              </span>
              <span className="footer-item">↪️ Share</span>
            </div>
            <div>
                Hello
            </div>

          </div>
          <div class="post-card">
                <div class="post-header">
                    <img src={Postperson2} alt="Profile Picture" class="profile-pic"/>
                    <div class="user-info">
                        <span class="user-name">Alex Maunda</span>
                        <span class="user-title">Peer mentor</span>
                    </div>
                </div>
                <div class="post-content" id="post-content">
                    <details>
                        <summary>Mentorship is more than just guidance; it's a journey of shared growth and development. With a mentor's wisdom and experience, mentees can unlock their full potential, overcome obstacles, and achieve their goals.</summary>
                        <p class="content-text">
                            This dynamic relationship enriches both the mentor and mentee, creating a ripple effect of knowledge and success
                       </p>
                    </details>
                    
                    <span class="read-more" id="read-more">Read more</span>
                </div>
                <div>
                    <img src={Post1} alt=""/>
                </div>
                <div class="post-footer">
                    <span class="footer-item">👍 Like</span>
                    <span class="footer-item">💬 Comment</span>
                    <span class="footer-item">
                        <svg width="20" height="20" viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M832 64H192C174.3 64 160 78.3 160 96V928C160 945.7 174.3 960 192 960H832C849.7 960 864 945.7 864 928V96C864 78.3 849.7 64 832 64ZM668 345.9L621.5 312L572 347.4V124H668V345.9Z" fill="blue"/>
                        </svg>
                        book
                    </span>
                    <span class="footer-item">↪️ Share</span>
                </div>
            </div>
            <div class="post-card">
                <div class="post-header">
                    <img src={Postperson4} alt="Profile Picture" class="profile-pic"/>
                    <div class="user-info">
                        <span class="user-name">Kenneth Kaunda</span>
                        <span class="user-title">Wellness Mentor</span>
                    </div>
                </div>
                <div class="post-content" id="post-content">
                    <details>
                        <summary>A good mentor can be a beacon of inspiration and guidance. Mentorship helps bridge the gap between ambition and achievement, providing the tools and confidence needed to succeed.</summary>
                        <p class="content-text">
                            It's about building a supportive network that encourages continuous learning and professional development, fostering an environment where both mentors and mentees thrive.                        
                        </p>
                    </details>
                    <span class="read-more" id="read-more">Read more</span>
                </div>
                <div>
                    <img src={Post2} alt=""/>
                </div>
                <div class="post-footer">
                    <span class="footer-item">👍 Like</span>
                    <span class="footer-item">💬 Comment</span>
                    <span class="footer-item">
                        <svg width="20" height="20" viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M832 64H192C174.3 64 160 78.3 160 96V928C160 945.7 174.3 960 192 960H832C849.7 960 864 945.7 864 928V96C864 78.3 849.7 64 832 64ZM668 345.9L621.5 312L572 347.4V124H668V345.9Z" fill="blue"/>
                        </svg>
                        book
                    </span>
                    <span class="footer-item">↪️ Share</span>
                </div>
            </div>
            <div class="post-card">
                <div class="post-header">
                    <img src={Postperson3} alt="Profile Picture" class="profile-pic"/>
                    <div class="user-info">
                        <span class="user-name">Koffi Annan</span>
                        <span class="user-title">Business Growth Mentor</span>
                    </div>
                </div>
                <div class="post-content" id="post-content">
                    <details>
                        <summary>The value of mentorship lies in its ability to transform lives and careers. Mentors offer more than just advice; they provide a roadmap to success, helping mentees overcome challenges and seize opportunities.</summary>
                        <p class="content-text">
                            This collaborative partnership fosters a spirit of learning, resilience, and mutual respect, driving both parties toward their fullest potential.
                       </p>
                    </details>
                    
                    <span class="read-more" id="read-more">Read more</span>
                </div>
                <div>
                    <img src={Post3} alt=""/>
                </div>
                <div class="post-footer">
                    <span class="footer-item">👍 Like</span>
                    <span class="footer-item">💬 Comment</span>
                    <span class="footer-item">
                        <svg width="20" height="20" viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M832 64H192C174.3 64 160 78.3 160 96V928C160 945.7 174.3 960 192 960H832C849.7 960 864 945.7 864 928V96C864 78.3 849.7 64 832 64ZM668 345.9L621.5 312L572 347.4V124H668V345.9Z" fill="blue"/>
                        </svg>
                        book
                    </span>
                    <span class="footer-item">↪️ Share</span>
                </div>
            </div>
            <div class="post-card">
                <div class="post-header">
                    <img src={Postperson5} alt="Profile Picture" class="profile-pic"/>
                    <div class="user-info">
                        <span class="user-name">John Malawi</span>
                        <span class="user-title">Professional Development Mentor</span>
                    </div>
                </div>
                <div class="post-content" id="post-content">
                    <details>
                        <summary>Effective mentorship is the cornerstone of professional advancement. By sharing their experiences and knowledge, mentors help mentees navigate their career paths with greater clarity and purpose.</summary>
                        <p class="content-text">
                            This symbiotic relationship not only enhances personal growth but also strengthens the professional community, creating a culture of continuous improvement and support
                        </p>
                    </details>
                    
                    <span class="read-more" id="read-more">Read more</span>
                </div>
                <div>
                    <img src={Post4} alt=""/>
                </div>
                <div class="post-footer">
                    <span class="footer-item">👍 Like</span>
                    <span class="footer-item">💬 Comment</span>
                    <span class="footer-item">
                        <svg width="20" height="20" viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M832 64H192C174.3 64 160 78.3 160 96V928C160 945.7 174.3 960 192 960H832C849.7 960 864 945.7 864 928V96C864 78.3 849.7 64 832 64ZM668 345.9L621.5 312L572 347.4V124H668V345.9Z" fill="blue"/>
                        </svg>
                        book
                    </span>
                    <span class="footer-item">↪️ Share</span>
                </div>
            </div>  
            <div class="post-card">
                <div class="post-header">
                    <img src={Postperson6} alt="Profile Picture" class="profile-pic"/>
                    <div class="user-info">
                        <span class="user-name">Jacob Zuma</span>
                        <span class="user-title">Leadership Coach</span>
                    </div>
                </div>
                <div class="post-content" id="post-content">
                    <details>
                        <summary>
                            Mentoring is a journey of mutual discovery and empowerment. Through mentorship, individuals can explore new perspectives, gain critical insights, and develop essential skills. 
                        </summary>
                        <p class="content-text">
                            This relationship nurtures a supportive and enriching environment, where both mentor and mentee can grow and achieve their aspirations together.  
                        </p>
                    </details>
                    
                    <span class="read-more" id="read-more">Read more</span>
                </div>
                <div>
                    <img class="post-image" src={Post5} alt=""/>
                </div>
                <div class="post-footer">
                    <span class="footer-item">👍 Like</span>
                    <span class="footer-item">💬 Comment</span>
                    <span class="footer-item">
                        <svg width="20" height="20" viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M832 64H192C174.3 64 160 78.3 160 96V928C160 945.7 174.3 960 192 960H832C849.7 960 864 945.7 864 928V96C864 78.3 849.7 64 832 64ZM668 345.9L621.5 312L572 347.4V124H668V345.9Z" fill="blue"/>
                        </svg>
                        book
                    </span>
                    <span class="footer-item">↪️ Share</span>
                </div>
            </div> 

         
        </div>
        <div className="feed-card">
          <img className="feed-pic" src={Mentor} alt="Mentor" />
          <div className="feed-text">
            <p>Mentor me</p>
            <span>Company for mentors</span>
            <button>Follow+</button>
          </div>
          <img class="feed-pic" src={Mentee} alt="Mentor"/>
            <div class="feed-text">
                <p>Mentee me</p>
                <span>Company for mentees</span>
                <button>Follow+</button>
            </div>
            <img class="feed-pic" src={Google} alt="Mentor"/>
            <div class="feed-text">
                <p>Google</p>
                <span>Trainers for mentors</span>
                <button>Follow+</button>
            </div>
            <img class="feed-pic" src={Strath} alt="Mentor"/>
            <div class="feed-text">
                <p>Strathmore University</p>
                <span>Maisa program</span>
                <button>Follow+</button>
            </div>
        </div>
        </div>
      
    );
  }
  
  export default Home;