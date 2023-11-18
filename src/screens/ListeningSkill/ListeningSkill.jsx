// import { useState } from "react";
import { AudioPlayer } from "../../components/AudioPlayer";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import "./style.css";
// import { Modal } from "../../components/Modal";

export const ListeningSkillAudio = () => {
  // const [open, setOpen] = useState(false);
  return (
    <>
      {/* <Modal isOpen={open}>

    </Modal> */}
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
          />
        </footer>
      </div>
    </>
  );
};
