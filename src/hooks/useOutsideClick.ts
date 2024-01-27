import { useEffect, useRef } from "react";

export function useOutsideClick(
  handler: () => void,
  listenCapturing: boolean = true
) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        handler();
      }
    };

    const handleEscapeKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handler();
      }
    };

    const handleScroll = () => {
      handler();
    };

    document.addEventListener("click", handleClick, listenCapturing);
    document.addEventListener("keydown", handleEscapeKey);
    document.addEventListener("scroll", handleScroll, listenCapturing);

    return () => {
      document.removeEventListener("click", handleClick, listenCapturing);
      document.removeEventListener("keydown", handleEscapeKey);
      document.removeEventListener("scroll", handleScroll, listenCapturing);
    };
  }, [handler, listenCapturing]);

  return { ref };
}
