import HiddenConfettiButton from "./components/HiddenConfettiButton/HiddenConfettiButton";
import InternetContact from "./components/ContactMe/InternetContact/InternetContact";
import ColorPalettes from "./components/ColorSchemes/ColorPalettes";
import { internetPresences, colors } from "./data";
import "./App.css";
import { useState } from "react";
import LandingScreen from "./components/LandingScreen/LandingScreen";
import Projects from "./components/Projects/Projects";
import EasterEggs from "./components/EasterEggs/EasterEggs";
import ContactMe from "./components/ContactMe/ContactMe";

function App() {
  const [userAchievments, setUserAchievments] = useState({});

  function updateUserAchievements(achievement) {
    //TODO: setup this function to update a specific function with completed
  }

  return (
    <div className="App">
      <ColorPalettes colors={colors} />
      <HiddenConfettiButton color="green" />
      <LandingScreen />
      <Projects />
      <EasterEggs />
      <ContactMe />
    </div>
  );
}

export default App;
