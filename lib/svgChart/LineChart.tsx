import React, { useState } from 'react';
import { Svg, Rect, G } from 'react-native-svg';
import { LineChartProps, LineChartData } from './types';
import SvgBackgroundGrid from './SvgBackgroundGrid';
import { calculatePoints } from './utils';
import Tooltip from './Tooltip';
import DataLine from './DataLine';
import DataPoints from './DataPoints';
import ChartLabel from './ChartLabel';
import ChartRangeBars from './ChartRangeBars';
import styles from './styles';

const LineChart = <T extends unknown>({
    data,
    width,
    height,
    color,
    title,
    numTicks = 10,
    dataPointSize = 3,
    lineWidth = 2,
    titleFontSize = 18,
    tickLabelFontSize = 12,
    titleOffset = 10,
    gridLineOpacity = 0.1,
    gridLineWidth = 1,
    chartBorderWidth = 1,
    chartLabelStyle,
    chartBorderColor = 'grey',
}: LineChartProps<T>) => {
    const [tooltipData, setTooltipData] = useState<LineChartData<T> | null>(null);
    const { points, maxValue, minValue } = calculatePoints(data, width, height);

    return (
        <>
            <ChartLabel
                style={chartLabelStyle}
                width={width}
                height={height}
                color={color}
                title={title}
                titleFontSize={titleFontSize}
                titleOffset={titleOffset}
            />
            <Svg width={width} height={height} style={styles.container}>
                <ChartRangeBars
                    minValue={minValue}
                    maxValue={maxValue}
                    width={width}
                    height={height}
                    color={color}
                    tickLabelFontSize={tickLabelFontSize}
                    tickLabelColor="black"
                />
                <SvgBackgroundGrid
                    width={width}
                    height={height}
                    color={color}
                    numTicks={numTicks}
                    opacity={gridLineOpacity}
                    lineWidth={gridLineWidth}
                />
                <Rect
                    x={0}
                    y={0}
                    width={width}
                    height={height}
                    fill="transparent"
                    stroke={chartBorderColor}
                    strokeWidth={chartBorderWidth}
                />
                <G>
                    <DataPoints
                        data={data}
                        points={points}
                        dataPointSize={dataPointSize}
                        color={color}
                        //@ts-ignore
                        handlePress={(dataPoint: any) =>
                            setTooltipData(dataPoint as any)
                        }
                        setTooltipData={setTooltipData as any}
                    />
                    <DataLine points={points} color={color} strokeWidth={lineWidth} />
                </G>
                {tooltipData && (
                    <Tooltip
                        x={tooltipData.xCoordinate}
                        y={tooltipData.yCoordinate}
                        data={tooltipData as any}
                        color={color}
                        width={width}
                        height={height}
                    />
                )}
            </Svg>
        </>
    );
};

export default LineChart;
