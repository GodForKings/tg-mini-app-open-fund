export interface FundStatsResponse {
	totalRaised: number
	goal: number
	progress: number
	membersCount: number
	purchasedCount: number
	wallet: {
		tonToPointsRate: number
	}
}
