import { useState } from "react";
import { BottomNavigation } from "../../components/BottomNavigation";
import { Header } from "../../components/Header";
import "./style.css";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import * as PropTypes from "prop-types";
import "react-datepicker/dist/react-datepicker.css";
import { Expertise } from "../../components/ExpertiseProgress/Expertise";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  Title,
} from "chart.js";
import "chart.js/auto"; // ADD THIS
import { Button } from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { WritingModal } from "./DetailModal/WritingModal";
import { ListeningModal } from "./DetailModal/ListeningModal";
import { ReadingModal } from "./DetailModal/ReadingModal";
import { SpeakingModal } from "./DetailModal/SpeakingModal";

let res = [
  { date: "01/11", value: 40 },
  { date: "02/11", value: 55 },
  { date: "03/11", value: 70 },
  { date: "04/11", value: 65 },
  { date: "05/11", value: 80 },
  { date: "06/11", value: 85 },
  { date: "07/11", value: 90 },
  { date: "08/11", value: 75 },
  { date: "09/11", value: 60 },
  { date: "10/11", value: 45 },
];

// Calculate the sum of values in alternateDataset
const sumOfAlternateDataset = res.reduce((acc, data) => acc + data.value, 0);

// Function to generate random values for additional datasets
const generateRandomDataset = (sum) => {
  const dataset = [];
  const days = res.length;
  for (let i = 0; i < days; i++) {
    const randomValue = Math.floor(Math.random() * (sum / days));
    dataset.push({ date: res[i].date, value: randomValue });
  }
  return dataset;
};

// Generate four additional datasets
const listeningDataset = generateRandomDataset(sumOfAlternateDataset);
const readingDataset = generateRandomDataset(sumOfAlternateDataset);
const speakingDataset = generateRandomDataset(sumOfAlternateDataset);
const writingDataset = generateRandomDataset(sumOfAlternateDataset);

ChartJS.register(LineElement, PointElement, LinearScale, Title);

const data = {
  labels: res.map((e) => e.date),
  datasets: [
    {
      label: "First dataset",
      data: res.map((e) => e.value),
      fill: true,
      backgroundColor: ["rgba(219, 234, 254, 0.40)"],
      borderColor: ["#2563EB"],
      borderWidth: 3,
    },
  ],
};

const listeningData = {
  labels: listeningDataset.map((e) => e.date),
  datasets: [
    {
      label: "First dataset",
      data: listeningDataset.map((e) => e.value),
      fill: true,
      backgroundColor: ["rgba(219, 234, 254, 0.40)"],
      borderColor: ["#2563EB"],
      borderWidth: 3,
    },
  ],
};

const readingData = {
  labels: readingDataset.map((e) => e.date),
  datasets: [
    {
      label: "First dataset",
      data: readingDataset.map((e) => e.value),
      fill: true,
      backgroundColor: ["rgba(219, 234, 254, 0.40)"],
      borderColor: ["#2563EB"],
      borderWidth: 3,
    },
  ],
};

const writingData = {
  labels: writingDataset.map((e) => e.date),
  datasets: [
    {
      label: "First dataset",
      data: writingDataset.map((e) => e.value),
      fill: true,
      backgroundColor: ["rgba(219, 234, 254, 0.40)"],
      borderColor: ["#2563EB"],
      borderWidth: 3,
    },
  ],
};

const speakingData = {
  labels: speakingDataset.map((e) => e.date),
  datasets: [
    {
      label: "First dataset",
      data: speakingDataset.map((e) => e.value),
      fill: true,
      backgroundColor: ["rgba(219, 234, 254, 0.40)"],
      borderColor: ["#2563EB"],
      borderWidth: 3,
    },
  ],
};

const options = {
  scales: {
    y: {
      grid: {
        color: "white",
      },
    },
    x: {
      grid: {
        color: "white",
      },
    },
  },
  pan: {
    enabled: true,
    mode: "x",
  },
  zoom: {
    enabled: true,
    mode: "x",
    sensitivity: 0.5,
  },
  plugins: {
    legend: {
      display: false,
    },
  },
  elements: {
    point: {
      radius: 0,
    },
  },
  maintainAspectRatio: false,
};
const FilterCategory = ({
  selectedCategory,
  onChange,
  style,
  label = true,
}) => {
  return (
    <DropdownMenu.Root>
      <div className="DropdownMenu" style={style}>
        {label && (
          <DropdownMenu.Label className="DropdownMenuLabel">
            Kategori
          </DropdownMenu.Label>
        )}
        <DropdownMenu.Trigger asChild>
          <button className="DropdownMenuTrigger">
            {selectedCategory ?? "Semua"}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M15 8.33301L10.5893 12.7438C10.2638 13.0692 9.73618 13.0692 9.41074 12.7438L5 8.33301"
                stroke="#D1D9E2"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </DropdownMenu.Trigger>

        <DropdownMenu.Portal>
          <DropdownMenu.Content className="DropdownMenuContent" sideOffset={5}>
            <DropdownMenu.Item
              style={{
                backgroundColor:
                  selectedCategory === "Semua" ? "#F1F5F9" : "white",
                color: selectedCategory === "Semua" ? "#1F2937" : "#6B7280",
              }}
              className="DropdownMenuItem"
              onClick={() => onChange("Semua")}
            >
              Semua
            </DropdownMenu.Item>
            <DropdownMenu.Item
              style={{
                backgroundColor:
                  selectedCategory === "Writing" ? "#F1F5F9" : "white",
                color: selectedCategory === "Writing" ? "#1F2937" : "#6B7280",
              }}
              className="DropdownMenuItem"
              onClick={() => onChange("Writing")}
            >
              Writing
            </DropdownMenu.Item>
            <DropdownMenu.Item
              style={{
                backgroundColor:
                  selectedCategory === "Listening" ? "#F1F5F9" : "white",
                color: selectedCategory === "Listening" ? "#1F2937" : "#6B7280",
              }}
              className="DropdownMenuItem"
              onClick={() => onChange("Listening")}
            >
              Listening
            </DropdownMenu.Item>
            <DropdownMenu.Item
              style={{
                backgroundColor:
                  selectedCategory === "Reading" ? "#F1F5F9" : "white",
                color: selectedCategory === "Reading" ? "#1F2937" : "#6B7280",
              }}
              className="DropdownMenuItem"
              onClick={() => onChange("Reading")}
            >
              Reading
            </DropdownMenu.Item>
            <DropdownMenu.Item
              style={{
                backgroundColor:
                  selectedCategory === "Speaking" ? "#F1F5F9" : "white",
                color: selectedCategory === "Speaking" ? "#1F2937" : "#6B7280",
              }}
              className="DropdownMenuItem"
              onClick={() => onChange("Speaking")}
            >
              Speaking
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </div>
    </DropdownMenu.Root>
  );
};

FilterCategory.defaultProps = {
  selectedCategory: "Semua",
};

FilterCategory.propTypes = {
  selectedCategory: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  style: PropTypes.object,
  label: PropTypes.bool,
};

export const ProgressTracker = () => {
  const [progressSelectedCategory, setProgressSelectedCategory] =
    useState("Semua");
  const navigate = useNavigate();
  const [open, setOpen] = useState();

  return (
    <>
      <WritingModal
        open={open === "writing"}
        setOpen={(bool) => setOpen(bool ? "writing" : undefined)}
      />
      <ListeningModal
        open={open === "listening"}
        setOpen={(bool) => setOpen(bool ? "listening" : undefined)}
      />
      <ReadingModal
        open={open === "reading"}
        setOpen={(bool) => setOpen(bool ? "reading" : undefined)}
      />
      <SpeakingModal
        open={open === "speaking"}
        setOpen={(bool) => setOpen(bool ? "speaking" : undefined)}
      />
      <div className="progress-tracker">
        <div className="body">
          <Header title={"Progress Tracker"} />
          <div className="main">
            <div className="container">
              <div className="progress-screen">
                <div className="filter">
                  <FilterCategory
                    label={false}
                    selectedCategory={progressSelectedCategory}
                    onChange={(category) =>
                      setProgressSelectedCategory(category)
                    }
                  />
                </div>
                <div
                  style={{
                    width: "100%",
                    height: "240px",
                  }}
                >
                  {progressSelectedCategory === "Semua" ? (
                    <Line id="chart" data={data} options={options} />
                  ) : progressSelectedCategory === "Writing" ? (
                    <Line id="chart" data={writingData} options={options} />
                  ) : progressSelectedCategory === "Listening" ? (
                    <Line id="chart" data={listeningData} options={options} />
                  ) : progressSelectedCategory === "Reading" ? (
                    <Line id="chart" data={readingData} options={options} />
                  ) : (
                    <Line id="chart" data={speakingData} options={options} />
                  )}
                </div>
              </div>
              <div className="expertise">
                <p className="section-title">Keahlian</p>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <Expertise
                    category="Writing"
                    level="Novice"
                    value={50}
                    onClick={() => setOpen("writing")}
                  />
                  <Expertise
                    category="Listening"
                    level="Intermediate"
                    value={20}
                    onClick={() => setOpen("listening")}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <Expertise
                    category="Reading"
                    level="Advanced"
                    value={80}
                    onClick={() => setOpen("reading")}
                  />
                  <Expertise
                    category="Speaking"
                    level="Expert"
                    value={60}
                    onClick={() => setOpen("speaking")}
                  />
                </div>
              </div>
              <div className="history">
                <Button
                  type={"default"}
                  hierachy={"primary"}
                  size={"large"}
                  text="Riwayat"
                  onClick={() => navigate("/progress-tracker/history")}
                />
              </div>
            </div>
          </div>
        </div>
        <BottomNavigation screen={"progress"} />
      </div>
    </>
  );
};
