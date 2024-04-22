import "./App.css";
import AlertButton from "./components/AlertButton";
import DefaultBehavior from "./components/DefaultBehavior";
import PlayButton from "./components/PlayButton";
import Propagation from "./components/Propagation";
import PreventDefault from "./components/PreventDefault";
import StopPropagation from "./components/StopPropagation";
import ToolBar from "./components/ToolBar";
import UploadButton from "./components/UploadButton";

function App() {
  const handleOnClick = () => {
    alert("You clicked me");
  };
  return (
    <div>
      <div className="container">
        <small>Passing event handler</small>
        <div>
          <button type="button" onClick={handleOnClick}>
            Click me
          </button>
          <button type="button" onClick={() => alert("You clicked me")}>
            Click me
          </button>
        </div>
      </div>

      <div className="container">
        <small>Reading props in event handler</small>
        <div>
          <AlertButton message="uploading image">Upload image</AlertButton>
          <AlertButton message="uploading video">Upload video</AlertButton>
        </div>
      </div>

      <div className="container">
        <small>Passing Handler as prop</small>s
        <div>
          <PlayButton movieName="Fight Club" />
          <UploadButton />
        </div>
      </div>

      <div className="container">
        <small>Naming event handlers props</small>
        <div>
          <ToolBar
            onPlayMusic={() => alert("Playing music")}
            onUploadSong={() => alert("Uploading Song")}
          />
        </div>
      </div>

      <div className="container">
        <small>Event propagation</small>
        <div>
          <Propagation />
        </div>
      </div>

      <div className="container">
        <small>Stop Propagation</small>
        <div>
          <StopPropagation />
        </div>
      </div>

      <div className="container">
        <small>Default Behaivor</small>
        <div>
          <DefaultBehavior />
          <PreventDefault />
        </div>
      </div>
    </div>
  );
}

export default App;
