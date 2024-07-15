import classes from "./format-and-date.module.css";
import CONSTANTS from "../../constants";
import { formatDate } from "@/helpers/date-helper";

export default function FormatAndDate() {
  const format = CONSTANTS.FORMAT.toUpperCase();

  const dateFrom = new Date(CONSTANTS.PROJECT_DATE_FROM);
  const dateTo = new Date(CONSTANTS.PROJECT_DATE_TO);

  const currentTs = new Date().getTime();
  const isLive =
    dateFrom.getTime() <= currentTs && currentTs <= dateTo.getTime();

  if (isLive) {
    return (
      <div className={classes.div}>
        <YouTubeVideo />
      </div>
    );
  }

  return (
    <div className={classes["format-and-date"]}>
      <p className={classes["format-and-date-p"]}>{format}</p>
      <p className={classes["format-and-date-p"]}>{formatDate(dateFrom)}</p>
    </div>
  );
}

function YouTubeVideo() {
  return (
    <iframe
      width="100%"
      height="100%"
      src="https://www.youtube.com/embed/ky48SfLnSdc?si=UZDpaeFpZfqKdHeb"
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    ></iframe>
  );
}
