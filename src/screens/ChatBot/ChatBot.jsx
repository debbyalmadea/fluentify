import { useState } from "react";
import { AnswerField } from "../../components/AnswerField";
import { BottomNavigation } from "../../components/BottomNavigation";
import { Button } from "../../components/Button";
import { Chats } from "../../components/Chats/Chats";
import { Header } from "../../components/Header";
import "./style.css";
import { Modal } from "../../components/Modal";
import { Warning } from "../../assets/illusts";
import { Question } from "../../assets/illusts/Question";
import { useNavigate } from "react-router-dom";

const chatsDummy = [
  {
    role: "bot",
    text: "Hello, I'm Fluenty Bot! I'm here to help you practice your English speaking skills. Let's get started!",
  },
  {
    role: "user",
    text: "Hi there! I wanted to ask about the role of education in today's world. How important is it?",
  },
  {
    role: "bot",
    text: "Education is paramount in shaping individuals and societies. What specifically intrigues you about its importance in today's context?",
  },
  // {
  //   role: "user",
  //   text: "I'm curious about the key benefits of education. What do you think are the most significant ones?",
  // },
  // {
  //   role: "bot",
  //   text: "Great question! Education offers a multitude of benefits. Beyond knowledge acquisition, it fosters critical thinking, problem-solving, and equips individuals with skills necessary for navigating modern challenges. Have you noticed any particular benefits of education in your life?",
  // },
  // {
  //   role: "user",
  //   text: "Definitely! Education has opened up career opportunities for me. But how do you think technology has influenced education lately?",
  // },
  // {
  //   role: "bot",
  //   text: "Technology has revolutionized education. From online courses to interactive platforms, technology has made learning more accessible and personalized. But do you think traditional classroom learning will ever become obsolete with the rise of online education?",
  // },
  // {
  //   role: "user",
  //   text: "That's an interesting point! I believe both traditional and online methods have their merits. The physical classroom facilitates interaction, but online learning offers flexibility. What's your take on ensuring equal access to quality education for everyone?",
  // },
  // {
  //   role: "bot",
  //   text: "Absolutely, ensuring equal access to quality education is crucial. Efforts should focus on addressing affordability, improving infrastructure, and fostering inclusivity. What do you think are the most significant barriers to achieving equal access to education?",
  // },
  // {
  //   role: "user",
  //   text: "I think financial constraints and lack of proper infrastructure in certain areas are major barriers. Leveraging technology might help bridge this gap. How can technology play a role in providing equal educational opportunities?",
  // },
  // {"user": "Chat Bot", "text": "Technology indeed has immense potential to democratize education. It can provide educational resources to remote or disadvantaged areas, breaking geographical barriers. But, in your opinion, what steps should governments or organizations take to effectively utilize technology for this purpose?"},
  // {"user": "User", "text": "Governments and organizations should collaborate to invest in technological infrastructure and create educational programs catering to diverse learning needs. It's about combining resources for broader impact. What's your view on the future of education considering these advancements?"},
  // {"user": "Chat Bot", "text": "I believe the future of education will blend traditional and online methods, leveraging technology for personalized learning experiences. Collaboration and innovation will shape an inclusive and accessible educational landscape. What further changes or improvements do you think are needed in the education sector?"},
  // {"user": "User", "text": "Greater emphasis on practical skills, adapting curriculum to evolving needs, and ensuring inclusivity for students of all backgrounds are crucial steps. Education needs to evolve with the changing world. What are your thoughts?"},
  // {"user": "Chat Bot", "text": "I completely agree! Evolving education to meet the demands of a dynamic world is essential. It has been enlightening discussing these aspects with you. Education indeed plays a pivotal role in shaping our future. If you have more thoughts or questions, feel free to share!"},
  // {"user": "User", "text": "Absolutely! Thank you for this insightful conversation. I'll definitely reach out if I have more questions in the future."},
  // {"user": "Chat Bot", "text": "You're welcome! I'm here to help anytime. Have a great day ahead!"}
];

export const ChatBot = () => {
  const [chats, setChats] = useState(chatsDummy);
  const [inputText, setInputText] = useState("");
  const [openResetModal, setOpenResetModal] = useState(false);
  const [openContinueModal, setOpenContinueModal] = useState(false);
  const navigate = useNavigate();

  console.log(inputText);
  return (
    <>
      <Modal open={openResetModal} setOpen={setOpenResetModal}>
        <div className="modal-content">
          <div className="modal-illust">
            <Warning />
          </div>
          <div className="modal-header">
            <p className="modal-title">Reset Chat?</p>
          </div>
          <div className="modal-body">
            <p
              className="modal-text"
              style={{
                textAlign: "center",
              }}
            >
              Jika reset, seluruh percakapan yang kamu lakukan akan dihapus dan
              dimulai kembali dari awal
            </p>
          </div>
          <div className="modal-footer">
            <Button
              hierachy={"primary"}
              size={"large"}
              style={{ marginRight: "16px" }}
              className="modal-button modal-button__back"
              onClick={() => {
                setChats([
                  {
                    role: "bot",
                    text: "Hello, I'm Fluenty Bot! I'm here to help you practice your English speaking skills. Let's get started!",
                  },
                ]);
                setOpenResetModal(false);
              }}
              type="default"
              text="Reset"
            />
            <Button
              hierachy={"secondary"}
              size={"large"}
              className="modal-button"
              onClick={() => setOpenResetModal(false)}
              type="default"
              text="Batal"
            />
          </div>
        </div>
      </Modal>
      <Modal open={openContinueModal} setOpen={setOpenContinueModal}>
        <div className="modal-content">
          <div className="modal-illust">
            <Question />
          </div>
          <div className="modal-header">
            <p className="modal-title">Lanjut ke bagian evaluasi?</p>
          </div>
          <div className="modal-body">
            <p className="modal-text">
              Kamu tidak bisa balik ke bagian ini, jadi pastikan kamu sudah
              memahami bagian ini dengan baik!
            </p>
          </div>
          <div className="modal-footer">
            <Button
              hierachy={"primary"}
              size={"large"}
              style={{ marginRight: "16px" }}
              className="modal-button"
              onClick={() => {
                setOpenContinueModal(false);
                navigate("/chat-bot/result");
              }}
              type="default"
              text="Lanjut!"
            />
            <Button
              hierachy={"secondary"}
              size={"large"}
              className="modal-button"
              onClick={() => setOpenContinueModal(false)}
              type="default"
              text="Batal"
            />
          </div>
        </div>
      </Modal>
      <div className="chat-bot-chat">
        <div className="body">
          <Header
            title="Chat Bot: Chat"
            showAlert
            warningText={
              "Jika keluar, percakapan yang telah kamu lakukan tidak tersimpan"
            }
          />
          <div className="main">
            <Chats chats={chats} />
          </div>
        </div>
        <footer className="chat-bot-footer">
          <div className="message-input">
            <button onClick={() => setOpenResetModal(true)}>
              <img className="icon" alt="Icon" src="/img/icon-1.svg" />
            </button>
            <AnswerField
              placeholder="Tanya bot"
              onChange={(e) => setInputText(e.target.value)}
            />
            <button
              onClick={() => {
                setChats([
                  ...chats,
                  {
                    role: "user",
                    text: "I'm curious about the key benefits of education. What do you think are the most significant ones?",
                  },
                  {
                    role: "bot",
                    text: "Loading...",
                  },
                ]);
                setTimeout(() => {
                  setChats([
                    ...chats,
                    {
                      role: "user",
                      text: "I'm curious about the key benefits of education. What do you think are the most significant ones?",
                    },
                    {
                      role: "bot",
                      text: "Great question! Education offers a multitude of benefits. Beyond knowledge acquisition, it fosters critical thinking, problem-solving, and equips individuals with skills necessary for navigating modern challenges. Have you noticed any particular benefits of education in your life?",
                    },
                  ]);
                }, 2000);
              }}
            >
              <img className="img" alt="Icon" src="/img/icon.svg" />
            </button>
          </div>
          <Button
            hierachy="primary"
            size="large"
            text="Evaluasi"
            type="default"
            onClick={() => {
              setOpenContinueModal(true);
            }}
          />
        </footer>
        <BottomNavigation screen="chat-bot" />
      </div>
    </>
  );
};
