export default function SvgInnerText({
  textLines,
  startYCoord,
  startXCoord = 100,
  step = 80,
  customClassName = "",
  centerText = false,
}) {
  return (
    <text textAnchor={centerText ? "middle" : ""}>
      {textLines.map((line, i) => (
        <tspan
          className={`svg-text-style + ${customClassName}`}
          x={centerText ? "50%" : startXCoord}
          y={startYCoord + i * step}
          key={line}
        >
          {line}
        </tspan>
      ))}
    </text>
  );
}
