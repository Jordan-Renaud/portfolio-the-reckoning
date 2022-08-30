import "../../styles/ColorSchemes.css";

export default function Color({ hex }) {
  const style = {
    backgroundColor: hex,
  };
  return <div style={style} className="Color"></div>;
}
