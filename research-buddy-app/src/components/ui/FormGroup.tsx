import React from 'react';

interface FormGroupProps {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}

export const FormGroup: React.FC<FormGroupProps> = ({ label, htmlFor, children }) => {
  return (
    <div className="flex flex-col gap-2">
      <label 
        htmlFor={htmlFor} 
        className="text-sm font-semibold text-gray-900 dark:text-gray-100 uppercase tracking-wider"
      >
        {label}
      </label>
      {children}
    </div>
  );
};

interface FormRowProps {
  children: React.ReactNode;
}

export const FormRow: React.FC<FormRowProps> = ({ children }) => {
  return <div className="grid grid-cols-1 md:grid-cols-2 gap-6">{children}</div>;
};

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input: React.FC<InputProps> = ({ className = '', ...props }) => {
  return (
    <input
      className={`px-5 py-3.5 text-base border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 transition-all duration-300 shadow-soft hover:border-gray-300 dark:hover:border-gray-600 focus:outline-none focus:border-primary-400 focus:ring-4 focus:ring-primary-500/15 focus:-translate-y-0.5 ${className}`}
      {...props}
    />
  );
};

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  children: React.ReactNode;
}

export const Select: React.FC<SelectProps> = ({ className = '', children, ...props }) => {
  return (
    <select
      className={`px-5 py-3.5 text-base border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 transition-all duration-300 shadow-soft hover:border-gray-300 dark:hover:border-gray-600 focus:outline-none focus:border-primary-400 focus:ring-4 focus:ring-primary-500/15 focus:-translate-y-0.5 ${className}`}
      {...props}
    >
      {children}
    </select>
  );
};
