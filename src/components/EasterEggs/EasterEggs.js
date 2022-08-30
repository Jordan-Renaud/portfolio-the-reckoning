import EasterEgg from "./EasterEgg/EasterEgg";
import { achievements } from "../../data";

export default function EasterEggs({}) {
  return (
    <section className="whole-page">
      <h2 className="title">Easter Eggs</h2>
      <div className="grid-container">
        {achievements.map((achievementData) => (
          <article key={achievementData.achievementName}>
            <EasterEgg achievementData={achievementData} />
          </article>
        ))}
      </div>
    </section>
  );
}
