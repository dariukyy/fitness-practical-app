import { useAppContext } from "@/context/AppContext";
import { useElementHeight } from "@/hooks/useElementHeight";

import { SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll";

type LinkProps = {
  page: string;
  isMenuToggled?: boolean;
  onCloseMenu?: (value: boolean) => void;
};

function Link({ page, onCloseMenu, isMenuToggled }: LinkProps) {
  const height = useElementHeight("navBar")!;

  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;
  const { setSelectedPage, selectedPage } = useAppContext();

  return (
    <AnchorLink
      className={`${selectedPage === lowerCasePage ? "text-primary-500" : ""} self-center transition duration-500 focus:outline-none focus:ring focus:ring-primary-500 ring-offset-primary-100 ring-offset-2hover:text-primary-300 px-2 py-1`}
      href={`#${lowerCasePage}`}
      offset={height}
      onClick={() => {
        onCloseMenu?.(!isMenuToggled);
        setSelectedPage(lowerCasePage);
      }}
    >
      {page}
    </AnchorLink>
  );
}

export default Link;
