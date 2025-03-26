import React from "react";
import IconSVG from "./IconSVG";

interface LocationSelectorProps {
  location: string;
}

/**
 * Location selector component shown in the navigation bar
 */
const LocationSelector: React.FC<LocationSelectorProps> = ({ location }) => {
  const markerSvg = `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-[18px] h-[18px]">
    <path d="M9 9.75C10.2426 9.75 11.25 8.74264 11.25 7.5C11.25 6.25736 10.2426 5.25 9 5.25C7.75736 5.25 6.75 6.25736 6.75 7.5C6.75 8.74264 7.75736 9.75 9 9.75Z" stroke="#364152" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
    <path d="M9 16.5C12 13.5 15 10.8137 15 7.5C15 4.18629 12.3137 1.5 9 1.5C5.68629 1.5 3 4.18629 3 7.5C3 10.8137 6 13.5 9 16.5Z" stroke="#364152" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
  </svg>`;

  return (
    <div className="flex gap-1 justify-center items-center px-4 py-2.5 h-11 bg-white border border-slate-200">
      <IconSVG svg={markerSvg} />
      <div className="text-sm font-semibold leading-5 text-gray-700">
        {location}
      </div>
    </div>
  );
};

export default LocationSelector;
