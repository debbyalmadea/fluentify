import { Button } from "../../../components/Button";
import { Header } from "../../../components/Header";
// import { MultipleChoice } from "../../../components/MultipleChoice";
import { VuesaxLinearFlag } from "../../../icons/VuesaxLinearFlag";
import "./style.css";
import { CircleProgressBar } from "../../../components/CircleProgressBar";
import { AudioPlayer } from "../../../components/AudioPlayer";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { EvaluationCard } from "../../../components/EvaluationCard";
import data from "../../../data/listening_skill_results.json";
import * as PropTypes from "prop-types";
import { QuestionFeedbackModal } from "../../../components/FeedbackModal/QuestionFeedbackModal";

export const SpeakingSkillResult = ({ url }) => {
  const [open, setOpen] = useState();
  const navigate = useNavigate();

  return (
    <>
      <QuestionFeedbackModal
        open={open}
        setOpen={setOpen}
        choices={open ? open.choices : []}
        highlight={open ? open.highlight : ""}
        title={open ? open.title : ""}
      />
      <div className="reading-result">
        <div className="body">
          <Header title="Speaking Builder: Result" backUrl={url ?? "/"} />
          <div className="main">
            <div className="container">
              <div className="above-the-fold slide-in">
                <div className="questions-3">
                  <img
                    className="group-3"
                    alt="Group"
                    src="/img/freepik-speech-bubble-inject-170.png"
                  />
                  <p className="text-wrapper-7">{data.topic}</p>
                </div>
                <p className="section-title">Hasil</p>
                <div className="low-fi-mobile-cards">
                  <div
                    style={{
                      width: "100px",
                      height: "100px",
                    }}
                  >
                    <CircleProgressBar value={95} />
                  </div>
                  <div className="point-container">
                    <div className="text-wrapper-8">Kamu mendapatkan</div>
                    <div
                      className="point"
                      style={{
                        width: "fit-content",
                      }}
                    >
                      <div className="text-wrapper-9">{10} poin</div>
                    </div>
                  </div>
                </div>

                <div className="low-fi-mobile-cards">
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
                        <CircleProgressBar value={70} />
                      </div>
                      <div className="text-wrapper-9">Pronunciation</div>
                    </div>
                    <div className="text-wrapper-9">{70} poin</div>
                  </div>
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
                        <CircleProgressBar value={80} />
                      </div>
                      <div className="text-wrapper-9">Grammar</div>
                    </div>
                    <div className="text-wrapper-9">{80} poin</div>
                  </div>
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
                        <CircleProgressBar value={90} />
                      </div>
                      <div className="text-wrapper-9">Fluency</div>
                    </div>
                    <div className="text-wrapper-9">{80} poin</div>
                  </div>
                </div>
              </div>
              <div className="audio-player-container slide-in">
                <p className="section-title">Rekaman Pembicaraan</p>
                <AudioPlayer />
              </div>
              <div className="answers-container">
                <p className="section-title">Umpan Balik</p>
                <EvaluationCard
                  evaluation_text={
                    "Kamu berhasil menyelesaikan tes ini dengan baik! Percakapan berjalan dengan lancar, layaknya penutur asli."
                  }
                />
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
                  title: "Speaking Skill Builder",
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

SpeakingSkillResult.propTypes = {
  url: PropTypes.string,
};
