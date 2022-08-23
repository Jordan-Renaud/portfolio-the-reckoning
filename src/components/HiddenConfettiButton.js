import { useWindowSize } from "react-use";
import Confetti from "react-confetti";
import { useEffect, useState } from "react";
import "../styles/HiddenConfettiButton.css";

export default function HiddenConfettiButton({ color }) {
  const { width, height } = useWindowSize();
  const [isConfettiShown, setIsConfettiShown] = useState(false);
  const [recycle, setRecycle] = useState(true);

  useEffect(() => {
    if (!isConfettiShown) return;
    const timer = setTimeout(() => {
      setRecycle(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, [isConfettiShown, recycle]);

  function showConfetti() {
    setIsConfettiShown(true);
    setRecycle(true);
  }

  return (
    <div>
      <button className="HiddenConfettiButton" onClick={showConfetti}></button>
      {isConfettiShown && (
        <Confetti
          width={width - 40}
          height={height * 3}
          recycle={recycle}
          colors={[
            "#f2f2f2",
            "#ffdbac",
            "#3f3d56",
            "#e6e6e6",
            "#2f2e41",
            "#6667ab",
          ]}
        />
      )}
    </div>
  );
}
