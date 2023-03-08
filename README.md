# RN-SVG-Graph

[![npm version](https://img.shields.io/npm/v/rn-svg-graph.svg?style=flat-square)](https://www.npmjs.com/package/rn-svg-graph)
[![npm downloads](https://img.shields.io/npm/dt/rn-svg-graph.svg?style=flat-square)](https://www.npmjs.com/package/rn-svg-graph)

A customizable and easy-to-use line chart component for React Native using SVG.

## Installation

You can install `rn-svg-graph` using npm:


## Usage

Here's a simple example of how to use the `LineChart` component:

```jsx
import React from 'react';
import { View } from 'react-native';
import LineChart from 'rn-svg-graph';

const data = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const color = 'blue';

export default function App() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <LineChart
        data={data}
        width={300}
        height={200}
        color={color}
      />
    </View>
  );
}
```
# Props
### Here are the props that you can pass to the LineChart component:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| data | Array of numbers | required | The data to be plotted on the chart |
| width | Number | required | The width of the chart |
| height | Number | required | The height of the chart |
| color | String | "#000000" | The color of the chart |
| xAxisLabel | String | "" | The label for the x-axis |
| yAxisLabel | String | "" | The label for the y-axis |
| title | String | "" | The title of the chart |
| onPress | Function | null | A function that is called when a data point is pressed |
| numTicks | Number | 10 | The number of ticks to show on the x and y axes |
| dataPointSize | Number | 10 | The size of the data points on the chart |
| chartLineWidth | Number | 2 | The width of the chart line |
| xAxisLabelOffset | Number | 20 | The offset of the x-axis label from the chart |
| yAxisLabelOffset | Number | 20 | The offset of the y-axis label from the chart |
| titleOffset | Number | 10 | The offset of the title from the chart |
| gridLineOpacity | Number | 0.1 | The opacity of the grid lines |
| gridLineWidth | Number | 1 | The width of the grid lines |
