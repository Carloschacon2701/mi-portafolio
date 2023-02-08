import React, { useEffect } from "react";
import "./InfoStyles.css";
import AOS from "aos";
import "aos/dist/aos.css";


export const Info = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);

  
  return (
    <div id="info" className="row" data-aos="fade-up" data-aos-duration="1500">
        <h1 className="title-row">My Skills</h1>
      <div className="skill-row">
        
        <div className="firs-des" data-aos="fade-up">
          <div className="text">
            <i className="fa-brands fa-react icon fa-4x"></i>
            <h2 className="title">React Js</h2>
            <p className="des-para">
              Knowledge in this library, with the use of Hooks, API rest and
              Components
            </p>
          </div>
        </div>
        <div className="firs-des des-2" data-aos="fade-up">
          <div className="text">
            <i className="fa-solid fa-code icon fa-4x"></i>
            <h2 className="title">Front-end</h2>

            <p className="des-para">
              Abilities to create landing pages, single page apps, and
              portfolios web
            </p>
          </div>
        </div>
        <div className="firs-des des-3"  data-aos="fade-up">
          <div className="text">
            <i className="fa-solid fa-globe fa-4x icon"></i>
            <h2 className="title">Advanced English</h2>
            <p className="des-para">
            Extensive knowledge of English language with an intermediate-advanced level
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
