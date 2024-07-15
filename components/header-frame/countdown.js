import classes from "./countdown.module.css";
import CONSTANTS from "../../constants";
import Link from "next/link";

function Countdown({ days, hours, minutes, seconds }) {
  const isLive =
    new Date(Date.now()).getTime() >
    new Date(CONSTANTS.PROJECT_DATE_FROM).getTime();

  if (days + hours + minutes + seconds <= 0 && isLive) {
    return (
      <div className={classes.icon_wrapper}>
        <img src={"live-icon.svg"} alt={"Live"} className={classes.icon} />
      </div>
    );
  }

  const timeRemaining = `${removeMinusValues(days)} days ${removeMinusValues(
    hours,
  )
    .toString()
    .padStart(2, "0")}:${removeMinusValues(minutes)
    .toString()
    .padStart(2, "0")}:${removeMinusValues(seconds)
    .toString()
    .padStart(2, "0")}`;
  return (
    <div className={classes.div}>
      <p className={classes.p}>{timeRemaining}</p>
    </div>
  );
}

const removeMinusValues = (value) => (value < 0 ? 0 : value);

export default Countdown;
