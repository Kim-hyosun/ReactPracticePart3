import { Link } from "react-router-dom";
import { useRef, useEffect } from "react";

import Navigation from "../components/Navigation";

import logo from "../assets/images/logo.png";
import "./header.scss";

function Header() {
  const headerRef = useRef(null);

  const handleScroll = () => {
    console.log("스크롤 중");

    if (window.scrollY > 150) {
      headerRef.current.className = "on";
    } else {
      headerRef.current.className = "";
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header ref={headerRef}>
      <h1>
        <Link to="/">
          <img src={logo} alt="dyami 로고" />
        </Link>
      </h1>
      <Navigation />
    </header>
  );
}

export default Header;
