import "../styles/Propagation.css";

const StopPropagation = () => {
  return (
    <div className="toolbar" onClick={() => alert("Clicked toolbar")}>
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          alert("Clicked button");
        }}
      >
        Stop propagation
      </button>
    </div>
  );
};

export default StopPropagation;
