import { Inter } from "next/font/google";
import Arc from "../components/header-frame/arc";
import FormatAndDate from "../components/header-frame/format-and-date";
import CONSTANTS from "../constants";

import Countdown from "../components/header-frame/countdown";
import RegistrationButton from "../components/header-frame/registration-button";
import HeaderFrame from "@/components/header-frame/header-frame";
import About from "@/components/about/about";
import Categories from "@/components/categories/categories";
import TermsOfParticipation from "@/components/terms-of-participation/terms-of-participation";
import Partners from "@/components/partners/partners";
import Organizers from "@/components/organizers/organizers";
import AboutBest from "@/components/about-best/about-best";
import Faq from "@/components/faq/faq";
import Panel from "@/components/header-frame/panel";
import SocialNetworks from "@/components/social-networks/social-networks";
import Format from "@/components/format/format";

const inter = Inter({ subsets: ["latin"] });

export default function App() {
  return (
    <>
      <main>
        <HeaderFrame />
        <Panel />
        <About />
        <Format />
        <Categories />
        <TermsOfParticipation />
        {/*<Partners />*/}
        <Organizers />
        {/*<AboutBest />*/}
        <Faq />
      </main>
      <footer>
        <SocialNetworks />
      </footer>
    </>
  );
}
