import { AudioPlayer } from "../../components/AudioPlayer";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import "./style.css";

export const ListeningSkillAudio = () => {
  return (
    <div className="listening-skill">
      <div className="body">
        <Header title="Listening Builder: Audio" />
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
  );
};
