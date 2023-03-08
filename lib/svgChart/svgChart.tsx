//@ts-nocheck
import React, { useState } from 'react';
import { Svg, Path, Text, Rect, SvgProps, G, Line } from 'react-native-svg';
import { LineChartProps } from './types';
import styles from './styles';
import SvgBackgroundGrid from './SvgBackgroundGrid';
import Tooltip from './Tooltip';

const LineChart = ({
    data,
    width,
    height,
    color,
    xAxisLabel,
    yAxisLabel,
    title,
    onPress,
    numTicks = 10,
    dataPointSize = 10,
    chartLineWidth = 2,
    xAxisLabelOffset = 20,
    yAxisLabelOffset = 20,
    titleOffset = 10,
    gridLineOpacity = 0.1,
    gridLineWidth = 1,
}: LineChartProps) => {
    const [tooltipData, setTooltipData] = useState(null);

    const maxValue: number = Math.max(...data);
    const minValue: number = Math.min(...data);
    const step: number = height / (maxValue - minValue);
    const points: { x: number; y: number }[] = data.map((value: number, index: number) => ({
        x: index * (width / (data.length - 1)),
        y: (maxValue - value) * step,
    }));

    const pathData: string = `M ${points[0].x} ${points[0].y} ${points
        .map((point) => `L ${point.x} ${point.y}`)
        .join(' ')}`;

    const handlePress = (dataPoint) => {
        if (onPress) {
            onPress(dataPoint);
        }
    };

    return (
        <Svg width={width} height={height} style={styles.container} {...(SvgProps as any)}>
            <Text x={width / 2} y={height + xAxisLabelOffset} fill={color} style={styles.xAxisLabel}>
                {xAxisLabel}
            </Text>
            <Text x={-height / 2} y={-yAxisLabelOffset} fill={color} style={{ ...styles.yAxisLabel, transform: `rotate(-90deg)` }}>
                {yAxisLabel}
            </Text>
            <Text x={width / 2} y={-titleOffset} fill={color} style={styles.title}>
                {title}
            </Text>
            <SvgBackgroundGrid
                width={width}
                height={height}
                color={color}
                numTicks={numTicks}
                opacity={gridLineOpacity}
                lineWidth={gridLineWidth}
            />
            <Rect x={0} y={0} width={width} height={height} fill="transparent" stroke={color} strokeWidth={1} />
            <G>
                {points.map((point, index) => (
                    <Rect
                        x={point.x - dataPointSize / 2}
                        y={point.y - dataPointSize / 2}
                        width={dataPointSize}
                        height={dataPointSize}
                        style={styles.dataPoint}
                        key={`data-point-${index}`}
                        onPress={() => handlePress({ x: point.x, y: point.y, data: data[index] })}
                        onMouseEnter={() => setTooltipData({ x: point.x, y: point.y, data: data[index] })}
                        onMouseLeave={() => setTooltipData(null)}
                    />
                ))}
                <Path d={pathData} stroke={color} strokeWidth={chartLineWidth} fill="none" />
            </G>
            {tooltipData && (
                <Tooltip
                    x={tooltipData.x}
                    y={tooltipData.y}
                    data={tooltipData.data}
                    color={color}
                    width={width}
                    height={height}
                />
            )}
        </Svg>
    );
};

export default LineChart;
