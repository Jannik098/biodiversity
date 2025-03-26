import React from "react";

interface IconSVGProps {
  svg: string;
  className?: string;
}

/**
 * Component for safely rendering SVG content
 */
const IconSVG: React.FC<IconSVGProps> = ({ svg, className = "" }) => {
  return (
    <div className={className} dangerouslySetInnerHTML={{ __html: svg }} />
  );
};

export default IconSVG;
