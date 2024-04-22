import PropTypes from "prop-types";

const AlertButton = ({ message, children }) => {
  return (
    <div>
      <button type="button" onClick={() => alert(message)}>
        {children}
      </button>
    </div>
  );
};

AlertButton.propTypes = {
  message: PropTypes.string,
  children: PropTypes.string,
};

export default AlertButton;
