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
import { MultipleChoice } from "../../../components/MultipleChoice";
import { useState } from "react";
import { FeedbackSentModal } from "../../../components/FeedbackSentModal";
import { Modal } from "../../../components/Modal";
import { AnswerField } from "../../../components/AnswerField";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { EvaluationCard } from "../../../components/EvaluationCard";
import data from "../../../data/listening_skill_results.json";
import { Expertise } from "../../../components/ExpertiseProgress/Expertise";

export const InitialResult = () => {
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const navigate = useNavigate();

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
              Initial Assessment
            </p>
          </div>
          <div className="modal-body">
            <p className="modal-text">
              Apa keluhanmu untuk tes awal ini?
              {/* <span style={{ fontWeight: "bolder" }}>{data.topic}</span> */}
            </p>
            <div className="checkboxes">
              <label className="container">
                <p>Soal yang diberikan tidak sesuai topik</p>
                <input type="checkbox" />
                <span className="checkmark"></span>
              </label>
              <label className="container">
                <p>Jawaban yang diberikan salah</p>
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
          <Header title="Initial Assessment: Result" backUrl="/" />
          <div className="main">
            <div className="container">
              <div className="above-the-fold">
                <div className="questions-3">
                  <img
                    className="group-3"
                    alt="Group"
                    src="/img/group-14.png"
                  />
                  <p className="text-wrapper-7">Initial Assessment</p>
                </div>
                {/* <p className="section-title">Hasil</p>
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
                </div> */}
              </div>
              {/* <div className="audio-player-container">
                <p className="section-title middle">Kamu telah diklasifikasikan sebagai: </p>
                <AudioPlayer />
              </div> */}
              <div className="expertise">
                <p className="section-title">Kamu telah diklasifikan sebagai:</p>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <Expertise category="Writing" level="Novice" value={50} />
                  <Expertise
                    category="Listening"
                    level="Intermediate"
                    value={20}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <Expertise category="Reading" level="Advanced" value={80} />
                  <Expertise category="Speaking" level="Novice" value={40} />
                </div>
              </div>
              <div className="answers-container">
                <p className="section-title">Umpan Balik</p>
                <EvaluationCard evaluation_text={"Selamat atas penyelesaian tes bahasa Inggrismu! \n\n Pencapaianmu menunjukkan kemampuan yang solid, dengan tingkat keahlian menulis pemula (50%), mendengarkan menengah (20%), membaca tingkat lanjut (80%), dan berbicara pemula (40%). \n\n Meskipun masih ada ruang untuk perbaikan, fondasi yang baik terlihat, dan dengan konsistensi dalam latihan, potensimu untuk meningkatkan kemampuan berbahasa Inggrismu sangat besar. \n\n Terus pertahankan semangat belajarmu, dan selamat atas pencapaian yang luar biasa ini!"} />
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
