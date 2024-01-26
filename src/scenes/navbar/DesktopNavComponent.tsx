import { flexBetween } from "@/utils/helper";
import NavLinks from "./NavLinks";
import ActionButton from "@/shared/ActionButton";
import { useAppContext } from "@/context/AppContext";
import { Bars3Icon } from "@heroicons/react/24/solid";

type DesktopNavComponentProps = {
  setIsMenuToggled: (value: boolean) => void;
  isMenuToggled: boolean;
};

function DesktopNavComponent({
  setIsMenuToggled,
  isMenuToggled,
}: DesktopNavComponentProps) {
  const { isAboveMediumScreens } = useAppContext();
  return (
    <>
      {isAboveMediumScreens ? (
        <div className={`${flexBetween} w-full`}>
          <div className={`${flexBetween} gap-8 text-sm`}>
            <NavLinks />
          </div>
          <div className={`${flexBetween} gap-8`}>
            <button className="self-center hover:text-primary-300 focus:outline-none focus:ring focus:ring-primary-500 ring-offset-primary-100 ring-offset-2 duration-300">
              Sign In
            </button>
            <ActionButton>Become a Member</ActionButton>
          </div>
        </div>
      ) : (
        <button
          className="rounded-full bg-secondary-500 p-2"
          onClick={() => setIsMenuToggled(!isMenuToggled)}
        >
          <Bars3Icon width={34} className="w-6 h-6 text-white" />
        </button>
      )}
    </>
  );
}

export default DesktopNavComponent;
