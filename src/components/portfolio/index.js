import React from "react";

function Portfolio() {
  const projects = [
    {
      name: "Travel Buddy",
      id: "travel",
      description: "A travel website that uses weather and currency calculator API to provide a seamless and responsive research experience. 'Never travel alone again!'",
      liveUrl: "https://blerandism.github.io/travel_buddy_fl/",
      gitHub: "https://github.com/BlerandIsm/travel_buddy_fl"
    },
    {
      name: "C-S-S Neighborhood",
      id: "css",
      description: "This is a full stack application, hosted on heroku, that utilizes Node.js, Express.js, various NPM packages and various full stack web development concepts to create a small social-media style website specially for communication throughout a fictional community.",
      liveUrl: "https://sheltered-fortress-48000.herokuapp.com/homepage",
      gitHub: "https://github.com/BlerandIsm/c-s-s"
    },
    {
      name: "Weather Forecast",
      id: "weather",
      description: "This website allows users to enter and search any city in the world to get live weather conditions such as temperatures, humidtiy, wind etc.",
      liveUrl: "https://blerandism.github.io/weather_forecast/",
      gitHub: "https://github.com/BlerandIsm/weather_forecast"
    },
    {
      name: "Money Talk",
      id: "money",
      description: "This application enables the user to make a budged based on their income and spenditure. Build with IndexeDB with a PWA experience. ",
      liveUrl: "https://moneytalk1233.herokuapp.com/",
      gitHub: "https://github.com/BlerandIsm/money_talk"
    },
    
    {
      name: "The spot",
      id: "thespot",
      description: "A single page website for all art lovers to gather and communicate with each other. ",
      liveUrl: "https://the-spot-group.herokuapp.com/",
      gitHub: "https://github.com/BlerandIsm/the-spot"
    },
    
  ]
  return (
    <section>
      <h2 className="text-center fw-bold my-3">My Projects</h2>
      {projects.map((proj, i)=>(
      <div key={i} className="d-flex flex-column m-5 p-3 my-border card">
        <div className="text-center">
          <img className="p-image" src={require(`../../assets/images/${proj.id}.png`)} alt="Project"></img>
        </div>
        <div className="mx-auto text-center">
          <h3 className="fw-bold m-2">{proj.name}</h3>
          <p>{proj.description}</p>
          <a href={proj.liveUrl} target="_blank" rel="noreferrer">Deployed Application</a> <br></br>
          <a href={proj.gitHub} target="_blank" rel="noreferrer">GitHub Repository</a>
        </div>
      </div>
      ))}
      {/*  */}
    </section>
  );
}

export default Portfolio