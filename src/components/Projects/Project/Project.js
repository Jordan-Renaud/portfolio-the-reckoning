import blob from "../../../images/blob.png";
import "./Project.css";

export default function Project({ projectData, index }) {
  const side = index % 2 === 0 ? "left" : "right";

  return (
    <div className={`Project ${side}`}>
      <div className="image-container">
        <img src={blob} alt="" />
        <a href={projectData.url}>
          <img
            className="link-image"
            src={projectData.image}
            alt={projectData.imageAlt}
          />
        </a>
      </div>
      <div className="text-container">
        <h3>{projectData.title}</h3>
        <p>{projectData.description}</p>
      </div>
    </div>
  );
}
