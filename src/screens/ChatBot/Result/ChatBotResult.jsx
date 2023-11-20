import { Button } from "../../../components/Button";
import { Header } from "../../../components/Header";
// import { MultipleChoice } from "../../../components/MultipleChoice";
import { VuesaxLinearFlag } from "../../../icons/VuesaxLinearFlag";
import "./style.css";
import { useState } from "react";
import { FeedbackSentModal } from "../../../components/FeedbackSentModal";
import { Modal } from "../../../components/Modal";
import { AnswerField } from "../../../components/AnswerField";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const ChatBotResult = () => {
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
              className="feedback-modal-title modal-title"
              style={{
                textAlign: "start",
              }}
            >
              Chat Bot
            </p>
          </div>
          <div className="modal-body">
            <p className="feedback-modal-text modal-text">
              Apa keluhanmu untuk
              <span style={{ fontWeight: "bolder" }}>Chat Bot</span>
            </p>
            <div className="checkboxes">
              <label className="container">
                <p>Percakapan bot tidak sesuai topik</p>
                <input type="checkbox" />
                <span className="checkmark"></span>
              </label>
            </div>
            <div className="checkboxes">
              <label className="container">
                <p>Respon bot terlalu lama</p>
                <input type="checkbox" />
                <span className="checkmark"></span>
              </label>
            </div>
            <div className="checkboxes">
              <label className="container">
                <p>Hasil evaluasi tidak sesuai</p>
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
      <div className="chat-bot-result">
        <div className="body">
          <Header title="Listening Builder: Result" backUrl="/" />
          <div className="main">
            <div className="container">
              <div className="evaluation">
                <div className="text-wrapper">Relevansi</div>
                <p className="div">
                  Jawaban yang diberikan pengguna sangat relevan dengan
                  pertanyaan
                </p>
              </div>
              <div className="evaluation">
                <div className="text-wrapper">Keterbacaan</div>
                <p className="div">
                  Kalimat yang digunakan pengguna cukup panjang tetapi masih
                  dapat dipahami dengan mudah dan baik
                </p>
              </div>
              <div className="evaluation">
                <div className="text-wrapper">Tata kalimat</div>
                <p className="div">
                  Kalimat yang digunakan pengguna sudah memiliki tata kalimat
                  yang baik
                </p>
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
