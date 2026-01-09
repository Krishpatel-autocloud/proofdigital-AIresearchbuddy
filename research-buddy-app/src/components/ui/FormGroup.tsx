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
      className={`px-5 py-4 text-base border border-gray-200 dark:border-gray-700 rounded-xl bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 transition-all duration-200 hover:border-gray-300 dark:hover:border-gray-600 focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-500/10 focus:bg-white dark:focus:bg-gray-800 ${className}`}
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
      className={`px-5 py-4 text-base border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 transition-all duration-200 hover:border-primary-300 dark:hover:border-gray-600 hover:shadow-sm focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-500/10 focus:shadow-md appearance-none cursor-pointer ${className}`}
      style={{
        backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
        backgroundPosition: 'right 0.75rem center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '1.5em 1.5em',
        paddingRight: '3rem'
      }}
      {...props}
    >
      {children}
    </select>
  );
};
