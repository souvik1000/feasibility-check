import React from 'react';
import { View, Text } from '@react-pdf/renderer';

import { styles } from './index.styles';

interface PDFTableProps {
  rows: string[][];
  headers: string[];
  colWidths?: number[];
  totalRows?: string[][];
}

export const PDFTable: React.FC<PDFTableProps> = ({ headers, rows, totalRows, colWidths }) => {
  return (
    <View style={styles.table}>
      {/* Header */}
      <View style={styles.headerRow}>
        {headers.map((headerName, i) => (
          <View key={i} style={{ flex: colWidths ? colWidths[i] : 1 }}>
            <Text style={styles.headerCell}>{headerName}</Text>
          </View>
        ))}
      </View>
      {/* Data Rows */}
      {rows.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
          {row.map((cell, cellIndex) => (
            <View key={cellIndex} style={{ flex: colWidths ? colWidths[cellIndex] : 1 }}>
              <Text style={styles.cell}>{cell}</Text>
            </View>
          ))}
        </View>
      ))}
      {/* Total section */}
      {totalRows && totalRows.map((totalRow, rIndex) => {
        const isGreen = totalRow[0] === 'YTD';
        const rowStyle = isGreen ? styles.greenTotalRow : styles.totalRow;
        const cellStyle = isGreen ? styles.greenCell : styles.boldCell;

        return (
          <View key={rIndex} style={rowStyle}>
            {totalRow.map((cell, cellIndex) => (
              <View key={cellIndex} style={{ flex: colWidths ? colWidths[cellIndex] : 1 }}>
                <Text style={cellStyle}>{cell}</Text>
              </View>
            ))}
          </View>
        );
      })}
    </View>
  );
};

