import {
  Text,
} from "@mantine/core";

import logo from '../assets/favicon.png';


import "../styles/logo.scss";

export function Logo(props: {style?: React.CSSProperties}) {
  return (
    <div className="logo-container">
        <img className="logo-img" src={logo} alt="Logo" />
      <Text>
        <span className="logo-text" {...props}>SERP AI</span>
      </Text>
    </div>
  );
}

// PUT HERE LOGO!
export function LogoIcon(props: JSX.IntrinsicElements["svg"]) {
  return (
    <svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 118 117"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d=""
        fill="url(#a)"
      />
      <defs>
        <linearGradient
          id="a"
          x1={59}
          y1={-12.54}
          x2={59}
          y2={116.46}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#41E094" />
          <stop offset={1} stopColor="#27B882" />
        </linearGradient>
      </defs>
    </svg>
  );
}
