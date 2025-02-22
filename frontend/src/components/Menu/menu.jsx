import React from "react";
import { Menu, MenuItem, Checkbox, ListItemText, styled } from "@mui/material";

const CustomMenu = ({
  anchorEl,
  handleClose,
  currentId,
  items,
  checkedItems,
  setHabbit,
  handleCheckboxChange,
}) => {
  const CustomListItemText = styled(ListItemText)(({ theme }) => ({
    "& .MuiTypography-root": {
      fontSize: "8px",
    },
  }));

  const checkBoxClickHandler = (index) => {
    setHabbit((prevData) =>
      prevData.map((category) =>
        category.id === currentId
          ? {
              ...category,
              subCategories: category.subCategories.map((sub, subIndex) =>
                subIndex === index ? { ...sub, checked: !sub.checked } : sub
              ),
            }
          : category
      )
    );
  };

  return (
    <Menu
      id="simple-menu"
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
      onClose={handleClose}
      sx={{
        borderRadius: 0,
      }}
    >
      {items.map((item, index) => (
        <MenuItem
          sx={{ minWidth: "150px" }}
          key={index}
          onClick={() => handleCheckboxChange(item)}
        >
          <Checkbox
            onClick={checkBoxClickHandler.bind(null, index)}
            sx={{ padding: 0 }}
            checked={item.checked}
          />
          <CustomListItemText
            primary={item.text}
            sx={{ paddingLeft: "10px" }}
          />
        </MenuItem>
      ))}
    </Menu>
  );
};

export default CustomMenu;
