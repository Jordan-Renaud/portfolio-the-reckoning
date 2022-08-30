import Palette from "./Palette";

export default function ColorPalettes({ colors }) {
  const formattedColors = colors.map((colorPalette) => [
    colorPalette.text,
    colorPalette.secondary,
    colorPalette.primary,
    colorPalette.background,
  ]);
  return (
    <div className="ColorPalettes">
      {formattedColors.map((colorPalette) => (
        <Palette key={colorPalette} colorPalette={colorPalette} />
      ))}
    </div>
  );
}
