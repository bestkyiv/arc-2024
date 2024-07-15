import classes from "@/components/format/format.module.css";
import SvgInnerText from "@/components/svg-inner-text";

export default function NetworkingSession({}) {
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