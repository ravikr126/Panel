import React, { useState } from "react";
import { Chart } from "primereact/chart";

const Graph = () => {
  const [lineStylesData] = useState({
    labels: ["2016", "2017", "2018 ", "2019", "2020", "2021", "2022"],
    datasets: [
      {
        data: [0, 15, 26, 34, 12, 57, 68],
        fill: true,
        borderDash: [5, 5],
        borderColor: "#65B741",
        tension: 0.4,
        backgroundColor: "#DCFFB7",
        pointRadius: 0,
      },
    ],
  });

  const getLightTheme = () => {
    let basicOptions = {
      maintainAspectRatio: false,
      aspectRatio: 0.6,
      plugins: {
        legend: {
          labels: {
            color: "#495057",
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: "#495057",
          },
          grid: {
            color: "#ebedef",
          },
        },
        y: {
          ticks: {
            color: "#495057",
          },
          grid: {
            color: "#ebedef",
          },
        },
      },
    };

    let multiAxisOptions = {
      stacked: false,
      maintainAspectRatio: false,
      aspectRatio: 0.6,
      plugins: {
        legend: {
          labels: {
            color: "#495057",
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: "#495057",
          },
          grid: {
            color: "#ebedef",
          },
        },
        y: {
          type: "linear",
          display: true,
          position: "left",
          ticks: {
            color: "#495057",
          },
          grid: {
            color: "#ebedef",
          },
        },
        y1: {
          type: "linear",
          display: true,
          position: "right",
          ticks: {
            color: "#495057",
          },
          grid: {
            drawOnChartArea: false,
            color: "#ebedef",
          },
        },
      },
    };

    return {
      basicOptions,
      multiAxisOptions,
    };
  };

  const { basicOptions, multiAxisOptions } = getLightTheme();

  return (
    <div>
      <div className="card">
        <Chart type="line" data={lineStylesData} />
      </div>
    </div>
  );
};

export default Graph;
