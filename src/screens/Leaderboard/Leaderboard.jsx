import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { BottomNavigation } from "../../components/BottomNavigation";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import "./style.css";
import * as PropTypes from "prop-types";
import { MascotAvatar } from "../../icons/MascotAvatar";
import { useState } from "react";

const FilterRegion = ({ selectedRegion, onChange, style, label = true }) => {
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
            {selectedRegion ?? "Provinsi"}
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
                  selectedRegion === "Radius 10 km" ? "#DBEAFE" : "white",
                color:
                  selectedRegion === "Radius 10 km" ? "#1F2937" : "#6B7280",
              }}
              className="DropdownMenuItem"
              onClick={() => onChange("Radius 10 km")}
            >
              Radius 10 km
            </DropdownMenu.Item>
            <DropdownMenu.Item
              style={{
                backgroundColor:
                  selectedRegion === "Kota" ? "#DBEAFE" : "white",
                color: selectedRegion === "Kota" ? "#1F2937" : "#6B7280",
              }}
              className="DropdownMenuItem"
              onClick={() => onChange("Kota")}
            >
              Kota
            </DropdownMenu.Item>
            <DropdownMenu.Item
              style={{
                backgroundColor:
                  selectedRegion === "Provinsi" ? "#DBEAFE" : "white",
                color: selectedRegion === "Provinsi" ? "#1F2937" : "#6B7280",
              }}
              className="DropdownMenuItem"
              onClick={() => onChange("Provinsi")}
            >
              Provinsi
            </DropdownMenu.Item>
            <DropdownMenu.Item
              style={{
                backgroundColor:
                  selectedRegion === "Nasional" ? "#DBEAFE" : "white",
                color: selectedRegion === "Nasional" ? "#1F2937" : "#6B7280",
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

FilterRegion.defaultProps = {
  selectedRegion: "Provinsi",
};

FilterRegion.propTypes = {
  selectedRegion: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  style: PropTypes.object,
  label: PropTypes.bool,
};

export const Leaderboard = () => {
  const [region, setRegion] = useState("Provinsi");
  const [dateRange, setDateRange] = useState("Daily");
  return (
    <div className="leaderboard">
      <div className="body">
        <Header title="Leaderboard" />
        <div className="main">
          <div className="frame">
            <div className="select-daily-monthly">
              <Button
                hierachy={dateRange === "Daily" ? "primary" : "secondary"}
                text="Daily"
                type="default"
                onClick={() => {
                  setDateRange("Daily");
                }}
              />
              <Button
                hierachy={dateRange === "Monthly" ? "primary" : "secondary"}
                text="Monthly"
                type="default"
                onClick={() => {
                  setDateRange("Monthly");
                }}
              />
              <Button
                hierachy={dateRange === "Yearly" ? "primary" : "secondary"}
                text="Yearly"
                type="default"
                onClick={() => {
                  setDateRange("Yearly");
                }}
              />
            </div>
            <div className="leaderboard-dropdown-container">
              <FilterRegion
                label={false}
                selectedRegion={region}
                onChange={(region) => {
                  setRegion(region);
                }}
              />
            </div>
            <div className="group">
              <div className="podiums">
                <div className="element-position slide-in">
                  <div className="detail">
                    <div className="avatar" />
                    <div className="frame-2">
                      <div className="text-wrapper-5">Gracia</div>
                      <div className="text-wrapper-6">900 poin</div>
                    </div>
                  </div>
                  <div className="podium" />
                </div>
                <div className="element-st-position slide-in">
                  <div className="detail">
                    <div className="avatar-2" />
                    <div className="frame-2">
                      <div className="text-wrapper-5">Shani</div>
                      <div className="text-wrapper-6">1000 poin</div>
                    </div>
                  </div>
                  <div className="podium-2" />
                </div>
                <div className="element-position slide-in">
                  <div className="detail">
                    <div className="avatar-3" />
                    <div className="frame-2">
                      <div className="text-wrapper-5">Feni</div>
                      <div className="text-wrapper-6">800 poin</div>
                    </div>
                  </div>
                  <div className="podium-3" />
                </div>
              </div>
            </div>
          </div>
          <div className="tabel">
            <div className="column">
              <div className="table-cell">
                <div className="text-wrapper-7">4</div>
              </div>
              <div className="table-cell">
                <div className="text-wrapper-7">5</div>
              </div>
              <div className="table-cell">
                <div className="text-wrapper-7">6</div>
              </div>
              <div className="table-cell">
                <div className="text-wrapper-7">7</div>
              </div>
              <div className="table-cell">
                <div className="text-wrapper-7">8</div>
              </div>
              <div className="table-cell">
                <div className="text-wrapper-7">9</div>
              </div>
              <div className="table-cell">
                <div className="element">10</div>
              </div>
            </div>
            <div className="column-2">
              <div className="table-cell-2">
                <MascotAvatar className="mascot-avatar" />
                <div className="text-wrapper-8">John Doe</div>
              </div>
              <div className="table-cell-2">
                <MascotAvatar className="mascot-avatar" />
                <div className="text-wrapper-8">Laura</div>
              </div>
              <div className="table-cell-2">
                <MascotAvatar className="mascot-avatar" />
                <div className="text-wrapper-8">Sisca</div>
              </div>
              <div className="table-cell-2">
                <MascotAvatar className="mascot-avatar" />
                <div className="text-wrapper-8">Gracia</div>
              </div>
              <div className="table-cell-2">
                <MascotAvatar className="mascot-avatar" />
                <div className="text-wrapper-8">Fiony</div>
              </div>
              <div className="table-cell-2">
                <MascotAvatar className="mascot-avatar" />
                <div className="text-wrapper-8">Marsha</div>
              </div>
              <div className="table-cell-2">
                <MascotAvatar className="mascot-avatar" />
                <div className="text-wrapper-8">Freya</div>
              </div>
            </div>
            <div className="column-3">
              <div className="table-cell">
                <div className="text-wrapper-6">700 poin</div>
              </div>
              <div className="table-cell">
                <div className="text-wrapper-6">600 poin</div>
              </div>
              <div className="table-cell">
                <div className="text-wrapper-6">500 poin</div>
              </div>
              <div className="table-cell">
                <div className="text-wrapper-6">400 poin</div>
              </div>
              <div className="table-cell">
                <div className="text-wrapper-6">300 poin</div>
              </div>
              <div className="table-cell">
                <div className="text-wrapper-6">200 poin</div>
              </div>
              <div className="table-cell">
                <div className="text-wrapper-6">100 poin</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="leaderboard-footer">
        <div className="column-1">
          <div className="div-wrapper-owner">
            <div className="element-2">200</div>
          </div>
        </div>
        <div className="column-2">
          <div className="table-cell-owner">
            <div className="avatar-4" />
            <div className="text">
              <div className="text-wrapper-9">Azizi</div>
            </div>
          </div>
        </div>
        <div className="column-3">
          <div className="div-wrapper-owner">
            <div className="text-wrapper-10">10 poin</div>
          </div>
        </div>
      </div>
      <BottomNavigation screen="leaderboard" />
    </div>
  );
};
