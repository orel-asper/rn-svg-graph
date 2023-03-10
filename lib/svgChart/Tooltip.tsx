//@ts-nocheck
import React from 'react';
import { Text, G, Rect } from 'react-native-svg';
import { TooltipProps } from './types';

const Tooltip = <T extends number>({ x, y, data, color, width, height }: TooltipProps<T> & { width: number, height: number }) => {
    const padding = 10;
    const fontSize = 12;

    const tooltipX = x + padding;
    const tooltipY = y - padding - height;

    return (
        <G opacity={1} transitionOpacity={true} duration={500}>
            <Rect
                x={x}
                y={y}
                rx={5}
                ry={5}
                width={width / 2}
                height={height / 2}
                fill={color}
                fillOpacity="0.8"
            />
            <Text
                x={tooltipX + padding}
                y={tooltipY + padding + fontSize}
                fontSize={fontSize}
                fill="#fff"
                textAnchor="start"
            >
                {data.tooltipLabel}
            </Text>
        </G>
    );
};

export default Tooltip;
