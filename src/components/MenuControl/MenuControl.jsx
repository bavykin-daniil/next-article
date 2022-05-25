//general
import React from "react";
import { motion } from "framer-motion";
//styles
import styles from "./MenuControl.module.scss";

const MenuControl = ({
  isOpen = false,
  width = 24,
  height = 24,
  strokeWidth = 1,
  color = "#000",
  hidden = false,
  ...props
}) => {
  const option = isOpen ? "opened" : "closed";

  const menuStyleProps = {
    width,
    height,
  };

  const strokeStyleProps = {
    width,
    height: strokeWidth,
    backgroundColor: color,
  };

  const top = {
    closed: {
      rotate: 0,
      translateY: 0,
    },
    opened: {
      rotate: 45,
      top: "50%",
    },
  };

  const center = {
    closed: {
      opacity: 1,
      scaleX: 1,
    },
    opened: {
      opacity: 0,
      scaleX: 0,
    },
  };

  const bottom = {
    closed: {
      rotate: 0,
      translateY: 0,
    },
    opened: {
      rotate: -45,
      top: "50%",
    },
  };

  return (
    <div className={styles.menuControl} style={menuStyleProps} {...props}>
      <motion.span style={strokeStyleProps} variants={top} animate={option} />
      <motion.span
        style={strokeStyleProps}
        variants={center}
        animate={option}
      />
      <motion.span
        style={strokeStyleProps}
        variants={bottom}
        animate={option}
      />
    </div>
  );
};

export default MenuControl;
