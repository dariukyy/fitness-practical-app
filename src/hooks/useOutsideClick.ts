import { useEffect, useRef } from "react";

export function useOutsideClick(
  handler: () => void,
  listeneCapturing: boolean = true,
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
    document.addEventListener("click", handleClick, listeneCapturing);
    document.addEventListener("keydown", handleEscapeKey);

    return () => {
      document.removeEventListener("click", handleClick, listeneCapturing);
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [handler, listeneCapturing]);

  return { ref };
}
