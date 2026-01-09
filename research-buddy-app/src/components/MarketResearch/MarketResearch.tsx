import React, { useState } from 'react';
import { Button, FeatureCard, FormGroup, FormRow, Input } from '../ui';
import { MarketOverviewCard } from './MarketOverviewCard';
import { KeyPlayersCard } from './KeyPlayersCard';
import { TrendsCard } from './TrendsCard';
import { DownloadIcon, DocIcon } from '../icons';
import { marketResearchResults } from '../../data/mockData';
import type { MarketResearchFormData } from '../../types';

export const MarketResearch: React.FC = () => {
  const [formData, setFormData] = useState<MarketResearchFormData>({
    domain: '',
    productOffering: '',
    service: '',
  });
  const [showResults, setShowResults] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.domain || !formData.productOffering) {
      alert('Please fill in at least Domain/Industry and Product Offering fields.');
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      setShowResults(true);
      setIsLoading(false);
    }, 2000);
  };

  const handleDownload = (type: 'pdf' | 'docs') => {
    console.log(`Downloading ${type}...`);
  };

  return (
    <section className="py-24" id="market-research">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-50 mb-4 tracking-tight">
            Market Research Insights
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            Understand your market landscape, key players, and opportunities. Get comprehensive
            market intelligence to inform your strategic decisions.
          </p>
        </div>
        
        <FeatureCard>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <FormRow>
              <FormGroup label="Domain / Industry" htmlFor="market-domain">
                <Input
                  type="text"
                  id="market-domain"
                  name="domain"
                  value={formData.domain}
                  onChange={handleChange}
                  placeholder="e.g., Cloud Computing, FinTech"
                />
              </FormGroup>
              <FormGroup label="Product Offering" htmlFor="productOffering">
                <Input
                  type="text"
                  id="productOffering"
                  name="productOffering"
                  value={formData.productOffering}
                  onChange={handleChange}
                  placeholder="e.g., CRM Software"
                />
              </FormGroup>
            </FormRow>
            
            <FormGroup label="Service" htmlFor="service">
              <Input
                type="text"
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                placeholder="e.g., Customer Relationship Management"
              />
            </FormGroup>
            
            <Button type="submit" variant="primary" fullWidth disabled={isLoading}>
              {isLoading ? 'Researching...' : 'Run Market Research'}
            </Button>
          </form>
        </FeatureCard>

        {showResults && (
          <div className="mt-8 animate-fade-in">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 p-6 bg-gray-50 dark:bg-gray-900/50 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-50">
                Market Research Report
              </h3>
              <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                <Button variant="secondary-outline" size="sm" onClick={() => handleDownload('pdf')}>
                  <DownloadIcon />
                  Download PDF
                </Button>
                <Button variant="secondary-outline" size="sm" onClick={() => handleDownload('docs')}>
                  <DocIcon />
                  Download Docs
                </Button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <MarketOverviewCard overview={marketResearchResults.overview} />
              <KeyPlayersCard players={marketResearchResults.keyPlayers} />
              <TrendsCard trends={marketResearchResults.trends} />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
