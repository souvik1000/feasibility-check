import { StyleSheet } from "@react-pdf/renderer";

export const styles = StyleSheet.create({
  page: {
    padding: 20,
    fontFamily: 'Helvetica',
    backgroundColor: '#ffffff',
  },
  // Twisted Nail LLC Top Banner
  brandHeader: {
    backgroundColor: '#0a3069',
    paddingVertical: 12,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  brandLogo: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#ffffff',
    letterSpacing: 1,
  },
  brandMeta: {
    alignItems: 'flex-end',
  },
  brandMetaTitle: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  brandMetaSubtitle: {
    fontSize: 6.5,
    color: '#93c5fd',
    marginTop: 2,
  },
  // Report Subheader with KPI Blocks
  reportBanner: {
    backgroundColor: '#114a9a',
    paddingVertical: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#1e40af',
  },
  bannerTitleContainer: {
    flexDirection: 'column',
  },
  bannerTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  badge: {
    backgroundColor: '#22c55e',
    borderRadius: 8,
    paddingVertical: 2,
    paddingHorizontal: 6,
    marginTop: 4,
    alignSelf: 'flex-start',
  },
  badgeText: {
    fontSize: 6,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  kpisRow: {
    flexDirection: 'row',
    gap: 16,
  },
  kpiBox: {
    alignItems: 'flex-end',
  },
  kpiLabel: {
    fontSize: 6.5,
    color: '#93c5fd',
  },
  kpiValue: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#ffffff',
    marginTop: 1,
  },
  // Inner Page Simple Headers (Pages 2 & 3)
  simpleHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1.5,
    borderBottomColor: '#8492a6',
    paddingBottom: 4,
    marginBottom: 8,
  },
  simpleHeaderTitle: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#0a3069',
  },
  simpleHeaderSubtitle: {
    fontSize: 7,
    color: '#6b7280',
  },
  // Sections
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 2,
    gap: 6,
  },
  sectionTitle: {
    fontSize: 9,
    fontWeight: 'bold',
    color: '#1e293b',
  },
  sectionSubtitle: {
    fontSize: 7,
    color: '#64748b',
  },
  badgeCount: {
    backgroundColor: '#e2e8f0',
    borderRadius: 6,
    paddingVertical: 1,
    paddingHorizontal: 4,
  },
  badgeCountText: {
    fontSize: 6.5,
    color: '#475569',
    fontWeight: 'bold',
  },
  chartContainer: {
    alignItems: 'center',
    marginVertical: 12,
  },
  chart: {
    width: 500,
    height: 200,
  },
  columnGrid: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 4,
  },
  column: {
    flex: 1,
  },
});