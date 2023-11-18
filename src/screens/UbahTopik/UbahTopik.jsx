import { AnswerField } from "../../components/AnswerField";
import { BottomNavigation } from "../../components/BottomNavigation";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { TopikButton } from "../../components/TopikButton";
import "./style.css";

export const UbahTopik = () => {
  return (
    <div className="ubah-topik">
      <div className="frame">
        <Header
          className="header-instance"
          navigationClassName="design-component-instance-node"
        />
        <div className="frame-2">
          <div className="frame-wrapper">
            <div className="frame-3">
              <div className="text-wrapper-6">Pilih Topik</div>
              <div className="pilih-topik">
                <div className="frame-4">
                  <TopikButton
                    className="topik-button-instance"
                    state="selected"
                    text="Travel"
                  />
                  <TopikButton
                    className="topik-button-instance"
                    state="default"
                    text="Shopping"
                  />
                </div>
                <div className="frame-4">
                  <TopikButton
                    className="topik-button-instance"
                    state="default"
                    text="Business"
                  />
                  <TopikButton
                    className="topik-button-instance"
                    state="default"
                    text="Education"
                  />
                </div>
              </div>
              <div className="text-wrapper-7">atau masukkan topik</div>
              <AnswerField className="answer-field-instance" />
              <Button
                className="button-instance"
                hierachy="primary"
                size="large"
                text="Simpan"
                type="default"
              />
            </div>
          </div>
        </div>
      </div>
      <BottomNavigation className="bottom-navigation-instance" screen="home" />
    </div>
  );
};
