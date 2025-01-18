import React from "react";
import "./Home.css";
import Img from "../Image/my-image-ozil.jpg";

const Home = () => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <p className="greeting">HI THERE 👋 I'M</p>
        <h1 className="name">Eremiye E. Oluwadamilare</h1>
        <h2 className="profession"> FRONTEND DEVELOPER🧑‍💻</h2>
        <p className="description">
        A Frontend Focused Web Developer,<br/>
         Building The Frontend of Website,<br/>
        And Web Application that leads to the success of the overall product.<br/>
        i'm also a creative engineer who build delightful web experience.<br/>
        i can adivse your company about the web platform, performance,<br/>
        creative user interactions,and usable machine learning.
        </p>
        <button className="hire-me-btn"> 
  <a href="mailto:oluwadamilare.erex@gmail.com" className="mail"> Hire Me </a> /
  <a 
    href="https://docs.google.com/document/d/15yamKjquNELBDVP5hrizJXZhgAPKgVRi/edit?usp=drive_link&ouid=105827951159669112522&rtpof=true&sd=true" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="cv-download"
  >
    Download CV
  </a>
</button>

      </div>
      <div className="hero-avatar">
        <img src={Img} alt="" className="img" />
      </div>
    </div>
  );
};

export default Home;








// import React from "react";

// const Home = () => {
//   return (
//     <div>
//       <h1>Welcome to the Home Page</h1>
//       <p>This is the Home section.</p>
//     </div>
//   );
// };

// export default Home;
