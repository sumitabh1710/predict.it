import React, { useState } from "react";
import "./ToggleButton.css";
import { useEffect } from "react";

const ToggleButton = () => {
  const [toggleClicked, setToggleClicked] = useState(false);

  useEffect(() => {
    const toggle_switch = document.getElementById("toggle_switch");
    if (toggleClicked) {
      toggle_switch.style.left = "23px";
    } else {
      toggle_switch.style.left = "3px";
    }
  }, [toggleClicked]);

  return (
    <div
      className="toggle_button"
      onClick={() => setToggleClicked(!toggleClicked)}
    >
      <div className="toggle_switch" id="toggle_switch"></div>
    </div>
  );
};

export default ToggleButton;
