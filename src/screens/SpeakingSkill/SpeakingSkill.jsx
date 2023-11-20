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
import botspek from "../../../public/img/botspek.png";
import { useSearchParams } from "react-router-dom";

export const SpeakingSkillAudio = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { transcript, resetTranscript } = useSpeechRecognition();
  let [searchParams, setSearchParams] = useSearchParams();
  let init = searchParams.get("init");

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
            <p
              className="modal-text"
              style={{
                textAlign: "center",
              }}
            >
              Apakah kamu sudah ingin menyelesaikan percakapanmu?
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
                if (init) {
                  navigate("/skill-builder/listening?init=true");
                  return;
                }
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
              src={botspek}
            />
            <textarea
              className="user-input-textbox"
              placeholder={`You said:`}
              value={transcript}
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
