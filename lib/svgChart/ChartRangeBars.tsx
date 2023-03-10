import React from 'react';
import { Svg, Text, Rect, G, Line } from 'react-native-svg';
import { ChartRangeBarsProps } from './types';

const ChartRangeBars: React.FC<ChartRangeBarsProps> = ({
    minValue,
    maxValue,
    width,
    height,
    color,
    tickLabelFontSize,
    tickLabelColor = 'black',
}) => {
    const xRangeBarWidth = width * 0.8;
    const xRangeBarHeight = 1;
    const xRangeBarX = width * 0.1;
    const xRangeBarY = height - 20;

    const yRangeBarWidth = 1;
    const yRangeBarHeight = height * 0.8;
    const yRangeBarX = 20;
    const yRangeBarY = height * 0.1;

    const numXTicks = 5;
    const xTickValues = Array.from({ length: numXTicks }, (_, i) =>
        minValue + ((maxValue - minValue) / (numXTicks - 1)) * i
    );
    const xTickPositions = xTickValues.map(
        (tickValue) =>
            xRangeBarX + (tickValue - minValue) / (maxValue - minValue) * xRangeBarWidth
    );

    const numYTicks = 5;
    const yTickValues = Array.from({ length: numYTicks }, (_, i) =>
        minValue + ((maxValue - minValue) / (numYTicks - 1)) * i
    );
    const yTickPositions = yTickValues.map(
        (tickValue) =>
            yRangeBarY +
            yRangeBarHeight -
            (tickValue - minValue) / (maxValue - minValue) * yRangeBarHeight
    );

    return (
        <G>
            <Rect
                x={xRangeBarX}
                y={xRangeBarY}
                width={xRangeBarWidth}
                height={xRangeBarHeight}
                fill="none"
                stroke={'darkgray'}
                strokeWidth={.5}
            />
            {xTickPositions.map((tickPosition, i) => (
                <G key={`xtick-${i}`}>
                    <Line
                        x1={tickPosition}
                        y1={xRangeBarY}
                        x2={tickPosition}
                        y2={xRangeBarY + xRangeBarHeight * 4}
                        stroke={color}
                        strokeWidth={1}
                    />
                    <Text
                        x={tickPosition}
                        y={xRangeBarY + xRangeBarHeight * 4 + 5}
                        fontSize={tickLabelFontSize}
                        fill={'darkgray'}
                        textAnchor="middle"
                    >
                        {xTickValues[i].toFixed(2)}
                    </Text>
                </G>
            ))}
            <Rect
                x={yRangeBarX}
                y={yRangeBarY}
                width={yRangeBarWidth}
                height={yRangeBarHeight}
                fill="none"
                stroke={'darkgray'}
                strokeWidth={.5}
            />
            {yTickPositions.map((tickPosition, i) => (
                <G key={`ytick-${i}`}>
                    <Line
                        x1={yRangeBarX - 4}
                        y1={tickPosition}
                        x2={yRangeBarX}
                        y2={tickPosition}
                        stroke={color}
                        strokeWidth={1}
                    />
                    <Text
                        x={yRangeBarX - 5}
                        y={tickPosition + 5}
                        fontSize={tickLabelFontSize}
                        fill={'darkgray'}
                        textAnchor="end"
                    >
                        {yTickValues[i].toFixed(2)}
                    </Text>
                </G>
            ))}
        </G>
    );
};

export default ChartRangeBars;