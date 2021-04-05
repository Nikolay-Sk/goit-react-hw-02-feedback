import PropTypes from "prop-types";
import style from "./FeedbackOptions.module.css";

function FeedbackOptions({ options, onClickFeedback }) {
  return options.map((option) => (
    <button
      type="button"
      className={style.button}
      key={option}
      onClick={() => onClickFeedback(option)}
    >
      {option}
    </button>
  ));
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
