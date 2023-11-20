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

export const Register = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmPassword] = useState("");
    const handleButtonClick = (e) => {
        e.preventDefault();
        // Handle button click logic, e.g., validate fields, perform login, etc.
        console.log("Username:", username);
        console.log("Password:", password);
    };

    return (
        <>
            <div className="reading-result">
                <div className="body">
                    <Header title="Fluentify" backUrl="/login" />
                    <div className="main">
                        <div className="container">
                            <div className="above-the-fold slide-in">
                                <div className="questions-3">
                                    <p className="text-wrapper-7">Mari bergabung!</p>
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
                                        <p className="section-title">Email</p>
                                        <input
                                            type="text"
                                            placeholder="Email"
                                            value={email}
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
                                        <p className="section-title">Confirm Password</p>
                                        <input
                                            type="password"
                                            placeholder="Confirm Password"
                                            value={confirmpassword}
                                            onChange={(e) => setUsername(e.target.value)}
                                            className={"answer-field-small"}
                                        />
                                    </div>
                                </div>
                                <Button
                                    hierachy="primary"
                                    size="large"
                                    type="default"
                                    onClick={() => { toast.success("Registrasi berhasil!"); navigate("/initial") }}
                                    text="Register"
                                />
                            </div>
                            <div
                                style={{
                                    width: "100px",
                                    height: "100px",
                                }}
                            />
                            {/* <div className="audio-player-container">
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

                            </div> */}

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
