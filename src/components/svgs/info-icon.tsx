function InfoIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx={8} cy={8} r={8} fill="#AFAFAF" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.305 5.242a1.5 1.5 0 10-2.61-1.484 1.5 1.5 0 002.61 1.484zM7 7h1.5a1 1 0 011 1v5a1 1 0 11-2 0V9.75A.75.75 0 006.75 9 .75.75 0 016 8.25V8a1.001 1.001 0 011-1z"
        fill="#fff"
      />
    </svg>
  );
}

export default InfoIcon;
