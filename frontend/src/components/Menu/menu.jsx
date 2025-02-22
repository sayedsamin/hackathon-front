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
      {items.map(({ subCategoryId, name }) => (
        <MenuItem
          sx={{ minWidth: "150px" }}
          key={subCategoryId}
          onClick={() => handleCheckboxChange(subCategoryId)}
        >
          <Checkbox
            onClick={checkBoxClickHandler.bind(null, subCategoryId)}
            sx={{ padding: 0 }}
            // checked={item.checked}
          />
          <CustomListItemText primary={name} sx={{ paddingLeft: "10px" }} />
        </MenuItem>
      ))}
    </Menu>
  );
};

export default CustomMenu;
