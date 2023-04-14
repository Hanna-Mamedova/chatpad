import "../styles/logo.scss";

export function LogoText() {
  return (
    <span className="logo-text">SERP AI</span>
  );
}

export function Logo(props: JSX.IntrinsicElements["svg"]) {
  return (
    <svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 630 117"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M117 26.7A26.7 26.7 0 0 0 90.3 0H27.09A26.7 26.7 0 0 0 .38 26.7v63.23a26.7 26.7 0 0 0 26.7 26.7h66.74a23.18 23.18 0 0 0 23.19-23.19V26.7ZM35.5 70.26V11.24h-8.42A15.46 15.46 0 0 0 11.62 26.7v43.56h23.89ZM11.63 81.5h59.02v23.89H27.08a15.46 15.46 0 0 1-15.46-15.46V81.5Zm94.14-46.37H46.74V11.24h43.57c8.53 0 15.45 6.92 15.45 15.46v8.43Zm-23.88 70.25V46.37h23.88v47.07c0 6.6-5.34 11.95-11.94 11.95H81.88Z"
        fill="url(#a)"
      />
      <path
        d="M146 58.62c0-6.27 1.4-11.87 4.2-16.8 2.86-5 6.73-8.86 11.6-11.6a32.88 32.88 0 0 1 16.53-4.2c7.13 0 13.37 1.82 18.72 5.47a28.72 28.72 0 0 1 11.24 15.17h-14.7a15.16 15.16 0 0 0-6.22-6.85 17.84 17.84 0 0 0-9.13-2.29c-3.71 0-7.03.88-9.96 2.65a17.86 17.86 0 0 0-6.75 7.3c-1.59 3.17-2.38 6.89-2.38 11.15a25 25 0 0 0 2.38 11.14 18.5 18.5 0 0 0 6.75 7.4 19.39 19.39 0 0 0 9.96 2.56c3.47 0 6.52-.76 9.13-2.29a15.72 15.72 0 0 0 6.22-6.94h14.7c-2.13 6.52-5.88 11.6-11.23 15.26-5.3 3.59-11.54 5.38-18.73 5.38-6.09 0-11.6-1.37-16.53-4.1a31.19 31.19 0 0 1-11.6-11.6c-2.8-4.94-4.2-10.54-4.2-16.81Zm98.05-19.36c3.84 0 7.25.85 10.23 2.55a16.71 16.71 0 0 1 6.94 7.4c1.7 3.23 2.56 7.13 2.56 11.7v29.68H251V62.64c0-4.02-1.01-7.1-3.02-9.23-2-2.19-4.75-3.28-8.22-3.28-3.53 0-6.33 1.1-8.4 3.28-2.01 2.14-3.02 5.21-3.02 9.23v27.95h-12.78V23h12.78v23.29a16.3 16.3 0 0 1 6.58-5.11 21.34 21.34 0 0 1 9.13-1.92ZM269 65.1c0-5.11 1-9.65 3.01-13.6 2.07-3.96 4.84-7 8.31-9.14a22.36 22.36 0 0 1 11.79-3.2c3.77 0 7.06.77 9.86 2.29a20 20 0 0 1 6.85 5.75V40h12.88v50.6h-12.88v-7.4a19.32 19.32 0 0 1-6.85 5.94 20.88 20.88 0 0 1-9.95 2.28c-4.27 0-8.16-1.1-11.7-3.29a23.52 23.52 0 0 1-8.3-9.22C270 74.88 269 70.28 269 65.1Zm39.82.19c0-3.1-.6-5.76-1.83-7.95a12.5 12.5 0 0 0-4.93-5.11 12.93 12.93 0 0 0-6.67-1.83 12.92 12.92 0 0 0-11.5 6.85 15.93 15.93 0 0 0-1.83 7.85 17 17 0 0 0 1.83 8.04 14.03 14.03 0 0 0 4.93 5.2 12.77 12.77 0 0 0 6.57 1.83c2.38 0 4.6-.57 6.67-1.73a13.29 13.29 0 0 0 4.93-5.12 16.67 16.67 0 0 0 1.83-8.03Zm36.6-14.79v24.47c0 1.7.4 2.95 1.19 3.74.85.73 2.25 1.1 4.2 1.1h5.94v10.78h-8.04c-10.78 0-16.17-5.24-16.17-15.71V50.49h-6.03V40h6.03V27.48h12.88v12.5h11.33V50.5h-11.33Zm29.66-3.2a19.1 19.1 0 0 1 6.76-5.76 20.56 20.56 0 0 1 9.95-2.37 21.9 21.9 0 0 1 20 12.33c2.07 3.9 3.1 8.43 3.1 13.6 0 5.18-1.03 9.78-3.1 13.8-2 3.95-4.78 7.03-8.3 9.22a21.44 21.44 0 0 1-11.7 3.29c-3.71 0-7-.76-9.86-2.28a21.2 21.2 0 0 1-6.85-5.76v31.33h-12.79V39.99h12.79v7.3Zm26.76 17.8c0-3.04-.64-5.66-1.92-7.85a12.95 12.95 0 0 0-18.08-5.02 13.3 13.3 0 0 0-4.94 5.11 16.46 16.46 0 0 0-1.82 7.95c0 3.04.6 5.69 1.82 7.94a14.01 14.01 0 0 0 4.94 5.2 13.28 13.28 0 0 0 6.57 1.74 13.13 13.13 0 0 0 11.5-7.03 16.03 16.03 0 0 0 1.93-8.04Zm15.41 0c0-5.11 1-9.65 3.01-13.6 2.07-3.96 4.84-7 8.31-9.14a22.36 22.36 0 0 1 11.79-3.2c3.77 0 7.06.77 9.86 2.29a20 20 0 0 1 6.85 5.75V40h12.88v50.6h-12.88v-7.4a19.32 19.32 0 0 1-6.85 5.94 20.88 20.88 0 0 1-9.96 2.28c-4.26 0-8.15-1.1-11.69-3.29a23.52 23.52 0 0 1-8.3-9.22c-2.02-4.02-3.02-8.62-3.02-13.8Zm39.82.19c0-3.1-.6-5.76-1.83-7.95a12.5 12.5 0 0 0-4.93-5.11 12.93 12.93 0 0 0-6.67-1.83 12.92 12.92 0 0 0-11.5 6.85 15.93 15.93 0 0 0-1.83 7.85 17 17 0 0 0 1.83 8.04 14.03 14.03 0 0 0 4.93 5.2 12.77 12.77 0 0 0 6.57 1.83c2.38 0 4.6-.57 6.67-1.73a13.29 13.29 0 0 0 4.93-5.12 16.67 16.67 0 0 0 1.83-8.03Zm18.43-.19c0-5.11 1-9.65 3-13.6 2.08-3.96 4.88-7 8.41-9.14a22.36 22.36 0 0 1 11.78-3.2c3.3 0 6.43.74 9.41 2.2a18.43 18.43 0 0 1 7.13 5.66V23h12.96v67.59h-12.97v-7.5a17.36 17.36 0 0 1-6.66 6.04 20.89 20.89 0 0 1-9.96 2.28c-4.26 0-8.16-1.1-11.69-3.29a23.28 23.28 0 0 1-8.4-9.22c-2.01-4.02-3.01-8.62-3.01-13.8Zm39.82.19c0-3.1-.61-5.76-1.83-7.95a12.5 12.5 0 0 0-4.93-5.11 12.93 12.93 0 0 0-6.67-1.83c-2.37 0-4.57.58-6.58 1.74-2 1.15-3.65 2.86-4.93 5.11a15.94 15.94 0 0 0-1.82 7.85c0 3.05.6 5.73 1.82 8.04a14.03 14.03 0 0 0 4.93 5.2 12.77 12.77 0 0 0 6.58 1.83c2.38 0 4.6-.57 6.67-1.73a13.29 13.29 0 0 0 4.93-5.12 16.68 16.68 0 0 0 1.83-8.03Zm78.91 13.15h-25.4l-4.2 12.15h-13.42l22.93-63.85h14.88l22.93 63.85h-13.52l-4.2-12.15Zm-3.47-10.23-9.23-26.67-9.22 26.67h18.45Zm38.89-41.37v63.75h-12.79V26.84h12.8Z"
        fill="currentColor"
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
        d="M117 26.7A26.7 26.7 0 0 0 90.3 0H27.09A26.7 26.7 0 0 0 .38 26.7v63.23a26.7 26.7 0 0 0 26.7 26.7h66.74a23.18 23.18 0 0 0 23.19-23.19V26.7ZM35.5 70.26V11.24h-8.42A15.46 15.46 0 0 0 11.62 26.7v43.56h23.89ZM11.63 81.5h59.02v23.89H27.08a15.46 15.46 0 0 1-15.46-15.46V81.5Zm94.14-46.37H46.74V11.24h43.57c8.53 0 15.45 6.92 15.45 15.46v8.43Zm-23.88 70.25V46.37h23.88v47.07c0 6.6-5.34 11.95-11.94 11.95H81.88Z"
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
