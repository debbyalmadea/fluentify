import { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import * as PropTypes from "prop-types";
const COLOR = {
  INITIAL: "#D1D9E2",
  HIGH: "#22C55E",
  MEDIUM: "#EAB308",
  LOW: "#DC2626",
};

const TRAIL_COLOR = {
  INITIAL: "#D1D9E2",
  HIGH: "#BBF7D0",
  MEDIUM: "#FEF08A",
  LOW: "#FCA5A5",
};

export function CircleProgressBar({ value }) {
  const [pathColor, setPathColor] = useState(COLOR.INITIAL);
  const [trailColor, setTrailColor] = useState(TRAIL_COLOR.INITIAL);
  useEffect(() => {
    if (value < 40) {
      setPathColor(COLOR.LOW);
      setTrailColor(TRAIL_COLOR.LOW);
    } else if (value < 70) {
      setPathColor(COLOR.MEDIUM);
      setTrailColor(TRAIL_COLOR.MEDIUM);
    } else {
      setPathColor(COLOR.HIGH);
      setTrailColor(TRAIL_COLOR.HIGH);
    }
  }, [value]);

  return (
    <div
      style={{
        fontFamily: "Nunito",
        fontSize: "30px",
        fontWeight: "semibold",
      }}
    >
      <CircularProgressbar
        value={value}
        text={value}
        strokeWidth={8}
        styles={buildStyles({
          textColor: pathColor,
          textSize: "30px",
          pathColor: pathColor,
          trailColor: trailColor,
        })}
      />
    </div>
  );
}

CircleProgressBar.defaultProps = {
  value: 0,
};

CircleProgressBar.propTypes = {
  value: PropTypes.number,
};
