import { Link } from "react-router-dom";
import { BottomNavigation } from "../../components/BottomNavigation";
import { Button } from "../../components/Button";
import "./style.css";
import { connect } from "react-redux";
import { setTopic } from "../../actions";

const _Home = ({ topic }) => {
  return (
    <div className="home">
      <div className="frame">
        <div className="frame-2">
          <div className="frame-3">
            <div className="welcome">
              <div className="text-wrapper-2">Selamat datang, Azizi</div>
              <p className="p">Mau belajar apa hari ini?</p>
            </div>
            <div className="avatar" />
          </div>
        </div>
        <div className="frame-wrapper">
          <div className="frame-4">
            <div className="topic">
              <div className="text-wrapper-3">{topic}</div>
            </div>
            <Link
              to="/ubah-topik"
              style={{
                width: "100%",
              }}
            >
              <Button
                hierachy="primary"
                size="large"
                text="Ubah Topik"
                type="default"
              />
            </Link>
            <div className="text-wrapper-4">Pilih Kategori</div>
            <div className="categories-container">
              <div className="frame-5">
                <div className="div-2">
                  <img
                    className="freepik-speech"
                    alt="Freepik speech"
                    src="/img/freepik-speech-bubble-inject-252.png"
                  />
                  <Link to={"/skill-builder/writing"} className="div-2">
                    <div className="text-wrapper-5">Writing</div>
                  </Link>
                </div>
                <Link to={"/skill-builder/listening"} className="div-2">
                  <img className="group" alt="Group" src="/img/group-8.png" />
                  <div className="text-wrapper-5">Listening</div>
                  <img className="img" alt="Group" src="/img/group-9.png" />
                </Link>
              </div>
              <div className="frame-5">
                <Link to={"/skill-builder/reading"} className="div-2">
                  <img
                      className="group-2"
                      alt="Group"
                      src="/img/group-10.png"
                    />
                  <div className="text-wrapper-5">Reading</div>
                </Link>
                <Link to={"/skill-builder/speaking"} className="div-2">
                  <img
                    className="freepik-speech-2"
                    alt="Freepik speech"
                    src="/img/freepik-speech-bubble-inject-170.png"
                  />
                  <div className="text-wrapper-5">Speaking</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BottomNavigation
        className="bottom-navigation-instance"
        screen={"home"}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  topic: state.topic,
});

const mapDispatchToProps = {
  setTopic,
};

const Home = connect(mapStateToProps, mapDispatchToProps)(_Home);
export { Home };
