import { AnswerField } from "../../components/AnswerField";
import { BottomNavigation } from "../../components/BottomNavigation";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { TopikButton } from "../../components/TopikButton";
import "./style.css";
import { connect } from "react-redux";
import { setTopic } from "../../actions";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const popularTopics = ["Travel", "Shopping", "Business", "Education"];
const _UbahTopik = ({ topic, setTopic }) => {
  const [topicButton, setTopicButton] = useState(topic);
  const navigate = useNavigate();
  const handleTopicChange = (newTopic) => {
    document.getElementById("answer-field").value = "";
    setTopicButton(newTopic);
  };
  return (
    <div className="ubah-topik">
      <div className="frame">
        <Header
          className="header-instance"
          navigationClassName="design-component-instance-node"
          title={"Ubah Topik"}
        />
        <div className="frame-2">
          <div className="frame-wrapper">
            <div className="frame-3">
              <div className="text-wrapper-6">Pilih Topik</div>
              <div className="pilih-topik">
                <div className="frame-4">
                  <TopikButton
                    className="topik-button-instance"
                    state={topicButton === "Travel" ? "selected" : "default"}
                    text="Travel"
                    onClick={() => handleTopicChange("Travel")}
                  />
                  <TopikButton
                    className="topik-button-instance"
                    state={topicButton === "Shopping" ? "selected" : "default"}
                    text="Shopping"
                    onClick={() => handleTopicChange("Shopping")}
                  />
                </div>
                <div className="frame-4">
                  <TopikButton
                    className="topik-button-instance"
                    state={topicButton === "Business" ? "selected" : "default"}
                    text="Business"
                    onClick={() => handleTopicChange("Business")}
                  />
                  <TopikButton
                    className="topik-button-instance"
                    state={topicButton === "Education" ? "selected" : "default"}
                    text="Education"
                    onClick={() => handleTopicChange("Education")}
                  />
                </div>
              </div>
              <div className="text-wrapper-7">atau masukkan topik</div>
              <AnswerField
                id={"answer-field"}
                placeholder="Ketik topik dalam bahasa apapun..."
                defaultValue={popularTopics.includes(topic) ? "" : topic}
              />
              <Button
                className="button-instance"
                hierachy="primary"
                size="large"
                text="Simpan"
                type="default"
                onClick={() => {
                  const value = document.getElementById("answer-field").value;
                  if (topicButton && !value) {
                    setTopic(topicButton);
                    navigate("/");
                    return;
                  }
                  setTopic(value);
                  navigate("/");
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <BottomNavigation className="bottom-navigation-instance" screen="home" />
    </div>
  );
};

const mapStateToProps = (state) => ({
  topic: state.topic,
});

const mapDispatchToProps = {
  setTopic,
};

const UbahTopik = connect(mapStateToProps, mapDispatchToProps)(_UbahTopik);
export default UbahTopik;
