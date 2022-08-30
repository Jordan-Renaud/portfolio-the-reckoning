import "./InternetContact.css";

export default function InternetContact({ linkData }) {
  const { link, image, alt, name } = linkData;

  return (
    <div className="InternetContact">
      <a href={link} target="_blank" rel="noreferrer">
        <img className="logo" src={image} alt={alt} />
        <p>{name}</p>
      </a>
    </div>
  );
}
