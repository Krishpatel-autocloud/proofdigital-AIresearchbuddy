import type { LocalCompetitor, OnlineCompetitor, MarketResearchResults } from '../types';

export const localCompetitors: LocalCompetitor[] = [
  {
    id: '1',
    name: 'TechFlow Solutions',
    icon: '🏢',
    location: 'San Francisco, CA',
    industry: 'SaaS',
    description: 'Leading project management platform for enterprise teams with advanced analytics.',
    marketShare: '34%',
    customers: '5K+',
  },
  {
    id: '2',
    name: 'ProjectHub Pro',
    icon: '🚀',
    location: 'San Francisco, CA',
    industry: 'SaaS',
    description: 'Collaborative workspace solution with integrated time tracking and reporting.',
    marketShare: '28%',
    customers: '3.5K+',
  },
  {
    id: '3',
    name: 'TaskMaster Suite',
    icon: '⚡',
    location: 'San Francisco, CA',
    industry: 'SaaS',
    description: 'Agile project management tool designed for fast-growing startups and SMBs.',
    marketShare: '18%',
    customers: '2K+',
  },
  {
    id: '4',
    name: 'WorkStream Analytics',
    icon: '💼',
    location: 'San Francisco, CA',
    industry: 'SaaS',
    description: 'Data-driven workflow automation platform with AI-powered insights.',
    marketShare: '12%',
    customers: '1.8K+',
  },
];

export const onlineCompetitors: OnlineCompetitor[] = [
  {
    id: '1',
    domain: 'competitor-one.com',
    icon: '🌐',
    description: 'Strong SEO presence with high domain authority',
    domainAuthority: 85,
    monthlyTraffic: '2.5M',
    backlinks: '45K',
  },
  {
    id: '2',
    domain: 'competitor-two.io',
    icon: '🌐',
    description: 'Emerging player with rapid growth trajectory',
    domainAuthority: 72,
    monthlyTraffic: '1.8M',
    backlinks: '28K',
  },
  {
    id: '3',
    domain: 'competitor-three.co',
    icon: '🌐',
    description: 'Established brand with loyal customer base',
    domainAuthority: 68,
    monthlyTraffic: '1.2M',
    backlinks: '22K',
  },
  {
    id: '4',
    domain: 'competitor-four.app',
    icon: '🌐',
    description: 'Niche specialist with focused market approach',
    domainAuthority: 61,
    monthlyTraffic: '850K',
    backlinks: '15K',
  },
];

export const marketResearchResults: MarketResearchResults = {
  overview: {
    totalMarketSize: '$42.5B',
    growth: '+18.3%',
    projectedGrowth: '22.4%',
    maturity: 'Growth Phase',
    description:
      'The CRM software market is experiencing robust growth driven by digital transformation initiatives and increasing demand for customer experience solutions. Key growth drivers include cloud adoption, AI integration, and mobile-first approaches.',
  },
  keyPlayers: [
    { rank: 1, name: 'Salesforce', marketShare: '19.8% market share' },
    { rank: 2, name: 'Microsoft Dynamics', marketShare: '14.2% market share' },
    { rank: 3, name: 'HubSpot', marketShare: '8.5% market share' },
    { rank: 4, name: 'Zoho CRM', marketShare: '6.3% market share' },
    { rank: 5, name: 'Pipedrive', marketShare: '4.7% market share' },
  ],
  trends: [
    {
      type: 'hot',
      name: 'AI-Powered Automation',
      description: 'Predictive analytics and intelligent workflows',
    },
    {
      type: 'growing',
      name: 'Vertical-Specific Solutions',
      description: 'Industry-tailored CRM platforms',
    },
    {
      type: 'emerging',
      name: 'Conversational CRM',
      description: 'Chat-based interfaces and voice integration',
    },
    {
      type: 'opportunity',
      name: 'SMB Market Gap',
      description: 'Underserved small business segment',
    },
  ],
};
