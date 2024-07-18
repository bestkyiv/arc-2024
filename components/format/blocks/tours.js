import classes from "@/components/format/format.module.css";
import SvgInnerText from "@/components/svg-inner-text";

export default function Tours({}) {
  return (
    <>
      <Desktop />
      <Mobile />
    </>
  );
}

function Desktop() {
  const textLines = [
    "Змагання проходитимуть у два тури. У межах",
    "відбіркового туру ваша команда отримає на",
    "електронну пошту завдання, яке потрібно виконати",
    "протягом 24 годин.",
  ];

  return (
    <svg
      className={classes.desktop}
      viewBox="0 -295 1750 841"
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

function Mobile() {
  const textLines = [
    "Змагання проходитимуть у два",
    "тури. У межах відбіркового",
    "туру ваша команда отримає на",
    "електронну пошту завдання,",
    "яке потрібно виконати",
    "протягом 24 годин.",
  ];

  return (
    <svg
      className={classes.mobile}
      viewBox="0 0 332 230"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.04234 197.377L2.04246 213.158L51.1003 213.158L53.4352 213.159L73.3222 213.138L109.322 213.159L134.976 227.91L158.725 227.921L163.493 227.923L223.613 227.951L228.381 227.954L287.94 227.982L292.708 227.984L316.43 210.514L316.429 132.407L329.764 110.019L329.821 47.913L309.321 29.4517L309.321 11.4999L296 1.99995L262.5 1.99999L62.5 1.99998L33.4999 1.99997L24.5 1.99997L20 6L2.18975 21.4621L2.13563 80.3363L2.13551 92.7545L2.06363 170.945L2.04223 182.015L2.04234 197.377Z"
        fill="#42019B"
        fill-opacity="0.5"
        stroke="#FFB800"
        stroke-width="4"
        stroke-miterlimit="16"
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
