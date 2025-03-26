import React, { ReactNode } from "react";

interface NavButtonProps {
  icon?: ReactNode;
  label?: string;
  showChevron?: boolean;
  className?: string;
}

/**
 * Navigation button component used in the top navigation bar
 */
const NavButton: React.FC<NavButtonProps> = ({
  icon,
  label,
  showChevron = false,
  className = "",
}) => {
  return (
    <div
      className={`flex gap-1 justify-center items-center px-4 py-2.5 h-11 bg-white border border-slate-200 ${className}`}
    >
      {icon && <div>{icon}</div>}
      {label && (
        <div className="text-sm font-semibold leading-5 text-gray-700">
          {label}
        </div>
      )}
      {showChevron && (
        <div>
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.5 6.75L9 11.25L13.5 6.75"
              stroke="#364152"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </div>
      )}
    </div>
  );
};

export default NavButton;
