import { EssayQuestion } from "../../../components/EssayQuestion";
import { MultipleChoice } from "../../../components/MultipleChoice";
import { Button } from "../../../components/Button";
import { Header } from "../../../components/Header";
import "./style.css";
import data from "../../../data/listening_skill_questions.json";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Question } from "../../../assets/illusts/Question";
import { Modal } from "../../../components/Modal";
// import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
export const ListeningSkillQuestions = ({ url }) => {
  // const reduxAnswers = useSelector((state) => state.answers);
  const { number } = useParams();
  const question = data.questions[number - 1];
  const progressBarRef = useRef();
  const navigate = useNavigate();
  const reduxAnswers = useSelector((state) => state.answers);
  const totalAnswered = Object.keys(reduxAnswers).length;
  const [open, setOpen] = useState(false);
  let [searchParams, setSearchParams] = useSearchParams();
  let init = searchParams.get("init");

  useEffect(() => {
    progressBarRef.current.max = data.total;
    progressBarRef.current.value = totalAnswered;
    progressBarRef.current.style.setProperty(
      "--range-progress",
      `${(progressBarRef.current.value / data.total) * 100}%`
    );
  }, [totalAnswered]);

  return (
    <>
      <Modal open={open} setOpen={setOpen}>
        <div className="modal-content">
          <div className="modal-illust">
            <Question />
          </div>
          <div className="modal-header">
            <p className="modal-title">Lanjut ke hasil?</p>
          </div>
          <div className="modal-body">
            <p
              className="modal-text"
              style={{
                textAlign: "center",
              }}
            >
              Kamu tidak bisa balik ke bagian ini, jadi pastikan kamu sudah
              menjawab bagian ini dengan baik!
            </p>
          </div>
          <div className="modal-footer">
            <Button
              hierachy={"primary"}
              size={"large"}
              style={{ marginRight: "16px" }}
              className="modal-button"
              onClick={() => {
                setOpen(false);
                if (init && init.length !== 0 && init != "null") {
                  navigate("/initial/result");
                  return;
                }
                navigate("/skill-builder/listening/1/result");
                return;
              }}
              type="default"
              text="Lanjut!"
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
      <div className="listening-skill-question">
        <div className="body">
          <Header
            title="Listening Builder: Question"
            showAlert={number == 1}
            backUrl={
              number == 1
                ? "/"
                : `/skill-builder/listening/1/question/${+number - 1}?init=` +
                  init
            }
          />
          <div className="main">
            <div className="progress">
              <input type="range" ref={progressBarRef} />
              <div className="text-wrapper-2">
                {number}/{data.total}
              </div>
            </div>
            <div className="container slide-in">
              {question.type === "multiple_choice" ? (
                <MultipleChoice
                  number={number}
                  total={data.total}
                  question={question.question}
                  answers={question.answers}
                  questionId={question.id}
                />
              ) : (
                <EssayQuestion
                  number={number}
                  total={data.total}
                  question={question.question}
                  questionId={question.id}
                  state={"default"}
                />
              )}
              {/* {data.questions.map((question, index) =>
              question.type === "multiple_choice" ? (
                <MultipleChoice
                  key={index}
                  className="multiple-choice-instance"
                  text="Soal 2/5"
                  text1="Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
                />
              ) : (
                <EssayQuestion
                  key={index}
                  answerFieldAnswerFieldClassName="essay-3"
                  answerFieldText="Ketik jawaban kamu..."
                  className="essay"
                  divClassName="essay-2"
                  questionsClassName="listening-question-instance"
                  state="default"
                  text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."
                />
              )
            )} */}
            </div>
          </div>
        </div>
        <footer className="footer">
          {data.total == number ? (
            <>
              {number > 1 && (
                <Button
                  className="design-component-instance-node"
                  hierachy="secondary"
                  size="large"
                  type="default"
                  text="Kembali"
                  onClick={() => {
                    navigate(
                      `/skill-builder/listening/1/question/${
                        +number - 1
                      }?init=` + init
                    );
                  }}
                />
              )}
              <Button
                className="design-component-instance-node"
                hierachy="primary"
                size="large"
                type="default"
                text="Selesai"
                onClick={() => setOpen(true)}
              />
            </>
          ) : (
            <>
              {number > 1 && (
                <Button
                  className="design-component-instance-node"
                  hierachy="secondary"
                  size="large"
                  type="default"
                  text="Kembali"
                  onClick={() => {
                    navigate(
                      `/skill-builder/listening/1/question/${
                        +number - 1
                      }?init=` + init
                    );
                  }}
                />
              )}
              <Button
                className="design-component-instance-node"
                hierachy="primary"
                size="large"
                type="default"
                text="Lanjutkan"
                onClick={() => {
                  navigate(
                    `/skill-builder/listening/1/question/${+number + 1}?init=` +
                      init
                  );
                }}
              />
            </>
          )}
        </footer>
      </div>
    </>
  );
};
