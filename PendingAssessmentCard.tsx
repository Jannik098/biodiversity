import React from "react";
import IconSVG from "./IconSVG";
import StatusBadge from "./StatusBadge";
import OrganizationBadge from "./OrganizationBadge";
import ActionButton from "./ActionButton";

interface PendingAssessmentCardProps {
  year: string;
  type: string;
  status: string;
  organization: string;
  iconSvg: string;
}

/**
 * Card component for pending assessments
 */
const PendingAssessmentCard: React.FC<PendingAssessmentCardProps> = ({
  year,
  type,
  status,
  organization,
  iconSvg,
}) => {
  return (
    <article className="flex gap-6 p-8 bg-white rounded-lg border border-slate-200 min-w-[560px] w-[592px] max-md:w-full max-md:min-w-0">
      <div>
        <IconSVG svg={iconSvg} className="w-[56px] h-[56px] flex-shrink-0" />
      </div>
      <div className="flex flex-col flex-1 gap-3">
        <div className="flex flex-wrap gap-6 justify-between items-start">
          <div className="flex flex-col gap-4 pr-4">
            <div className="flex flex-col">
              <h2 className="text-2xl font-bold leading-8 text-gray-700">
                {year}
              </h2>
              <h3 className="text-2xl leading-8 text-gray-700">{type}</h3>
            </div>
            <StatusBadge status={status} />
          </div>
          <div className="flex gap-4 items-center">
            <ActionButton label="Starten" primary />
          </div>
        </div>
        <div className="flex gap-1 items-center pt-4 border border-slate-200">
          <OrganizationBadge organization={organization} />
        </div>
      </div>
    </article>
  );
};

export default PendingAssessmentCard;
