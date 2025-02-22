import React, { useState } from "react";
import "./card.css";
import Button from "../Button/customButton";
import CustomMenu from "../Menu/menu";

const Card = ({ mainCategory, items }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [checkedItems, setCheckedItems] = useState([]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCheckboxChange = (item) => {
    setCheckedItems((prevState) =>
      prevState.includes(item)
        ? prevState.filter((i) => i !== item)
        : [...prevState, item]
    );
  };

  return (
    <div className="card">
      <Button onClickHandler={handleClick} text={mainCategory} />
      <CustomMenu
        checkedItems={checkedItems}
        handleCheckboxChange={handleCheckboxChange}
        anchorEl={anchorEl}
        items={items}
        handleClose={handleClose}
      />
    </div>
  );
};

export default Card;
