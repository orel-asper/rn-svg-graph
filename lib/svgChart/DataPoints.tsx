//@ts-nocheck
import React from 'react';
import { Circle, Rect } from 'react-native-svg';
import { DataPointsProps, LineChartData } from './types';

const DataPoints = <T extends unknown>({
    data,
    points,
    dataPointSize,
    color,
    setTooltipData,
}: DataPointsProps<T | unknown>) => {
    const handlePressIn = (index: number) => {
        const dataPoint: LineChartData<T | unknown> = data[index];
        const { x, y } = points[index];
        setTooltipData({ x, y, data: dataPoint });
    };

    const handlePressOut = () => {
        setTooltipData(null);
    };

    return (
        <>
            {points.map((point, i) => (
                <Circle
                    key={`circle-${i}`}
                    cx={point.x}
                    cy={point.y}
                    r={dataPointSize}
                    fill={color}
                    onPressIn={() => handlePressIn(i)}
                    onPressOut={handlePressOut}
                />
            ))}
        </>
    );
};

export default DataPoints;

