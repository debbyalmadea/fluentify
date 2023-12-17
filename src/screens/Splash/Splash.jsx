import React from "react";
import { Button } from "../../components/Button";
import { LoFiUxPagination } from "../../components/LoFiUxPagination";
import "./style.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import bot1 from "../../assets/illusts/bot1.png";
import orgber from "../../assets/illusts/orgber.png";
import { ChevronLeftRegular } from "../../icons/ChevronLeftRegular";
const pages = {
    0: {
        title: "Pembelajaran Komprehensif",
        description: "Fluentify mengasah 4 aspek berbahasa Inggris sekaligus, dari aspek Writing, Reading, Listening, dan Speaking.",
        image: "https://cdn.animaapp.com/projects/6556e0dedaf633747531ba10/releases/655a29648c17a2032c6172f9/img/conversation-amico-1.svg",
    },
    1: {
        title: "Terintegrasi dengan GPT-4",
        description: "Keseluruhan aplikasi Fluentify terintegrasi dengan GPT- 4, membuat konten pembelajaran yang dinamis, personal, dan fleksibel.",
        image: bot1
    },
    2: {
        title: "Umpan Balik Terpersonalisasi",
        description: "Fluentify memberikan umpan balik yang personal dan terukur, sehingga kamu dapat melihat perkembangan kemampuan berbahasamu.",
        image: orgber
    }
}


export const SplashScreen = () => {
    const navigate = useNavigate();
    const [ind, setInd] = useState(0);

    const handleButtonClick = () => {
        setInd((prevInd) => (prevInd + 1));
    };

    const currentPage = pages[ind];

    return (
        <div className="index">
            <div className={`header`}>
                <div className="navigation">
                    {ind !== 0 && <button
                        onClick={() => {
                            setInd((prevInd) => (prevInd - 1));
                        }}
                    >
                        <ChevronLeftRegular
                            className="chevron-left-regular"
                            color="white"
                        />
                    </button>}
                    <div className="text-wrapper">
                        <p>Fluentify</p>
                    </div>
                </div>
            </div>
            <div className="avatar-container">
                <img
                    className="conversation-amico"
                    alt="Conversation amico"
                    src={currentPage.image}
                />
                <div className="text-content">
                    <div className="text-content-2">
                        <div className="text-wrapper-2">{currentPage.title}</div>
                        <p className="p">{currentPage.description}</p>
                    </div>
                </div>
                <div className="lo-fi-UX-pagination-wrapper">
                    {/* You may need to pass the handleButtonClick function to update the index */}
                    <LoFiUxPagination
                        className="lo-fi-UX-pagination-instance"
                        hasRectangle={false}
                        rectangleClassName="design-component-instance-node"
                        rectangleClassNameOverride="lo-fi-UX-pagination-2"
                        variant="slide"
                        index={ind}
                    />
                </div>
                <div className="action">
                    {ind === 2 ? (
                        <Button
                            hierachy={"primary"}
                            size={"large"}
                            className="modal-button"
                            onClick={() => {
                                navigate("/login")
                            }}
                            type="default"
                            text="Mulai Perjalanan!"
                        />
                    ) : (
                        <Button
                            hierachy={"primary"}
                            size={"large"}
                            className="modal-button"
                            onClick={handleButtonClick}
                            type="default"
                            text="Selanjutnya"
                        />
                    )}
                </div>
            </div>
        </div>
    );
};
