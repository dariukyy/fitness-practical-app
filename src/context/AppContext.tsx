import useMediaQuery from "@/hooks/useMediaQuery";
import { SelectedPage } from "@/shared/types";
import {
  createContext,
  type ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

// Define types and context
type AppContextProps = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
  isTopOfPage: boolean;
  isAboveMediumScreens: boolean;
};

const AppContext = createContext<AppContextProps | undefined>(undefined);

// Define the provider
type SelectedPageProviderProps = {
  children: ReactNode;
};

export default function AppContextProvider({
  children,
}: SelectedPageProviderProps) {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home,
  );
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  const isAboveMediumScreens = useMediaQuery("(min-width: 1064px)");

  useEffect(function () {
    function handleScroll() {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY != 0) {
        setIsTopOfPage(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Explicitly specify the type of value prop
  const value: AppContextProps = {
    selectedPage,
    setSelectedPage,
    isTopOfPage,
    isAboveMediumScreens,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
export function useAppContext() {
  const context = useContext(AppContext)!;
  if (!context)
    throw new Error("CurrentPage context used outside CurrentPageProvider");

  return context;
}
