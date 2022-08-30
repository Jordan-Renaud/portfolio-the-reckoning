import whaleSpottingPhone from "./images/whale-spotting-phone.png";
import dndPhone from "./images/dnd-phone.png";
import marsMissionPhone from "./images/mars-mission-phone.png";
import codewars from "./images/logos/codewars.svg";
import facebook from "./images/logos/facebook.svg";
import github from "./images/logos/github.svg";
import instagram from "./images/logos/instagram.svg";
import linkedin from "./images/logos/linkedin.svg";

export const projects = [
  {
    title: "Dungeons and Dragons Homebrew Website (WIP)",
    url: "https://discworld-dnd.vercel.app/",
    image: dndPhone,
    imageAlt: "A mobile phone containing the dungeon and dragons webite.",
    description:
      "Build a Dungeon and Dragons website to allow new players to create a character, as well as interact with story elements.",
  },
  {
    title: "Whale Spotting (TechSwitch bootcamp)",
    url: "https://whale-spotting.herokuapp.com/",
    image: whaleSpottingPhone,
    description:
      "Create a website to help encourage and track whale spotting as part of a team.",
  },
  {
    title: "Mars Mission (TechSwitch bootcamp)",
    url: "https://github.com/Jordan-Renaud/mars-mission-techswitch",
    image: marsMissionPhone,
    description:
      "Work as part of a group to design and create a mobile first website with the goal of engaging children in the 11-16 age range.",
  },
];

export const achievements = [
  {
    clue1: "What am I?",
    clue2: "Hover over the word, 'Developer', under my name.",
    achievementName: "Make it bounce",
    emoji: "🏀",
    points: 5,
  },
  {
    clue1: (
      <>
        How can I <strong>top</strong> this, what's <strong>left</strong>?
      </>
    ),
    clue2: "Click or tap on the top left of the page.",
    achievementName: "Make it bounce",
    emoji: "🎉",
    points: 15,
  },
];

//Internet presence default values:
// { link: "", image: "", alt: "", name: "" }
export const internetPresences = [
  {
    link: "https://www.codewars.com/users/JordanRenaud",
    image: codewars,
    alt: "Codewars Logo",
    name: "Codewars",
  },
  {
    link: "https://www.facebook.com/jordan.renaud3/",
    image: facebook,
    alt: "Facebook Logo",
    name: "Facebook",
  },
  {
    link: "https://github.com/Jordan-Renaud",
    image: github,
    alt: "Github Logo",
    name: "Github",
  },
  {
    link: "https://www.instagram.com/jordan__renaud/",
    image: instagram,
    alt: "Instagram Logo",
    name: "Instagram",
  },
  {
    link: "www.linkedin.com/in/jordan-denise-renaud",
    image: linkedin,
    alt: "Linkedin Logo",
    name: "Linkedin",
  },
];

export const colors = [
  {
    primary: "#a29bfe",
    secondary: "#6667ab",
    text: "#28282d",
    background: "#f2f2f2",
  },
  {
    primary: "#EAE3D2",
    secondary: "#607EAA",
    text: "#1C3879",
    background: "#F9F5EB",
  },
  {
    primary: "#E6D2AA",
    secondary: "#D36B00",
    text: "#42032C",
    background: "#F1EFDC",
  },
];
