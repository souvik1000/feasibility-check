import React from "react";
import { DualAxes } from "@ant-design/plots";

export interface DualChartItem {
    [key: string]: string | number | boolean;
}

interface DualChartProps {
    data: DualChartItem[];
    xAxisKey: string;
    barKey: string;
    barName: string;
    lineKey: string;
    lineName: string;
    width?: number;
    height?: number;
    style?: React.CSSProperties;
}

const DualChart: React.FC<DualChartProps> = ({
    data,
    xAxisKey,
    barKey,
    barName,
    lineKey,
    lineName,
    width = 1200,
    height = 600,
    style,
}) => {
    const chartData = [data, data];

    const config = {
        data: chartData,
        xField: xAxisKey,
        yField: [barKey, lineKey],
        width,
        height,
        autoFit: false,
        animation: false as unknown as undefined,
        meta: {
            [barKey]: {
                alias: barName,
            },
            [lineKey]: {
                alias: lineName,
            },
        },
        geometryOptions: [
            {
                geometry: "column",
                color: "#0ea5e9",
                columnWidthRatio: 0.4,
                columnStyle: {
                    radius: [4, 4, 0, 0],
                },
            },
            {
                geometry: "line",
                color: "#10b981",
                lineStyle: {
                    lineWidth: 3,
                },
                point: {
                    size: 4,
                    shape: "circle",
                    style: {
                        fill: "#10b981",
                        stroke: "#10b981",
                        lineWidth: 1,
                    },
                },
            },
        ],
        xAxis: {
            grid: null,
            label: {
                style: {
                    fill: "#64748b",
                    fontSize: 11,
                },
            },
            line: null,
            tickLine: null,
        },
        // Have to calculate max value dynamically for Ant-D to match
        yAxis: [
            {
                min: 0,
                max: 100000,
                grid: {
                    line: {
                        style: {
                            stroke: "#e2e8f0",
                            lineDash: [3, 3],
                        },
                    },
                },
                label: {
                    style: {
                        fill: "#64748b",
                        fontSize: 11,
                    },
                },
                line: null,
                tickLine: null,
            },
            // Have to calculate max value dynamically for Ant-D to match
            {
                min: 0,
                max: 3600,
                grid: null,
                label: {
                    style: {
                        fill: "#64748b",
                        fontSize: 11,
                    },
                },
                line: null,
                tickLine: null,
            },
        ],
        legend: {
            position: "top" as const,
            offsetY: -10,
            itemName: {
                style: {
                    fill: "#64748b",
                    fontSize: 11,
                },
            },
        },
    };

    return (
        <div
            className="ant-design-plots-dual-chart"
            style={{
                width: `${width}px`,
                height: `${height}px`,
                position: "relative",
                ...style,
            }}
        >
            <DualAxes {...config} />
        </div>
    );
};

export default DualChart;
