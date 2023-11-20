import { Button } from "../../components/Button";
import { CheckFill } from "../../icons/CheckFill";
import { EssayQuestion } from "../../components/EssayQuestion";
import { Header } from "../../components/Header";
// import { MultipleChoice } from "../../../components/MultipleChoice";
import { CloseCrossFill } from "../../icons/CloseCrossFill";
import { VuesaxLinearFlag } from "../../icons/VuesaxLinearFlag";
import "./style.css";
import { CircleProgressBar } from "../../components/CircleProgressBar";
import { AudioPlayer } from "../../components/AudioPlayer";
import { useState } from "react";
import { FeedbackSentModal } from "../../components/FeedbackSentModal";
import { Modal } from "../../components/Modal";
import { AnswerField } from "../../components/AnswerField";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { EvaluationCard } from "../../components/EvaluationCard";
import data from "../../data/listening_skill_results.json";

export const Login = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [open, setOpen] = useState(false);
    const [sent, setSent] = useState(false);


    const handleButtonClick = (e) => {
        e.preventDefault();
        // Handle button click logic, e.g., validate fields, perform login, etc.
        console.log("Username:", username);
        console.log("Password:", password);
    };

    return (
        <>
            {sent && <FeedbackSentModal open={sent} setOpen={setSent} text="Link reset password berhasil dikirimkan ke email anda!" />}
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
                            Kehilangan password
                        </p>
                    </div>
                    <div className="modal-body">
                        <p className="modal-text">
                            Apa anda ingat email yang anda gunakan untuk mendaftar?
                        </p>
                        {/* <div className="checkboxes">
                            <label className="container">
                                <p>Soal yang diberikan tidak sesuai topik</p>
                                <input type="checkbox" />
                                <span className="checkmark"></span>
                            </label>
                            <label className="container">
                                <p>Bot kurang interaktif</p>
                                <input type="checkbox" />
                                <span className="checkmark"></span>
                            </label>
                        </div> */}
                        <AnswerField placeholder="Email saya..." />
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
                    <Header title="Fluentify" backUrl="/splash" />
                    <div className="main">
                        <div className="container">
                            <div className="above-the-fold">
                                <div className="questions-3">
                                    <p className="text-wrapper-7">Selamat Datang!</p>
                                </div>
                                <div className="low-fi-mobile-cards">
                                    <div className="point-container">
                                        <p className="section-title">Username</p>
                                        <input
                                            type="text"
                                            placeholder="Username"
                                            value={username}
                                            onChange={(e) => setUsername(e.target.value)}
                                            className={"answer-field-small"}
                                        />
                                        <p className="section-title">Password</p>
                                        <input
                                            type="password"
                                            placeholder="Password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            className={"answer-field-small"}
                                        />
                                    </div>
                                </div>
                                <Button
                                    hierachy="primary"
                                    size="large"
                                    type="default"
                                    onClick={() => { toast.success("Selamat datang, " + username + "!"); navigate("/") }}
                                    text="Login"
                                />
                            </div>
                            <div
                                style={{
                                    width: "100px",
                                    height: "10px",
                                }}
                            />
                            <div className="audio-player-container">
                                <Button
                                    className="button-5"
                                    hierachy="primary"
                                    size="large"
                                    text="Belum memiliki akun?"
                                    type="default"
                                    onClick={() => {
                                        navigate("/register")
                                    }}
                                />
                                <Button
                                    className="button-5"
                                    hierachy="secondary"
                                    size="large"
                                    text="Kehilangan Password?"
                                    type="default"
                                    onClick={() => {
                                        setOpen(true)
                                    }}
                                />

                            </div>

                        </div>

                    </div>
                </div>
                <footer className="footer">
                    <div className="container-3">
                    </div>
                </footer>
            </div>
        </>
    );
};
