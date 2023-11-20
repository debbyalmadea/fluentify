import { useState } from "react";
import { BottomNavigation } from "../../components/BottomNavigation";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button"
import { HistoryCard } from "../../components/HistoryCard/HistoryCard";
import history_data from "../../data/history.json";
import "./style.css";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import * as PropTypes from "prop-types";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Expertise } from "../../components/ExpertiseProgress/Expertise";
import { Line } from "react-chartjs-2";

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
            Lokasi
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
                  selectedCategory === "Dunia" ? "#F1F5F9" : "white",
                color: selectedCategory === "Dunia" ? "#1F2937" : "#6B7280",
              }}
              className="DropdownMenuItem"
              onClick={() => onChange("Dunia")}
            >
              Dunia
            </DropdownMenu.Item>
            <DropdownMenu.Item
              style={{
                backgroundColor:
                  selectedCategory === "Radius 10 km" ? "#F1F5F9" : "white",
                color: selectedCategory === "Radius 10 km" ? "#1F2937" : "#6B7280",
              }}
              className="DropdownMenuItem"
              onClick={() => onChange("Radius 10 km")}
            >
              Radius 10 km
            </DropdownMenu.Item>
            <DropdownMenu.Item
              style={{
                backgroundColor:
                  selectedCategory === "Kota" ? "#F1F5F9" : "white",
                color: selectedCategory === "Kota" ? "#1F2937" : "#6B7280",
              }}
              className="DropdownMenuItem"
              onClick={() => onChange("Kota")}
            >
              Kota
            </DropdownMenu.Item>
            <DropdownMenu.Item
              style={{
                backgroundColor:
                  selectedCategory === "Provinsi" ? "#F1F5F9" : "white",
                color: selectedCategory === "Provinsi" ? "#1F2937" : "#6B7280",
              }}
              className="DropdownMenuItem"
              onClick={() => onChange("Provinsi")}
            >
              Provinsi
            </DropdownMenu.Item>
            <DropdownMenu.Item
              style={{
                backgroundColor:
                  selectedCategory === "Nasional" ? "#F1F5F9" : "white",
                color: selectedCategory === "Nasional" ? "#1F2937" : "#6B7280",
              }}
              className="DropdownMenuItem"
              onClick={() => onChange("Nasional")}
            >
              Nasional
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </div>
    </DropdownMenu.Root>
  );
};

FilterCategory.defaultProps = {
  selectedCategory: "Dunia",
};

FilterCategory.propTypes = {
  selectedCategory: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  style: PropTypes.object,
  label: PropTypes.bool,
};

export const Leaderboard = () => {
  const [selectedCategory, setSelectedCategory] = useState("Dunia");
  const [histories, setHistories] = useState(history_data.history);
  const [startDate, setStartDate] = useState(undefined);
  const [endDate, setEndDate] = useState(new Date());
  const [progressSelectedCategory, setProgressSelectedCategory] =
    useState("Dunia");
  function handleHistoryCategoryChange(category) {
    setSelectedCategory(category);
    // if (category === "Dunia") {
    //   setHistories(history_data.history);
    // } else {
    //   setHistories(
    //     history_data.history.filter(
    //       (history) => history.category === category.toLowerCase()
    //     )
    //   );
    // }
  }

//   function handleDateChange(startDate, endDate) {
//     setStartDate(startDate);
//     setEndDate(endDate);
//     setHistories(
//       history_data.history.filter(
//         (history) =>
//           new Date(history.date) >= startDate &&
//           new Date(history.date) <= endDate
//       )
//     );
//   }

  return (
    <div className="progress-tracker">
      <div className="body">
        <Header title={"Leaderboard"} />
        <div className="main">
          <div className="container">
            <div className="progress">
            <div style = {
                {
                    alignItems: "center",
                    width: "100%",
                    justifyContent: "space-between",
                }
            }>
            <div className="select-daily-monthly">
              <Button
                className="low-fi-button-2"
                divClassName="low-fi-button-3"
                hierachy="primary"
                size="small"
                text="Daily"
                type="default"
              />
              <Button
                className="low-fi-button-2"
                divClassName="low-fi-button-3"
                hierachy="secondary"
                size="small"
                text="Monthly"
                type="default"
              />
              <Button
                className="low-fi-button-4"
                divClassName="low-fi-button-5"
                hierachy="secondary"
                size="small"
                text="Yearly"
                type="default"
              />
            </div>
            </div>

              <div className="filter">

                <FilterCategory
                  label={false}
                  selectedCategory={progressSelectedCategory}
                  onChange={(category) => setProgressSelectedCategory(category)}
                />
              </div>

            </div>

          </div>

        </div>
      </div>
      <BottomNavigation screen={"leaderboard"} />
    </div>
  );
};
