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

  // const circles = document.querySelectorAll(".circle");

  // circles.forEach(function (circle) {
  //   circle.x = 0;
  //   circle.y = 0;
  // });

  // window.addEventListener("mousemove", function (e) {
  //   pergerakan.x = e.clientX;
  //   pergerakan.y = e.clientY;
  // });

  // function animateCircle() {
  //   let x = pergerakan.x;
  //   let y = pergerakan.y;

  //   circles.forEach(function (circle, index) {
  //     circle.style.left = x - 12 + "px";
  //     circle.style.top = y - 12 + "px";

  //     circle.style.scale = (circles.length - index) / circles.length;

  //     circle.x = x;
  //     circle.y = y;

  //     const nextCircle = circles[index + 1] || circles[0];
  //     x += (nextCircle.x - x) * 0.5;
  //     y += (nextCircle.y - y) * 0.5;
  //   });
  //   requestAnimationFrame(animateCircle);
  // }

  const variants = {
    default: {
      x: pergerakan.x,
      y: pergerakan.y,
    },
  };

  // animateCircle();
  return (
    <>
      <motion.div className="circle" variants={variants} animate="default" />
      <motion.div className="circle" variants={variants} animate="default" />
      <motion.div className="circle" variants={variants} animate="default" />
      <motion.div className="circle" variants={variants} animate="default" />
      <motion.div className="circle" variants={variants} animate="default" />
      <motion.div className="circle" variants={variants} animate="default" />
      <motion.div className="circle" variants={variants} animate="default" />
      <motion.div className="circle" variants={variants} animate="default" />
      <motion.div className="circle" variants={variants} animate="default" />
      <motion.div className="circle" variants={variants} animate="default" />
    </>
  );
};

export default CursorEffect;
