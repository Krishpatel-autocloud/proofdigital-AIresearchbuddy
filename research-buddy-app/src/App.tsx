import React from 'react';
import { Header, Hero, HowItWorks, Footer } from './components';
import { Login } from './components/Login/Login';
import { useAuth } from './context/AuthContext';
import './App.css';

const App: React.FC = () => {
  const { isAuthenticated } = useAuth();

  // Placeholder handlers (functionality now in Hero component)
  const handleLocalAnalysis = () => {
    // Handled within Hero component
  };

  const handleOnlineAnalysis = () => {
    // Handled within Hero component
  };

  const handleMarketResearch = () => {
    // Handled within Hero component
  };

  // Show login page if not authenticated
  if (!isAuthenticated) {
    return <Login />;
  }

  // Show main application if authenticated
  return (
    <div className="app">
      <Header />
      <main>
        <Hero 
          onLocalAnalysis={handleLocalAnalysis}
          onOnlineAnalysis={handleOnlineAnalysis}
          onMarketResearch={handleMarketResearch}
        />
        <HowItWorks />
      </main>
      <Footer />
    </div>
  );
};

export default App;
