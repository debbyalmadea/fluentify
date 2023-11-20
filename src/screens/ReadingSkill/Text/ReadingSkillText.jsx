import React from "react";
import { Button } from "../../../components/Button";
import { Header } from "../../../components/Header";
import "./style.css";
import data from "../../../data/reading_skill_text.json";
import { useNavigate } from "react-router-dom";

export const ReadingSkillText = ({ revisit }) => {
  const navigate = useNavigate();

  return (
    <div className="reading-text">
      <div className="body">
        <Header
          showAlert={!revisit}
          title="Reading Builder: Text"
          backUrl= {
            revisit ? "/skill-builder/reading/1/result" 
            : "/skill-builder/reading"
          }
        />
        <div className="main">
          <div className="text">
            <div className="judul">{data.title}</div>
            <p className="isi">
              {data.text}
            </p>
          </div>
        </div>
      </div>
      <footer className="footer">
        <Button
          className="button-5"
          hierachy="primary"
          size="large"
          type="default"
          text="Lanjutkan"
          onClick={() => {
            const nextPage = revisit ? "/skill-builder/reading/1/result"
                                      : "/skill-builder/reading/1/question/1"
            navigate(nextPage)
          }}
          />
      </footer>
    </div>
  );
};
