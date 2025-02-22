import { useState } from "react";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import Main from "./components/Main/main";

import "./styles/variants.css";
import CategoryFormDialog from "./components/Modals/addNewItem";
import sustainabilityData from "./util/DummyData";
function App() {
  const [isDialogOpen, setDialogOpen] = useState(false);

  const clickHandler = () => {
    setDialogOpen(true);
  };

  const handleSave = (data) => {
    sustainabilityData.push(data);
  };

  return (
    <>
      <Header />
      <Main />
      <CategoryFormDialog
        handleClose={() => setDialogOpen(false)}
        isOpen={isDialogOpen}
        handleSave={handleSave}
      ></CategoryFormDialog>
      <Footer clickHandler={clickHandler} />
    </>
  );
}

export default App;
