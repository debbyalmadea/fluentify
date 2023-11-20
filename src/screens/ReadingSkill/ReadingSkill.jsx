import React, { useState } from "react";
import { Button } from "../../components/Button";
import { Choice } from "../../components/Choice";
import { Header } from "../../components/Header";
import "./style.css";
import { useNavigate } from "react-router-dom";

export const ReadingSkill = () => {
  const navigate = useNavigate();
  const TextType = ["Artikel", "Cerita Pendek", "Cerita Panjang"];
  const [selectedType, setSelectedType] = useState(0);

  return (
    <div className="reading-skill">
      <div className="body">
        <Header title="Reading Builder: Choose" />
        <div className="main">
          <div className="judul">Jenis Teks</div>
          <div className="div">
            {TextType.map((type, index) => (
              <Choice
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
          onClick={() => navigate("/skill-builder/reading/text/1")}
          />
      </footer>
    </div>
  );
};
