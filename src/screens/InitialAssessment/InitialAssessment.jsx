import { Button } from "../../components/Button";
import { CheckFill } from "../../icons/CheckFill";
import { EssayQuestion } from "../../components/EssayQuestion";
import { Header } from "../../components/Header";
// import { MultipleChoice } from "../../../components/MultipleChoice";
import { CloseCrossFill } from "../../icons/CloseCrossFill";
import { VuesaxLinearFlag } from "../../icons/VuesaxLinearFlag";
import "./style.css";
import { useState } from "react";
import { FeedbackSentModal } from "../../components/FeedbackSentModal";
import { Modal } from "../../components/Modal";
import { AnswerField } from "../../components/AnswerField";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { EvaluationCard } from "../../components/EvaluationCard";

export const InitialAssessment = () => {
    const [open, setOpen] = useState(true);
    const [sent, setSent] = useState(false);
    const navigate = useNavigate();

    return (
        <>
            {sent && <FeedbackSentModal open={sent} setOpen={setSent} />}
            <Modal open={open} setOpen={setOpen} noClose={true}>
                <div className="feedback-modal modal-content">
                    <div className="modal-header">
                        <p
                            className="modal-title"
                            style={{
                                textAlign: "start",
                            }}
                        >
                            Ingin Mengerjakan Initial Assessment?
                        </p>
                    </div>
                    <div className="modal-body">
                        <p className="modal-text">
                            Apakah kamu ingin mengambil tes awal untuk mengetahui tingkat kemampuan berbahasa Inggrismu?
                        </p>
                        <AnswerField placeholder="Seberapa mahir kamu berbahasa Inggris?" />
                    </div>
                    <div className="modal-footer">
                        <Button
                            hierachy={"primary"}
                            size={"large"}
                            style={{ marginRight: "16px" }}
                            className="modal-button"
                            onClick={() => {
                                setOpen(false);
                            }}
                            type="default"
                            text="Ya"
                        />
                        <Button
                            hierachy={"secondary"}
                            size={"large"}
                            className="modal-button"
                            onClick={() => { toast.success("Selamat bergabung!"); navigate("/") }}
                            type="default"
                            text="Tidak"
                        />
                    </div>
                </div>
            </Modal>
            <div className="reading-result">
                <div className="body">
                    <Header title="Initial Assessment" backUrl="/" />
                    <div className="main">
                        <div className="container">
                            <div className="above-the-fold slide-in">
                                <div className="questions-3">
                                    <img
                                        className="group-3"
                                        alt="Group"
                                        src="/img/group-14.png"
                                    />
                                    <p className="text-wrapper-7">Petunjuk Pengerjaan</p>
                                </div>
                                <EvaluationCard evaluation_text={"Selamat datang di tes awal aplikasi pembelajaran bahasa Inggris kami! Tes ini mengukur empat aspek keterampilan utama: listening, reading, writing, dan speaking. \n\n Listening (Pendengaran): Anda akan mendengarkan audio pendek dan menjawab pertanyaan. Ini menguji kemampuan memahami percakapan dan instruksi dalam bahasa Inggris secara lisan. \n\n Reading (Membaca): Uji kemampuan membaca dengan membaca teks singkat dan menjawab pertanyaan. Ini menilai pemahaman bacaan dan respons terhadap informasi tertulis. \n\n Writing (Menulis): Anda akan merespons prompt dengan menulis. Tes ini mengevaluasi kemampuan menyusun kalimat, menggunakan tata bahasa yang benar, dan menyampaikan ide secara tertulis. \n\n Speaking (Berbicara): Berinteraksi dengan robot melalui suara, merespons prompt atau topik. Ini menguji kemampuan mengucapkan kata-kata, mengartikulasikan ide, dan berkomunikasi verbal. \n\n Tes ini memberikan gambaran menyeluruh tentang kemampuan bahasa Inggris Anda"} bot={false} />
                            </div>
                        </div>
                    </div>
                </div>
                <footer className="footer">
                    <div className="container-3">
                        <Button
                            className="button-5"
                            hierachy="primary"
                            size="large"
                            text="Mulai Tes!"
                            type="default"
                            onClick={() => {
                                toast.success("Selamat, mengerjakan ujian awal!")
                                navigate("/skill-builder/writing?init=true")
                            }}
                        />
                    </div>
                </footer>
            </div>
        </>
    );
};
