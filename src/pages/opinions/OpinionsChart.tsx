import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  type ChartOptions,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import type { Opinion } from "../../types";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

interface OpinionsChartProps {
  data: Opinion[];
}

const OpinionsChart = ({ data }: OpinionsChartProps) => {
  const counts = [1, 2, 3, 4, 5].map(
    (star) => data.filter((op) => op.rating === star).length,
  );

  const chartData = {
    labels: [
      "1 estrella",
      "2 estrellas",
      "3 estrellas",
      "4 estrellas",
      "5 estrellas",
    ],
    datasets: [
      {
        label: "Opiniones",
        data: counts,
        backgroundColor: "#f65d4eae",
        hoverBackgroundColor: "#f4402f",
        borderRadius: 6,
        maxBarThickness: 60,
      },
    ],
  };

  const options: ChartOptions<"bar"> = {
    responsive: true,
    plugins: {
      tooltip: {
        backgroundColor: "#000000",
        titleColor: "#ffffff",
        bodyColor: "#ffffff",
      },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { color: "#444444" },
      },
      y: {
        beginAtZero: true,
        ticks: { color: "#444444", precision: 0 },
        grid: { color: "#e6e6e6" },
      },
    },
  };

  return (
    <div className="mt-6 mb-20">
      <h3 className="font-semibold text-lg mb-4">Opiniones por estrellas</h3>
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default OpinionsChart;
