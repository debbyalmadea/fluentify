import { Button } from "../../../components/Button";
import { Header } from "../../../components/Header";
import "./style.css";
import data from "../../../data/reading_skill_text.json";
import { useNavigate, useParams } from "react-router-dom";
import * as PropTypes from "prop-types";

export const ReadingSkillText = ({ revisit }) => {
  const { id } = useParams();
  const textData = data.datas[id - 1];
  const navigate = useNavigate();

  return (
    <div className="reading-text">
      <div className="body">
        <Header
          showAlert={!revisit}
          title="Reading Builder: Text"
          backUrl={
            revisit
              ? "/skill-builder/reading/1/result"
              : "/skill-builder/reading"
          }
        />
        <div className="main">
          <div className="text">
            <div
              className="judul"
              style={{
                whiteSpace: "unset",
              }}
            >
              {textData.title}
            </div>
            <p className="isi slide-in">{textData.text}</p>
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
            const nextPage = revisit
              ? `/skill-builder/reading/${id}/result`
              : `/skill-builder/reading/${id}/question/1`;
            navigate(nextPage);
          }}
        />
      </footer>
    </div>
  );
};

ReadingSkillText.propTypes = {
  revisit: PropTypes.bool,
};
