import Link from "./Link";

type MobileNavLinksProps = {
  isMenuToggled: boolean;
  onCloseMenu: (value: boolean) => void;
};

function MobileNavLinks({ isMenuToggled, onCloseMenu }: MobileNavLinksProps) {
  return (
    <>
      <Link
        isMenuToggled={isMenuToggled}
        onCloseMenu={onCloseMenu}
        page="Home"
      />
      <Link
        isMenuToggled={isMenuToggled}
        onCloseMenu={onCloseMenu}
        page="Benefits"
      />
      <Link
        isMenuToggled={isMenuToggled}
        onCloseMenu={onCloseMenu}
        page="Our Classes"
      />
      <Link
        isMenuToggled={isMenuToggled}
        onCloseMenu={onCloseMenu}
        page="Contact Us"
      />
    </>
  );
}

export default MobileNavLinks;
