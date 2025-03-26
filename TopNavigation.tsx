"use client";
import React from "react";
import IconSVG from "./IconSVG";
import NavButton from "./NavButton";
import LocationSelector from "./LocationSelector";

/**
 * Top navigation bar component
 */
const TopNavigation: React.FC = () => {
  const logoSvg = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-[20px] h-[20px]">
    <g filter="url(#filter0_d_3_4768)">
      <path d="M9.29564 13.5642C8.56456 13.387 7.87162 13.0756 7.25102 12.6456C6.67713 12.2423 6.21319 11.6985 5.90237 11.0646C5.58527 10.4233 5.42672 9.67527 5.42672 8.82053V8.32924C5.42672 7.4887 5.58527 6.75145 5.90237 6.11749C6.21538 5.48789 6.67906 4.94787 7.25102 4.5468C7.87175 4.117 8.56464 3.80568 9.29564 3.62815C10.1343 3.42169 10.9949 3.32129 11.8579 3.32924C12.7135 3.32221 13.5667 3.4226 14.3979 3.62815C15.129 3.80551 15.8219 4.11685 16.4426 4.5468C17.0162 4.94907 17.4832 5.48857 17.802 6.11749C18.1255 6.75145 18.287 7.4887 18.2866 8.32924V8.82053C18.2866 9.67527 18.1251 10.4233 17.802 11.0646C17.4854 11.6978 17.0182 12.2412 16.4426 12.6456C15.8223 13.0757 15.1295 13.3871 14.3986 13.5642C13.5672 13.7701 12.7138 13.8705 11.8579 13.8631C10.9956 13.8713 10.1355 13.7709 9.29755 13.5642M16.7794 15.3163C18.1633 14.7323 19.2245 13.8739 19.9632 12.7411C20.7018 11.6083 21.0705 10.2311 21.0692 8.60943C21.0692 6.95718 20.7005 5.57177 19.9632 4.4532C19.2258 3.33462 18.1646 2.47988 16.7794 1.88896C15.3947 1.29632 13.7468 1 11.8357 1C9.94024 1 8.30336 1.29546 6.925 1.88638C5.54664 2.4773 4.48538 3.33204 3.74123 4.45061C2.99708 5.56918 2.625 6.95459 2.625 8.60684C2.625 10.2311 2.9975 11.6083 3.7425 12.7385C4.48751 13.8687 5.54876 14.7271 6.92628 15.3138C8.30294 15.8982 9.93982 16.1902 11.8369 16.1898C13.7472 16.1898 15.3945 15.8978 16.7788 15.3138" fill="#F04761"></path>
      <path d="M19.6964 21V18.5642H3.99467V21H19.6964Z" fill="#F04761"></path>
    </g>
    <defs>
      <filter id="filter0_d_3_4768" x="0" y="0" width="24" height="24" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>
        <feOffset dy="1"></feOffset>
        <feGaussianBlur stdDeviation="1"></feGaussianBlur>
        <feColorMatrix type="matrix" values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.06 0"></feColorMatrix>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3_4768"></feBlend>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3_4768" result="shape"></feBlend>
      </filter>
    </defs>
  </svg>`;

  const helpSvg = `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-[18px] h-[18px]">
    <g clip-path="url(#clip0_3_4818)">
      <path d="M6.8175 6.75C6.99383 6.24875 7.34186 5.82608 7.79997 5.55685C8.25807 5.28762 8.79667 5.1892 9.32038 5.27903C9.84409 5.36886 10.3191 5.64114 10.6613 6.04765C11.0035 6.45415 11.1908 6.96864 11.19 7.5C11.19 9 8.94 9.75 8.94 9.75M9 12.75H9.0075M16.5 9C16.5 13.1421 13.1421 16.5 9 16.5C4.85786 16.5 1.5 13.1421 1.5 9C1.5 4.85786 4.85786 1.5 9 1.5C13.1421 1.5 16.5 4.85786 16.5 9Z" stroke="#364152" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
    </g>
    <defs>
      <clipPath id="clip0_3_4818">
        <rect width="18" height="18" fill="white"></rect>
      </clipPath>
    </defs>
  </svg>`;

  const usersSvg = `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-[18px] h-[18px]">
    <path d="M16.5 15.75V14.25C16.5 12.8521 15.5439 11.6775 14.25 11.3445M11.625 2.46807C12.7244 2.91311 13.5 3.99098 13.5 5.25C13.5 6.50902 12.7244 7.58689 11.625 8.03193M12.75 15.75C12.75 14.3522 12.75 13.6533 12.5216 13.1019C12.2172 12.3669 11.6331 11.7828 10.8981 11.4784C10.3467 11.25 9.64783 11.25 8.25 11.25H6C4.60218 11.25 3.90326 11.25 3.35195 11.4784C2.61687 11.7828 2.03284 12.3669 1.72836 13.1019C1.5 13.6533 1.5 14.3522 1.5 15.75M10.125 5.25C10.125 6.90685 8.78185 8.25 7.125 8.25C5.46815 8.25 4.125 6.90685 4.125 5.25C4.125 3.59315 5.46815 2.25 7.125 2.25C8.78185 2.25 10.125 3.59315 10.125 5.25Z" stroke="#364152" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
  </svg>`;

  return (
    <header className="flex justify-between items-center w-full bg-white border border-slate-200">
      <div className="flex items-center border border-slate-200">
        <div className="flex gap-2 justify-center items-center p-3 bg-white border border-slate-200">
          <IconSVG svg={logoSvg} />
        </div>
        <LocationSelector location="Hofgut Wächter" />
      </div>
      <nav className="flex justify-end items-center border border-slate-200">
        <NavButton label="Deutsch" showChevron={true} />
        <NavButton icon={<IconSVG svg={helpSvg} />} label="Hilfe" />
        <NavButton icon={<IconSVG svg={usersSvg} />} label="Konto" />
      </nav>
    </header>
  );
};

export default TopNavigation;
