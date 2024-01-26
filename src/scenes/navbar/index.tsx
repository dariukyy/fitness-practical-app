import { Bars3Icon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png";
import { useState } from "react";
import useScrolled from "@/hooks/useScrolled";
import { useAppContext } from "@/context/AppContext";
import MobileNavComponent from "./MobileNavComponent";
import DesktopNavComponent from "./DesktopNavComponent";
import { flexBetween } from "@/utils/helper";

function NavBar() {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const { isTopOfPage, isAboveMediumScreens } = useAppContext();

  const scrolled = useScrolled();

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  const navbarBackground = isTopOfPage ? "" : "bg-primary-100 drop-shadow";

  return (
    <nav>
      <div
        id="navBar"
        className={`${flexBetween} ${navbarBackground} fixed top-0 z-30 w-full py-6`}
      >
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/* Left side  */}
            <img
              className={`${scrolled ? "cursor-pointer" : ""}`}
              onClick={scrollToTop}
              alt="Logo"
              src={Logo}
            />

            {/* Right side */}

            {isAboveMediumScreens ? (
              <DesktopNavComponent
                isMenuToggled={isMenuToggled}
                setIsMenuToggled={setIsMenuToggled}
              />
            ) : (
              <button
                className="focus:outline-none focus:ring focus:ring-primary-500 duration-300 ring-offset-primary-100 ring-offset-2 rounded-full bg-secondary-500 p-2"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                <Bars3Icon width={34} className="w-6 h-6 text-white" />
              </button>
            )}
          </div>
        </div>
      </div>
      {/* Mobile menu modal */}
      {!isAboveMediumScreens && (
        <MobileNavComponent
          isMenuToggled={isMenuToggled}
          setIsMenuToggled={setIsMenuToggled}
        />
      )}
    </nav>
  );
}

export default NavBar;
