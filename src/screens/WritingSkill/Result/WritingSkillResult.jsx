import { Button } from "../../../components/Button";
import { EssayQuestion } from "../../../components/EssayQuestion";
import { Question } from "../../../components/Question";
import { Header } from "../../../components/Header";
// import { MultipleChoice } from "../../../components/MultipleChoice";
import { VuesaxLinearFlag } from "../../../icons/VuesaxLinearFlag";
import "./style.css";
import { CircleProgressBar } from "../../../components/CircleProgressBar";
import data from "../../../data/listening_skill_results.json";
import { MultipleChoice } from "../../../components/MultipleChoice";
import { useState } from "react";
import { FeedbackSentModal } from "../../../components/FeedbackSentModal";
import { Modal } from "../../../components/Modal";
import { AnswerField } from "../../../components/AnswerField";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { EvaluationCard } from "../../../components/EvaluationCard";

export const WritingSkillResult = ({ url }) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);

  return (
    <>
      {sent && <FeedbackSentModal open={sent} setOpen={setSent} />}
      <Modal open={open} setOpen={setOpen}>
        <div className="feedback-modal modal-content">
          <div className="modal-illust">
            <VuesaxLinearFlag />
          </div>
          <div className="modal-header">
            <p
              className="modal-title"
              style={{
                textAlign: "start",
              }}
            >
              Writing Skill Builder
            </p>
          </div>
          <div className="modal-body">
            <p className="modal-text">
              Apa keluhanmu untuk topik
              <span style={{ fontWeight: "bolder" }}>{data.topic}</span>
            </p>
            <div className="checkboxes">
              <label className="container">
                <p>Soal yang diberikan tidak sesuai topik</p>
                <input type="checkbox" />
                <span className="checkmark"></span>
              </label>
            </div>
            <AnswerField placeholder="Tambahkan komentar..." />
          </div>
          <div className="modal-footer">
            <Button
              hierachy={"primary"}
              size={"large"}
              style={{ marginRight: "16px" }}
              className="modal-button"
              onClick={() => {
                setOpen(false);
                setSent(true);
                setTimeout(() => {
                  setSent(false);
                }, 3000);
              }}
              type="default"
              text="Kirim"
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
      <div className="reading-result">
        <div className="body">
          <Header title="Writing Builder: Result" backUrl={url ?? "/"} />
          <div className="main">
            <div className="container">
              <div className="above-the-fold slide-in">
                <div className="questions-3">
                  <img
                    className="group-3"
                    alt="Group"
                    src="/img/group-14.png"
                  />
                  <p className="text-wrapper-7">{data.topic}</p>
                </div>
                <Question
                  flag={"default"}
                  number={1}
                  total={1}
                  question={"If you won a million dollar lottery, where would you go and why?"}
                />
                <div className="answer">
                  <p className="div">If I won the lottery, I would go to France.</p>
                </div>
                <p className="section-title">Hasil</p>
                <div className="low-fi-mobile-cards">
                  <div
                    style={{
                      width: "100px",
                      height: "100px",
                    }}
                  >
                    <CircleProgressBar value={data.score} />
                  </div>
                  <div className="point-container">
                    <div className="text-wrapper-8">Kamu mendapatkan</div>
                    <div
                      className="point"
                      style={{
                        width: "fit-content",
                      }}
                    >
                      <div className="text-wrapper-9">{data.point} poin</div>
                    </div>
                  </div>
                </div>
                <div className="low-fi-mobile-cards">
                  <div className="low-fi-small-cards">
                    <div
                      style={{
                        width: "300px",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                        }}
                      >
                        <div
                          style={{
                            width: "48px",
                            height: "48px",
                            marginRight: "16px",
                          }}
                        >
                          <CircleProgressBar value={data.score} />
                        </div>
                        <div className="text-wrapper-9">Idea</div>
                      </div>
                      <div className="text-wrapper-9">{data.point} poin</div>
                    </div>
                  </div>
                  <div className="low-fi-small-cards">
                    <div
                      style={{
                        width: "300px",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                        }}
                      >
                        <div
                          style={{
                            width: "48px",
                            height: "48px",
                            marginRight: "16px",
                          }}
                        >
                          <CircleProgressBar value={data.score} />
                        </div>
                        <div className="text-wrapper-9">Grammar</div>
                      </div>
                      <div className="text-wrapper-9">{data.point} poin</div>
                    </div>
                  </div>
                  <div className="low-fi-small-cards">
                    <div
                      style={{
                        width: "300px",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                        }}
                      >
                        <div
                          style={{
                            width: "48px",
                            height: "48px",
                            marginRight: "16px",
                          }}
                        >
                          <CircleProgressBar value={data.score} />
                        </div>
                        <div className="text-wrapper-9">Lexical</div>
                      </div>
                      <div className="text-wrapper-9">{data.point} poin</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="answers-container">
                <p className="section-title">Jawaban</p>
                <div className="container">
                  <EvaluationCard evaluation_text={"Tulisan yang sangat baik! Karanganmu terstruktur, koheren, dan mengalir dengan baik. Walaupun demikian, perhatikan pengejaan dan penggunaan Past Tense di dalam kalimat tulisanmu di masa depan."} />
                  {/* <div className="solution-answer-field">
                    <img
                      className="group"
                      alt="Group"
                      src="/img/group-12.png"
                    />
                    <p className="answer">Great Job!</p>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="footer">
          <div className="container-3">
            <Button
              hierachy="secondary"
              icon={<VuesaxLinearFlag className="vuesax-linear-flag-2-3" />}
              size="large"
              type="icon-only"
              onClick={() => setOpen(true)}
            />
            <Button
              className="button-5"
              hierachy="primary"
              size="large"
              text="Selesai"
              type="default"
              onClick={() => {
                toast.success("Selamat, latihan berhasil diselesaikan!");
                navigate("/");
              }}
            />
          </div>
        </footer>
      </div>
    </>
  );
};
