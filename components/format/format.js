import classes from "./format.module.css";
import Title from "@/components/title";
import Tours from "./blocks/tours";
import MainTour from "./blocks/main-tour";
import NetworkingSession from "./blocks/netwroking-session";

export default function Format() {
  return (
    <div className={classes.format + " section"}>
      <Title title={"Competition Format"} />
      <div className={classes.blocks}>
        <Tours />
        <Separator />
        <MainTour />
        <Separator />
        <NetworkingSession />
      </div>
    </div>
  );
}

function Separator() {
  return <img src={"separator.svg"} className={classes.separator} />;
}
