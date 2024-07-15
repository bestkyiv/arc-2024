import classes from "./header-frame.module.css";
import RegistrationButton from "@/components/header-frame/registration-button";
import Countdown from "@/components/header-frame/countdown";
import FormatAndDate from "@/components/header-frame/format-and-date";
import Arc from "@/components/header-frame/arc";
import CONSTANTS from "../../constants";
import { useCountdown } from "@/hooks/useCountdown";

export default function HeaderFrame() {
  const [days, hours, minutes, seconds] = useCountdown();
  const isRegistrationAvailable =
    new Date(Date.now()).getTime() <
    new Date(CONSTANTS.PROJECT_REGISTRATION_DEADLINE_PROLONGED).getTime();

  return (
    <div className={classes["header-frame"]}>
      <div className={classes.grid}>
        {isRegistrationAvailable ? <RegistrationButton /> : false}
        <Countdown
          days={days}
          hours={hours}
          minutes={minutes}
          seconds={seconds}
        />
        <FormatAndDate />
        <Arc />
      </div>
    </div>
  );
}
