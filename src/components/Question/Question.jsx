import * as PropTypes from "prop-types";
import "./style.css";
import { VuesaxLinearFlag } from "../../icons/VuesaxLinearFlag";
import { Modal } from "../Modal";
import { useState } from "react";
import { Button } from "../Button";
import { AnswerField } from "../AnswerField";
import { FeedbackSentModal } from "../FeedbackSentModal";

export const Question = ({
  title = "Feedback",
  number,
  total,
  question,
  flag,
}) => {
  console.log(question);
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);

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
              Apa keluhanmu untuk soal{" "}
              <span style={{ fontWeight: "bolder" }}>{question}</span>
            </p>
            <div className="checkboxes">
              <label className="container">
                <p>Solusi yang diberikan salah</p>
                <input type="checkbox" />
                <span className="checkmark"></span>
              </label>
              <label className="container">
                <p>Jawaban saya seharusnya benar</p>
                <input type="checkbox" />
                <span className="checkmark"></span>
              </label>
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
      <div className="question">
        <div className="question-text-wrapper">
          Soal {number}/{total}
        </div>
        <p className="question-div">{question}</p>
        {flag && (
          <button className="flag" onClick={() => setOpen(true)}>
            <VuesaxLinearFlag />
          </button>
        )}
      </div>
    </>
  );
};

Question.propTypes = {
  number: PropTypes.string,
  total: PropTypes.number,
  question: PropTypes.string,
  flag: PropTypes.bool,
  title: PropTypes.string,
};
