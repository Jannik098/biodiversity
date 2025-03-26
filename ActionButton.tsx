import React, { ReactNode } from "react";

interface ActionButtonProps {
  label: string;
  icon?: ReactNode;
  primary?: boolean;
  onClick?: () => void;
  className?: string;
}

/**
 * Action button component for assessment cards
 */
const ActionButton: React.FC<ActionButtonProps> = ({
  label,
  icon,
  primary = false,
  onClick,
  className = "",
}) => {
  const baseClasses =
    "flex gap-2 justify-center items-center px-3 py-2 text-sm font-semibold leading-5 rounded-lg min-w-32";
  const primaryClasses = "text-white bg-gray-800";
  const secondaryClasses = "text-gray-700 bg-white border border-slate-300";

  const buttonClasses = `${baseClasses} ${primary ? primaryClasses : secondaryClasses} ${className}`;

  return (
    <button className={buttonClasses} onClick={onClick}>
      {icon && icon}
      {label}
    </button>
  );
};

export default ActionButton;
