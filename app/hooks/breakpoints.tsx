import { useEffect, useState } from "react";

const useBreakpoints = () => {
  const [breakpoints, setBreakpoints] = useState({
    is768: false,
    is1024: false,
    is1536: false,
  });

  useEffect(() => {
    const mq768 = window.matchMedia("(min-width: 768px)");
    const mq1024 = window.matchMedia("(min-width: 1024px)");
    const mq1536 = window.matchMedia("(min-width: 1536px)");

    const update = () => {
      setBreakpoints({
        is768: mq768.matches,
        is1024: mq1024.matches,
        is1536: mq1536.matches,
      });
    };

    // Initial check
    update();

    // Event listeners
    mq768.addEventListener("change", update);
    mq1024.addEventListener("change", update);
    mq1536.addEventListener("change", update);

    return () => {
      mq768.removeEventListener("change", update);
      mq1024.removeEventListener("change", update);
      mq1536.removeEventListener("change", update);
    };
  }, []);

  return breakpoints;
};

export default useBreakpoints;
