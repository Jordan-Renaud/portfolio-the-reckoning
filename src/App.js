import Person from "./images/Person";
import Project from "./components/Project";
import { projects } from "./data";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="landing-container">
        <div className="title">
          <h1>Jordan Renaud</h1>
          <h2>Developer</h2>
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
    </div>
  );
}

export default App;
