import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { Input, Select, CustomSelect } from '../ui';
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
  const [isLoading, setIsLoading] = useState(false);
  const [showCompetitorSelection, setShowCompetitorSelection] = useState(false);
  const [selectedCompetitors, setSelectedCompetitors] = useState<number[]>([]);
  
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

  const handleAnalysisComplete = async () => {
    setIsLoading(true);
    // Simulate processing time (2 seconds)
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsLoading(false);
    
    // For local and online analysis, show competitor selection first
    if (selectedType === 'local' || selectedType === 'online') {
      setShowCompetitorSelection(true);
    } else {
      // For market research, show results directly
      setShowResults(true);
    }
  };

  const handleCompetitorSelectionComplete = () => {
    if (selectedCompetitors.length > 0) {
      setShowCompetitorSelection(false);
      setShowResults(true);
    }
  };

  const toggleCompetitor = (id: number) => {
    setSelectedCompetitors(prev =>
      prev.includes(id)
        ? prev.filter(compId => compId !== id)
        : [...prev, id]
    );
  };

  // Mock competitor data
  const mockLocalCompetitors = [
    { id: 1, name: 'Competitor Alpha', location: 'San Francisco, CA', industry: 'SaaS', rating: 4.5 },
    { id: 2, name: 'Beta Solutions Inc.', location: 'San Francisco, CA', industry: 'Technology', rating: 4.2 },
    { id: 3, name: 'Gamma Enterprises', location: 'Palo Alto, CA', industry: 'SaaS', rating: 4.7 },
    { id: 4, name: 'Delta Tech Co.', location: 'San Jose, CA', industry: 'Software', rating: 4.0 },
    { id: 5, name: 'Epsilon Systems', location: 'Mountain View, CA', industry: 'Cloud Services', rating: 4.4 },
    { id: 6, name: 'Zeta Innovations', location: 'Sunnyvale, CA', industry: 'SaaS', rating: 4.6 },
    { id: 7, name: 'Eta Digital', location: 'San Francisco, CA', industry: 'Marketing Tech', rating: 4.1 },
    { id: 8, name: 'Theta Corp', location: 'Oakland, CA', industry: 'Business Solutions', rating: 4.3 },
    { id: 9, name: 'Iota Services', location: 'Berkeley, CA', industry: 'Consulting', rating: 4.5 },
    { id: 10, name: 'Kappa Technologies', location: 'San Mateo, CA', industry: 'Software', rating: 4.8 },
  ];

  const mockOnlineCompetitors = [
    { id: 1, name: 'DigitalRise.com', location: 'Online', industry: 'Digital Marketing', rating: 4.6 },
    { id: 2, name: 'CloudMasters.io', location: 'Online', industry: 'Cloud Solutions', rating: 4.8 },
    { id: 3, name: 'TechVision.net', location: 'Online', industry: 'SaaS Platform', rating: 4.4 },
    { id: 4, name: 'WebGenius.co', location: 'Online', industry: 'Web Services', rating: 4.3 },
    { id: 5, name: 'DataFlow.ai', location: 'Online', industry: 'Data Analytics', rating: 4.7 },
    { id: 6, name: 'SmartHub.tech', location: 'Online', industry: 'Business Tools', rating: 4.5 },
    { id: 7, name: 'ProSuite.com', location: 'Online', industry: 'Productivity', rating: 4.2 },
    { id: 8, name: 'NextGen.solutions', location: 'Online', industry: 'Innovation', rating: 4.6 },
    { id: 9, name: 'PrimeVentures.io', location: 'Online', industry: 'Enterprise', rating: 4.4 },
    { id: 10, name: 'ApexDigital.co', location: 'Online', industry: 'Digital Services', rating: 4.9 },
  ];

  const currentCompetitors = selectedType === 'online' ? mockOnlineCompetitors : mockLocalCompetitors;

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
            <h1 className="text-4xl lg:text-5xl font-bold mb-5 leading-tight text-[#151417] dark:text-white transition-colors duration-300">
              Let's prepare a competitive analysis, <span className="text-[#13b2e3] dark:text-cyan-400 transition-colors duration-300">{firstName}</span>
            </h1>
            
            {/* Supporting Text */}
            <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
              Choose a research type to generate structured competitive and market insights.
            </p>

            {/* Research Type Buttons */}
            <div className="flex flex-col gap-4 pt-8 border-t-2 border-gray-200 dark:border-gray-800">
              <button
                onClick={handleLocalClick}
                className={`flex items-center justify-between px-8 py-6 bg-white dark:bg-gray-900 border rounded-2xl hover:border-primary-400 dark:hover:border-primary-500 hover:shadow-md transition-all duration-200 group ${
                  selectedType === 'local' ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20 shadow-sm' : 'border-gray-200 dark:border-gray-800'
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
                  <span className="text-lg font-semibold text-gray-900 dark:text-white">Geographical Competitor Analysis</span>
                </div>
                <svg className="w-5 h-5 text-gray-400 group-hover:text-primary-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              <button
                onClick={handleOnlineClick}
                className={`flex items-center justify-between px-8 py-6 bg-white dark:bg-gray-900 border rounded-2xl hover:border-primary-400 dark:hover:border-primary-500 hover:shadow-md transition-all duration-200 group ${
                  selectedType === 'online' ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20 shadow-sm' : 'border-gray-200 dark:border-gray-800'
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
                  <span className="text-lg font-semibold text-gray-900 dark:text-white">Online Competitor Analysis</span>
                </div>
                <svg className="w-5 h-5 text-gray-400 group-hover:text-primary-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              <button
                onClick={handleMarketClick}
                className={`flex items-center justify-between px-8 py-6 bg-white dark:bg-gray-900 border rounded-2xl hover:border-primary-400 dark:hover:border-primary-500 hover:shadow-md transition-all duration-200 group ${
                  selectedType === 'market' ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20 shadow-sm' : 'border-gray-200 dark:border-gray-800'
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
          <div className="flex flex-col min-h-[700px]">
            {/* Placeholder State */}
            {!selectedType && (
              <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-xl p-12 h-full flex flex-col items-center justify-center text-center">
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
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
                  Select a research type to begin
                </h3>
                <p className="text-base text-gray-600 dark:text-gray-400 max-w-sm mx-auto leading-relaxed">
                  Choose from local competitive analysis, online competitive analysis, or market research insights.
                </p>
              </div>
            )}

            {/* Local Analysis Stepper */}
            {selectedType === 'local' && !showResults && !isLoading && !showCompetitorSelection && (
              <Stepper
                initialStep={1}
                onFinalStepCompleted={handleAnalysisComplete}
                stepCircleContainerClassName="bg-gray-50 dark:bg-gray-900"
                nextButtonText="Next →"
                backButtonText="← Back"
              >
                  <Step>
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
                        Location Details
                      </h3>
                      <p className="text-lg text-gray-500 dark:text-gray-400">
                        Tell us where your business is located
                      </p>
                    </div>
                    <div className="space-y-6">
                      <div>
                        <label className="block text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
                          State
                        </label>
                        <CustomSelect
                          name="state"
                          value={localData.state}
                          onChange={handleLocalChange}
                          placeholder="Select state"
                          options={[
                            { value: 'CA', label: 'California' },
                            { value: 'NY', label: 'New York' },
                            { value: 'TX', label: 'Texas' },
                            { value: 'FL', label: 'Florida' },
                            { value: 'IL', label: 'Illinois' },
                            { value: 'WA', label: 'Washington' },
                            { value: 'PA', label: 'Pennsylvania' },
                            { value: 'OH', label: 'Ohio' },
                          ]}
                          className="w-full"
                        />
                      </div>
                      <div>
                        <label className="block text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
                          City
                        </label>
                        <CustomSelect
                          name="city"
                          value={localData.city}
                          onChange={handleLocalChange}
                          placeholder="Select city"
                          options={[
                            { value: 'san-francisco', label: 'San Francisco' },
                            { value: 'los-angeles', label: 'Los Angeles' },
                            { value: 'new-york', label: 'New York' },
                            { value: 'austin', label: 'Austin' },
                            { value: 'seattle', label: 'Seattle' },
                            { value: 'chicago', label: 'Chicago' },
                            { value: 'boston', label: 'Boston' },
                            { value: 'miami', label: 'Miami' },
                          ]}
                          className="w-full"
                        />
                      </div>
                    </div>
                  </div>
                </Step>

                <Step>
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
                        Business Information
                      </h3>
                      <p className="text-lg text-gray-500 dark:text-gray-400">
                        Provide details about your business
                      </p>
                    </div>
                    <div className="space-y-5">
                      <div>
                        <label className="block text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
                          Domain / Industry
                        </label>
                        <Input
                          type="text"
                          name="domain"
                          value={localData.domain}
                          onChange={handleLocalChange}
                          placeholder="e.g., SaaS, E-commerce"
                          className="w-full"
                        />
                      </div>
                      <div>
                        <label className="block text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
                          Core Service
                        </label>
                        <Input
                          type="text"
                          name="coreService"
                          value={localData.coreService}
                          onChange={handleLocalChange}
                          placeholder="e.g., Project Management"
                          className="w-full"
                        />
                      </div>
                    </div>
                  </div>
                </Step>
              </Stepper>
            )}

            {/* Loading State */}
            {isLoading && (
              <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-xl p-12 h-full flex flex-col items-center justify-center text-center animate-fade-in">
                {/* Spinner */}
                <div className="relative w-20 h-20 mb-6">
                  <div className="absolute inset-0 border-4 border-gray-200 dark:border-gray-700 rounded-full"></div>
                  <div className="absolute inset-0 border-4 border-primary-500 border-t-transparent rounded-full animate-spin"></div>
                </div>
                
                {/* Loading Text */}
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  Analyzing Data...
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-400 max-w-md">
                  We're processing your information and generating comprehensive insights. This will just take a moment.
                </p>
                
                {/* Progress Dots */}
                <div className="flex gap-2 mt-8">
                  <div className="w-2 h-2 bg-primary-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                  <div className="w-2 h-2 bg-primary-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                  <div className="w-2 h-2 bg-primary-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                </div>
              </div>
            )}

            {/* Competitor Selection Panel (Local & Online Analysis) */}
            {showCompetitorSelection && (selectedType === 'local' || selectedType === 'online') && (
              <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-xl p-12 animate-fade-in h-full flex flex-col">
                {/* Header */}
                <div className="mb-8">
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
                    Select Competitors
                  </h3>
                  <p className="text-lg text-gray-500 dark:text-gray-400">
                    Choose one or more competitors to include in your analysis report
                  </p>
                </div>

                {/* Selected Count Badge */}
                {selectedCompetitors.length > 0 && (
                  <div className="mb-6 inline-flex items-center gap-2 px-4 py-2.5 bg-primary-50 dark:bg-primary-900/20 rounded-xl border border-primary-200 dark:border-primary-800">
                    <svg className="w-5 h-5 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-base font-semibold text-primary-700 dark:text-primary-300">
                      {selectedCompetitors.length} selected
                    </span>
                  </div>
                )}

                {/* Competitors List - Scrollable (3 visible) */}
                <div className="mb-8">
                  <div className="max-h-[270px] overflow-y-auto border border-gray-200 dark:border-gray-700 rounded-2xl">
                  {currentCompetitors.map((competitor) => (
                    <label
                      key={competitor.id}
                      className={`flex items-start gap-4 p-4 cursor-pointer transition-colors border-b border-gray-100 dark:border-gray-800 last:border-b-0 ${
                        selectedCompetitors.includes(competitor.id)
                          ? 'bg-primary-50 dark:bg-primary-900/10'
                          : 'hover:bg-gray-50 dark:hover:bg-gray-800'
                      }`}
                    >
                      {/* Checkbox */}
                      <input
                        type="checkbox"
                        checked={selectedCompetitors.includes(competitor.id)}
                        onChange={() => toggleCompetitor(competitor.id)}
                        className="mt-1 w-5 h-5 rounded border-gray-300 text-primary-500 focus:ring-2 focus:ring-primary-500 focus:ring-offset-0 cursor-pointer"
                      />
                      
                      {/* Competitor Info */}
                      <div className="flex-1 min-w-0">
                        <h4 className="text-base font-semibold text-gray-900 dark:text-white mb-1">
                          {competitor.name}
                        </h4>
                        <div className="flex flex-wrap gap-3 text-sm text-gray-600 dark:text-gray-400">
                          <span className="flex items-center gap-1">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            {competitor.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            {competitor.industry}
                          </span>
                          <span className="flex items-center gap-1">
                            <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                            </svg>
                            {competitor.rating}
                          </span>
                        </div>
                      </div>
                    </label>
                  ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex justify-between items-center pt-8 border-t border-gray-100 dark:border-gray-800">
                  <button
                    onClick={() => {
                      setShowCompetitorSelection(false);
                      setSelectedCompetitors([]);
                      setSelectedType(null);
                    }}
                    className="flex items-center gap-2 rounded-lg px-5 py-3 transition font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 duration-200"
                  >
                    <span>←</span> Back
                  </button>
                  
                  <button
                    onClick={handleCompetitorSelectionComplete}
                    disabled={selectedCompetitors.length === 0}
                    className={`flex items-center justify-center rounded-xl py-3.5 px-8 font-semibold text-base tracking-tight transition-colors duration-200 ${
                      selectedCompetitors.length > 0
                        ? 'bg-primary-500 text-white hover:bg-primary-600 active:bg-primary-700 shadow-sm'
                        : 'bg-gray-200 dark:bg-gray-700 text-gray-400 dark:text-gray-500 cursor-not-allowed opacity-60'
                    }`}
                  >
                    Continue to Download
                  </button>
                </div>
              </div>
            )}

            {/* Local Analysis Results */}
            {selectedType === 'local' && showResults && (
              <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-xl p-12 animate-fadeIn">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
                    Analysis Complete! 🎉
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    Your geographical competitor analysis is ready. Download your report below:
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={() => handleDownload('pdf')}
                    className="flex items-center justify-center gap-2 px-8 py-4 bg-red-500 text-white rounded-xl hover:bg-red-600 active:bg-red-700 transition-colors duration-200 font-semibold text-base shadow-sm"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Download PDF
                  </button>
                  <button
                    onClick={() => handleDownload('doc')}
                    className="flex items-center justify-center gap-2 px-8 py-4 bg-primary-500 text-white rounded-xl hover:bg-primary-600 active:bg-primary-700 transition-colors duration-200 font-semibold text-base shadow-sm"
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
            {selectedType === 'online' && !showResults && !isLoading && !showCompetitorSelection && (
              <Stepper
                initialStep={1}
                onFinalStepCompleted={handleAnalysisComplete}
                stepCircleContainerClassName="bg-gray-50 dark:bg-gray-900"
                nextButtonText="Next →"
                backButtonText="← Back"
              >
                <Step>
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
                        Website Information
                      </h3>
                      <p className="text-lg text-gray-500 dark:text-gray-400">
                        Enter your website URL for analysis
                      </p>
                    </div>
                    <div className="space-y-5">
                      <div>
                        <label className="block text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
                          Website URL
                        </label>
                        <Input
                          type="url"
                          name="websiteUrl"
                          value={onlineData.websiteUrl}
                          onChange={handleOnlineChange}
                          placeholder="https://yourwebsite.com"
                          className="w-full"
                        />
                      </div>
                    </div>
                  </div>
                </Step>
              </Stepper>
            )}

            {/* Online Analysis Results */}
            {selectedType === 'online' && showResults && (
              <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-xl p-12 animate-fadeIn">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
                    Analysis Complete! 🎉
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    Your online competitor analysis is ready. Download your report below:
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={() => handleDownload('pdf')}
                    className="flex items-center justify-center gap-2 px-8 py-4 bg-red-500 text-white rounded-xl hover:bg-red-600 active:bg-red-700 transition-colors duration-200 font-semibold text-base shadow-sm"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Download PDF
                  </button>
                  <button
                    onClick={() => handleDownload('doc')}
                    className="flex items-center justify-center gap-2 px-8 py-4 bg-primary-500 text-white rounded-xl hover:bg-primary-600 active:bg-primary-700 transition-colors duration-200 font-semibold text-base shadow-sm"
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
            {selectedType === 'market' && !showResults && !isLoading && (
              <Stepper
                initialStep={1}
                onFinalStepCompleted={handleAnalysisComplete}
                stepCircleContainerClassName="bg-gray-50 dark:bg-gray-900"
                nextButtonText="Next →"
                backButtonText="← Back"
              >
                <Step>
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
                        Industry Information
                      </h3>
                      <p className="text-lg text-gray-500 dark:text-gray-400">
                        Tell us about your market
                      </p>
                    </div>
                    <div className="space-y-5">
                      <div>
                        <label className="block text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
                          Domain / Industry
                        </label>
                        <Input
                          type="text"
                          name="domain"
                          value={marketData.domain}
                          onChange={handleMarketChange}
                          placeholder="e.g., Cloud Computing, FinTech"
                          className="w-full"
                        />
                      </div>
                    </div>
                  </div>
                </Step>

                <Step>
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
                        Product / Service Details
                      </h3>
                      <p className="text-lg text-gray-500 dark:text-gray-400">
                        What products or services do you offer?
                      </p>
                    </div>
                    <div className="space-y-6">
                      <div>
                        <label className="block text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
                          Product / Service Offering
                        </label>
                        <Input
                          type="text"
                          name="productOffering"
                          value={marketData.productOffering}
                          onChange={handleMarketChange}
                          placeholder="e.g., CRM Software, Cloud Solutions, IT Consulting"
                          className="w-full"
                        />
                      </div>
                    </div>
                  </div>
                </Step>
              </Stepper>
            )}

            {/* Market Research Results */}
            {selectedType === 'market' && showResults && (
              <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-xl p-12 animate-fadeIn">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
                    Analysis Complete! 🎉
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    Your market research report is ready. Download your report below:
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={() => handleDownload('pdf')}
                    className="flex items-center justify-center gap-2 px-8 py-4 bg-red-500 text-white rounded-xl hover:bg-red-600 active:bg-red-700 transition-colors duration-200 font-semibold text-base shadow-sm"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Download PDF
                  </button>
                  <button
                    onClick={() => handleDownload('doc')}
                    className="flex items-center justify-center gap-2 px-8 py-4 bg-primary-500 text-white rounded-xl hover:bg-primary-600 active:bg-primary-700 transition-colors duration-200 font-semibold text-base shadow-sm"
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
