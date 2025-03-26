import React from "react";

interface StatusBadgeProps {
  status: string;
  className?: string;
}

/**
 * Status badge component for displaying assessment status
 */
const StatusBadge: React.FC<StatusBadgeProps> = ({
  status,
  className = "",
}) => {
  return (
    <div
      className={`px-2 py-0.5 text-xs font-medium leading-5 text-gray-700 rounded-2xl bg-slate-100 ${className}`}
    >
      {status}
    </div>
  );
};

export default StatusBadge;
