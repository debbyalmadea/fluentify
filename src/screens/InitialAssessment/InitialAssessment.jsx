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
                            Ingin Mengerjakan Initial Assessment
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
                            <div className="above-the-fold">
                                <div className="questions-3">
                                    <img
                                        className="group-3"
                                        alt="Group"
                                        src="/img/group-14.png"
                                    />
                                    <p className="text-wrapper-7">Petunjuk Pengerjaan</p>
                                </div>
                                <EvaluationCard evaluation_text={""} bot={false} />
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
