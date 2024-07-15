import classes from "./arc.module.css";

export default function Arc({}) {
  const words = ["Assemble", "Research", "Competition"];

  return (
    <div className={classes.arc}>
      {words.map((word) => (
        <ArcSingleWord key={word} text={word} />
      ))}
    </div>
  );
}

function ArcSingleWord({ text }) {
  const firstLetter = text.at(0);
  const restLetters = text.slice(1);

  return (
    <p>
      <span className={classes["first-letter"]}>{firstLetter}</span>
      <span className={classes.word}>{restLetters}</span>
    </p>
  );
}
