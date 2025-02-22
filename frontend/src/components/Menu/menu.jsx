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
        category.categoryId === currentId
          ? {
              ...category,
              subCategories: category.subCategories.map((sub, subIndex) =>
                subIndex === index - 1 ? { ...sub, checked: !sub.checked } : sub
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
      {items.map(({ subCategoryId, name, checked }) => (
        <MenuItem
          sx={{ minWidth: "150px" }}
          key={subCategoryId}
          onClick={() => handleCheckboxChange(subCategoryId)}
        >
          <Checkbox
            onClick={checkBoxClickHandler.bind(null, subCategoryId)}
            sx={{ padding: 0 }}
            checked={checked}
          />
          <CustomListItemText primary={name} sx={{ paddingLeft: "10px" }} />
        </MenuItem>
      ))}
    </Menu>
  );
};

export default CustomMenu;
