import BouncingText from "./BouncingText/BouncingText";
import Person from "../../images/Person";
import "./LandingScreen.css";

export default function LandingScreen() {
  return (
    <div className="LandingScreen">
      <div className="title">
        <h1>Jordan Renaud</h1>
        <h2>
          <BouncingText text="Developer" />
        </h2>
      </div>
      <div className="person-container">
        <Person />
      </div>
    </div>
  );
}
