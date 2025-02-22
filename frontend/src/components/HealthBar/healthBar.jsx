import "./healthbar.css";

const HealthBar = ({ health, setHealth }) => {
  return (
    <>
      <div className="health-bar-container">
        <div
          className="health-bar"
          style={{
            width: ` ${health}%`,
            backgroundColor:
              health > 60 ? "green" : health > 30 ? "orange" : "red",
          }}
        ></div>
        <span className="health-text">{Math.ceil(health)}%</span>
      </div>
            
    </>
  );
};

export default HealthBar;
