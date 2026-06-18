import React from "react"
import { Text, View } from "@react-pdf/renderer"

import {
    JOB_HEADERS,
    CUSTOMER_HEADERS,
    MATERIAL_HEADERS,
    transformJobData,
    transformCustomerData,
    transformMaterialData,
} from "../helper"
import type {
    TopJobsData,
    TopCustomersData,
    TopMaterialsData,
} from "../../PDFGenerator/index.type"
import { styles } from "../index.styles"
import { PDFTable } from "../../shared/PDFTable"

interface TopFiveTableProps {
    topJobsData: TopJobsData
    topCustomersData: TopCustomersData
    topMaterialsData: TopMaterialsData
}

const TopFiveTable: React.FC<TopFiveTableProps> = ({
    topJobsData,
    topCustomersData,
    topMaterialsData,
}) => {
    const jobRows = transformJobData(topJobsData)
    const customerRows = transformCustomerData(topCustomersData)
    const materialRows = transformMaterialData(topMaterialsData)
    
    return (
        <View style={styles.columnGrid}>
            <View style={styles.column}>
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Top Customers</Text>
                </View>
                <PDFTable headers={CUSTOMER_HEADERS} rows={customerRows} />
            </View>
            <View style={styles.column}>
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Top Jobs</Text>
                </View>
                <PDFTable headers={JOB_HEADERS} rows={jobRows} />
            </View>
            <View style={styles.column}>
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Top Materials</Text>
                </View>
                <PDFTable headers={MATERIAL_HEADERS} rows={materialRows} />
            </View>
        </View>
    )
}

export default TopFiveTable
