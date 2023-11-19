/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import { VuesaxLinearBook } from "../../icons/VuesaxLinearBook";
import { VuesaxLinearHeadphone } from "../../icons/VuesaxLinearHeadphone";
import { VuesaxLinearMicrophone } from "../../icons/VuesaxLinearMicrophone";
import { VuesaxLinearRulerPen } from "../../icons/VuesaxLinearRulerPen";
import "./style.css";
import { CircleProgressBar } from "../CircleProgressBar";

export const HistoryCard = ({ category, className, score, point, topic }) => {
  return (
    <div className={`history-card ${className}`}>
      <div className="frame">
        <div className="listening-2">
          <img
            className={`freepik-speech ${category}`}
            alt="Freepik speech"
            src={`/img/history-card-${category}.png`}
          />
          {category === "listening" && (
            <VuesaxLinearHeadphone className="instance-node-2" color="white" />
          )}

          {category === "writing" && (
            <VuesaxLinearRulerPen className="instance-node-2" color="white" />
          )}

          {category === "reading" && (
            <VuesaxLinearBook className="instance-node-2" color="white" />
          )}

          {category === "speaking" && (
            <VuesaxLinearMicrophone className="instance-node-2" color="white" />
          )}
        </div>
        <div className="frame-2">
          <div className="text-wrapper">Topik:</div>
          <div className="lorem-ipsum-dolor">
            {["listening", "reading", "speaking"].includes(category) && (
              <p className="p">{topic}</p>
            )}

            {category === "writing" && <>Education</>}
          </div>
        </div>
      </div>
      <div className="frame-3">
        <div
          style={{
            width: "32px",
            height: "32px",
            fontSize: "32px",
          }}
        >
          <CircleProgressBar value={score} />
        </div>
        <div className="low-fi-button">
          <div className="text-wrapper-2">{point} poin</div>
        </div>
      </div>
    </div>
  );
};

HistoryCard.propTypes = {
  category: PropTypes.oneOf(["writing", "speaking", "listening", "reading"]),
  className: PropTypes.string,
  score: PropTypes.number,
  point: PropTypes.number,
  topic: PropTypes.string,
};
