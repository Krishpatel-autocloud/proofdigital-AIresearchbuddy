import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';

export const Login: React.FC = () => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    if (!firstName || !email || !password) {
      setError('Please enter your first name, email, and password');
      setIsLoading(false);
      return;
    }

    const success = await login(email, password, firstName);
    
    if (!success) {
      setError('Invalid credentials');
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#e9e9e8] dark:bg-gray-950 px-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <img 
            src="/my-logo.png" 
            alt="Research Buddy Logo" 
            className="h-16 mx-auto mb-6"
          />
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Welcome Back
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Sign in to continue to Research Buddy
          </p>
        </div>

        {/* Login Form */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl p-10 border border-gray-200 dark:border-gray-800 shadow-xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 px-4 py-3 rounded-lg text-sm">
                {error}
              </div>
            )}

            <div>
              <label 
                htmlFor="firstName" 
                className="block text-base font-medium text-gray-700 dark:text-gray-300 mb-3"
              >
                First Name
              </label>
              <input
                id="firstName"
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full px-5 py-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500/10 focus:border-primary-400 focus:bg-white dark:focus:bg-gray-800 transition-all duration-200"
                placeholder="John"
                disabled={isLoading}
              />
            </div>

            <div>
              <label 
                htmlFor="email" 
                className="block text-base font-medium text-gray-700 dark:text-gray-300 mb-3"
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-5 py-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500/10 focus:border-primary-400 focus:bg-white dark:focus:bg-gray-800 transition-all duration-200"
                placeholder="you@example.com"
                disabled={isLoading}
              />
            </div>

            <div>
              <label 
                htmlFor="password" 
                className="block text-base font-medium text-gray-700 dark:text-gray-300 mb-3"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-5 py-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500/10 focus:border-primary-400 focus:bg-white dark:focus:bg-gray-800 transition-all duration-200"
                placeholder="Enter your password"
                disabled={isLoading}
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-primary-500 text-white py-4 rounded-xl font-semibold text-base hover:bg-primary-600 active:bg-primary-700 transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed shadow-sm"
            >
              {isLoading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Demo: Enter any name, email, and password to login
            </p>
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-sm text-gray-500 dark:text-gray-500 mt-8">
          &copy; {new Date().getFullYear()} Research Buddy. All rights reserved.
        </p>
      </div>
    </div>
  );
};
