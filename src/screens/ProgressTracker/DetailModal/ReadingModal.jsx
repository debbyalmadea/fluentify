import * as PropTypes from "prop-types";
import { Modal } from "../../../components/Modal";
import { useSelector } from "react-redux";
import "./style.css";
import { Expertise } from "../../../components/ExpertiseProgress/Expertise";
import { CircleProgressBar } from "../../../components/CircleProgressBar";

export const ReadingModal = ({ open, setOpen }) => {
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
              Reading
            </p>
          </div>
          <div className="modal-body">
            <Expertise category="Reading" level="Advanced" value={80} />
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
                  text={160}
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
                <CircleProgressBar value={84} text={"84%"} />
              </div>
              <div className="aspect-detail-text-container">
                <p className="placeholder">Jawaban Benar</p>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

ReadingModal.propTypes = {
  open: PropTypes.bool,
  setOpen: PropTypes.func,
  title: PropTypes.string,
  question: PropTypes.string,
};
