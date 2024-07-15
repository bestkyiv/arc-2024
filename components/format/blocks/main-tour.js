import classes from "@/components/format/format.module.css";
import SvgInnerText from "@/components/svg-inner-text";

export default function MainTour({}) {
  const textLines = [
    "Під час основного туру перед вами поставлять",
    "реальну інженерну проблему, нададуть усі необхідні",
    "матеріали та 16 годин на її розв'язання (по 8 годин у",
    "перший та другий день). За цей час вам потрібно",
    "спроєктувати або ж сконструювати модель",
    "власноруч, що розв’яже поставлену задачу",
    "(залежно від обраної категорії).",
  ];

  return (
    <svg
      className={classes.desktop}
      viewBox="0 0 1750 880"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1527.34 40.5075H1653.96V159.411L1747 159.411V180.841V218.256V244.084V401.421L1734.45 416.596L1703.64 453.828V777.948L1653.96 838H1570.99L1545.65 838H1229.17L1203.83 838H884.373H859.035H732.84H680L612.5 838H461.5H414H332.811L106.5 838V777.948L59.5 740L33.3065 718.5L3 692.349V567.93V337.33L33.3065 300.699V40.5074L33.3069 3L184.733 3.00006L286.915 3L331.404 40.5074L1527.34 40.5075Z"
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
