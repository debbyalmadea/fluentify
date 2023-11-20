import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Modal } from "../../components/Modal";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Question } from "../../assets/illusts/Question";

import './style.css';
import { EssayQuestion } from "../../components/EssayQuestion";
import { useSearchParams } from "react-router-dom";

export const WritingSkill = () => {
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
            <p className="modal-title">{init === null || init === undefined ? "Lanjut ke hasil?" : "Ke bagian selanjutnya?"}</p>
          </div>
          <div className="modal-body">
            <p className="modal-text">
              Kamu tidak bisa balik ke bagian ini, jadi pastikan kamu sudah
              menjawab bagian ini dengan baik!
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
                  navigate("/skill-builder/speaking?init=true");
                  return;
                }
                navigate("/skill-builder/writing/result");
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
      <div className="writing-skill">
        <div className="body">
          <Header title="Writing Skill Builder" showAlert />
          <div className="main">
            <div className="container">
              <EssayQuestion
                number={1}
                total={1}
                question='online education, predominant mode of learning in education'
                state={"default"}>

              </EssayQuestion>
            </div>
          </div>
        </div>
        <footer className="footer">
            <Button
              className="design-component-instance-node"
              hierachy="secondary"
              size="large"
              type="default"
              text="Tanya Bot"
              onClick={() => {
                navigate("/skill-builder/writing/tanya-bot");
              }}
            />
            <Button
              className="design-component-instance-node"
              hierachy="primary"
              size="large"
              type="default"
              text="Selesai"
              onClick={() => setOpen(true)}
            />


        </footer>

      </div>
    </>
  );
};
