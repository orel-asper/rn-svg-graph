//@ts-nocheck
import React from 'react';
import { G, Line } from 'react-native-svg';
import { SvgBackgroundGridProps } from './types';

const SvgBackgroundGrid = ({ width, height, color, numTicks, opacity, dashed = true }: SvgBackgroundGridProps) => {
    const lineWidth = 1;

    const horizontalLines = Array(numTicks)
        .fill(null)
        .map((_, index) => {
            const y = index * (height / (numTicks - 1));
            return (
                <Line
                    key={`h-line-${index}`}
                    x1={0}
                    y1={y}
                    x2={width}
                    y2={y}
                    stroke={color}
                    strokeOpacity={opacity}
                    strokeWidth={lineWidth}
                    strokeDasharray={dashed ? '5, 5' : undefined}
                />
            );
        });

    const verticalLines = Array(numTicks)
        .fill(null)
        .map((_, index) => {
            const x = index * (width / (numTicks - 1));
            return (
                <Line
                    key={`v-line-${index}`}
                    x1={x}
                    y1={0}
                    x2={x}
                    y2={height}
                    stroke={color}
                    strokeOpacity={opacity}
                    strokeWidth={lineWidth}
                    strokeDasharray={dashed ? '5, 5' : undefined}
                />
            );
        });

    return (
        <G>
            {horizontalLines}
            {verticalLines}
        </G>
    );
};

export default SvgBackgroundGrid;
