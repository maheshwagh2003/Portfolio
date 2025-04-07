import React from 'react'
import './App.css'
import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import AOS from 'aos';
import 'aos/dist/aos.css';
import FacialAttendance from './assets/facial_attendance.png';
import Finwize from './assets/Finwize.png';
import GeminiClone from './assets/gemini_clone.png';
import MaheshWagh from './assets/Mahesh_wagh.png';
import Oasis from './assets/Oasis.png';
import StockForecasting from './assets/Stock_Price_Forecasting.png';
import Trinity from './assets/trinity-eac.png';
import Vrihit from './assets/Vrihit.png';
import Woodapple from './assets/Woodapple.png'




const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 3000, // animation duration
      once: true,     // only animate once
    });
  }, []);


const experiences = [
  {
    company: "AI Sciences",
    role: "ML Developer Intern",
    duration: "Aug 2023 - Jan 2024",
    description: "Worked on ML models and deployed them. Paid ₹12,000/month.",
  },
  {
    company: "Brain-O-Vision",
    role: "AWS Intern",
    duration: "July 2023",
    description: "Completed a 1-month internship on AWS services and deployment.",
  },
];
  return (
    <div>
      
      
      
      <div className="Navbar">
          <ul>
          <Link to="Skills-Container" smooth={true} duration={700} spy={true} 
  activeClass="active-link" offset={-10} ><li>Skills</li></Link>
            <Link to="Projects-Container" smooth={true} duration={700} spy={true} 
  activeClass="active-project" offset={-10} ><li>Projects</li></Link>

<Link  to="Contact-Container" smooth={true} duration={700} spy={true} 
  activeClass="active-contact" offset={-10} ><li>Contact</li></Link>
            <a href="https://drive.google.com/file/d/1UqKh95wQQSgsZH_CNoaZEvsobSHGaSpl/view?usp=sharing" target='_blank'>
              <li >Resume</li>
            </a>
          </ul>
        </div>
      <div className="Hero">
        
        <div className="Texts">
           <div className="text1">
             <h1 className='Name'>Mahesh Wagh</h1>
           </div>
           <div className="text2">
             <h2 className = 'Freelancer'>Freelancer</h2>
           </div>
           
        </div>
        <div className="arrow">
            <div className="icon">
              <Link to="Skills-Container" smooth={true} duration={700}>
                <i class="fa-solid fa-arrow-down"></i>
              </Link>
            </div>
        </div>
      </div>

      
      <div className="Skills-Container" id="Skills" data-aos="zoom-in">
        <div className="Skills-Title" data-aos="fade-in">Skills</div>
        <div className="marquee-wrapper">
          <div className="marquee">
            {["AI/ML","HTML", "CSS", "JS", "REACT.JS", "PYTHON", "JAVA", "DJANGO", "MySQL", "MONGODB","Git", "Github", "AI/ML","HTML", "CSS", "JS", "REACT.JS", "PYTHON", "JAVA", "DJANGO", "MySQL", "MONGODB","Git", "Github"].map((skill, index) => (
              <div className="marquee-tab" key={index}>
                {skill}
              </div>
            ))}
          </div>
        </div>
        
      </div>

      <div className="Projects-Container">
        <div className="Project-Title" data-aos="zoom-out">Projects</div>
        <div className="Project-cards" data-aos="flip-up">
          <div className="card"  >
            <img src={Trinity} alt="" />
            <div className="text-container">
              <h3>Trinity EAC Website</h3>
              <h4>Type: Freelanced Website</h4>
              <h5>Tech: WORDPRESS</h5>
              <button type="button" className='Project-Button'><a href="https://trinityeac.in/" target='_blank'><i class="fa-solid fa-globe"> </i> Go to Wesbite</a> </button>
            </div>
          </div>

          <div className="card">
            <img src={Vrihit} alt="" />
              <div className="text-container">
                <h3>Vrihit Consultance Website</h3>
                <h4>Type: Freelanced Website</h4>
                <h5>Tech: WORDPRESS</h5>
                <button type="button"className='Project-Button'><a href="https://vrihitconsultancy.in/" target='_blank'> <i class="fa-solid fa-globe"> </i> Go to Wesbite</a></button>
              </div>
          </div>
          
          <div className="card">
            <img src={Woodapple} alt="" />
              <div className="text-container">
                <h3>Woodapple Website</h3>
                <h4>Type: Freelanced Website</h4>
                <h5>Tech: WORDPRESS</h5>
                <button type="button" className='Project-Button'><a href="https://woodappletech.erpca.shop/" target='_blank'> <i class="fa-solid fa-globe"> </i> Go to Wesbite</a></button>
              </div>
          </div>
          
          <div className="card">
            <img src={Finwize} alt="" />
              <div className="text-container">
                <h3>Finwize Website</h3>
                <h4>Type: Freelanced Website</h4>
                <h5>Tech: WORDPRESS</h5>
                <button type="button" href="#" className='Project-Button'><a href="https://finwize.in/pro/" target='_blank'> <i class="fa-solid fa-globe"> </i> Go to Wesbite</a></button>
              </div>
          </div>
          
          <div className="card">
            <img src={Oasis} alt="" />
              <div className="text-container">
                <h3>Oasis Hospital Website</h3>
                <h4>Type: Freelanced Website</h4>
                <h5>Tech: WORDPRESS</h5>
                <button type="button" className='Project-Button'><a href="http://oasis.hospital/" target='_blank'> <i class="fa-solid fa-globe"> </i> Go to Wesbite</a></button>
              </div>
          </div>
          
          <div className="card">
            <img src={GeminiClone} alt="" />
              <div className="text-container">
                <h3>Gemini Clone</h3>
                <h4>Type: Personal Project</h4>
                <h5>Tech: React.js, Flask, Python</h5>
                <button type="button" className='Project-Button-with-github'> <a href="https://maheshwagh2003.github.io/gemini-clone/" className='gitbtns'><i class="fa-solid fa-globe"> </i> Go to Wesbite</a></button>
                <button type="button" className='Project-Button-with-github'> <a href="https://maheshwagh2003.github.io/gemini-clone/" className='gitbtns'><i class="fa-brands fa-github"></i> Go to Github Repo</a></button>
              </div>
          </div>
          
          <div className="card">
            <img src={StockForecasting} alt="" />
              <div className="text-container">
                <h3>Stock Prife Foreacasting</h3>
                <h4>Type: Personal Project</h4>
                <h5>Tech: Python, LSTM, Keras, Yfinance</h5>

                <button type="button" className='Project-Button'><a  href="https://github.com/maheshwagh2003/Stock-Price_Predictor" target="_blank"><i class="fa-brands fa-github"> </i> Go to Github Repo</a> </button>
              </div>
          </div>
          
          <div className="card">
            <img src={FacialAttendance} alt="" />
              <div className="text-container">
                <h3>Facial Attendace System</h3>
                <h4>Type: Personal Project</h4>
                <h5>Tech: Python, TKinter</h5>
                <button type="button"className='Project-Button'> <a href="https://github.com/maheshwagh2003/Facial_Attendance"><i class="fa-brands fa-github"> </i> Go to Github Repo</a></button>
              </div>
          </div>
          
        </div>
      </div>

      

      <div className="Contact-Container">
        <div className="Contact-Title" data-aos="zoom-">
          Contact Me
        </div>
        <div className="contact-content" >
          <div className="left" data-aos="fade-down">
            <div className="circles">
              <div className="circle circle1"></div>
              <div className="circle circle2"></div>
              <div className="circle circle3"></div>
            </div>
            <div className="Contact-Text">
              <h4>
                <span className='Start-End'>def Contact_Me:<br /><br /></span>
                <span className="attribute">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Name = </span><span className="value">Mahesh Gajanan Wagh</span><br />
                <span className="attribute">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Email = </span><span className="value">maheshwagh979@gmail.com</span><br />
                <span className="attribute">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Contact Number = </span><span className="value">+91 9076107717</span><br /><br />


                <span className='Start-End'>def Education:<br /><br /></span>
                <span className="attribute">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Degree = </span><span className="value">Bachelor's of Engineering</span><br />
                <span className="attribute">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Specialization = </span><span className="value">Artificial Intelligence and Machine Learning</span><br />
                <span className="attribute">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CGPA = </span><span className="value">8.50</span><br /><br />

                
                <span className="attribute">{"Achievements = ['Won Internal SIH'22',"}</span><br />
                <span className="attribute">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"'AIML Topper (Second Year)',"}</span><br />
                <span className="attribute">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"'AIML Toper (Third Year)',"}</span><br />
                <span className="attribute">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"'Bronze Medalist Fencing in Mumbai University']"}</span><br /><br />
                

                <span className='Start-End'>def Profiles: <br /><br /></span>
                <span className="attribute">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Github = </span><span className="value"><a href="https://github.com/maheshwagh2003/">https://github.com/maheshwagh2003/</a> </span><br />
                <span className="attribute">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;LinkedIn = </span><span className="value"><a href="https://www.linkedin.com/in/mahesh-wagh2003/">https://www.linkedin.com/in/mahesh-wagh2003/</a></span><br />
                <span className="attribute">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Instagram = </span><span className="value"><a href="https://www.instagram.com/mahesh.wagh2k3/">https://www.instagram.com/mahesh.wagh2k3/</a></span><br /><br />

                
              </h4>
            </div>
          </div>
          <div className="right" data-aos="zoom-out">
            <div className="image-box"></div>
          </div>
        </div>
      </div>

      <div className="end" data-aos="fade-in">
        <div className="End-Title">You've Reached End.</div>
        <div className="go-to-top">
         <Link to="Hero" smooth={true} duration={700}>
            Go to top.
         </Link>
        </div>
      </div>

      
    </div>
  )
}

export default App