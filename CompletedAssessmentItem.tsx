import React from "react";
import IconSVG from "./IconSVG";
import OrganizationBadge from "./OrganizationBadge";
import ActionButton from "./ActionButton";

interface CompletedAssessmentItemProps {
  year: string;
  type: string;
  submissionDate: string;
  organization: string;
  iconSvg: string;
}

/**
 * List item component for completed assessments
 */
const CompletedAssessmentItem: React.FC<CompletedAssessmentItemProps> = ({
  year,
  type,
  submissionDate,
  organization,
  iconSvg,
}) => {
  const editSvg = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-[20px] h-[20px]">
    <path d="M9.99998 16.6667H17.5M2.5 16.6667H3.89545C4.3031 16.6667 4.50693 16.6667 4.69874 16.6206C4.8688 16.5798 5.03138 16.5124 5.1805 16.4211C5.34869 16.318 5.49282 16.1739 5.78107 15.8856L16.25 5.41666C16.9404 4.72631 16.9404 3.60702 16.25 2.91666C15.5597 2.22631 14.4404 2.22631 13.75 2.91666L3.28105 13.3856C2.9928 13.6739 2.84867 13.818 2.7456 13.9862C2.65422 14.1353 2.58688 14.2979 2.54605 14.4679C2.5 14.6598 2.5 14.8636 2.5 15.2712V16.6667Z" stroke="#364152" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  </svg>`;

  return (
    <article className="flex flex-wrap gap-6 items-center px-6 py-4 bg-white rounded-lg border border-slate-200">
      <div className="flex flex-1 gap-6 items-center">
        <div>
          <IconSVG svg={iconSvg} className="w-[56px] h-[56px]" />
        </div>
        <div className="flex gap-3 items-center">
          <h3 className="text-xl font-bold leading-8 text-gray-700 w-[60px]">
            {year}
          </h3>
          <p className="text-xl leading-8 text-gray-700 w-[120px]">{type}</p>
        </div>
        <p className="flex-1 text-sm font-medium leading-5 text-gray-600">
          Eingereicht am {submissionDate}
        </p>
      </div>
      <div className="flex gap-6 items-center">
        <div className="flex gap-2 items-center">
          <OrganizationBadge organization={organization} />
        </div>
        <div className="flex gap-2 items-center">
          <ActionButton label="Ergebnisse anzeigen" />
        </div>
        <div className="flex gap-2 items-center">
          <ActionButton label="Bearbeiten" icon={<IconSVG svg={editSvg} />} />
        </div>
      </div>
    </article>
  );
};

export default CompletedAssessmentItem;
