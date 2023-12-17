import { useState } from "react";
import { Button } from "../../components/Button";
import { Choice } from "../../components/Choice";
import { Header } from "../../components/Header";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { reset } from "../../actions";
import { useDispatch } from "react-redux";

export const ReadingSkill = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const TextType = ["Artikel", "Cerita Pendek", "Cerita Panjang"];
  const [selectedType, setSelectedType] = useState(0);

  return (
    <div className="reading-skill">
      <div className="body">
        <Header title="Reading Builder: Choose" />
        <div className="main">
          <div className="judul">Jenis Teks</div>
          <div className="reading-skill-div slide-in">
            {TextType.map((type, index) => (
              <Choice
                key={index}
                className="choice-instance"
                state={index === selectedType ? "selected" : "default"}
                value={(index + 1).toString()}
                label={type}
                onClick={() => setSelectedType(index)}
              />
            ))}
          </div>
        </div>
      </div>
      <footer className="footer">
        <Button
          hierachy="primary"
          size="large"
          type="default"
          text="Lanjutkan"
          onClick={() => {
            dispatch(reset());
            navigate(`/skill-builder/reading/text/${selectedType + 1}`);
          }}
        />
      </footer>
    </div>
  );
};
