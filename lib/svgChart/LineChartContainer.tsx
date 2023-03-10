import React from 'react';
import { View } from 'react-native';
import ChartRangeBars from './ChartRangeBars';

interface LineChartContainerProps<T extends unknown> {
    width: number;
    height: number;
    color: string;
    title?: string;
    maxValue: number;
    minValue: number;
    children?: React.ReactNode;
}

const LineChartContainer = <T extends unknown>({
    width,
    height,
    color,
    maxValue,
    minValue,
    children,
}: LineChartContainerProps<T>) => {

    return (
        <View>
            <ChartRangeBars
                minValue={minValue}
                maxValue={maxValue}
                width={width}
                height={height}
                color={color}
                tickLabelFontSize={12}
                tickLabelColor="black"
            />
            {children}
        </View>
    );
};

export default LineChartContainer;
