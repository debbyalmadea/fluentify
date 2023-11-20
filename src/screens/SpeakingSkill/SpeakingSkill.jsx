import { useState } from "react";
import { MicPlayer } from "../../components/MicPlayer";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import "./style.css";
import { Modal } from "../../components/Modal";
import { Question } from "../../assets/illusts/Question";
import { useNavigate } from "react-router-dom";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

export const SpeakingSkillAudio = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { transcript, resetTranscript } = useSpeechRecognition();

  return (
    <>
      <Modal open={open} setOpen={setOpen}>
        <div className="modal-content">
          <div className="modal-illust">
            <Question />
          </div>
          <div className="modal-header">
            <p className="modal-title">Selesaikan Percakapan?</p>
          </div>
          <div className="modal-body">
            <p className="modal-text">
              Apakah kamu sudah ingin menyelesaikan dan mengevaluasi
              percakapanmu?
            </p>
          </div>
          <div className="modal-footer">
            <Button
              hierachy={"primary"}
              size={"large"}
              style={{ marginRight: "16px" }}
              className="modal-button"
              onClick={() => {
                setOpen(false);
                navigate("/skill-builder/speaking/result");
              }}
              type="default"
              text="Lanjut!"
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
      <div className="listening-skill">
        <div className="body">
          <Header title="Speaking Skill Builder" showAlert />
          <div className="main group">
            <img
              className="freepik-robot-inject"
              alt="Freepik robot inject"
              src="https://cdn.animaapp.com/projects/6556e0dedaf633747531ba10/releases/6559e2c60f6fdccac35426d4/img/freepik--robot--inject-2.png"
            />
            <textarea
              className="user-input-textbox"
              placeholder={`You said:`}
              value={transcript}
              style={{
                fontFamily: "Nunito",
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: "500",
                lineHeight: "22px",
              }}
              readOnly
            />
          </div>
        </div>
        <footer className="footer">
          <MicPlayer
            transcript={transcript}
            resetTranscript={resetTranscript}
            SpeechRecognition={SpeechRecognition}
          />
          <Button
            className="design-component-instance-node"
            hierachy="primary"
            size="large"
            type="default"
            text="Lanjutkan"
            onClick={() => setOpen(true)}
          />
        </footer>
      </div>
    </>
  );
};
