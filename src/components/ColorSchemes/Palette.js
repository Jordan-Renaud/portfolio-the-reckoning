import Color from "./Color";

export default function Palette({ colorPalette }) {
  return (
    <button onClick={() => console.log("update color")} className="Palette">
      {colorPalette.map((color) => (
        <Color key={color} hex={color} />
      ))}
    </button>
  );
}
