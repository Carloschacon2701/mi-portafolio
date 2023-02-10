import React from "react";
export const ProjectCard = ({foto, title, description, number, aos, technologies}) => {

    
  return (
    <div>
      <div className='projects-containers' data-aos={aos} data-aos-duration="1500">
      <div className={"project-main" + number}>
          <h1 className="subtitulo">{title}</h1>
        </div>
        <div className={"img-project" + number}>
          <img className="pe" alt=" " src={foto}/>
        </div>

        <div className={"description-project" + number}>
          <p>
            {description}
          </p>
        </div>
        <div className={"brands" + number}>
          <p>{technologies} </p>
        </div>
      </div>
    </div>
  );
};
