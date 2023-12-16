import { useState } from "react";
import { Header } from "../../components/Header";
import { HistoryCard } from "../../components/HistoryCard/HistoryCard";
import history_data from "../../data/history.json";
import "./style.css";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import * as PropTypes from "prop-types";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  Title,
} from "chart.js";
import "chart.js/auto"; // ADD THIS
import { Link } from "react-router-dom";

ChartJS.register(LineElement, PointElement, LinearScale, Title);

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

export const History = () => {
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [histories, setHistories] = useState(history_data.history);
  const [startDate, setStartDate] = useState(undefined);
  const [endDate, setEndDate] = useState(new Date());
  function handleHistoryCategoryChange(category) {
    setSelectedCategory(category);
    if (category === "Semua") {
      setHistories(history_data.history);
    } else {
      setHistories(
        history_data.history.filter(
          (history) => history.category === category.toLowerCase()
        )
      );
    }
  }

  function handleDateChange(startDate, endDate) {
    setStartDate(startDate);
    setEndDate(endDate);
    setHistories(
      history_data.history.filter(
        (history) =>
          new Date(history.date) >= startDate &&
          new Date(history.date) <= endDate
      )
    );
  }

  function getLink(category) {
    switch (category.toLowerCase()) {
      case "listening":
        return "/skill-builder/listening/1/result";
      case "writing":
        return "/skill-builder/writing/result";
      case "reading":
        return "/skill-builder/reading/1/result";
      case "speaking":
        return "/skill-builder/speaking/result";
      default:
        break;
    }
  }

  return (
    <div className="progress-tracker">
      <div className="body">
        <Header title={"Riwayat"} backUrl="/progress-tracker" />
        <div className="main">
          <div className="container">
            <div className="history">
              <FilterCategory
                selectedCategory={selectedCategory}
                onChange={handleHistoryCategoryChange}
              />
              <div className="datepicker-container">
                <p className="datepicker-label">Tanggal Awal</p>
                <ReactDatePicker
                  showIcon
                  placeholderText="DD/MM/YYYY"
                  selected={startDate}
                  onChange={(date) => handleDateChange(date, endDate)}
                  dateFormat="dd/MM/yyyy"
                />
              </div>
              <div className="datepicker-container">
                <p className="datepicker-label">Tanggal Akhir</p>
                <ReactDatePicker
                  showIcon
                  placeholderText="DD/MM/YYYY"
                  selected={endDate}
                  onChange={(date) => handleDateChange(startDate, date)}
                  dateFormat="dd/MM/yyyy"
                />
              </div>

              {histories.map((history, index) => {
                console.log(history);
                return (
                  <Link
                    to={getLink(history.category)}
                    key={index}
                    style={{
                      width: "100%",
                    }}
                  >
                    <HistoryCard {...history} />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
