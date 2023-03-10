// types.ts
import { ViewStyle, TextStyle } from 'react-native';

interface LineChartData<T> {
    xCoordinate: number;
    yCoordinate: number;
    tooltipLabel: string;
    data: T;
}

interface LineChartProps<T> {
    data: LineChartData<T>[];
    width: number;
    height: number;
    color: string;
    xAxisLabel?: string;
    yAxisLabel?: string;
    title?: string;
    numTicks?: number;
    dataPointSize?: number;
    lineWidth?: number;
    axisLabelFontSize?: number;
    titleFontSize?: number;
    tickLabelFontSize?: number;
    xAxisLabelOffset?: number;
    yAxisLabelOffset?: number;
    titleOffset?: number;
    gridLineOpacity?: number;
    gridLineWidth?: number;
    style?: React.CSSProperties;
    chartLabelStyle?: React.CSSProperties;
    chartBorderColor?: string;
    chartBorderWidth?: number;
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
    gridLineOpacity?: number;
    gridLineWidth?: number;
    opacity?: number;
    lineWidth?: number;
}

interface TooltipProps<T> {
    x: number;
    y: number;
    data: T;
    color: string;
    width: number;
    height: number;
}

interface Point {
    x: number;
    y: number;
}

interface DataPointsProps<T> {
    data: LineChartData<T>[];
    points: Point[];
    dataPointSize: number;
    color: string;
    setTooltipData: (data: LineChartData<T> | null) => void;
}

interface DataLineProps<T> {
    points: Point[];
    color: string;
    strokeWidth: number;
}

interface ChartLabelsProps {
    width: number;
    height: number;
    color: string;
    title?: string;
    axisLabelFontSize?: number;
    titleFontSize?: number;
    titleOffset?: number;
    style?: React.CSSProperties;
}

interface ChartRangeBarsProps {
    minValue: number;
    maxValue: number;
    width: number;
    height: number;
    color: string;
    tickLabelFontSize: number;
    tickLabelColor?: string;
    children?: React.ReactNode;
}

export type {
    LineChartData,
    LineChartProps,
    LineChartStyles,
    SvgBackgroundGridProps,
    TooltipProps,
    Point,
    DataPointsProps,
    DataLineProps,
    ChartLabelsProps,
    ChartRangeBarsProps
};
