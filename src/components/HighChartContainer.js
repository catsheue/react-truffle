import React, { useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import styled from "styled-components";
const options = {
  title: {
    text: "My chart",
  },
  yAxis: {
    title: {
      text: "Number of Employees",
    },
  },
  xAxis: {
    accessibility: {
      rangeDescription: "Range: 2010 to 2017",
    },
  },
  series: [
    {
      data: [1, 2, 3, 7, 2, 3, 1, 0],
    },
    {
      data: [1, 2, 1, 7, 3, 3, 3, 0],
    },
  ],
};
const ChartWrapper = styled.div`
  width: 51rem;

  background: pink;
`;
export default function HighChartContainer() {
  const [chartOptions, setChartOptions] = useState(options);

  const handleChangeOptions = () => {
    const newLineData = [
      {
        data: [1, 2, 1, 4, 2, 3, 7, 0],
      },
      {
        data: [1, 2, 1, 6, 3, 5, 2, 0],
      },
    ];
    const newOptions = { ...chartOptions, series: newLineData };
    setChartOptions(newOptions);
  };
  return (
    <div>
      <ChartWrapper>
        <HighchartsReact
          highcharts={Highcharts}
          callback={handleChangeOptions}
          options={chartOptions}
        />
      </ChartWrapper>
      <div>
        <button type="button" onClick={handleChangeOptions}>
          Click me
        </button>
      </div>
    </div>
  );
}
