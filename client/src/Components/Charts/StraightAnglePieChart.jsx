import { PieChart, Pie, ResponsiveContainer } from "recharts";

const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
  { name: "Group E", value: 278 },
  { name: "Group F", value: 189 },
];

function StraightAnglePieChart() {
  return (
    <div
      style={{ width: "100%", height: 400 }}
      className="flex flex-wrap justify-center items-center mt-10"
    >
      <h1 className="text-2xl">Straight Angle Pie Chart</h1>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            dataKey="value"
            startAngle={180}
            endAngle={0}
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default StraightAnglePieChart;
