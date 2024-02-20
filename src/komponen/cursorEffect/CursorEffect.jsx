import React from "react";
import { useEffect, useState } from "react";
import "./CursorStyle.css";
import { motion } from "framer-motion";

const CursorEffect = () => {
  const [pergerakan, setPergerakan] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const mouseMove = (e) => {
      setPergerakan({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const circles = document.querySelectorAll(".circle");

  const colors = ["#e6ce12", "#e9b600", "#ea9c00", "#ea8200", "#e86500", "#e44300", "#de0000)"];

  circles.forEach(function (circle, index) {
    circle.x = pergerakan.x;
    circle.y = pergerakan.y;
    circle.style.backgroundColor = colors[index % colors.length];
  });

  useEffect(() => {
    const animateCircle = () => {
      let x = pergerakan.x;
      let y = pergerakan.y;

      circles.forEach(function (circle, index) {
        circle.style.left = x - 10 + "px";
        circle.style.top = y - 10 + "px";

        circle.style.scale = (circles.length - index) / circles.length;

        circle.x = x;
        circle.y = y;

        const nextCircle = circles[index + 1] || circles[0];
        x += (nextCircle.x - x) * 0.5;
        y += (nextCircle.y - y) * 0.5;
      });
      requestAnimationFrame(animateCircle);
    };

    animateCircle();
  }, [pergerakan]);

  return (
    <>
      <motion.div className="circle" />
      <motion.div className="circle" />
      <motion.div className="circle" />
      <motion.div className="circle" />
      <motion.div className="circle" />
      <motion.div className="circle" />
    </>
  );
};

export default CursorEffect;
