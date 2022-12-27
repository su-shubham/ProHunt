// import Nav from './components/Nav';
// import MainBody from './components/MainBody';
// import Asidebar from './components/Asidebar';
// import Todaylist from './components/Todaylist';
// import Foot from "./components/Foot";
// import LandPage from "./components/LandPage";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Fief from "./components/Fief";
import AnimatedCursor from "react-animated-cursor";
import { Expo } from "gsap";

function App() {

  const [isRendered, setIsRendered] = useState(false);
  const toggle = () => {
    if (window.scrollY > 700) {
      setIsRendered(true);
    } else {
      setIsRendered(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggle);
    return () => {
      window.removeEventListener("scroll", toggle);
    };
  });

  return (
    <div className="App">
      <Fief />
      <motion.a
        initial={{ opacity: 0 }}
        animate={{
          opacity: isRendered ? 1 : 0,
        }}
        transition={{
          ease: Expo.easeOut,
          duration: 1,
        }}
        href="#top"
        className="back-to-top"
        title="Back to Top"
      >
        <p className="back-to-top__image">↑</p>
      </motion.a>
      <AnimatedCursor
        innerSize={15}
        outerSize={0}
        color="0, 0, 0"
        outerAlpha={0.2}
        innerScale={0.5}
      />
    </div>
  );
}

export default App;
