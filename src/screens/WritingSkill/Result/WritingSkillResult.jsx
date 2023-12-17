import { Button } from "../../../components/Button";
import { Question } from "../../../components/Question";
import { Header } from "../../../components/Header";
// import { MultipleChoice } from "../../../components/MultipleChoice";
import { VuesaxLinearFlag } from "../../../icons/VuesaxLinearFlag";
import "./style.css";
import { CircleProgressBar } from "../../../components/CircleProgressBar";
import data from "../../../data/listening_skill_results.json";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { EvaluationCard } from "../../../components/EvaluationCard";
import * as PropTypes from "prop-types";
import { QuestionFeedbackModal } from "../../../components/FeedbackModal/QuestionFeedbackModal";

export const WritingSkillResult = ({ url }) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState();

  return (
    <>
      <QuestionFeedbackModal
        open={open}
        setOpen={setOpen}
        choices={open ? open.choices : []}
        highlight={open ? open.highlight : ""}
        title={open ? open.title : ""}
      />
      <div className="writing-result">
        <div className="body">
          <Header title="Writing Builder: Result" backUrl={url ?? "/"} />
          <div className="main">
            <div className="container">
              <div className="above-the-fold slide-in">
                <div className="questions-3">
                  <img
                    className="group-3"
                    alt="Group"
                    src="/img/freepik-speech-bubble-inject-252.png"
                  />
                  <p className="text-wrapper-7">{data.topic}</p>
                </div>
                <Question
                  flag={"default"}
                  number={1}
                  total={1}
                  question={
                    "If you won a million dollar lottery, would you still be in school?"
                  }
                />
                <div className="answer">
                  <p className="writing-skill-result-div">
                    If I won the lottery, I would go to France.
                  </p>
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
                      <div className="text-wrapper-9">12 poin</div>
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
                        <div className="writing-result-text-wrapper">Idea</div>
                      </div>
                      <div className="writing-result-text-wrapper">
                        {data.point} poin
                      </div>
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
                        <div className="writing-result-text-wrapper">
                          Grammar
                        </div>
                      </div>
                      <div className="writing-result-text-wrapper">
                        {data.point} poin
                      </div>
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
                        <div className="writing-result-text-wrapper">
                          Lexical
                        </div>
                      </div>
                      <div className="writing-result-text-wrapper">
                        {data.point} poin
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="answers-container">
                <p className="section-title">Jawaban</p>
                <div className="container">
                  <EvaluationCard
                    evaluation_text={
                      "Tulisan yang sangat baik! Karanganmu terstruktur, koheren, dan mengalir dengan baik. Walaupun demikian, perhatikan pengejaan dan penggunaan Past Tense di dalam kalimat tulisanmu di masa depan."
                    }
                  />
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
              onClick={() =>
                setOpen({
                  title: "Writing Skill Builder",
                  highlight: "topik " + data.topic,
                  choices: [
                    "Soal yang diberikan tidak sesuai topik",
                    "Teks tidak sesuai dengan topik",
                    "Teks yang diberikan sulit dimengerti",
                  ],
                })
              }
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

WritingSkillResult.propTypes = {
  url: PropTypes.string,
};
