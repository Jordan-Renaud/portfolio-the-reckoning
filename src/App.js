import Person from "./images/Person";
import Project from "./components/Project";
import BouncingText from "./components/BouncingText";
import HiddenConfettiButton from "./components/HiddenConfettiButton";
import EasterEgg from "./components/EasterEgg";
import { projects, achievements } from "./data";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [userAchievments, setUserAchievments] = useState({});

  function updateUserAchievements(achievement) {
    //TODO: setup this function to update a specific function with completed
  }

  return (
    <div className="App">
      <HiddenConfettiButton color="green" />
      <div className="landing-container">
        <div className="title">
          <h1>Jordan Renaud</h1>
          <h2>
            <BouncingText text="Developer" />
          </h2>
        </div>
        <Person />
      </div>
      <section className="whole-page">
        <h2 className="title">Projects</h2>
        {projects.map((projectData, index) => (
          <article key={projectData.title}>
            <Project projectData={projectData} index={index} />
          </article>
        ))}
      </section>
      <section className="whole-page">
        <h2 className="title">Easter Eggs</h2>
        {achievements.map((achievementData) => (
          <article key={achievementData.achievementName}>
            <EasterEgg achievementData={achievementData} />
          </article>
        ))}
      </section>
    </div>
  );
}

export default App;
