import PropTypes from "prop-types";
import Button from "./Button";

const ToolBar = ({ onPlayMusic, onUploadSong }) => {
  return (
    <div>
      <Button onClick={onPlayMusic}>Play Music</Button>
      <Button onClick={onUploadSong}>Upload Song</Button>
    </div>
  );
};

ToolBar.propTypes = {
  onPlayMusic: PropTypes.func,
  onUploadSong: PropTypes.func,
};

export default ToolBar;
