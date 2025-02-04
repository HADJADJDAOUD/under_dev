import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  Legend,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

// Define TypeScript interfaces for props
interface RadarChartComponentProps {
  data: { subject: string; [key: string]: number | string }[];
  dataKeys: string[];
  colors: string[];
  title: string;
}

const RadarChartComponent: React.FC<RadarChartComponentProps> = ({
  data,
  dataKeys,
  colors,
  title,
}) => {
  return (
    <div className="w-full h-96 p-4 bg-white dark:bg-[#030712] rounded-xl shadow-md">
      <h2 className="text-center text-xl font-semibold mb-4 text-gray-800 dark:text-white">
        {title}
      </h2>

      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis angle={30} domain={[0, 150]} />

          {dataKeys.map((key, index) => (
            <Radar
              key={key}
              name={key}
              dataKey={key}
              stroke={colors[index % colors.length]}
              fill={colors[index % colors.length]}
              fillOpacity={0.6}
            />
          ))}

          <Legend />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RadarChartComponent;
