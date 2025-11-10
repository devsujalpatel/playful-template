function GreenCheckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={33}
      height={33}
      viewBox="0 0 33 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_294_975)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16.297 32.25c-8.7 0-15.75-7.054-15.75-15.75S7.597.75 16.297.75c8.696 0 15.75 7.054 15.75 15.75s-7.054 15.75-15.75 15.75z"
          fill={props.stroke || "#00000000"}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16.3 25.695a9.191 9.191 0 110-18.383 9.191 9.191 0 010 18.383z"
          fill={props.fill || "#25A18E"}
        />
        <path
          d="M16.3 25.695a9.191 9.191 0 110-18.383 9.191 9.191 0 010 18.383z"
          stroke={props.fill || "#25A18E"}
          strokeWidth={1.96875}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20.383 14.462l-5.106 5.106-3.062-3.064"
          stroke={props.color || "#F2F1FF"}
          strokeWidth={1.96875}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_294_975">
          <path fill="#fff" transform="translate(.297)" d="M0 0H32V33H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default GreenCheckIcon;
