export const Logo = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 160 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* Diamond icon */}
      <rect
        x="4"
        y="12"
        width="20"
        height="20"
        rx="2"
        transform="rotate(-45 14 22)"
        fill="white"
      />
      <rect
        x="8"
        y="14"
        width="12"
        height="12"
        rx="1"
        transform="rotate(-45 14 20)"
        fill="#0a0a0a"
      />
      {/* FORM text */}
      <text
        x="42"
        y="28"
        fontFamily="monospace"
        fontSize="18"
        fontWeight="400"
        letterSpacing="4"
        fill="white"
      >
        FORM
      </text>
    </svg>
  );
};
