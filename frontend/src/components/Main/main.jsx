import { useEffect, useState } from "react";
import Card from "../Card/Card";
import LottieAnimation from "../Lottie/lottieAnimation";
import "./main.css";

const Main = ({ habbitData, setHabbitData }) => {
  const [checkedCount, setCheckedCount] = useState(0);
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    const total = habbitData.reduce(
      (acc, category) => acc + category.subCategories.length,
      0
    );
    const checked = habbitData.reduce(
      (acc, category) =>
        acc + category.subCategories.filter((sub) => sub.checked).length,
      0
    );

    setTotalCount(total);
    setCheckedCount(checked);
  }, [habbitData]);

  const markedPercent = (checkedCount / totalCount) * 100;

  let source = null;

  if (markedPercent < 50)
    source =
      "https://lottie.host/99a1a143-2e4f-4ff1-a182-2a47eb705005/o1hsE75UgZ.lottie";
  else
    source =
      "https://lottie.host/8a80387c-848e-4178-bcf7-260931c8b3d7/Qv6k5WRM7c.lottie";

  return (
    <main style={{ padding: "2rem", minHeight: "90vh" }}>
      <LottieAnimation src={source} />
      <div className="dashboard">
        {habbitData.map(({ categoryId, name, subCategories }) => (
          <Card
            key={categoryId}
            id={categoryId}
            setHabbit={setHabbitData}
            mainCategory={name}
            items={subCategories}
          />
        ))}
      </div>
    </main>
  );
};

export default Main;
