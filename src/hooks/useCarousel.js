import { useEffect, useState } from "react";

export function useCarousel(length, interval = 2500) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!length || length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % length);
    }, interval);

    return () => clearInterval(timer);
  }, [length, interval]);

  function goNext() {
    setCurrentIndex((prev) => (prev + 1) % length);
  }

  function goPrev() {
    setCurrentIndex((prev) => (prev - 1 + length) % length);
  }

  function goTo(index) {
    setCurrentIndex(index);
  }

  return {
    currentIndex,
    goNext,
    goPrev,
    goTo,
  };
}