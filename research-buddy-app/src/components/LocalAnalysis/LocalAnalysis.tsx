import React, { useState } from 'react';
import { Button, FeatureCard, FormGroup, FormRow, Input, Select } from '../ui';
import { LocalCompetitorCard } from './LocalCompetitorCard';
import { DownloadIcon, DocIcon } from '../icons';
import { localCompetitors } from '../../data/mockData';
import type { LocalAnalysisFormData } from '../../types';

export const LocalAnalysis: React.FC = () => {
  const [formData, setFormData] = useState<LocalAnalysisFormData>({
    state: '',
    city: '',
    domain: '',
    coreService: '',
    targetAudience: '',
  });
  const [showResults, setShowResults] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.state || !formData.city || !formData.domain) {
      alert('Please fill in at least State, City, and Domain/Industry fields.');
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
    <section className="py-24" id="local-analysis">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-50 mb-4 tracking-tight">
            Local Competitive Analysis
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            Identify top local competitors based on geography and business context. 
            Understand who you're up against in your specific market area.
          </p>
        </div>
        
        <FeatureCard>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <FormRow>
              <FormGroup label="State" htmlFor="state">
                <Select id="state" name="state" value={formData.state} onChange={handleChange}>
                  <option value="">Select state</option>
                  <option value="CA">California</option>
                  <option value="NY">New York</option>
                  <option value="TX">Texas</option>
                  <option value="FL">Florida</option>
                  <option value="IL">Illinois</option>
                  <option value="WA">Washington</option>
                </Select>
              </FormGroup>
              <FormGroup label="City" htmlFor="city">
                <Select id="city" name="city" value={formData.city} onChange={handleChange}>
                  <option value="">Select city</option>
                  <option value="san-francisco">San Francisco</option>
                  <option value="los-angeles">Los Angeles</option>
                  <option value="new-york">New York</option>
                  <option value="austin">Austin</option>
                  <option value="seattle">Seattle</option>
                </Select>
              </FormGroup>
            </FormRow>
            
            <FormRow>
              <FormGroup label="Domain / Industry" htmlFor="domain">
                <Input
                  type="text"
                  id="domain"
                  name="domain"
                  value={formData.domain}
                  onChange={handleChange}
                  placeholder="e.g., SaaS, E-commerce, Healthcare"
                />
              </FormGroup>
              <FormGroup label="Core Service" htmlFor="coreService">
                <Input
                  type="text"
                  id="coreService"
                  name="coreService"
                  value={formData.coreService}
                  onChange={handleChange}
                  placeholder="e.g., Project Management Software"
                />
              </FormGroup>
            </FormRow>
            
            <FormGroup label="Target Audience" htmlFor="targetAudience">
              <Input
                type="text"
                id="targetAudience"
                name="targetAudience"
                value={formData.targetAudience}
                onChange={handleChange}
                placeholder="e.g., Small to Medium Businesses"
              />
            </FormGroup>
            
            <Button type="submit" variant="primary" fullWidth disabled={isLoading}>
              {isLoading ? 'Analyzing...' : 'Analyze Local Competitors'}
            </Button>
          </form>
        </FeatureCard>

        {showResults && (
          <div className="mt-8 animate-fade-in">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 p-6 bg-gray-50 dark:bg-gray-900/50 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-50">
                Local Competitors Found
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
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
              {localCompetitors.map((competitor) => (
                <LocalCompetitorCard key={competitor.id} competitor={competitor} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
