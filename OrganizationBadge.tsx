import React from "react";
import IconSVG from "./IconSVG";

interface OrganizationBadgeProps {
  organization: string;
}

/**
 * Organization badge component
 */
const OrganizationBadge: React.FC<OrganizationBadgeProps> = ({
  organization,
}) => {
  const buildingSvg = `<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-[12px] h-[12px]">
    <path d="M3.75 5.5H2.3C2.01997 5.5 1.87996 5.5 1.773 5.5545C1.67892 5.60243 1.60243 5.67892 1.5545 5.773C1.5 5.87996 1.5 6.01997 1.5 6.3V10.5M8.25 5.5H9.7C9.98003 5.5 10.12 5.5 10.227 5.5545C10.3211 5.60243 10.3976 5.67892 10.4455 5.773C10.5 5.87996 10.5 6.01997 10.5 6.3V10.5M8.25 10.5V3.1C8.25 2.53995 8.25 2.25992 8.14101 2.04601C8.04513 1.85785 7.89215 1.70487 7.70399 1.60899C7.49008 1.5 7.21005 1.5 6.65 1.5H5.35C4.78995 1.5 4.50992 1.5 4.29601 1.60899C4.10785 1.70487 3.95487 1.85785 3.85899 2.04601C3.75 2.25992 3.75 2.53995 3.75 3.1V10.5M11 10.5H1M5.5 3.5H6.5M5.5 5.5H6.5M5.5 7.5H6.5" stroke="#364152" stroke-linecap="round" stroke-linejoin="round"></path>
  </svg>`;

  return (
    <div className="flex gap-1 items-center py-0.5 pr-2 pl-1.5 rounded-2xl bg-slate-100">
      <IconSVG svg={buildingSvg} />
      <div className="text-xs font-medium leading-5 text-gray-700">
        {organization}
      </div>
    </div>
  );
};

export default OrganizationBadge;
