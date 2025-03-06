import React, { useEffect } from "react";
import CircularMenu from "../components/RadialMenu";

function ParallaxPage() {
  useEffect(() => {
    const parallax_elmt = document.querySelectorAll(".parallax");

    let xValue = 0, yValue = 0;

    const handleMouseMove = (e) => {
      xValue = e.clientX - window.innerWidth / 2;
      yValue = e.clientY - window.innerHeight / 2;

      parallax_elmt.forEach((elmt) => {
        let speedx = elmt.dataset.speedx;
        let speedy = elmt.dataset.speedy;

        elmt.style.transform = `translateX(calc(-50% + ${-xValue * speedx}px)) translateY(calc(-50% + ${yValue * speedy}px))`;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <link rel="stylesheet" href="/styles/styles.css" />
      <main id="mont" className="relative w-full h-screen overflow-hidden">
        <img src="./public/images/bg.webp" data-speedx="0.3" data-speedy="0.2" className="parallax bg-1" />
        <img src="./public/images/2p.webp" data-speedx="0.2" data-speedy="0.1" className="parallax bg-2" />

        {/* Section Texte avec effet Parallax */}
        <div className="parallax absolute z-10 top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-grey uppercase">
          <h1 className="font-semibold text-6xl md:text-8xl">Portfolio</h1>
          <h2 className="font-light text-3xl md:text-4xl">PUNU Ismael</h2>
        </div>
        <img src="./public/images/1p.webp" data-speedx="0.1" data-speedy="0.05" className="parallax bg-3" />
        {/* Menu circulaire */}
            <CircularMenu />
      </main>
    </>
  );
}

export default ParallaxPage;
