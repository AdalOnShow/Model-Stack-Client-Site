import React from 'react'

const SecondaryBtn = ({ children, icon, onClick, className = "" }) => {
  return (
    <button 
      onClick={onClick}
      className={`px-4 py-2 bg-transparent border-2 border-indigo-600 text-indigo-600 font-medium rounded-xl hover:bg-indigo-50 dark:hover:bg-indigo-900/20 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors duration-200 flex items-center gap-2 ${className}`}
    >
      <span>{children}</span>
      {icon && (
        <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1">
          <path clipRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" fillRule="evenodd" />
        </svg>
      )}
    </button>
  )
}

export default SecondaryBtn