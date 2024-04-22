import "../styles/Propagation.css";

const Propagation = () => {
  return (
    <div
      className="toolbar"
      onClick={() => {
        alert("clicked tool bar");
      }}
    >
      <button type="button" onClick={() => alert("Play Music")}>
        Play Music
      </button>
      <button type="button" onClick={() => alert("Stop Song")}>
        Stop Music
      </button>
    </div>
  );
};

export default Propagation;
