import * as PropTypes from "prop-types";
import { Modal } from "../../../components/Modal";
import { useSelector } from "react-redux";
import "./style.css";
import { Expertise } from "../../../components/ExpertiseProgress/Expertise";
import { CircleProgressBar } from "../../../components/CircleProgressBar";

export const WritingModal = ({ open, setOpen }) => {
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
              Writing
            </p>
          </div>
          <div className="modal-body">
            <Expertise category="Writing" level="Novice" value={50} />
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
                  text={5}
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
                  value={10}
                  overrideColor={{
                    pathColor: "#22C55E",
                    trailColor: "#BBF7D0",
                  }}
                />
              </div>
              <div className="aspect-detail-text-container">
                <p className="placeholder">Idea</p>
                <p className="caption">Novice</p>
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
                  value={10}
                  overrideColor={{
                    pathColor: "#22C55E",
                    trailColor: "#BBF7D0",
                  }}
                />
              </div>
              <div className="aspect-detail-text-container">
                <p className="placeholder">Grammar</p>
                <p className="caption">Novice</p>
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
                  value={8}
                  overrideColor={{
                    pathColor: "#22C55E",
                    trailColor: "#BBF7D0",
                  }}
                />
              </div>
              <div className="aspect-detail-text-container">
                <p className="placeholder">Lexical</p>
                <p className="caption">Novice</p>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

WritingModal.propTypes = {
  open: PropTypes.bool,
  setOpen: PropTypes.func,
  title: PropTypes.string,
  question: PropTypes.string,
};
