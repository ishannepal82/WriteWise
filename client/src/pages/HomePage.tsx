import { useEffect, useState } from "react";
import HeroSection from "../components/homePage/heroSection";

export default function HomePage() {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  useEffect(() => {
    const onMouseMove = (event: MouseEvent) => {
      setMouseX(event.clientX);
      setMouseY(event.clientY);
    };

    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, []);

  return (
    <>
      <div className="bg-background h-screen w-full">
        <HeroSection />
      </div>

      {/* Mouse tracker */}
      <div
        className="mouse-tracker fixed w-6 h-6 rounded-full bg-primary pointer-events-none"
        style={{
          left: mouseX,
          top: mouseY,
          transform: "translate(-50%, -50%)",
          zIndex: 50,
          transition: "0.25s ease-out",
          boxShadow: "0 10px 40px #82ff04e5",
        }}
      ></div>
    </>
  );
}
