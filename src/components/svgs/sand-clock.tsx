function SandClock(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      color="#007A55"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M17.5 3h-11s-.23 1.851 0 3c.466 2.331 3.095 4.406 4.543 5.392a1.69 1.69 0 001.914 0c1.448-.986 4.076-3.06 4.543-5.392.23-1.149 0-3 0-3zM17.5 21h-11s-.23-1.851 0-3c.467-2.332 3.096-4.406 4.543-5.392a1.69 1.69 0 011.915 0c1.447.986 4.076 3.06 4.543 5.392.23 1.149 0 3 0 3z"
        stroke="#1DBF73"
        strokeWidth={2}
        strokeLinejoin="round"
      />
      <path
        d="M14.963 18.5a.5.5 0 01-.5.5H9.536a.5.5 0 01-.5-.5v-.288c0-.141.007-.286.073-.41.42-.795 2.21-1.179 2.742-1.276a.815.815 0 01.298 0c.53.097 2.321.48 2.741 1.276.066.124.073.269.073.41v.288zM10.655 7c-.319 0-.545.297-.369.562.326.49.873.907 1.262 1.164a.813.813 0 00.904 0c.388-.257.935-.675 1.26-1.164.177-.265-.049-.562-.367-.562h-2.69z"
        fill="#1DBF73"
      />
      <path
        d="M19.5 3h-15M19.5 21h-15"
        stroke="#1DBF73"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SandClock;
