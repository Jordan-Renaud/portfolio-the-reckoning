import Project from "./Project/Project";
import { projects } from "../../data";

export default function Projects() {
  return (
    <section className="whole-page">
      <h2 className="title">Projects</h2>
      {projects.map((projectData, index) => (
        <article key={projectData.title}>
          <Project projectData={projectData} index={index} />
        </article>
      ))}
    </section>
  );
}
