//@ts-nocheck
import { ViewStyle, TextStyle } from 'react-native';

interface LineChartProps {
    data: number[];
    width: number;
    height: number;
    color: string;
    xAxisLabel?: string;
    yAxisLabel?: string;
    title?: string;
    onPress?: (dataPoint: { x: number; y: number; data: number }) => void;
    numTicks?: number;
    dataPointSize?: number;
    lineWidth?: number;
    axisLabelFontSize?: number;
    titleFontSize?: number;
    tickLabelFontSize?: number;
}


interface LineChartStyles {
    container?: ViewStyle;
    chartLine?: ViewStyle;
    axisLabel?: TextStyle;
    title?: TextStyle;
    dataPoint?: ViewStyle;
}

interface SvgBackgroundGridProps {
    width: number;
    height: number;
    color: string;
    numTicks: number;
}

interface TooltipProps {
    x: number;
    y: number;
    value: string;
}


export {
    LineChartProps,
    LineChartStyles,
    SvgBackgroundGridProps,
    TooltipProps,
}