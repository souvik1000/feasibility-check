import { StyleSheet } from "@react-pdf/renderer";

export const styles = StyleSheet.create({
  table: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    marginVertical: 6,
  },
  headerRow: {
    flexDirection: 'row',
    backgroundColor: '#8492a6',
    paddingVertical: 5,
    paddingHorizontal: 6,
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    borderBottomColor: '#cbd5e1',
    paddingVertical: 5,
    paddingHorizontal: 6,
    backgroundColor: '#ffffff',
  },
  totalRow: {
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    borderBottomColor: '#cbd5e1',
    paddingVertical: 5,
    paddingHorizontal: 6,
    backgroundColor: '#f8fafc',
  },
  greenTotalRow: {
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    borderBottomColor: '#bbf7d0',
    paddingVertical: 5,
    paddingHorizontal: 6,
    backgroundColor: '#ecfdf5',
  },
  headerCell: {
    color: '#ffffff',
    fontSize: 6,
    fontWeight: 'bold',
  },
  cell: {
    color: '#334155',
    fontSize: 6,
  },
  boldCell: {
    color: '#1e293b',
    fontSize: 6,
    fontWeight: 'bold',
  },
  greenCell: {
    color: '#16a34a',
    fontSize: 6,
    fontWeight: 'bold',
  },
});