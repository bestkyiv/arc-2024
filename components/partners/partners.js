import classes from "./partners.module.css";
import CONSTANTS from "../../constants";
import Title from "../title";

export default function Partners() {
  const {
    MAIN: mainPartners,
    TASK: taskPartners,
    SECONDARY: secondaryPartners,
    CAREER: careerPartners,
    BARTER: barterPartners,
  } = CONSTANTS.PARTNERS;
  return (
    <div className={` ${classes.partners}`} id={"partners"}>
      <Title title={"Partners"} />
      <MainDesktop partners={mainPartners} />
      <SecondaryDesktop
        partners={secondaryPartners}
        partnersFirstRow={secondaryPartners.slice(0, 4)}
        partnersSecondRow={secondaryPartners.slice(4)}
      />
    </div>
  );
}

function MainDesktop({ partners }) {
  return (
    <div className={classes.mainPartners}>
      {partners.map((partner) => (
        <div className={classes.partner} key={partner.img}>
          <div className={classes.partner_inner}>
            <a
              className={classes.partnerMainLogo}
              href={partner.link}
              target={"_blank"}
            >
              <img
                src={partner.img}
                alt={partner.alt}
                className={classes.partnerImg}
              />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

function SecondaryDesktop({ partners }) {
  return (
    <div className={classes.partnersSecondary}>
      {partners.map((partner) => (
        <a
          key={partner.img}
          className={classes.partnerSecondary}
          href={partner.link}
          target={"_blank"}
        >
          <img
            src={partner.img}
            alt={partner.alt}
            className={classes.secondaryPartnerImg}
          />
        </a>
      ))}
    </div>
  );
}
