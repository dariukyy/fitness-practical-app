import { RefObject, useEffect, useState } from "react";

type useCustomSliderProps = {
  sliderRef: RefObject<HTMLDivElement | null>;
};

type ReturnProps = {
  showLeftArrow: boolean;
  showRightArrow: boolean;
  slideLeft: () => void;
  slideRight: () => void;
};

export default function useCustomSlider({
  sliderRef,
}: useCustomSliderProps): ReturnProps {
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const slideLeft = () => {
    if (sliderRef.current) {
      const currentScroll = sliderRef.current.scrollLeft;
      const scrollDistance = currentScroll - 600;
      sliderRef.current.scrollTo({
        left: scrollDistance,
        behavior: "smooth", // Use smooth scrolling
      });
    }
  };

  const slideRight = () => {
    if (sliderRef.current) {
      const currentScroll = sliderRef.current.scrollLeft;
      const scrollDistance = currentScroll + 600;
      sliderRef.current.scrollTo({
        left: scrollDistance,
        behavior: "smooth", // Use smooth scrolling
      });
    }
  };

  useEffect(() => {
    const ref = sliderRef.current!;
    const handleScroll = () => {
      if (ref) {
        const { scrollLeft, scrollWidth, clientWidth } = ref;
        const isScrollable = scrollLeft + clientWidth < scrollWidth;
        setShowLeftArrow(scrollLeft > 0);
        setShowRightArrow(isScrollable && ref.offsetWidth !== ref.scrollWidth); // Only show if not scrolled to end
      }
    };
    if (ref) {
      ref.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (ref) {
        ref.removeEventListener("scroll", handleScroll);
      }
    };
  }, [sliderRef]);

  return {
    showLeftArrow,
    showRightArrow,
    slideLeft,
    slideRight,
  };
}
