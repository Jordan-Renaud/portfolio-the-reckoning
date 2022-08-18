import Person from "./images/Person";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* <svg
        className="background"
        viewBox="0 0 800 500"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        id="blobSvg"
      >
        <g transform="translate(380, -124)">
          <path
            class="blob"
            d="M478,287.5Q481,325,462.5,358Q444,391,417.5,417.5Q391,444,358.5,464Q326,484,288,489.5Q250,495,215,479.5Q180,464,143,456Q106,448,77,422.5Q48,397,35.5,360.5Q23,324,20.5,287Q18,250,17,212Q16,174,32.5,139Q49,104,82,84Q115,64,144.5,39.5Q174,15,212,19.5Q250,24,287.5,21.5Q325,19,358,37.5Q391,56,412,86.5Q433,117,455.5,146.5Q478,176,476.5,213Q475,250,478,287.5Z"
            fill="#a29bfe"
          ></path>
        </g>
      </svg> */}
      <div className="landing-container">
        <div className="title">
          <h1>Jordan Renaud</h1>
          <h2>Developer</h2>
        </div>
        <Person />
      </div>
    </div>
  );
}

export default App;
