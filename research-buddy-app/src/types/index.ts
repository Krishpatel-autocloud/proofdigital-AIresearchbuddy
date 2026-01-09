// Form Data Types
export interface LocalAnalysisFormData {
  state: string;
  city: string;
  domain: string;
  coreService: string;
  targetAudience: string;
}

export interface OnlineAnalysisFormData {
  websiteUrl: string;
}

export interface MarketResearchFormData {
  domain: string;
  productOffering: string;
  service: string;
}

// Competitor Types
export interface LocalCompetitor {
  id: string;
  name: string;
  icon: string;
  location: string;
  industry: string;
  description: string;
  marketShare: string;
  customers: string;
}

export interface OnlineCompetitor {
  id: string;
  domain: string;
  icon: string;
  description: string;
  domainAuthority: number;
  monthlyTraffic: string;
  backlinks: string;
}

// Market Research Types
export interface MarketOverview {
  totalMarketSize: string;
  growth: string;
  projectedGrowth: string;
  maturity: string;
  description: string;
}

export interface KeyPlayer {
  rank: number;
  name: string;
  marketShare: string;
}

export interface Trend {
  type: 'hot' | 'growing' | 'emerging' | 'opportunity';
  name: string;
  description: string;
}

export interface MarketResearchResults {
  overview: MarketOverview;
  keyPlayers: KeyPlayer[];
  trends: Trend[];
}
