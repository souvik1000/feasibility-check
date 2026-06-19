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
import DualChart from "../shared/DualChart"
import { generateImageFromChart } from "./helper"
import { triggerFileDownload } from "../../helper"
import type { BarChartItem } from "../shared/BarChart"
import type { DualChartItem } from "../shared/DualChart"

const PDFGenerator: React.FC = () => {
    const dueData = use(duePromise)
    const earnedData = use(earnedPromise)
    const trendData = use(trendPromise)

    const trailingData = use(trailingPromise)

    const topJobsData = use(topJobsPromise)
    const topCustomersData = use(topCustomersPromise)
    const topMaterialsData = use(topMaterialsPromise)

    const topTicketsData = use(topTicketsPromise)

    const handleGeneratePDF = async () => {
        const { chartImageUri, dualChartImageUri } = await generateImageFromChart();

        // Dynamically import react-pdf to build the PDF document on demand
        try {
            const { pdf } = await import("@react-pdf/renderer")

            const doc = (
                <DocsPDF
                    dueData={dueData!}
                    earnedData={earnedData!}
                    trailingData={trailingData!}
                    topCustomersData={topCustomersData!}
                    topJobsData={topJobsData!}
                    topMaterialsData={topMaterialsData!}
                    topTicketsData={topTicketsData!}
                    chartImage={chartImageUri || undefined}
                    dualChartImage={dualChartImageUri || undefined}
                />
            )

            const blob = await pdf(doc).toBlob()

            // Trigger download using the pure helper
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
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                width: "100%",
            }}
        >
            {/* Hidden Chart Container for SVG/Canvas capture (Rendered but invisible to user) */}
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "1200px",
                    height: "1250px",
                    opacity: 0.001,
                    pointerEvents: "none",
                    zIndex: -9999,
                    display: "flex",
                    flexDirection: "column",
                    gap: "50px",
                }}
            >
                <BarChart
                    width={1200}
                    height={600}
                    xAxisKey="month"
                    barKey="revenue"
                    lineKey="commission"
                    barName="Revenue ($)"
                    lineName="Commission ($)"
                    className="recharts-trend-chart"
                    data={trendData?.data as unknown as BarChartItem[]}
                />

                <DualChart
                    width={1200}
                    height={600}
                    xAxisKey="month"
                    barKey="revenue"
                    lineKey="commission"
                    barName="Revenue ($)"
                    lineName="Commission ($)"
                    data={trendData?.data as unknown as DualChartItem[]}
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
