import { useState } from "react";
import { AudioPlayer } from "../../components/AudioPlayer";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import "./style.css";
import { Modal } from "../../components/Modal";
import { Question } from "../../assets/illusts/Question";
import { useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

export const ListeningSkillAudio = ({ url }) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
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
            <p className="modal-title">Lanjut ke pertanyaan?</p>
          </div>
          <div className="modal-body">
            <p className="modal-text">
              Kamu tidak bisa balik ke bagian ini, jadi pastikan kamu sudah
              memahami bagian ini dengan baik!
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
                  navigate("/skill-builder/listening/1/question/1?init=true");
                  return;
                }
                navigate("/skill-builder/listening/1/question/1");
                return;
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
          <Header title="Listening Builder: Audio" showAlert />
          <div className="main">
            <AudioPlayer />
          </div>
        </div>
        <footer className="footer">
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
