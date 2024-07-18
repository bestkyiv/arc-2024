export default function SvgInnerText({
  textLines,
  startYCoord,
  startXCoord = 100,
  step = 80,
  customClassName = "",
  centerText = false,
  isMobile = false,
}) {
  const className = isMobile ? "svg-text-style-mobile" : "svg-text-style";
  return (
    <text textAnchor={centerText ? "middle" : ""}>
      {textLines.map((line, i) => (
        <tspan
          className={`${className} ${customClassName}`}
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
