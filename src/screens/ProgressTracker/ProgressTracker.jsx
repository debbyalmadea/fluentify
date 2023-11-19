import { BottomNavigation } from "../../components/BottomNavigation";
import { Header } from "../../components/Header";
import { HistoryCard } from "../../components/HistoryCard/HistoryCard";
import history_data from "../../data/history.json";
import "./style.css";
export const ProgressTracker = () => {
  return (
    <div className="progress-tracker">
      <div className="body">
        <Header title={"Progress Tracker"} />
        <div className="main">
          <div className="container">
            <div className="progress">
              <div className="filter"></div>
            </div>
            <div className="expertise">
              <p className="section-title">Keahlian</p>
            </div>
            <div className="history">
              <p className="section-title">Riwayat</p>
              {history_data.history.map((history, index) => {
                console.log(history);
                return <HistoryCard key={index} {...history} />;
              })}
            </div>
          </div>
        </div>
      </div>
      <BottomNavigation screen={"progress"} />
    </div>
  );
};
