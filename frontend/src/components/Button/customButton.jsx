import { Button } from "@mui/material";

const customButton = ({ text, onClickHandler }) => {
  return (
    <Button
      aria-controls="simple-menu"
      aria-haspopup="true"
      onClick={onClickHandler}
      style={{
        backgroundColor: "var(--primary-color)",
        height: "30px",
        minWidth: "150px",
        fontSize: "10px",
        padding: "0px 5px",
        textTransform: "none",
        fontWeight: "500",
        borderRadius: "4px",
        letterSpacing: "0.5px",
        color: "#fff",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        transition: "background-color 0.3s, transform 0.3s",
      }}
      variant="contained"
      onMouseOver={(e) => {
        e.target.style.backgroundColor = "var(--secondary-color)";
        e.target.style.transform = "scale(1.02)";
      }}
      onMouseOut={(e) => {
        e.target.style.backgroundColor = "var(--primary-color)";
        e.target.style.transform = "scale(1)";
      }}
    >
      {text}
    </Button>
  );
};

export default customButton;
