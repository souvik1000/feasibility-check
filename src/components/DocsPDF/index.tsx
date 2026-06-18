import React from "react"
import { Document, Page, Text, View, Image } from "@react-pdf/renderer"

import {
    TICKET_WIDTHS,
    TICKET_HEADERS,
    TRAILING_WIDTHS,
    TRAILING_HEADERS,
    transformTicketData,
    transformTrailingData,
} from "./helper"
import type {
    TopJobsData,
    TicketsData,
    DueEarnedData,
    TopCustomersData,
    TopMaterialsData,
    Trailing12MonthsData,
} from "../PDFGenerator/index.type"
import { styles } from "./index.styles"
import PDFHeader from "./components/PDFHeader"
import { PDFTable } from "../shared/PDFTable"
import TopFiveTable from "./components/TopFiveTable"
import DueEarnedTable from "./components/DueEarnedTable"

interface DocsPDFProps {
    dueData: DueEarnedData
    topJobsData: TopJobsData
    earnedData: DueEarnedData
    topTicketsData: TicketsData
    trailingData: Trailing12MonthsData
    topCustomersData: TopCustomersData
    topMaterialsData: TopMaterialsData
    chartImage?: string
}

const DocsPDF: React.FC<DocsPDFProps> = ({
    dueData,
    earnedData,
    chartImage,
    topJobsData,
    trailingData,
    topTicketsData,
    topCustomersData,
    topMaterialsData,
}) => {
    const ticketRows = transformTicketData(topTicketsData)
    const { rows: trailingRows, totalRows: trailingTotalRows } =
        transformTrailingData(trailingData)

    return (
        <Document>
            <Page size="A4" orientation="landscape" style={styles.page}>
                <PDFHeader
                    totalTicket={topTicketsData.total_tickets}
                    totalJob={topJobsData.data.length}
                    totalDue={dueData.total.comm}
                    totalEarned={earnedData.total.comm}
                />

                <DueEarnedTable dueData={dueData} earnedData={earnedData} />

                {/* Trend Chart */}
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>
                        Revenue and Commission Trend
                    </Text>
                </View>
                {chartImage && (
                    <View style={styles.chartContainer}>
                        <Image src={chartImage} style={styles.chart} />
                    </View>
                )}

                {/* 12 month report */}
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Trailing 12 Months</Text>
                </View>
                <PDFTable
                    headers={TRAILING_HEADERS}
                    rows={trailingRows}
                    totalRows={trailingTotalRows}
                    colWidths={TRAILING_WIDTHS}
                />

                <TopFiveTable
                    topCustomersData={topCustomersData}
                    topJobsData={topJobsData}
                    topMaterialsData={topMaterialsData}
                />

                {/* Ticket Audit Trail */}
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>
                        Ticket Itemization Audit Trail
                    </Text>
                    <View style={styles.badgeCount}>
                        <Text style={styles.badgeCountText}>
                            Total {topTicketsData.total_tickets} Tickets
                        </Text>
                    </View>
                </View>
                <PDFTable
                    headers={TICKET_HEADERS}
                    rows={ticketRows}
                    colWidths={TICKET_WIDTHS}
                />
            </Page>
        </Document>
    )
}

export default DocsPDF
