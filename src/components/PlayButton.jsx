import PropTypes from "prop-types";
import Button from "./Button";

const PlayButton = ({ movieName }) => {
  const handlePlayClick = () => {
    alert(`Playing ${movieName}`);
  };
  return <Button onClick={handlePlayClick}>Play {movieName}</Button>;
};

PlayButton.propTypes = {
  movieName: PropTypes.string,
};

export default PlayButton;
