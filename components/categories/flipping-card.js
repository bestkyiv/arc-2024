// FlipCard.js
import React, { useState } from "react";
import classes from "./flipping-card.module.css";
import SvgInnerText from "@/components/svg-inner-text";

function FlippingCard({ category, index }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className={`${classes["flip-card"]} ${
        isFlipped ? classes["flipped"] : ""
      }`}
      onClick={handleCardFlip}
    >
      <div className={classes["flip-card-inner"]}>
        <div className={classes["flip-card-front"]}>
          <CardFront category={category.header} />
        </div>
        <div className={classes["flip-card-back"]}>
          <CardBack item={category} />
        </div>
      </div>
    </div>
  );
}

function CardFront({ category }) {
  return (
    <svg
      className={classes.img}
      viewBox="0 0 672 672"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M657.742 52.0125L650.403 43.3438L347.677 41.4174L332.082 23.1167H266.95L256.859 10.5951H242.181L251.355 23.1167H233.925L224.752 10.5951H212.826L221.082 23.1167H198.148L189.892 10.5951H177.049L183.471 23.1167H165.124L158.702 10.5951H144.025L149.529 23.1167H130.264L124.76 10.5951H111L115.587 23.1167H93.5702H74.1675L16.5126 82.8348L15.5947 582.399L41.2806 610.331H451.337L459.593 599.736H571.51L645.816 522.68V461.999L657.741 446.588L657.742 52.0125Z"
        fill="#07001B"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M665.998 52.0125L650.403 34.675H364.189L332.082 0H84.3966L0.000244141 87.6508L-0.000305176 578.546L38.5285 619H577.014L665.998 527.497L665.998 52.0125ZM650.403 43.3438L657.742 52.0125L657.741 446.588L645.816 461.999V522.68L571.51 599.736H459.593L451.337 610.331H41.2806L15.5947 582.399L16.5126 82.8348L74.1675 23.1167H93.5702H115.587L111 10.5951H124.76L130.264 23.1167H149.529L144.025 10.5951H158.702L165.124 23.1167H183.471L177.049 10.5951H189.892L198.148 23.1167H221.082L212.826 10.5951H224.752L233.925 23.1167H251.355L242.181 10.5951H256.859L266.95 23.1167H332.082L347.677 41.4174L650.403 43.3438Z"
        fill="#41009C"
      />
      <SvgInnerText
        textLines={[category]}
        startYCoord={300}
        customClassName={classes["svg-header"]}
        centerText
      />
    </svg>
  );
}

function CardBack({ item }) {
  const cardSideLength = 672;
  const lineHeight = 48;

  const startYCoordinate = (cardSideLength - item.text.length * lineHeight) / 2;
  return (
    <svg
      className={classes.img}
      viewBox={`0 0 ${cardSideLength} ${cardSideLength}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M657.742 52.0125L650.403 43.3438L347.677 41.4174L332.082 23.1167H266.95L256.859 10.5951H242.181L251.355 23.1167H233.925L224.752 10.5951H212.826L221.082 23.1167H198.148L189.892 10.5951H177.049L183.471 23.1167H165.124L158.702 10.5951H144.025L149.529 23.1167H130.264L124.76 10.5951H111L115.587 23.1167H93.5702H74.1675L16.5126 82.8348L15.5947 582.399L41.2806 610.331H451.337L459.593 599.736H571.51L645.816 522.68V461.999L657.741 446.588L657.742 52.0125Z"
        fill="#07001B"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M665.998 52.0125L650.403 34.675H364.189L332.082 0H84.3966L0.000244141 87.6508L-0.000305176 578.546L38.5285 619H577.014L665.998 527.497L665.998 52.0125ZM650.403 43.3438L657.742 52.0125L657.741 446.588L645.816 461.999V522.68L571.51 599.736H459.593L451.337 610.331H41.2806L15.5947 582.399L16.5126 82.8348L74.1675 23.1167H93.5702H115.587L111 10.5951H124.76L130.264 23.1167H149.529L144.025 10.5951H158.702L165.124 23.1167H183.471L177.049 10.5951H189.892L198.148 23.1167H221.082L212.826 10.5951H224.752L233.925 23.1167H251.355L242.181 10.5951H256.859L266.95 23.1167H332.082L347.677 41.4174L650.403 43.3438Z"
        fill="#41009C"
      />
      <SvgInnerText
        textLines={[item.header]}
        startYCoord={startYCoordinate - 2 * lineHeight}
        customClassName={classes["svg-back-header"]}
        centerText
      />
      <SvgInnerText
        textLines={item.text}
        startYCoord={startYCoordinate}
        startXCoord={50}
        customClassName={classes["svg-text"]}
      />
    </svg>
  );
}

export default FlippingCard;
