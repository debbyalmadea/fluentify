import * as PropTypes from "prop-types";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { VuesaxLinearRulerPen } from "../../icons/VuesaxLinearRulerPen";
import { Writing } from "../../icons/Writing";
import { VuesaxLinearHeadphone } from "../../icons/VuesaxLinearHeadphone";
import { VuesaxLinearBook } from "../../icons/VuesaxLinearBook";
import { Listening } from "../../icons/Listening/Listening";
import { VuesaxLinearMicrophone } from "../../icons/VuesaxLinearMicrophone";
import { Reading } from "../../icons/Reading/Reading";
import { Speaking } from "../../icons/Speaking";
import "./style.css";
const COLOR = {
  NOVICE: "#22C55E",
  INTERMEDIATE: "#F97316",
  ADVANCED: "#A855F7",
  EXPERT: "#991B1B",
};

const TRAIL_COLOR = {
  NOVICE: "#BBF7D0",
  INTERMEDIATE: "#FED7AA",
  ADVANCED: "#E9D5FF",
  EXPERT: "#EF4444",
};

const TEXT_COLOR = {
  NOVICE: "#16A34A",
  INTERMEDIATE: "#EA580C",
  ADVANCED: "#9333EA",
  EXPERT: "#991B1B",
};

const ACCENT_COLOR = {
  NOVICE: "#4ADE80",
  INTERMEDIATE: "#FB923C",
  ADVANCED: "#C084FC",
  EXPERT: "#EF4444",
};

export const Expertise = ({ category, level, value, onClick }) => {
  return (
    <button
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
        flex: "1 0 0",
        ...(onClick && { cursor: "pointer" }),
      }}
      className="expertise-slide-in slide-in"
      onClick={onClick}
    >
      <div
        style={{
          fontFamily: "Nunito",
          fontSize: "30px",
          fontWeight: "semibold",
          position: "relative",
          width: "100px",
          height: "100px",
        }}
      >
        <CircularProgressbar
          value={value}
          text={value}
          strokeWidth={8}
          styles={buildStyles({
            textColor: TEXT_COLOR[level.toUpperCase()],
            textSize: "30px",
            pathColor: COLOR[level.toUpperCase()],
            trailColor: TRAIL_COLOR[level.toUpperCase()],
          })}
        />
        <div
          style={{
            display: "flex",
            width: "60px",
            height: "60px",

            padding: "16px 20px",
            flexDirection: "column",
            alignItems: "center",
            gap: "10px",
            position: "absolute",
            left: "20px",
            top: "22px",

            borderRadius: "100px",
            background: TEXT_COLOR[level.toUpperCase()],
            overflow: "clip",
          }}
        >
          <div
            style={{
              position: "absolute",
              left: "-7px",
              top: "10px",
            }}
          >
            {category === "Writing" && (
              <Writing
                color={COLOR[level.toUpperCase()]}
                accent={ACCENT_COLOR[level.toUpperCase()]}
              />
            )}
            {category === "Listening" && (
              <Listening
                color={COLOR[level.toUpperCase()]}
                accent={ACCENT_COLOR[level.toUpperCase()]}
              />
            )}
            {category === "Reading" && (
              <Reading
                color={COLOR[level.toUpperCase()]}
                accent={ACCENT_COLOR[level.toUpperCase()]}
              />
            )}
            {category === "Speaking" && (
              <Speaking
                color={COLOR[level.toUpperCase()]}
                accent={ACCENT_COLOR[level.toUpperCase()]}
              />
            )}
          </div>
          <div
            style={{
              position: "absolute",
              zIndex: 10,
            }}
          >
            {category === "Writing" && <VuesaxLinearRulerPen color="#FFF" />}
            {category === "Listening" && <VuesaxLinearHeadphone color="#FFF" />}
            {category === "Speaking" && <VuesaxLinearMicrophone color="#FFF" />}
            {category === "Reading" && <VuesaxLinearBook color="#FFF" />}
          </div>
        </div>
      </div>
      <p
        style={{
          color: "#000",

          /* Fluentify/Text/p1 */
          fontFamily: "Nunito",
          fontSize: "16px",
          fontStyle: "normal",
          fontWeight: 400,
          lineHeight: "24px" /* 150% */,
        }}
      >
        {level}
      </p>
    </button>
  );
};

Expertise.defaultProps = {
  category: "Writing",
  level: "Novice",
};

Expertise.propTypes = {
  category: PropTypes.string,
  level: PropTypes.string,
  value: PropTypes.number,
  onClick: PropTypes.func,
};
