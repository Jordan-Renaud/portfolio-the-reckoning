import { useState, useEffect } from "react";
import "./BouncingText.css";

export default function BouncingText({ text }) {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (!isAnimating) return;

    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 250 * text.length);
    return () => clearTimeout(timer);
  }, [isAnimating, text]);

  return (
    <span onMouseEnter={() => setIsAnimating(true)}>
      {text.split("").map((letter, index) => {
        const style = { animationDelay: 0.5 + index / 10 + "s" };
        return (
          <span
            className={isAnimating ? "animate" : ""}
            aria-hidden="true"
            key={index}
            style={style}
          >
            {letter}
          </span>
        );
      })}
    </span>
  );
}
