import React from "react"
import { View, Text } from "@react-pdf/renderer"

import {
    DUE_HEADERS,
    DUE_WIDTHS,
    EARNED_HEADERS,
    transformDueData,
    transformEarnedData,
} from "../helper"
import { styles } from "../index.styles"
import { PDFTable } from "../../shared/PDFTable"
import type { DueEarnedData } from "../../PDFGenerator/index.type"

interface DueEarnedTableProps {
    dueData: DueEarnedData;
    earnedData: DueEarnedData;
}

const DueEarnedTable: React.FC<DueEarnedTableProps> = ({ dueData, earnedData }) => {
    const { rows: earnedRows, totalRows: earnedTotalRows } =
        transformEarnedData(earnedData)
    const { rows: dueRows, totalRows: dueTotalRows } = transformDueData(dueData)

    return (
        <>
            <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>Due</Text>
                <Text style={styles.sectionSubtitle}>
                    Weekly Est Payout: {dueData.total.comm}
                </Text>
            </View>
            <PDFTable
                headers={DUE_HEADERS}
                rows={dueRows}
                totalRows={dueTotalRows}
                colWidths={DUE_WIDTHS}
            />

            <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>Earned</Text>
                <Text style={styles.sectionSubtitle}>
                    Pending Payment: {earnedData.total.comm}
                </Text>
            </View>
            <PDFTable
                headers={EARNED_HEADERS}
                rows={earnedRows}
                totalRows={earnedTotalRows}
                colWidths={DUE_WIDTHS}
            />
        </>
    )
}

export default DueEarnedTable

