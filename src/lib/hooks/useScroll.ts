import { useCallback, useEffect, useState } from "react";

export default function useScroll(threshold: number) {
  const [scrolled, setScrolled] = useState(false);
  const [percent, setPercent] = useState(0);

  const onScroll = useCallback(() => {
    setScrolled(window.pageYOffset > threshold);
  }, [threshold]);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  useEffect(() => {
    let docHeight = document.documentElement.scrollHeight;
    window.onscroll = function() {
      let percentage = (scrollY / docHeight) * 100;
      setPercent(percentage);
    }
  });

  return { scrolled, percent };
}