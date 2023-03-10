//@ts-nocheck
import React from 'react';
import { Text } from 'react-native';
import { G } from 'react-native-svg';
import styles from './styles';
import { ChartLabelsProps } from './types';

const ChartLabel = ({
    style,
    width,
    color,
    title = '',
    titleFontSize = 18,
    titleOffset = 10,
}: ChartLabelsProps) => {

    return (
        <>
            {title && (
                <G x={width / 2} y={-titleOffset}>
                    <Text style={[styles.title, style, { fontSize: titleFontSize, color }]}>
                        {title}
                    </Text>
                </G>
            )}
        </>
    );
};

export default ChartLabel;


