import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const LottieAnimation = ({ src }) => {
  return (
    <div
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <DotLottieReact
        src={src}
        loop
        autoplay
        style={{ width: "200px", height: "200px" }}
      />
    </div>
  );
};

export default LottieAnimation;
