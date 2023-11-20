import { Button } from "../../../components/Button";
import { CheckFill } from "../../../icons/CheckFill";
import { EssayQuestion } from "../../../components/EssayQuestion";
import { Header } from "../../../components/Header";
// import { MultipleChoice } from "../../../components/MultipleChoice";
import { CloseCrossFill } from "../../../icons/CloseCrossFill";
import { VuesaxLinearFlag } from "../../../icons/VuesaxLinearFlag";
import "./style.css";
import { CircleProgressBar } from "../../../components/CircleProgressBar";
import { AudioPlayer } from "../../../components/AudioPlayer";
import data from "../../../data/reading_skill_results.json";
import textData from "../../../data/reading_skill_text.json";
import { MultipleChoice } from "../../../components/MultipleChoice";
import { useState } from "react";
import { FeedbackSentModal } from "../../../components/FeedbackSentModal";
import { Modal } from "../../../components/Modal";
import { AnswerField } from "../../../components/AnswerField";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export const ReadingSkillResult = () => {
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
              Reading Skill Builder
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
      <div className="reading-skill-result">
        <div className="body">
          <Header title="Reading Builder: Result" backUrl="/" />
          <div className="main">
            <div className="container">
              <div className="above-the-fold">
                <div className="questions-3">
                  <img
                    className="group-3"
                    alt="Group"
                    src="/img/group-14.png"
                  />
                  <p className="text-wrapper-7">{data.topic}</p>
                </div>
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
                  <div className="container-2">
                    <div className="div-2">
                      <CheckFill
                        className="check-fill-2"
                        icon="/img/icon.svg"
                        iconClassName="check-fill-3"
                      />
                      <div className="text-wrapper-10">
                        {data.total_correct}/{data.total} Benar
                      </div>
                    </div>
                    <div className="div-2">
                      <div className="dot-fill-fill" />
                      <div className="text-wrapper-11">
                        {data.total_unanswered}/{data.total} Kosong
                      </div>
                    </div>
                    <div className="div-2">
                      <CloseCrossFill />
                      <div className="text-wrapper-12">
                        {data.total_incorrect}/{data.total} Salah
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-container">
                <p className="section-title">Teks</p>
                <div className="container">
                  <div className="main">
                    <div className="text">
                      <div className="judul">{textData.title}</div>
                      <p className="isi">
                        {textData.text}
                      </p>
                    </div>
                  </div>
                  <Button
                    hierachy="primary"
                    size="large"
                    type="default"
                    text="Baca teks"
                    onClick={() => navigate("/skill-builder/reading/text-revisit/1")}
                    />
                </div>
              </div>
              <div className="answers-container">
                <p className="section-title">Jawaban</p>
                <div className="container">
                  {data.questions.map((question, index) =>
                    question.type === "multiple_choice" ? (
                      <MultipleChoice
                        key={index}
                        {...question}
                        number={index + 1}
                        total={data.total}
                        questionId={question.id}
                        state={question.is_correct ? "correct" : "wrong"}
                      />
                    ) : (
                      <EssayQuestion
                        key={index}
                        {...question}
                        number={index + 1}
                        questionId={question.id}
                        total={data.total}
                        state={question.is_correct ? "correct" : "wrong"}
                      />
                    )
                  )}
                </div>
              </div>
              {/* <MultipleChoice
              buttonIcon={
                <VuesaxLinearFlag className="vuesax-linear-flag-2-3" />
              }
              className="design-component-instance-node-2"
              state="correct"
            />
            <MultipleChoice
              className="design-component-instance-node-2"
              group="/img/group-12.png"
              override={
                <VuesaxLinearFlag className="vuesax-linear-flag-2-3" />
              }
              state="wrong"
            /> */}
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
                toast.success("Selamat, latihan berhasil diselesaikan!")
                navigate("/")
              }}
            />
          </div>
        </footer>
      </div>
    </>
  );
};
