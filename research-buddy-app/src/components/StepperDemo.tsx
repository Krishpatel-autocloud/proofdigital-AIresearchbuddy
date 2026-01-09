import React from 'react';
import Stepper, { Step } from './ui/Stepper';

export const StepperDemo: React.FC = () => {
  return (
    <section className="py-24 bg-white dark:bg-gray-950">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
            Animated Stepper Demo
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            See our beautiful animated stepper component in action
          </p>
        </div>

        <Stepper
          initialStep={1}
          onStepChange={(step) => console.log('Step changed to:', step)}
          onFinalStepCompleted={() => console.log('All steps completed!')}
          backButtonText="← Back"
          nextButtonText="Next →"
        >
          <Step>
            <div className="space-y-4 pb-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Step 1: Basic Information
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Let's start by gathering some basic information about your business.
              </p>
              <div className="space-y-3 pt-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="Enter your company name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Industry
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="e.g., Technology, Healthcare"
                  />
                </div>
              </div>
            </div>
          </Step>

          <Step>
            <div className="space-y-4 pb-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Step 2: Location Details
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Where is your business located?
              </p>
              <div className="space-y-3 pt-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Country
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="United States"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    City
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="San Francisco"
                  />
                </div>
              </div>
            </div>
          </Step>

          <Step>
            <div className="space-y-4 pb-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Step 3: Research Goals
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                What would you like to learn about your market?
              </p>
              <div className="space-y-3 pt-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Primary Goal
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="Describe your research objectives..."
                  />
                </div>
              </div>
            </div>
          </Step>
        </Stepper>
      </div>
    </section>
  );
};
