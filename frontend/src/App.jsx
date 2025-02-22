import { useState } from "react";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import Main from "./components/Main/main";
import sustainabilityData from "./util/DummyData";
import "./styles/variants.css";
import CategoryFormDialog from "./components/Modals/addNewItem";

function App() {
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [habbitData, setHabbitData] = useState(sustainabilityData);

  const clickHandler = () => {
    setDialogOpen(true);
  };

  const handleSave = (data) => {
    setHabbitData((prev) => {
      const index = prev.findIndex(
        ({ name }) =>
          name.trim().toLowerCase() === data.name.trim().toLowerCase()
      );

      console.log("Index:", index); // Debugging

      // Ensure all subCategories are objects
      const formattedSubCategories = data.subCategories.map((item, i) =>
        typeof item === "string"
          ? { subCategoryId: Date.now() + i, name: item } // Convert string to object
          : item
      );

      if (index >= 0) {
        const updatedHabbitData = [...prev];

        updatedHabbitData[index] = {
          ...updatedHabbitData[index],
          subCategories: [
            ...updatedHabbitData[index].subCategories,
            ...formattedSubCategories, // Use formatted subCategories
          ],
        };

        return updatedHabbitData;
      }

      return [...prev, { ...data, subCategories: formattedSubCategories }];
    });
  };

  return (
    <>
      <Header />
      <Main habbitData={habbitData} setHabbitData={setHabbitData} />
      <CategoryFormDialog
        habbitData={habbitData}
        setHabbitData={setHabbitData}
        handleClose={() => setDialogOpen(false)}
        isOpen={isDialogOpen}
        handleSave={handleSave}
      ></CategoryFormDialog>
      <Footer clickHandler={clickHandler} />
    </>
  );
}

export default App;
