import * as PropTypes from "prop-types";
import { Modal } from "../../../components/Modal";
import { useSelector } from "react-redux";
import "./style.css";
import { Expertise } from "../../../components/ExpertiseProgress/Expertise";
import { CircleProgressBar } from "../../../components/CircleProgressBar";

export const SpeakingModal = ({ open, setOpen }) => {
  const openModal = useSelector((state) => state.openModal);
  console.log(openModal);

  return (
    <>
      <Modal open={open} setOpen={setOpen}>
        <div className="detail-modal modal-content">
          <div className="detail-modal-illust modal-illust">
            <p
              className="detail-modal-title modal-title"
              style={{
                textAlign: "start",
              }}
            >
              Speaking
            </p>
          </div>
          <div className="modal-body">
            <Expertise category="Speaking" level="Expert" value={60} />
            <p className="h2">Rincian</p>
            <div className="aspect-detail">
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  fontSize: "48px",
                }}
              >
                <CircleProgressBar
                  value={100}
                  text={280}
                  overrideColor={{
                    pathColor: "#2563EB",
                  }}
                />
              </div>
              <div className="aspect-detail-text-container">
                <p className="placeholder">Latihan</p>
              </div>
            </div>
            <div className="aspect-detail">
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  fontSize: "48px",
                }}
              >
                <CircleProgressBar
                  value={98}
                  overrideColor={{
                    pathColor: "#991B1B",
                    trailColor: "#EF4444",
                  }}
                />
              </div>
              <div className="aspect-detail-text-container">
                <p className="placeholder">Pronounciation</p>
                <p className="caption">Expert</p>
              </div>
            </div>
            <div className="aspect-detail">
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  fontSize: "48px",
                }}
              >
                <CircleProgressBar
                  value={96}
                  overrideColor={{
                    pathColor: "#991B1B",
                    trailColor: "#EF4444",
                  }}
                />
              </div>
              <div className="aspect-detail-text-container">
                <p className="placeholder">Grammar</p>
                <p className="caption">Expert</p>
              </div>
            </div>
            <div className="aspect-detail">
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  fontSize: "48px",
                }}
              >
                <CircleProgressBar
                  value={80}
                  overrideColor={{
                    pathColor: "#A855F7",
                    trailColor: "#E9D5FF",
                  }}
                />
              </div>
              <div className="aspect-detail-text-container">
                <p className="placeholder">Fluency</p>
                <p className="caption">Advanced</p>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

SpeakingModal.propTypes = {
  open: PropTypes.bool,
  setOpen: PropTypes.func,
  title: PropTypes.string,
  question: PropTypes.string,
};
