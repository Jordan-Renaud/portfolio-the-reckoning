import whaleSpottingPhone from "./images/whale-spotting-phone.png";
import dndPhone from "./images/dnd-phone.png";

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
