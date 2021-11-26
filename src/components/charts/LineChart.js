import { Line } from "react-chartjs-2";

export default function LineChart() {
  const data = {
    labels: ["Jan", "", "Mar", "", "May", " ", "Jul", " ", "Sep", "", "Nov"],
    datasets: [
      {
        label: "Earnings",
        fill: false,
        lineTension: 0.3,
        backgroundColor: " #ddddff",
        borderColor: "#4e73df",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.8,
        borderJoinStyle: "round",
        pointBorderColor: "#4e73df",
        pointBackgroundColor: "#4e73df",
        pointBorderWidth: 0.1,
        pointHoverRadius: 3,
        pointHoverBackgroundColor: "#4e73df",
        pointHoverBorderColor: "#4e73df",
        pointHoverBorderWidth: 2,
        pointRadius: 3.5,
        pointHitRadius: 8,
        borderWidth: 2,
        data: [
          0,
          10000,
          5000,
          15000,
          10000,
          20000,
          15000,
          25000,
          20000,
          30000,
          40000
        ]
      }
    ]
  };

  const lineOptions = {
    options: {  
    scales: {
      xAxes: [
        {
          gridLines: {
            display: false
          }
        }
      ],
      yAxes: [
        {
          gridLines: {
            display: false
          },

          ticks: {
            beginAtZero: true,
            min: 0,
            max: 40000,
            stepSize: 10000,

            userCallback(value) {
              // Convert the number to a string and splite the string every 3 charaters from the end
              value = value.toString();
              value = value.split(/(?=(?:...)*$)/);

              // Convert the array to a string and format the output
              value = value.join(".");
              return `$.${value}`;
            }
          }
        }
      ]
    },},
    legend: {
      display: false
    },
    tooltips: {
      enabled: false
    },
  };
  const styles = {
    fontFamily: "sans-serif",
    textAlign: "center",
  };

  return (
    <div style={styles}>
      <Line data={data} options={lineOptions} />
    </div>
  );
}
