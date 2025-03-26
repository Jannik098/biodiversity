import React, { ReactNode } from "react";

interface AssessmentSectionProps {
  title: string;
  description: string;
  children: ReactNode;
}

/**
 * Section component for grouping assessments
 */
const AssessmentSection: React.FC<AssessmentSectionProps> = ({
  title,
  description,
  children,
}) => {
  return (
    <section className="flex flex-col gap-8">
      <div className="flex flex-col gap-1 pb-5">
        <h2 className="text-base font-bold leading-6 text-gray-700">{title}</h2>
        <p className="text-base leading-6 text-gray-700">{description}</p>
      </div>
      <div className="flex flex-wrap gap-8">{children}</div>
    </section>
  );
};

export default AssessmentSection;
