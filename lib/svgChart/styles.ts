//@ts-nocheck
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {},
    chartLine: {
        strokeWidth: 2,
        fill: 'none',
    },
    axisLabel: {
        fontSize: 12,
        textAnchor: 'middle',
    },
    title: {
        fontSize: 16,
        textAnchor: 'middle',
    },
    dataPoint: {
        width: 10,
        height: 10,
    },
    containerTooltip: {
        position: 'absolute',
        backgroundColor: 'white',
        padding: 5,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'black',
        minWidth: 50,
        minHeight: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textTooltip: {
        fontSize: 12,
        fontWeight: 'bold',
    },
});

export default styles;