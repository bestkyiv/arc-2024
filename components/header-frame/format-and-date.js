import classes from "./format-and-date.module.css";
import CONSTANTS from "../../constants";
import { formatDate } from "@/helpers/date-helper";

export default function FormatAndDate() {
  const format = CONSTANTS.FORMAT.toUpperCase();

  const dateFrom = new Date(CONSTANTS.PROJECT_DATE_FROM);

  return (
    <div className={classes["format-and-date"]}>
      <p className={classes["format-and-date-p"]}>{format}</p>
      <p className={classes["format-and-date-p"]}>{formatDate(dateFrom)}</p>
    </div>
  );
}
