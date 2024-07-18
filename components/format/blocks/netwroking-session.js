import classes from "@/components/format/format.module.css";
import SvgInnerText from "@/components/svg-inner-text";

export default function NetworkingSession({}) {
  return (
    <>
      <Desktop />
      <Mobile />
    </>
  );
}

function Desktop() {
  const textLines = [
    "Під час нетворкінг сесій у вас буде можливість",
    "поспілкуватися з іншими учасниками, командою",
    "організаторів та партнерами проєкту, а також",
    "послухати шерінги компаній-партнерів.",
  ];

  return (
    <svg
      className={classes.desktop}
      viewBox="0 0 1750 841"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1527.34 29.2777H1653.96V112.581L1747 112.581V127.595V153.808V171.903V282.133L1734.45 292.765L1703.64 318.85V545.928L1653.96 588H1570.99L1545.65 588H1229.17L1203.83 588H884.373H859.035H732.84H680L612.5 588H461.5H414H332.811H152V485.957H71.0658L49.4734 450.181L33.3069 421.658L3 398.789V237.231L33.3065 211.567V29.2776L33.3069 3L184.733 3.00004L286.915 3L331.404 29.2776L1527.34 29.2777Z"
        fill="#42019B"
        fill-opacity="0.5"
        stroke="#FFB800"
        stroke-width="5"
        stroke-miterlimit="16"
      />
      <SvgInnerText textLines={textLines} startYCoord={190} />
    </svg>
  );
}

function Mobile() {
  const textLines = [
    "Під час нетворкінг сесій у вас",
    "буде можливість",
    "поспілкуватися з іншими",
    "учасниками, командою",
    "організаторів та партнерами",
    "проєкту, а також послухати",
    "шерінги компаній-партнерів.",
  ];

  return (
    <svg
      className={classes.mobile}
      viewBox="0 0 339 262"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.07585 208.5L6.09361 231.143L43.0435 231.143L85.0435 251.663L109.044 251.589L139.02 251.536L162.769 251.568L177.544 239.673L207.043 239.673L241.043 239.673L265.543 251.536L292.544 251.536L308.543 251.536L320.463 233.293L320.463 160.769L320.463 141.576L320.463 111.721L332.955 90.749L332.949 79.6633L332.93 44.3001L320.356 38.0487L302.943 28.4316L302.943 14.1572L265.543 14.1572L120.544 14.1572L85.0435 2.29842L34.6322 2.03873L19.069 2.02528L6.07571 14.1572L6.09361 48L14 61L14 96.5L14 121.5L14 149.5L6.07603 169.361L6.07585 208.5Z"
        fill="#42019B"
        fill-opacity="0.5"
        shape-rendering="crispEdges"
      />
      <path
        d="M6.07585 208.5L6.09361 231.143L43.0435 231.143L85.0435 251.663L109.044 251.589L139.02 251.536L162.769 251.568L177.544 239.673L207.043 239.673L241.043 239.673L265.543 251.536L292.544 251.536L308.543 251.536L320.463 233.293L320.463 160.769L320.463 141.576L320.463 111.721L332.955 90.749L332.949 79.6633L332.93 44.3001L320.356 38.0487L302.943 28.4316L302.943 14.1572L265.543 14.1572L120.544 14.1572L85.0435 2.29842L34.6322 2.03873L19.069 2.02528L6.07571 14.1572L6.09361 48L14 61L14 96.5L14 121.5L14 149.5L6.07603 169.361L6.07585 208.5Z"
        stroke="#FFB800"
        stroke-width="4"
        stroke-miterlimit="16"
        shape-rendering="crispEdges"
      />

      <SvgInnerText
        isMobile={true}
        textLines={textLines}
        startYCoord={42}
        startXCoord={30}
        step={28}
      />
    </svg>
  );
}
