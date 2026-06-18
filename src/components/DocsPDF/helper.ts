import type {
  TTMItem,
  TopJobItem,
  TicketItem,
  TicketsData,
  TopJobsData,
  DueEarnedData,
  DueEarnedItem,
  TopCustomerItem,
  TopMaterialItem,
  TopCustomersData,
  TopMaterialsData,
  Trailing12MonthsData,
} from '../PDFGenerator/index.type';

// --- Constants ---
export const DUE_HEADERS = ['CUST', 'JOB', 'TON', 'TON REV', 'MAT REV', 'COGS', 'TON COG', 'MAT COG', 'GP', 'GP%', 'COMM'];
export const DUE_WIDTHS = [1.2, 1.8, 1, 1, 1, 1, 1, 1, 1, 0.8, 1.2];

export const EARNED_HEADERS = DUE_HEADERS;
export const EARNED_WIDTHS = DUE_WIDTHS;

export const TRAILING_HEADERS = ['MO', 'REVENUE', 'TON REV', 'MAT REV', 'COGS', 'TON COG', 'MAT COG', 'GP', 'GP%', 'COMM'];
export const TRAILING_WIDTHS = [1.2, 1.5, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 0.8, 1.2];

export const CUSTOMER_HEADERS = ['#', 'CUSTOMER', 'REVENUE', 'GP', 'COMM'];
export const JOB_HEADERS = ['#', 'JOB', 'CONSUMED', 'GP', 'COMM'];
export const MATERIAL_HEADERS = ['#', 'MATERIAL', 'HAULED', 'GP', 'COMM'];

export const TICKET_HEADERS = ['TICKET', 'DATE', 'CUSTOMER', 'JOB', 'DRIVER', 'REVENUE', 'TON REV', 'MAT REV', 'COGS', 'TON COG', 'MAT COG', 'GP', 'COMM'];
export const TICKET_WIDTHS = [1, 0.8, 1.2, 1.5, 1.2, 1.2, 1, 1, 1, 1, 1, 1, 1];

// --- Transformations ---
export const transformDueData = (dueData: DueEarnedData) => {
  const rows = dueData.data.map((item: DueEarnedItem) => [
    item.cust,
    item.job,
    item.ton,
    item.ton_rev,
    item.mat_rev,
    item.cogs,
    item.ton_cog,
    item.mat_cog,
    item.gp,
    item.gp_percent,
    item.comm,
  ]);
  const totalRows = [[
    '',
    'Total',
    dueData.total.ton,
    dueData.total.ton_rev,
    dueData.total.mat_rev,
    dueData.total.cogs,
    dueData.total.ton_cog,
    dueData.total.mat_cog,
    dueData.total.gp,
    dueData.total.gp_percent,
    dueData.total.comm,
  ]];
  return { rows, totalRows };
};

export const transformEarnedData = (earnedData: DueEarnedData) => {
  const rows = earnedData.data.map((item: DueEarnedItem) => [
    item.cust,
    item.job,
    item.ton,
    item.ton_rev,
    item.mat_rev,
    item.cogs,
    item.ton_cog,
    item.mat_cog,
    item.gp,
    item.gp_percent,
    item.comm,
  ]);
  const totalRows = [[
    'Total',
    '',
    earnedData.total.ton,
    earnedData.total.ton_rev,
    earnedData.total.mat_rev,
    earnedData.total.cogs,
    earnedData.total.ton_cog,
    earnedData.total.mat_cog,
    earnedData.total.gp,
    earnedData.total.gp_percent,
    earnedData.total.comm,
  ]];
  return { rows, totalRows };
};

export const transformTrailingData = (trailingData: Trailing12MonthsData) => {
  const rows = trailingData.data.map((item: { mo: string } & TTMItem) => [
    item.mo,
    item.revenue,
    item.ton_rev,
    item.mat_rev,
    item.cogs,
    item.ton_cog,
    item.mat_cog,
    item.gp,
    item.gp_percent,
    item.comm,
  ]);
  const totalRows = [
    [
      'TTM',
      trailingData.total.ttm.revenue,
      trailingData.total.ttm.ton_rev,
      trailingData.total.ttm.mat_rev,
      trailingData.total.ttm.cogs,
      trailingData.total.ttm.ton_cog,
      trailingData.total.ttm.mat_cog,
      trailingData.total.ttm.gp,
      trailingData.total.ttm.gp_percent,
      trailingData.total.ttm.comm,
    ],
    [
      'YTD',
      trailingData.total.ytd.revenue,
      trailingData.total.ytd.ton_rev,
      trailingData.total.ytd.mat_rev,
      trailingData.total.ytd.cogs,
      trailingData.total.ytd.ton_cog,
      trailingData.total.ytd.mat_cog,
      trailingData.total.ytd.gp,
      trailingData.total.ytd.gp_percent,
      trailingData.total.ytd.comm,
    ]
  ];
  return { rows, totalRows };
};

export const transformCustomerData = (topCustomersData: TopCustomersData) => {
  return topCustomersData.data.map((item: TopCustomerItem) => [
    item.rank.toString(),
    item.customer,
    item.revenue,
    item.gp,
    item.comm,
  ]);
};

export const transformJobData = (topJobsData: TopJobsData) => {
  return topJobsData.data.map((item: TopJobItem) => [
    item.rank.toString(),
    item.job,
    item.consumed,
    item.gp,
    item.comm,
  ]);
};

export const transformMaterialData = (topMaterialsData: TopMaterialsData) => {
  return topMaterialsData.data.map((item: TopMaterialItem) => [
    item.rank.toString(),
    item.material,
    item.hauled,
    item.gp,
    item.comm,
  ]);
};

export const transformTicketData = (topTicketsData: TicketsData) => {
  return topTicketsData.data.map((item: TicketItem) => [
    item.ticket,
    item.date,
    item.customer,
    item.job,
    item.driver,
    item.revenue,
    item.ton_rev,
    item.mat_rev,
    item.cogs,
    item.ton_cog,
    item.mat_cog,
    item.gp,
    item.comm,
  ]);
};
