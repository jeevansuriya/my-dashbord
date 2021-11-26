import { Doughnut } from "react-chartjs-2";
import './piechart.css';

export default function PieChart() {
  const data2 = {
    datasets: [
      {
        data: [55, 30, 15],
        backgroundColor: ["#4e73df", "#1cc88a", "#36b9cc"],
        labels: ["Direct", "referal", "social"],
        labelSuffix: "%",
        pointStyle: "circle"
      }
    ]
  };
  return (
    <div>
      <div className="chartContainer">
          
        <Doughnut style={{ minWidth: "150px", maxWidth: "100%" }}
          data={data2}
          options={{ cutout: "80%" }} />
      </div>
    </div>
  );
}
