import classes from "./categories.module.css";
import Title from "@/components/title";
import FlippingCard from "@/components/categories/flipping-card";
import CONSTANTS from "../../constants";

export default function Categories() {
  const flippingCards = Object.values(CONSTANTS.CATEGORIES);

  return (
    <div className={classes.categories + " section"} id={"categories"}>
      <Title title={"Categories"} />
      <div className={classes.cards}>
        {flippingCards.map((card, i) => (
          <FlippingCard key={card.header} category={card} index={i} />
        ))}
      </div>
    </div>
  );
}
