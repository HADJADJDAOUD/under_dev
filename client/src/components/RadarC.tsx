import React from "react";
import RadarChartComponent from "../components/RadarChartComponent"; // Adjust the path as needed

// Define the data type
interface DataItem {
  subject: string;
  MEN: number;
  WOMEN: number;
  fullMark: number;
  [key: string]: string | number;
}

const data: DataItem[] = [
  { subject: "USA", MEN: 120, WOMEN: 110, fullMark: 150 },
  { subject: "CHINA", MEN: 98, WOMEN: 130, fullMark: 150 },
  { subject: "UK", MEN: 86, WOMEN: 130, fullMark: 150 },
  { subject: "SPAIN", MEN: 99, WOMEN: 100, fullMark: 150 },
  { subject: "FRANCE", MEN: 85, WOMEN: 90, fullMark: 150 },
  { subject: "ALGERIA", MEN: 65, WOMEN: 85, fullMark: 150 },
];

const RadarC: React.FC = () => {
  return (
    <div className=" flex items-center justify-center bg-gray-100 dark:bg-[#030712] p-6">
      <RadarChartComponent
        data={data}
        dataKeys={["MEN", "WOMEN"]} // Specify the data keys to display
        colors={["#5220a7", "#112a5f"]} // Custom colors
        title="Student Performance Radar Chart"
      />
    </div>
  );
};

export default RadarC;
