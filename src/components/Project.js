import blob from "../images/blob.png";
import "../styles/Project.css";

export default function Project({ projectData }) {
  return (
    <div className="Project">
      <div className="image-container">
        <img src={blob} alt="" />
        <img className="small-img" src={projectData.image} />
      </div>
      <div className="text-container">
        <h3>{projectData.title}</h3>
        <p>{projectData.description}</p>
      </div>
    </div>
  );
}