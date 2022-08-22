import Person from "./images/Person";
import Project from "./components/Project";
import BouncingText from "./components/BouncingText";
import HiddenConfettiButton from "./components/HiddenConfettiButton";
import { projects } from "./data";
import "./App.css";

function App() {
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
      <section>
        <h2 className="title">Projects</h2>
        {projects.map((projectData) => (
          <article key={projectData.title}>
            <Project projectData={projectData} />
          </article>
        ))}
      </section>
      <section>
        <h2 className="title">Easter Eggs</h2>
        <p>Hover over Developer</p>
        <p>Click on the top left of the page</p>
      </section>
    </div>
  );
}

export default App;
