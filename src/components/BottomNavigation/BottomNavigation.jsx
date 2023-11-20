/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import { VuesaxLinearChart } from "../../icons/VuesaxLinearChart";
import { VuesaxLinearDiagram } from "../../icons/VuesaxLinearDiagram";
import "./style.css";
import { VuesaxLinearHome } from "../../icons/VuesaxLinearHome";
import { VuesaxLinearMessages } from "../../icons/VuesaxLinearMessages";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const BottomNavigation = ({ screen, className }) => {
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

  return (
    <div id="bottom-navigation" className={`bottom-navigation ${className}`}>
      <div className="container">
        <Link to={"/"} className="navigation-base">
          <VuesaxLinearHome
            color={screen === "home" ? "#2563EB" : "white"}
            strokeColor={screen === "home" ? "white" : "#D1D9E2"}
          />
          <div
            style={{
              color: screen === "home" ? "#2563EB" : "#D1D9E2",
            }}
            className={`div screen-${screen}`}
          >
            Home
          </div>
        </Link>
        <Link to={"/progress-tracker"} className="navigation-base">
          <VuesaxLinearDiagram
            color={screen === "progress" ? "#2563EB" : "#D1D9E2"}
          />
          <div className={`div screen-${screen}`}>Progress</div>
        </Link>
        <Link to = {"/leaderboard"} div className="navigation-base">
          <VuesaxLinearChart
            color={screen === "leaderboard" ? "#2563EB" : "white"}
            strokeColor={screen === "leaderboard" ? "white" : "#D1D9E2"}
          />
          <div className={`div screen-0-${screen}`}>Leaderboard</div>
        </Link>
        <Link to={"/chat-bot"} className="navigation-base">
          <VuesaxLinearMessages
            color={screen === "chat-bot" ? "#2563EB" : "white"}
            strokeColor={screen === "chat-bot" ? "white" : "#D1D9E2"}
          />

          <div className={`div screen-1-${screen}`}>Chat Bot</div>
        </Link>
      </div>
    </div>
  );
};

BottomNavigation.propTypes = {
  screen: PropTypes.oneOf(["home", "progress", "chat-bot", "leaderboard"]),
  className: PropTypes.string,
};
