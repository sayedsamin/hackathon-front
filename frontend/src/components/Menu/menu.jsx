import React from "react";
import { Menu, MenuItem, Checkbox, ListItemText } from "@mui/material";

const CustomMenu = ({
  anchorEl,
  handleClose,
  items,
  checkedItems,
  handleCheckboxChange,
}) => {
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
      {items.map((item) => (
        <MenuItem
          sx={{ minWidth: "150px" }}
          key={item}
          onClick={() => handleCheckboxChange(item)}
        >
          <Checkbox sx={{ padding: 0 }} checked={checkedItems.includes(item)} />
          <ListItemText sx={{ paddingLeft: "10px" }} primary={item} />
        </MenuItem>
      ))}
    </Menu>
  );
};

export default CustomMenu;
