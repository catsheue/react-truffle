import React from "react";
// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/line
import { ResponsiveLine } from "@nivo/line";
import styled from "styled-components";

const data = [
  {
    id: "japan",
    color: "hsl(69, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 232,
      },
      {
        x: "helicopter",
        y: 84,
      },
      {
        x: "boat",
        y: 50,
      },
      {
        x: "train",
        y: 194,
      },
      {
        x: "subway",
        y: 230,
      },
      {
        x: "bus",
        y: 197,
      },
      {
        x: "car",
        y: 116,
      },
      {
        x: "moto",
        y: 101,
      },
      {
        x: "bicycle",
        y: 79,
      },
      {
        x: "horse",
        y: 208,
      },
      {
        x: "skateboard",
        y: 73,
      },
      {
        x: "others",
        y: 226,
      },
    ],
  },
  {
    id: "france",
    color: "hsl(299, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 110,
      },
      {
        x: "helicopter",
        y: 134,
      },
      {
        x: "boat",
        y: 267,
      },
      {
        x: "train",
        y: 138,
      },
      {
        x: "subway",
        y: 23,
      },
      {
        x: "bus",
        y: 51,
      },
      {
        x: "car",
        y: 42,
      },
      {
        x: "moto",
        y: 196,
      },
      {
        x: "bicycle",
        y: 39,
      },
      {
        x: "horse",
        y: 45,
      },
      {
        x: "skateboard",
        y: 84,
      },
      {
        x: "others",
        y: 249,
      },
    ],
  },
  {
    id: "us",
    color: "hsl(282, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 70,
      },
      {
        x: "helicopter",
        y: 245,
      },
      {
        x: "boat",
        y: 261,
      },
      {
        x: "train",
        y: 50,
      },
      {
        x: "subway",
        y: 48,
      },
      {
        x: "bus",
        y: 64,
      },
      {
        x: "car",
        y: 280,
      },
      {
        x: "moto",
        y: 281,
      },
      {
        x: "bicycle",
        y: 47,
      },
      {
        x: "horse",
        y: 126,
      },
      {
        x: "skateboard",
        y: 269,
      },
      {
        x: "others",
        y: 265,
      },
    ],
  },
  {
    id: "germany",
    color: "hsl(142, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 233,
      },
      {
        x: "helicopter",
        y: 237,
      },
      {
        x: "boat",
        y: 138,
      },
      {
        x: "train",
        y: 235,
      },
      {
        x: "subway",
        y: 86,
      },
      {
        x: "bus",
        y: 102,
      },
      {
        x: "car",
        y: 247,
      },
      {
        x: "moto",
        y: 228,
      },
      {
        x: "bicycle",
        y: 71,
      },
      {
        x: "horse",
        y: 60,
      },
      {
        x: "skateboard",
        y: 19,
      },
      {
        x: "others",
        y: 125,
      },
    ],
  },
  {
    id: "norway",
    color: "hsl(134, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 87,
      },
      {
        x: "helicopter",
        y: 36,
      },
      {
        x: "boat",
        y: 146,
      },
      {
        x: "train",
        y: 139,
      },
      {
        x: "subway",
        y: 266,
      },
      {
        x: "bus",
        y: 276,
      },
      {
        x: "car",
        y: 10,
      },
      {
        x: "moto",
        y: 131,
      },
      {
        x: "bicycle",
        y: 46,
      },
      {
        x: "horse",
        y: 224,
      },
      {
        x: "skateboard",
        y: 153,
      },
      {
        x: "others",
        y: 109,
      },
    ],
  },
];
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const MyResponsiveLine = ({ data /* see data tab */ }) => (
  <ResponsiveLine
    data={data}
    margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
    xScale={{ type: "point" }}
    yScale={{
      type: "linear",
      min: "auto",
      max: "auto",
      stacked: true,
      reverse: false,
    }}
    yFormat=" >-.2f"
    axisTop={null}
    axisRight={null}
    axisBottom={{
      orient: "bottom",
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "transportation",
      legendOffset: 36,
      legendPosition: "middle",
    }}
    axisLeft={{
      orient: "left",
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "count",
      legendOffset: -40,
      legendPosition: "middle",
    }}
    pointSize={10}
    pointColor={{ theme: "background" }}
    pointBorderWidth={2}
    pointBorderColor={{ from: "serieColor" }}
    pointLabelYOffset={-12}
    useMesh={true}
    legends={[
      {
        anchor: "bottom-right",
        direction: "column",
        justify: false,
        translateX: 100,
        translateY: 0,
        itemsSpacing: 0,
        itemDirection: "left-to-right",
        itemWidth: 80,
        itemHeight: 20,
        itemOpacity: 0.75,
        symbolSize: 12,
        symbolShape: "circle",
        symbolBorderColor: "rgba(0, 0, 0, .5)",
        effects: [
          {
            on: "hover",
            style: {
              itemBackground: "rgba(0, 0, 0, .03)",
              itemOpacity: 1,
            },
          },
        ],
      },
    ]}
  />
);
const ChartWrapper = styled.div`
  width: 51rem;
  height: 34rem;
  background: #fff;
`;
export default function NivoContainer() {
  return (
    <ChartWrapper>
      <MyResponsiveLine data={data} />
    </ChartWrapper>
  );
}
