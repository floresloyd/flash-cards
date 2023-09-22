/* eslint-disable react/prop-types */
import "bootstrap/dist/css/bootstrap.min.css"; // BOOTSTRAP CSS
import "../css/Text.css"; // Card css
import { useState } from "react";

const Text = (props) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const toggleCard = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className={`text-box ${props.difficulty} container d-flex justify-content-center align-items-center`}
      onClick={toggleCard}
    >
      <div className={isFlipped ? "text-clicked" : "text-unclicked"}>
        {" "}
        {isFlipped ? props.answer : props.question}{" "}
      </div>
    </div>
  );
};

export default Text;
