import { useAppContext } from "@/context/AppContext";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "./types";

function LearnMoreButton() {
  const { setSelectedPage } = useAppContext();
  return (
    <AnchorLink
      onClick={() => setSelectedPage(SelectedPage.ContactUs)}
      href={`${SelectedPage.ContactUs}`}
      className="text-sm font-bold text-primary-500 underline hover:text-secondary-500 transition-colors focus:outline-none focus:ring focus:ring-primary-300 duration-300 ring-offset-primary-100 ring-offset-2"
    >
      <p>Learn More</p>
    </AnchorLink>
  );
}

export default LearnMoreButton;
