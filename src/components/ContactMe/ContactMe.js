import InternetContact from "./InternetContact/InternetContact";
import { internetPresences } from "../../data";
import "./ContactMe.css";

export default function ContactMe() {
  return (
    <section className="whole-page">
      <h2 className="title">What I'm up to</h2>
      <div className="contacts-container">
        {internetPresences.map((internetPresence) => (
          <div key={internetPresence.name}>
            <InternetContact linkData={internetPresence} />
          </div>
        ))}
      </div>
    </section>
  );
}
