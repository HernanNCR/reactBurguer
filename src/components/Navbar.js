import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import styles from "./navbar.module.css";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import useScrollPosition from "../Hooks/scrollPosition";

const Navbar = () => {
  const [navbarOpen, setnavbarOpen] = useState(false);
  const links = [
    {
      id: 1,
      link: "Home",
    },
    {
      id: 2,
      link: "Servicios",
    },
    {
      id: 3,
      link: "Productos",
    },
    {
      id: 4,
      link: "Conócenos",
    },
  ];
  const [windowDimension, setWindowDimension] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const detectDimension = () => {
    setWindowDimension({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", detectDimension);
    windowDimension.width > 800 && setnavbarOpen(false);
    return () => {
      window.removeEventListener("resize", detectDimension);
    };
  }, []);

  const scrollPosition = useScrollPosition();
  return (
    <div
      className={
        navbarOpen
          ? styles.navbarOpen
          : scrollPosition > 0
          ? styles.navOnScroll
          : styles.navbar
      }
    >
      {!navbarOpen && <img className={styles.img} src={require("../assets/logo3.png")} />}
      {!navbarOpen && windowDimension.width < 800 ? (
        <IoMenu
          color="white"
          size={25}
          onClick={() => setnavbarOpen(!navbarOpen)}
        />
      ) : (
        windowDimension.width < 800 && (
          <IoMdClose
            color="white"
            size={25}
            onClick={() => setnavbarOpen(!navbarOpen)}
          />
        )
      )}

      {navbarOpen && (
        <ul className={styles.linksContainer}>
          {links.map((x) => (
            <div>
              <Link
                onClick={() => setnavbarOpen(!navbarOpen)}
                to={x.link}
                smooth
                duration={200}
                className={styles.navLink}
              >
                {x.link === "HowWeWork" ? "How we work" : x.link}
              </Link>
              <div className={styles.border}></div>
            </div>
          ))}
        </ul>
      )}
      {windowDimension.width > 800 && (
        <ul className={styles.linksContainer}>
          {links.map((x) => (
            <div>
              <Link
                onClick={() => setnavbarOpen(navbarOpen)}
                to={x.link}
                smooth
                duration={200} 
                className={styles.navLink}
              >
                {x.link === "HowWeWork" ? "How we work" : x.link}
              </Link>
              <div className={styles.border}></div>
            </div>
          ))}
          <Link
            onClick={() => setnavbarOpen(navbarOpen)}
            to="Contact"
            smooth
            duration={500}
            className={styles.contactLink}
          >
            Contáctanos
          </Link>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
