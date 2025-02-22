import "./styles/variants.css";
import "./index.css";
import Header from "./components/Header/header";
import Card from "./components/Card/Card";
import Footer from "./components/Footer/footer";

function App() {
  return (
    <>
      <Header />
      <main style={{ padding: "2rem", height: "90vh" }} className="dashboard">
        <Card mainCategory="Simple " items={["Item1", "Item2"]} />
        <Card mainCategory="Simple " items={["Item1", "Item2"]} />
        <Card mainCategory="Simple " items={["Item1", "Item2"]} />
        <Card mainCategory="Simple " items={["Item1", "Item2"]} />
      </main>
      <Footer />
    </>
  );
}

export default App;
