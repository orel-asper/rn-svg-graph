interface Point {
    xCoordinate: number;
    yCoordinate: number;
}

interface CalculationResult {
    points: { x: number; y: number }[];
    maxValue: number;
    minValue: number;
    yRange: number;
    step: number;
}

export function calculatePoints(
    data: Point[],
    width: number,
    height: number
): CalculationResult {
    const maxValue = Math.max(...data.map((point) => point.yCoordinate));
    const minValue = Math.min(...data.map((point) => point.yCoordinate));
    const yRange = maxValue - minValue;
    const step = height / yRange;
    const points = data.map((point) => ({
        x: point.xCoordinate * (width / (data.length - 1)),
        y: height - (point.yCoordinate - minValue) * step,
    }));

    return {
        points,
        maxValue,
        minValue,
        yRange,
        step,
    };
}
