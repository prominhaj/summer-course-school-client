import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LabelList,
} from "recharts";
import './DashBoardCharts.css'

const renderCustomizedLabel = (props) => {
  const { x, y, width, height, value } = props;
  const radius = 10;

  return (
    <g>
      <circle cx={x + width / 2} cy={y - radius} r={radius} fill="#8884d8" />
      <text
        x={x + width / 2}
        y={y - radius}
        fill="#fff"
        textAnchor="middle"
        dominantBaseline="middle"
      >
        {value}
      </text>
    </g>
  );
};

const DashBoardBarCharts = ({ data }) => {
  return (
    <div>
      <BarChart
        className="!w-full !h-full"
        width={500}
        height={350}
        data={data}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="category" />
        <YAxis dataKey="TotalPrice" />
        <Tooltip />
        <Legend />
        <Bar dataKey="TotalPrice" fill="#8884d8" minPointSize={5}>
          <LabelList dataKey="name" content={renderCustomizedLabel} />
        </Bar>
        <Bar dataKey="Quantity" fill="#82ca9d" minPointSize={10} />
      </BarChart>
    </div>
  );
};

export default DashBoardBarCharts;
