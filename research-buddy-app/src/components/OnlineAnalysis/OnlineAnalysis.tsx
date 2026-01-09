import React, { useState } from 'react';
import { Button, FeatureCard, FormGroup, Input } from '../ui';
import { OnlineCompetitorRow } from './OnlineCompetitorRow';
import { DownloadIcon, DocIcon } from '../icons';
import { onlineCompetitors } from '../../data/mockData';
import type { OnlineAnalysisFormData } from '../../types';

export const OnlineAnalysis: React.FC = () => {
  const [formData, setFormData] = useState<OnlineAnalysisFormData>({
    websiteUrl: '',
  });
  const [showResults, setShowResults] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.websiteUrl) {
      alert('Please enter a website URL.');
      return;
    }

    try {
      new URL(formData.websiteUrl);
    } catch {
      alert('Please enter a valid URL (e.g., https://example.com)');
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      setShowResults(true);
      setIsLoading(false);
    }, 1500);
  };

  const handleDownload = (type: 'pdf' | 'docs') => {
    console.log(`Downloading ${type}...`);
  };

  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-950" id="online-analysis">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-50 mb-4 tracking-tight">
            Online Competitive Analysis
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            Discover your top digital competitors based on your website. Analyze online presence,
            SEO performance, and digital marketing strategies.
          </p>
        </div>
        
        <FeatureCard>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <FormGroup label="Website URL" htmlFor="websiteUrl">
              <Input
                type="url"
                id="websiteUrl"
                name="websiteUrl"
                value={formData.websiteUrl}
                onChange={handleChange}
                placeholder="https://yourwebsite.com"
              />
            </FormGroup>
            
            <Button type="submit" variant="primary" fullWidth disabled={isLoading}>
              {isLoading ? 'Analyzing...' : 'Analyze Online Competitors'}
            </Button>
          </form>
        </FeatureCard>

        {showResults && (
          <div className="mt-8 animate-fade-in">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 p-6 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-50">
                Online Competitors Found
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
            
            <div className="space-y-6">
              {onlineCompetitors.map((competitor) => (
                <OnlineCompetitorRow key={competitor.id} competitor={competitor} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
