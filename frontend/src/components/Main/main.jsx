import { useEffect, useState } from "react";
import sustainabilityData from "../../util/DummyData";
import Card from "../Card/Card";
import LottieAnimation from "../Lottie/lottieAnimation";
import "./main.css";

const Main = () => {
  const [habbitData, setHabbitData] = useState(sustainabilityData);

  return (
    <main style={{ padding: "2rem", minHeight: "90vh" }}>
      <LottieAnimation src="https://lottie.host/99a1a143-2e4f-4ff1-a182-2a47eb705005/o1hsE75UgZ.lottie" />
      <div className="dashboard">
        {habbitData.map(({ id, mainCategory, subCategories }) => (
          <Card
            key={id}
            id={id}
            setHabbit={setHabbitData}
            mainCategory={mainCategory}
            items={subCategories}
          />
        ))}
      </div>
    </main>
  );
};

export default Main;
