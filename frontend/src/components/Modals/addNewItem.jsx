import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  IconButton,
  List,
  ListItem,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";

const CategoryFormDialog = ({
  habbitData,
  setHabbitData,
  isOpen,
  handleClose,
  handleSave,
}) => {
  const [name, setname] = useState("");
  const [subCategories, setSubCategories] = useState([""]);

  const handleAddSubCategory = () => {
    setSubCategories([...subCategories, ""]);
  };

  const handleSubCategoryChange = (index, value) => {
    const updatedSubCategories = [...subCategories];
    updatedSubCategories[index] = value;
    setSubCategories(updatedSubCategories);
  };

  const handleDeleteSubCategory = (index) => {
    const updatedSubCategories = subCategories.filter((_, i) => i !== index);
    setSubCategories(updatedSubCategories);
  };

  const handleSubmit = () => {
    const newCategory = {
      id: Date.now(),
      name,
      subCategories,
    };
    handleSave(newCategory);
    handleClose();
  };

  return (
    <Dialog open={isOpen} onClose={handleClose}>
      <DialogTitle>Add New Category</DialogTitle>
      <DialogContent>
        <TextField
          label="Main Category"
          fullWidth
          value={name}
          onChange={(e) => setname(e.target.value)}
          margin="dense"
        />
        <List>
          {subCategories.map((sub, index) => (
            <ListItem key={index}>
              <TextField
                fullWidth
                label={`Subcategory ${index + 1}`}
                value={sub}
                onChange={(e) => handleSubCategoryChange(index, e.target.value)}
                margin="dense"
              />
              <IconButton onClick={() => handleDeleteSubCategory(index)}>
                <DeleteIcon />
              </IconButton>
            </ListItem>
          ))}
        </List>
        <Button startIcon={<AddIcon />} onClick={handleAddSubCategory}>
          Add
        </Button>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleSubmit} variant="contained" color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CategoryFormDialog;
