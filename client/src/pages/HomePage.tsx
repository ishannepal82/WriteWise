import { useEffect, useState } from "react";
import HeroSection from "../components/homePage/heroSection";
import PartnersSlider from "../components/homePage/partnersSlider";

export default function HomePage() {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [isMouseInWindow, setIsMouseInWindow] = useState(false);

  useEffect(() => {
    const onMouseMove = (event: MouseEvent) => {
      setMouseX(event.clientX);
      setMouseY(event.clientY);
    };

    const onMouseEnter = () => setIsMouseInWindow(true);
    const onMouseLeave = () => setIsMouseInWindow(false);

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("mouseleave", onMouseLeave);
    
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
    <div className="relative">
      {/* Hero Section - full viewport height */}
      <section className="relative z-10 h-[100vh] flex flex-col">
        <HeroSection />
      </section>
      
      {/* Partners Section - below hero */}
      <section className="relative z-10 bottom-20 py-10 overflow-hidden loader-container">
        <PartnersSlider />
      </section>
      
      {/* Background pattern - fixed to cover everything */}
      <div
        className="fixed inset-0 pointer-events-none -z-10
        [background-image:radial-gradient(ellipse_at_bottom_left,#82ff0430_0%,transparent_70%),radial-gradient(ellipse_at_bottom_right,#82ff0430_0%,transparent_70%),radial-gradient(#82ff04b0_1px,transparent_1px)]
        [background-size:100%_100%,100%_100%,18px_18px]
        [background-position:0_0,0_0,9px_9px]
        [background-repeat:no-repeat,no-repeat,repeat]
        [mask-image:radial-gradient(ellipse_at_center_bottom,rgba(0,0,0,0.9)_0%,rgba(0,0,0,0.4)_50%,transparent_85%)]"
      />
      
      {/* Subtle ambient glow */}
      <div 
        className="fixed pointer-events-none z-0 opacity-30 blur-3xl"
        style={{
          left: mouseX,
          top: mouseY,
          width: "300px",
          height: "300px",
          background: "radial-gradient(circle, #82ff0440 0%, transparent 70%)",
          transform: "translate(-50%, -50%)",
          transition: "left 0.4s ease-out, top 0.4s ease-out",
        }}
      />
      
      {/* Mouse Tracker */}
      <div
        className="fixed rounded-full bg-primary pointer-events-none"
        style={{
          left: mouseX,
          top: mouseY,
          width: isMouseInWindow ? "24px" : "0px",
          height: isMouseInWindow ? "24px" : "0px",
          transform: "translate(-50%, -50%)",
          zIndex: 50,
          transition: "left 0.15s ease-out, top 0.15s ease-out, width 0.2s ease, height 0.2s ease, box-shadow 0.3s ease",
          boxShadow: isMouseInWindow 
            ? "0 0 20px #82ff04, 0 0 40px #82ff0480, 0 0 60px #82ff0440" 
            : "none",
            cursor: isMouseInWindow ? "pointer" : "none",
        }}
      />
    </div>
  );
}