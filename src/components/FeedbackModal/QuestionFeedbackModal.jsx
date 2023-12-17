import { useState } from "react";
import { FeedbackSentModal } from "../FeedbackSentModal";
import { Modal } from "../Modal";
import * as PropTypes from "prop-types";
import { VuesaxLinearFlag } from "../../icons/VuesaxLinearFlag";
import { Button } from "../Button";
import { AnswerField } from "../AnswerField";
import { useSelector } from "react-redux";
export const QuestionFeedbackModal = ({
  open,
  setOpen,
  title,
  highlight,
  choices,
}) => {
  const [sent, setSent] = useState(false);
  const openModal = useSelector((state) => state.openModal);
  console.log(openModal);

  return (
    <>
      {sent && <FeedbackSentModal open={sent} setOpen={setSent} />}
      <Modal open={open} setOpen={setOpen}>
        <div className="feedback-modal modal-content">
          <div className="modal-illust">
            <VuesaxLinearFlag />
          </div>
          <div className="modal-header">
            <p
              className="feedback-modal-title modal-title"
              style={{
                textAlign: "start",
              }}
            >
              {title}
            </p>
          </div>
          <div className="modal-body">
            <p className="feedback-modal-text modal-text">
              Apa keluhanmu untuk{" "}
              <span style={{ fontWeight: "bolder" }}>{highlight}</span>
            </p>
            <div className="checkboxes">
              {choices.map((choice, idx) => {
                return (
                  <label key={idx} className="container">
                    <p>{choice}</p>
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                  </label>
                );
              })}
            </div>
            <AnswerField placeholder="Tambahkan komentar..." />
          </div>
          <div className="modal-footer">
            <Button
              hierachy={"primary"}
              size={"large"}
              style={{ marginRight: "16px" }}
              className="modal-button"
              onClick={() => {
                setOpen(false);
                setSent(true);
                setTimeout(() => {
                  setSent(false);
                }, 3000);
              }}
              type="default"
              text="Kirim"
            />
            <Button
              hierachy={"secondary"}
              size={"large"}
              className="modal-button"
              onClick={() => setOpen(false)}
              type="default"
              text="Batal"
            />
          </div>
        </div>
      </Modal>
    </>
  );
};

QuestionFeedbackModal.propTypes = {
  open: PropTypes.bool,
  setOpen: PropTypes.func,
  title: PropTypes.string,
  highlight: PropTypes.string,
  choices: PropTypes.array,
};
