import classes from "@/components/format/format.module.css";
import SvgInnerText from "@/components/svg-inner-text";

export default function DesktopSvg({}) {
  const textLines = [
    "Змагання проходитимуть у два тури. У межах",
    "відбіркового туру ваша команда отримає на",
    "електронну пошту завдання, яке потрібно виконати",
    "протягом 24 годин.",
  ];

  return (
    <svg
      className={classes.desktop}
      viewBox="0 0 1750 550"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1527.34 25.6842H1653.96V97.5957L1747 97.5957V110.557V133.184V148.805V243.961L1734.45 253.139L1703.64 275.657V471.681L1653.96 508H1570.99L1545.65 508H1229.17L1203.83 508H884.373H859.035H732.84H680L612.5 508H461.5H184.733V471.681H118.5H71.0658V419.911H33.3065H3V344.664V205.2L33.3065 183.045V25.6841L33.3069 3L184.733 3.00004L286.915 3L331.404 25.6841L1527.34 25.6842Z"
        fill="#42019B"
        fill-opacity="0.5"
        stroke="#FFB800"
        stroke-width="5"
        stroke-miterlimit="16"
      />
      <SvgInnerText textLines={textLines} startYCoord={140} />
    </svg>
  );
}
