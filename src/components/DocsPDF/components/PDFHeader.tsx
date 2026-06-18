import React from "react"
import { Text, View } from "@react-pdf/renderer"

import { styles } from "../index.styles"

interface PDFHeaderProps {
    totalTicket: number;
    totalJob: number;
    totalDue: string;
    totalEarned: string;
}

// Move it to Helper function
const parseCurrency = (val: string): number => {
    if (!val) return 0;
    const num = parseFloat(val.replace(/[$,]/g, ""));
    return isNaN(num) ? 0 : num;
};

// Move it to Helper function
const formatCurrency = (val: number): string => {
    return "$" + val.toLocaleString("en-US", { 
        minimumFractionDigits: 2, 
        maximumFractionDigits: 2 
    });
};

const PDFHeader: React.FC<PDFHeaderProps> = ({
    totalTicket,
    totalJob,
    totalDue,
    totalEarned,
}) => {
    const sum = parseCurrency(totalDue) + parseCurrency(totalEarned);
    const formattedTotal = formatCurrency(sum);

    return (
        <>
            {/* Banner */}
            <View style={styles.brandHeader}>
                <Text style={styles.brandLogo}>TWISTED NAIL LLC.</Text>
                <View style={styles.brandMeta}>
                    <Text style={styles.brandMetaTitle}>Cole Neville</Text>
                    <Text style={styles.brandMetaSubtitle}>
                        Cole Commission | May 2026 | May 2026 (01-01)
                    </Text>
                </View>
            </View>

            {/* Header Infos */}
            <View style={styles.reportBanner}>
                <View style={styles.bannerTitleContainer}>
                    <Text style={styles.bannerTitle}>
                        Sand & Gravel - Commission Payout Report
                    </Text>
                    <View style={styles.badge}>
                        <Text style={styles.badgeText}>
                            Payout Confirmation
                        </Text>
                    </View>
                </View>
                <View style={styles.kpisRow}>
                    <View style={styles.kpiBox}>
                        <Text style={styles.kpiLabel}>Tickets</Text>
                        <Text style={styles.kpiValue}>
                            {totalTicket}
                        </Text>
                    </View>
                    <View style={styles.kpiBox}>
                        <Text style={styles.kpiLabel}>Jobs</Text>
                        <Text style={styles.kpiValue}>
                            {totalJob}
                        </Text>
                    </View>
                    <View style={styles.kpiBox}>
                        <Text style={styles.kpiLabel}>Due</Text>
                        <Text style={styles.kpiValue}>
                            {totalDue}
                        </Text>
                    </View>
                    <View style={styles.kpiBox}>
                        <Text style={styles.kpiLabel}>Earned</Text>
                        <Text style={styles.kpiValue}>
                            {totalEarned}
                        </Text>
                    </View>
                    <View style={styles.kpiBox}>
                        <Text style={styles.kpiLabel}>Total</Text>
                        <Text style={styles.kpiValue}>{formattedTotal}</Text>
                    </View>
                </View>
            </View>
        </>
    )
}

export default PDFHeader;

