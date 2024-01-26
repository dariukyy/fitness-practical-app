import { XMarkIcon } from "@heroicons/react/24/solid";
import MobileNavLinks from "./MobileNavLinks";
import { useOutsideClick } from "@/hooks/useOutsideClick";

type MobileNavComponentProps = {
  isMenuToggled: boolean;
  setIsMenuToggled: (value: boolean) => void;
};

function MobileNavComponent({
  isMenuToggled,
  setIsMenuToggled,
}: MobileNavComponentProps) {
  const modalRef = useOutsideClick(() => {
    // Callback function to close the modal when a click occurs outside
    setIsMenuToggled(false);
  });
  return (
    <div
      ref={modalRef.ref}
      className={`fixed right-0 bottom-0 z-40 h-full w-[340px] bg-primary-100 drop-shadow-xl duration-[0.6s] transform ${isMenuToggled ? "translate-x-[40px] transition-transform" : "translate-x-full transition-transform"}`}
      style={{
        transitionTimingFunction: "cubic-bezier(0.68, -0.6, 0.32, 1.6)",
      }}
    >
      {/* Close icon */}
      <div className="flex justify-end py-12 pr-[80px]">
        <button
          className="focus:outline-none focus:ring focus:ring-primary-500 duration-300 ring-offset-primary-100 ring-offset-2"
          onClick={() => setIsMenuToggled(!isMenuToggled)}
        >
          <XMarkIcon className="w-6 h-6 text-grey-400" />
        </button>
      </div>
      <div className="flex flex-col justify-center mr-[40px] items-center gap-10 text-2xl">
        <MobileNavLinks
          isMenuToggled={isMenuToggled}
          onCloseMenu={setIsMenuToggled}
        />
      </div>
    </div>
  );
}

export default MobileNavComponent;
