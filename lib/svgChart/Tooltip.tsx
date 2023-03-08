//@ts-nocheck
import React from 'react';
import { View, Text } from 'react-native';
import { TooltipProps } from './types';
import styles from './styles';

const Tooltip: React.FC<TooltipProps> = ({ x, y, value }) => {
    return (
        <View style={[styles.containerTooltip, { left: x, top: y }]}>
            <Text style={styles.textTooltip}>{value}</Text>
        </View>
    );
};

export default Tooltip;
