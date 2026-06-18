import React from "react"
import { Progress } from "antd"

import "./ProgressBar.css"

export interface IProgressBarItem {
    name?: string
    score: number | null
    total_score: number
    threshold: number
}

interface ProgressBarProps {
    data: IProgressBarItem[]
    showName?: boolean
}

const ProgressBar: React.FC<ProgressBarProps> = ({ data, showName = true }) => {
    return (
        <div>
            <div className="bar-list">
                {data.map((item, index) => {
                    const hasScore =
                        item.score !== null && item.score !== undefined

                    // [Recomanded] You can do percentage,isOverThreshold, displayValue, barColor 
                    // outside and pass score as percent, Transform through API response in service level
                    const percentage = hasScore
                        ? Math.round(
                              ((item.total_score - (item.score ?? 0)) /
                                  item.total_score) *
                                  100,
                          )
                        : null

                    const isOverThreshold =
                        percentage !== null && percentage > item.threshold

                    const barColor =
                        percentage === null
                            ? "#e5e7eb"
                            : isOverThreshold ? "#d97706" : "#16a34a"

                    const displayValue =
                        percentage !== null ? `${percentage}` : "-"

                    return (
                        <div key={index} className="bar-row">
                            {/* Bar name */}
                            {showName && item.name && (
                                <div className="category-name">{item.name}</div>
                            )}
                            {/* Show Score */}
                            <div
                                className="score-value"
                                style={{
                                    color:
                                        percentage === null
                                            ? "#9ca3af"
                                            : barColor,
                                }}
                            >
                                {displayValue}
                            </div>
                            <div className="progress-container">
                                <div className="progress-track-wrapper">
                                    {/* Progress Bar */}
                                    <Progress
                                        percent={percentage ?? 0}
                                        showInfo={false}
                                        strokeColor={
                                            percentage === null
                                                ? "#e5e7eb"
                                                : barColor
                                        }
                                        trailColor="#e5e7eb"
                                        strokeWidth={8}
                                    />

                                    {/* Breakpoint Line */}
                                    <div
                                        className="threshold-marker"
                                        style={{ left: `${item.threshold}%` }}
                                    >
                                        <span className="threshold-label">
                                            {item.threshold}
                                        </span>
                                        <div className="threshold-line" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ProgressBar
