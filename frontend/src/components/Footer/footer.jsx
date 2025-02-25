import React from "react";
import "./footer.css";

const Footer = ({ clickHandler }) => {
  return (
    <footer className="footer">
      <svg
        id="add-icon"
        xmlns="http://www.w3.org/2000/svg"
        style={{ position: "absolute", top: -50, left: 10 }}
        width="30"
        height="30"
        fill="var(--primary-color)"
        className="bi bi-patch-plus-fill rotate-icon"
        onClick={clickHandler}
        viewBox="0 0 16 16"
      >
        <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01zM8.5 6v1.5H10a.5.5 0 0 1 0 1H8.5V10a.5.5 0 0 1-1 0V8.5H6a.5.5 0 0 1 0-1h1.5V6a.5.5 0 0 1 1 0"></path>
      </svg>
    </footer>
  );
};

export default Footer;
