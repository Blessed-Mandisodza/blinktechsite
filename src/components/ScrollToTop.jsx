import { useEffect, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

const resetScrollPosition = () => {
  const activeElement = document.activeElement;

  // Blurring the previously clicked layout link prevents the browser
  // from scrolling it back into view after the next route renders.
  if (activeElement instanceof HTMLElement && activeElement !== document.body) {
    activeElement.blur();
  }

  window.scrollTo({ top: 0, left: 0, behavior: "auto" });
};

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (!("scrollRestoration" in window.history)) {
      return undefined;
    }

    const previousScrollRestoration = window.history.scrollRestoration;
    window.history.scrollRestoration = "manual";

    return () => {
      window.history.scrollRestoration = previousScrollRestoration;
    };
  }, []);

  useLayoutEffect(() => {
    resetScrollPosition();

    const frameId = window.requestAnimationFrame(() => {
      resetScrollPosition();
    });

    return () => {
      window.cancelAnimationFrame(frameId);
    };
  }, [pathname]);

  return null;
};

export default ScrollToTop;
