/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/
import PropTypes from "prop-types";
import { ChevronLeftRegular } from "../../icons/ChevronLeftRegular";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Modal } from "../Modal";
import { Button } from "../Button";
import { Warning } from "../../assets/illusts";

export const Header = ({
  className,
  title,
  showAlert = false,
  backUrl = "..",
}) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleBackButton = (event) => {
      event.preventDefault();
      setOpen(true);
    };

    const history = window.history;
    history.pushState(null, null, window.location.pathname);
    history.replaceState(null, null, window.location.pathname);
    window.addEventListener("popstate", handleBackButton);

    return () => {
      window.removeEventListener("popstate", handleBackButton);
    };
  }, []);
  return (
    <>
      {showAlert && (
        <Modal open={open} setOpen={setOpen}>
          <div className="modal-content">
            <div className="modal-illust">
              <Warning />
            </div>
            <div className="modal-header">
              <p className="modal-title">Keluar dari halaman?</p>
            </div>
            <div className="modal-body">
              <p className="modal-text">
                Jika keluar, sesi latihan akan dihentikan dan kemajuan kamu
                tidak tersimpan
              </p>
            </div>
            <div className="modal-footer">
              <Button
                hierachy={"primary"}
                size={"large"}
                style={{ marginRight: "16px" }}
                className="modal-button modal-button__back"
                onClick={() => {
                  setOpen(false);
                  navigate(backUrl);
                }}
                type="default"
                text="Keluar"
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
      )}
      <div className={`header ${className}`}>
        <div className="navigation">
          <button
            onClick={() => {
              showAlert ? setOpen(true) : navigate(backUrl);
            }}
          >
            <ChevronLeftRegular
              className="chevron-left-regular"
              color="white"
            />
          </button>
          <div className="text-wrapper">
            <p>{title}</p>
          </div>
        </div>
      </div>
    </>
  );
};

Header.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  showAlert: PropTypes.bool,
  backUrl: PropTypes.string,
};
