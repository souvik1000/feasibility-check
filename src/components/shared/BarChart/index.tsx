import React from "react";
import {
    Bar,
    Line,
    Legend,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
    ComposedChart,
} from "recharts";

export interface BarChartItem {
    [key: string]: string | number | boolean;
}

interface BarChartProps {
    barKey: string;
    barName: string;
    lineKey: string;
    xAxisKey: string;
    lineName: string;
    data: BarChartItem[];
    width?: number;
    height?: number;
    className?: string;
    style?: React.CSSProperties;
}

const BarChart: React.FC<BarChartProps> = ({
    data,
    style,
    barKey,
    barName,
    lineKey,
    xAxisKey,
    lineName,
    className,
    width = 600,
    height = 300,
}) => {
    return (
        <div
            className={`rechart-charts ${className}`}
            style={{
                width: `${width}px`,
                height: `${height}px`,
                backgroundColor: "#ffffff",
                ...style,
            }}
        >
            <ComposedChart
                width={width}
                height={height}
                data={data}
                margin={{ top: 15, right: 20, left: 10, bottom: 15 }}
            >
                <CartesianGrid
                    strokeDasharray="3 3"
                    vertical={false}
                    stroke="#e2e8f0"
                />
                <XAxis
                    dataKey={xAxisKey}
                    stroke="#64748b"
                    fontSize={11}
                    tickLine={false}
                />
                <YAxis
                    yAxisId="left"
                    stroke="#64748b"
                    fontSize={11}
                    tickLine={false}
                    axisLine={false}
                />
                <YAxis
                    yAxisId="right"
                    orientation="right"
                    stroke="#64748b"
                    fontSize={11}
                    tickLine={false}
                    axisLine={false}
                />
                <Tooltip />
                <Legend verticalAlign="top" height={36} />
                <Bar
                    yAxisId="left"
                    dataKey={barKey}
                    fill="#0ea5e9"
                    name={barName}
                    radius={[4, 4, 0, 0]}
                    maxBarSize={30}
                    isAnimationActive={false}
                />
                <Line
                    yAxisId="right"
                    type="monotone"
                    dataKey={lineKey}
                    stroke="#10b981"
                    strokeWidth={3}
                    name={lineName}
                    dot={{ r: 4, strokeWidth: 1, fill: "#10b981" }}
                    isAnimationActive={false}
                />
            </ComposedChart>
        </div>
    );
};

export default BarChart;
