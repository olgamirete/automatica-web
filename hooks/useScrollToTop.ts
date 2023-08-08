import { RefObject, useCallback } from "react";

const useScrollToTop = (ref: RefObject<HTMLDivElement>): (() => void) => {
  const scrollToTop = useCallback(() => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    const el = ref.current;
    if (el) {
      el.scrollTop = 0;
    }
  }, [ref]);
  return scrollToTop;
};

export default useScrollToTop;
