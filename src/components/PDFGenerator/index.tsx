import React, { use } from "react"

import DocsPDF from "../DocsPDF"
import {
    duePromise,
    trendPromise,
    earnedPromise,
    topJobsPromise,
    trailingPromise,
    topTicketsPromise,
    topCustomersPromise,
    topMaterialsPromise,
} from "./pdf-generator.service"
import Button from "../shared/Button"
import BarChart from "../shared/BarChart"
import { convertSvgToPng } from "./helper"
import { triggerFileDownload } from "../../helper"
import type { BarChartItem } from "../shared/BarChart"

const PDFGenerator: React.FC = () => {
    const dueData = use(duePromise)!
    const earnedData = use(earnedPromise)!
    const trendData = use(trendPromise)!

    const trailingData = use(trailingPromise)!

    const topJobsData = use(topJobsPromise)!
    const topCustomersData = use(topCustomersPromise)!
    const topMaterialsData = use(topMaterialsPromise)!

    const topTicketsData = use(topTicketsPromise)!

    const handleGeneratePDF = async () => {
        let chartImageUri = ""
        const chartSvg = document.querySelector(
            ".recharts-trend-chart .recharts-wrapper > svg",
        ) as SVGElement | null

        if (chartSvg) {
            chartImageUri = await convertSvgToPng(chartSvg, 600, 300)
        }

        // Dynamically import react-pdf to build the PDF document on demand
        try {
            const { pdf } = await import("@react-pdf/renderer")

            const doc = (
                <DocsPDF
                    dueData={dueData}
                    earnedData={earnedData}
                    trailingData={trailingData}
                    topCustomersData={topCustomersData}
                    topJobsData={topJobsData}
                    topMaterialsData={topMaterialsData}
                    topTicketsData={topTicketsData}
                    chartImage={chartImageUri || undefined}
                />
            )

            const blob = await pdf(doc).toBlob()

            triggerFileDownload(
                blob,
                "Sand_and_Gravel_Commission_Payout_Report.pdf",
            )
        } catch (err) {
            console.error("Failed to generate PDF document:", err)
            alert("Failed to generate PDF. Please try again.")
        }
    }

    return (
        // Use CSS/SCSS over inline styling
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                width: "100%",
            }}
        >
            <div
                style={{
                    width: "1000px",
                    height: "500px",
                    display: "none",
                    position: "absolute",
                }}
            >
                <BarChart
                    width={600}
                    height={300}
                    xAxisKey="month"
                    barKey="revenue"
                    lineKey="commission"
                    barName="Revenue ($)"
                    lineName="Commission ($)"
                    className="recharts-trend-chart"
                    data={trendData.data as unknown as BarChartItem[]}
                />
            </div>

            <div style={{ display: "flex", justifyContent: "flex-start" }}>
                <Button onClick={handleGeneratePDF}>
                    Download Report (PDF)
                </Button>
            </div>
        </div>
    )
}

export default PDFGenerator
