import React from "react";
import "./CursorStyle.css";

const CursorEffect = () => {
  const pergerakan = { x: 0, y: 0 };
  const circles = document.querySelectorAll(".circle");

  circles.forEach(function (circle) {
    circle.x = 0;
    circle.y = 0;
  });

  window.addEventListener("mousemove", function (e) {
    pergerakan.x = e.clientX;
    pergerakan.y = e.clientY;
  });

  function animateCircle() {
    let x = pergerakan.x;
    let y = pergerakan.y;

    circles.forEach(function (circle, index) {
      circle.style.left = x - 12 + "px";
      circle.style.top = y - 12 + "px";

      circle.style.scale = (circles.length - index) / circles.length;

      circle.x = x;
      circle.y = y;

      const nextCircle = circles[index + 1] || circles[0];
      x += (nextCircle.x - x) * 0.5;
      y += (nextCircle.y - y) * 0.5;
    });
    requestAnimationFrame(animateCircle);
  }

  animateCircle();
  return (
    <>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
    </>
  );
};

export default CursorEffect;
