import AnchorLink from "react-anchor-link-smooth-scroll";

import { type ReactNode } from "react";
import { SelectedPage } from "./types";
import { useAppContext } from "@/context/AppContext";

type ActionButtonProps = {
  children: ReactNode;
};

export default function ActionButton({ children }: ActionButtonProps) {
  const { setSelectedPage } = useAppContext();
  return (
    <AnchorLink
      href={`#${SelectedPage.ContactUs}`}
      onClick={() => setSelectedPage(SelectedPage.ContactUs)}
      className="rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white duration-300 focus:outline-none focus:ring focus:ring-primary-300 ring-offset-2"
    >
      {children}
    </AnchorLink>
  );
}
