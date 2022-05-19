import React from "react";
import resume from "../../assets/images/resume.docx";

function About() {
  return (
    <div>
      
      <section className="my-5 d-flex flex-wrap justify-content-around">
        <img
          id="avatar"
          src={require("../../assets/images/blerand.jpeg")}
          alt="Placeholder avatar"
          className="m-3"
        ></img>
        <div className="m-5 text-center" id="aboutMe">
          <h2 className="fw-bold">About Me</h2>
          <p className="fw-bold lh-lg">
          Front-End Web Developer leveraging a background in management  to build a more intuitive user experience on the web. 
          Certified in  Full Stack Development from the University of Miami, with newly developed skills in JavaScript, CSS, React.js, HTML, Node.js and responsive web design. 
          Known as an innovative problem-solver passionate about developing apps, with a focus on mobile-first design and development. 
          With each project, my aim is to best engage my audience for an impactful user-experience. 
          Excited to leverage skills in the future as part of a fast-paced, quality-driven team in order to build better experiences on the web
          </p>
        </div>

        
      <div className="d-flex flex-column">
        <div className="text-center">
          <a href={resume} download>
            <img
              id="resumeImg"
              src={require("../../assets/images/resume2.png")}
              className="border-bottom border-dark border-3"
              alt="Resume logo"
            ></img>
          </a>
          <h3 className="text-center my-3 fw-bold">Download</h3>
        </div>
      </div>  
      </section>
    </div>
  );

  
}



export default About;
