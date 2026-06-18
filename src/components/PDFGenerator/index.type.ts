// Due & Earned Table
export interface DueEarnedItem {
  cust: string;
  job: string;
  ton: string;
  ton_rev: string;
  mat_rev: string;
  cogs: string;
  ton_cog: string;
  mat_cog: string;
  gp: string;
  gp_percent: string;
  comm: string;
}

export type DueEarnedTotal = Omit<DueEarnedItem, 'cust' | 'job'>

export interface DueEarnedData {
  total: DueEarnedTotal;
  data: DueEarnedItem[];
}

// Revenue & Commission Trend Chart
export interface TrendItem {
  month: string;
  revenue: number;
  commission: number;
}

export interface TrendData {
  data: TrendItem[];
}

// 12 Months Trailing
export interface TTMItem {
  revenue: string;
  ton_rev: string;
  mat_rev: string;
  cogs: string;
  ton_cog: string;
  mat_cog: string;
  gp: string;
  gp_percent: string;
  comm: string;
}

export interface Trailing12MonthsData {
  total: {
    ttm: TTMItem;
    ytd: TTMItem;
  };
  data: Array<{ mo: string } & TTMItem>;
}

// Top 5 Lists
export interface TopCustomerItem {
  rank: number;
  customer: string;
  revenue: string;
  gp: string;
  comm: string;
}

export interface TopCustomersData {
  data: TopCustomerItem[];
}

export interface TopJobItem {
  rank: number;
  job: string;
  consumed: string;
  gp: string;
  comm: string;
}

export interface TopJobsData {
  data: TopJobItem[];
}

export interface TopMaterialItem {
  rank: number;
  material: string;
  hauled: string;
  gp: string;
  comm: string;
}

export interface TopMaterialsData {
  data: TopMaterialItem[];
}

// Tickets
export interface TicketItem {
  ticket: string;
  date: string;
  customer: string;
  job: string;
  driver: string;
  revenue: string;
  ton_rev: string;
  mat_rev: string;
  cogs: string;
  ton_cog: string;
  mat_cog: string;
  gp: string;
  comm: string;
}

export interface TicketsData {
  total_tickets: number;
  data: TicketItem[];
}