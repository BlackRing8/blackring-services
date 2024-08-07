import React from "react";
import { useEffect, useState } from "react";
import "./CursorStyle.css";
import { motion } from "framer-motion";

const CursorEffect = () => {
  const [pergerakan, setPergerakan] = useState({
    x: 0,
    y: 0,
  });
  const [isMoving, setIsMoving] = useState(false);
  const timeoutRef = React.useRef(null);

  useEffect(() => {
    const mouseMove = (e) => {
      setPergerakan({
        x: e.clientX,
        y: e.clientY,
      });
      setIsMoving(true);
      clearTimeout(timeoutRef.current);

      timeoutRef.current = setTimeout(() => {
        setIsMoving(false);
      }, 500);
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
    circle.style.opacity = isMoving ? 0.8 : 0; // Menampilkan atau menyembunyikan lingkaran berdasarkan isMoving
  });

  useEffect(() => {
    const animateCircle = () => {
      let x = pergerakan.x;
      let y = pergerakan.y;

      circles.forEach(function (circle, index) {
        const offset = 23;
        circle.style.left = x - 16 + offset + "px";
        circle.style.top = y - 16 + offset + "px";

        circle.style.scale = (circles.length - index) / circles.length;

        circle.x = x;
        circle.y = y;

        const nextCircle = circles[index + 1] || circles[0];
        x += (nextCircle.x - x) * 0.4;
        y += (nextCircle.y - y) * 0.4;
      });
      requestAnimationFrame(animateCircle);
    };

    animateCircle();
  }, [pergerakan]);

  return (
    <>
      <div className="absolute h-10 w-10 bg-transparant z-10"></div>
      <motion.div className="circle" animate="" />
      <motion.div className="circle" animate="" />
      <motion.div className="circle" animate="" />
      <motion.div className="circle" animate="" />
    </>
  );
};

export default CursorEffect;
