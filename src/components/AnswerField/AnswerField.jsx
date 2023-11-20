/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import { useEffect, useState } from "react";
import "./style.css";

export const AnswerField = (props) => {
  console.log(props);
  const [originalPosition, setOriginalPosition] = useState(0);
  useEffect(() => {
    if (!originalPosition) {
      setOriginalPosition(window.innerHeight);
    }
    const handleResize = () => {
      const footer = document.getElementById("bottom-navigation");
      console.log(footer);
      if (footer) {
        // Update bottom padding of the content when the keyboard is visible
        footer.style.display =
          window.innerHeight < originalPosition ? "none" : "inline-flex";
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("orientationchange", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleResize);
    };
  }, [originalPosition]);
  return <textarea {...props} className={"answer-field " + props.className} />;
};

AnswerField.propTypes = HTMLTextAreaElement.propTypes;
