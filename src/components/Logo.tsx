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

export function LogoIcon() {
  return (
    <div className="logo-icon">
      <img src={logo} alt="Logo Icon" />
    </div>
  );
}
