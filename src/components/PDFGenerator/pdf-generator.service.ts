import type {
    TrendData,
    TicketsData,
    TopJobsData,
    DueEarnedData,
    TopCustomersData,
    TopMaterialsData,
    Trailing12MonthsData,
} from "./index.type"
import { fetchJSON } from "../../helper"

const emptyDataFallback = { data: [] }
const dueEarnedFallback: DueEarnedData = {
    total: {
        gp: "0",
        ton: "0",
        cogs: "0",
        ton_rev: "0",
        mat_rev: "0",
        ton_cog: "0",
        mat_cog: "0",
        comm: "$0.00",
        gp_percent: "0%",
    },
    data: [],
}
const trailingFallback: Trailing12MonthsData = {
    total: {
        ttm: {
            gp: "$0.00",
            cogs: "$0.00",
            comm: "$0.00",
            revenue: "$0.00",
            ton_rev: "$0.00",
            mat_rev: "$0.00",
            ton_cog: "$0.00",
            mat_cog: "$0.00",
            gp_percent: "0%",
        },
        ytd: {
            gp: "$0.00",
            cogs: "$0.00",
            comm: "$0.00",
            revenue: "$0.00",
            ton_rev: "$0.00",
            mat_rev: "$0.00",
            ton_cog: "$0.00",
            mat_cog: "$0.00",
            gp_percent: "0%",
        },
    },
    data: [],
}

export const duePromise = fetchJSON<DueEarnedData>(
    "/src/data/due.json",
    dueEarnedFallback,
)
export const earnedPromise = fetchJSON<DueEarnedData>(
    "/src/data/earned.json",
    dueEarnedFallback,
)

export const trendPromise = fetchJSON<TrendData>(
    "/src/data/revenue-commission-trend.json",
    emptyDataFallback,
)

export const trailingPromise = fetchJSON<Trailing12MonthsData>(
    "/src/data/trailing-12-months.json",
    trailingFallback,
)

export const topCustomersPromise = fetchJSON<TopCustomersData>(
    "/src/data/top-customers.json",
    emptyDataFallback,
)
export const topMaterialsPromise = fetchJSON<TopMaterialsData>(
    "/src/data/top-materials.json",
    emptyDataFallback,
)
export const topTicketsPromise = fetchJSON<TicketsData>(
    "/src/data/top-tickets.json",
    { total_tickets: 0, data: [] },
)

export const topJobsPromise = fetchJSON<TopJobsData>(
    "/src/data/top-jobs.json",
    emptyDataFallback,
)
