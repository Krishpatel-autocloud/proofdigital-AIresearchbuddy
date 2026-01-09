import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { Input, Select } from '../ui';
import Stepper, { Step } from '../ui/Stepper';

interface HeroProps {
  onLocalAnalysis: () => void;
  onOnlineAnalysis: () => void;
  onMarketResearch: () => void;
}

type ResearchType = 'local' | 'online' | 'market' | null;

export const Hero: React.FC<HeroProps> = ({ 
  onLocalAnalysis, 
  onOnlineAnalysis, 
  onMarketResearch 
}) => {
  const { user } = useAuth();
  const firstName = user?.name || 'there';
  
  const [selectedType, setSelectedType] = useState<ResearchType>(null);
  const [showResults, setShowResults] = useState(false);
  
  // Form data states
  const [localData, setLocalData] = useState({
    state: '',
    city: '',
    domain: '',
    coreService: '',
    targetAudience: '',
  });
  
  const [onlineData, setOnlineData] = useState({
    websiteUrl: '',
  });
  
  const [marketData, setMarketData] = useState({
    domain: '',
    productOffering: '',
    service: '',
  });

  const handleLocalClick = () => {
    setSelectedType('local');
    setShowResults(false);
  };

  const handleOnlineClick = () => {
    setSelectedType('online');
    setShowResults(false);
  };

  const handleMarketClick = () => {
    setSelectedType('market');
    setShowResults(false);
  };

  const handleLocalChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setLocalData((prev) => ({ ...prev, [name]: value }));
  };

  const handleOnlineChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setOnlineData((prev) => ({ ...prev, [name]: value }));
  };

  const handleMarketChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setMarketData((prev) => ({ ...prev, [name]: value }));
  };

  const handleDownload = (type: 'pdf' | 'doc') => {
    console.log(`Downloading ${type}...`);
    alert(`Downloading ${type.toUpperCase()} report... (Demo)`);
  };

  return (
    <section className="relative py-12 bg-white dark:bg-gray-950">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column - Hero Content */}
          <div className="flex flex-col justify-center">
            {/* Eyebrow Text */}
            <p className="text-base font-semibold text-primary-500 uppercase tracking-wide mb-4">
              Your Research Buddy
            </p>
            
            {/* Personalized Headline */}
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-5 leading-tight">
              Let's prepare a competitive analysis, {firstName}
            </h1>
            
            {/* Supporting Text */}
            <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
              Choose a research type to generate structured competitive and market insights.
            </p>

            {/* Research Type Buttons */}
            <div className="flex flex-col gap-4 pt-8 border-t-2 border-gray-200 dark:border-gray-800">
              <button
                onClick={handleLocalClick}
                className={`flex items-center justify-between px-8 py-5 bg-white dark:bg-gray-900 border-2 rounded-2xl hover:border-primary-500 dark:hover:border-primary-500 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200 group ${
                  selectedType === 'local' ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20' : 'border-gray-200 dark:border-gray-800'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                    selectedType === 'local' ? 'bg-primary-500' : 'bg-primary-100 dark:bg-primary-900/30 group-hover:bg-primary-500'
                  }`}>
                    <svg className={`w-6 h-6 transition-colors ${
                      selectedType === 'local' ? 'text-white' : 'text-primary-600 dark:text-primary-400 group-hover:text-white'
                    }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <span className="text-lg font-semibold text-gray-900 dark:text-white">Local Competitive Analysis</span>
                </div>
                <svg className="w-5 h-5 text-gray-400 group-hover:text-primary-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              <button
                onClick={handleOnlineClick}
                className={`flex items-center justify-between px-8 py-5 bg-white dark:bg-gray-900 border-2 rounded-2xl hover:border-primary-500 dark:hover:border-primary-500 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200 group ${
                  selectedType === 'online' ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20' : 'border-gray-200 dark:border-gray-800'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                    selectedType === 'online' ? 'bg-primary-500' : 'bg-primary-100 dark:bg-primary-900/30 group-hover:bg-primary-500'
                  }`}>
                    <svg className={`w-6 h-6 transition-colors ${
                      selectedType === 'online' ? 'text-white' : 'text-primary-600 dark:text-primary-400 group-hover:text-white'
                    }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  </div>
                  <span className="text-lg font-semibold text-gray-900 dark:text-white">Online Competitive Analysis</span>
                </div>
                <svg className="w-5 h-5 text-gray-400 group-hover:text-primary-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              <button
                onClick={handleMarketClick}
                className={`flex items-center justify-between px-8 py-5 bg-white dark:bg-gray-900 border-2 rounded-2xl hover:border-primary-500 dark:hover:border-primary-500 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200 group ${
                  selectedType === 'market' ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20' : 'border-gray-200 dark:border-gray-800'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                    selectedType === 'market' ? 'bg-primary-500' : 'bg-primary-100 dark:bg-primary-900/30 group-hover:bg-primary-500'
                  }`}>
                    <svg className={`w-6 h-6 transition-colors ${
                      selectedType === 'market' ? 'text-white' : 'text-primary-600 dark:text-primary-400 group-hover:text-white'
                    }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <span className="text-lg font-semibold text-gray-900 dark:text-white">Market Research Insights</span>
                </div>
                <svg className="w-5 h-5 text-gray-400 group-hover:text-primary-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Column - Interactive Area with Stepper */}
          <div className="flex flex-col min-h-[550px]">
            {/* Placeholder State */}
            {!selectedType && (
              <div className="bg-gray-50 dark:bg-gray-900 rounded-3xl border-2 border-gray-200 dark:border-gray-800 p-10 h-full flex flex-col items-center justify-center text-center">
                <div className="w-20 h-20 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg 
                    className="w-10 h-10 text-primary-500" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  Select a research type to begin
                </h3>
                <p className="text-base text-gray-600 dark:text-gray-400 max-w-sm mx-auto leading-relaxed">
                  Choose from local competitive analysis, online competitive analysis, or market research insights.
                </p>
              </div>
            )}

            {/* Local Analysis Stepper */}
            {selectedType === 'local' && !showResults && (
              <Stepper
                initialStep={1}
                onFinalStepCompleted={() => setShowResults(true)}
                stepCircleContainerClassName="bg-gray-50 dark:bg-gray-900"
                nextButtonText="Next →"
                backButtonText="← Back"
              >
                <Step>
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      Location Details
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                      Tell us where your business is located
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          State
                        </label>
                        <Select name="state" value={localData.state} onChange={handleLocalChange}>
                          <option value="">Select state</option>
                          <option value="CA">California</option>
                          <option value="NY">New York</option>
                          <option value="TX">Texas</option>
                          <option value="FL">Florida</option>
                        </Select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          City
                        </label>
                        <Select name="city" value={localData.city} onChange={handleLocalChange}>
                          <option value="">Select city</option>
                          <option value="san-francisco">San Francisco</option>
                          <option value="los-angeles">Los Angeles</option>
                          <option value="new-york">New York</option>
                        </Select>
                      </div>
                    </div>
                  </div>
                </Step>

                <Step>
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      Business Information
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                      Provide details about your business
                    </p>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Domain / Industry
                      </label>
                      <Input
                        type="text"
                        name="domain"
                        value={localData.domain}
                        onChange={handleLocalChange}
                        placeholder="e.g., SaaS, E-commerce"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Core Service
                      </label>
                      <Input
                        type="text"
                        name="coreService"
                        value={localData.coreService}
                        onChange={handleLocalChange}
                        placeholder="e.g., Project Management"
                      />
                    </div>
                  </div>
                </Step>
              </Stepper>
            )}

            {/* Local Analysis Results */}
            {selectedType === 'local' && showResults && (
              <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-8 animate-fadeIn">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    Analysis Complete! 🎉
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    Your local competitive analysis is ready. Download your report below:
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <button
                    onClick={() => handleDownload('pdf')}
                    className="flex items-center justify-center gap-2 px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 active:bg-red-700 transition-colors font-semibold"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Download PDF
                  </button>
                  <button
                    onClick={() => handleDownload('doc')}
                    className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 active:bg-blue-700 transition-colors font-semibold"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Download DOC
                  </button>
                </div>

                <button
                  onClick={() => {
                    setShowResults(false);
                    setSelectedType(null);
                  }}
                  className="mt-6 w-full py-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  ← Start New Analysis
                </button>
              </div>
            )}

            {/* Online Analysis Stepper */}
            {selectedType === 'online' && !showResults && (
              <Stepper
                initialStep={1}
                onFinalStepCompleted={() => setShowResults(true)}
                stepCircleContainerClassName="bg-gray-50 dark:bg-gray-900"
                nextButtonText="Next →"
                backButtonText="← Back"
              >
                <Step>
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      Website Information
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                      Enter your website URL for analysis
                    </p>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Website URL
                      </label>
                      <Input
                        type="url"
                        name="websiteUrl"
                        value={onlineData.websiteUrl}
                        onChange={handleOnlineChange}
                        placeholder="https://yourwebsite.com"
                      />
                    </div>
                  </div>
                </Step>
              </Stepper>
            )}

            {/* Online Analysis Results */}
            {selectedType === 'online' && showResults && (
              <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-8 animate-fadeIn">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    Analysis Complete! 🎉
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    Your online competitive analysis is ready. Download your report below:
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <button
                    onClick={() => handleDownload('pdf')}
                    className="flex items-center justify-center gap-2 px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 active:bg-red-700 transition-colors font-semibold"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Download PDF
                  </button>
                  <button
                    onClick={() => handleDownload('doc')}
                    className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 active:bg-blue-700 transition-colors font-semibold"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Download DOC
                  </button>
                </div>

                <button
                  onClick={() => {
                    setShowResults(false);
                    setSelectedType(null);
                  }}
                  className="mt-6 w-full py-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  ← Start New Analysis
                </button>
              </div>
            )}

            {/* Market Research Stepper */}
            {selectedType === 'market' && !showResults && (
              <Stepper
                initialStep={1}
                onFinalStepCompleted={() => setShowResults(true)}
                stepCircleContainerClassName="bg-gray-50 dark:bg-gray-900"
                nextButtonText="Next →"
                backButtonText="← Back"
              >
                <Step>
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      Industry Information
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                      Tell us about your market
                    </p>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Domain / Industry
                      </label>
                      <Input
                        type="text"
                        name="domain"
                        value={marketData.domain}
                        onChange={handleMarketChange}
                        placeholder="e.g., Cloud Computing, FinTech"
                      />
                    </div>
                  </div>
                </Step>

                <Step>
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      Product Details
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                      What products or services do you offer?
                    </p>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Product Offering
                      </label>
                      <Input
                        type="text"
                        name="productOffering"
                        value={marketData.productOffering}
                        onChange={handleMarketChange}
                        placeholder="e.g., CRM Software"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Service (Optional)
                      </label>
                      <Input
                        type="text"
                        name="service"
                        value={marketData.service}
                        onChange={handleMarketChange}
                        placeholder="e.g., Cloud-based Solutions"
                      />
                    </div>
                  </div>
                </Step>

                <Step>
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      Review & Generate
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                      Review your information and generate the report
                    </p>
                    <div className="bg-primary-50 dark:bg-primary-900/20 rounded-lg p-4 space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600 dark:text-gray-400">Industry:</span>
                        <span className="font-medium text-gray-900 dark:text-white">{marketData.domain || 'Not specified'}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600 dark:text-gray-400">Product:</span>
                        <span className="font-medium text-gray-900 dark:text-white">{marketData.productOffering || 'Not specified'}</span>
                      </div>
                      {marketData.service && (
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600 dark:text-gray-400">Service:</span>
                          <span className="font-medium text-gray-900 dark:text-white">{marketData.service}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </Step>
              </Stepper>
            )}

            {/* Market Research Results */}
            {selectedType === 'market' && showResults && (
              <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-8 animate-fadeIn">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    Analysis Complete! 🎉
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    Your market research report is ready. Download your report below:
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <button
                    onClick={() => handleDownload('pdf')}
                    className="flex items-center justify-center gap-2 px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 active:bg-red-700 transition-colors font-semibold"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Download PDF
                  </button>
                  <button
                    onClick={() => handleDownload('doc')}
                    className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 active:bg-blue-700 transition-colors font-semibold"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Download DOC
                  </button>
                </div>

                <button
                  onClick={() => {
                    setShowResults(false);
                    setSelectedType(null);
                  }}
                  className="mt-6 w-full py-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  ← Start New Analysis
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
