import { useState, useEffect } from "react";

const useWindowDimensions = () => {
  const isClient = typeof window === "object";

  const [windowWidth, setWindowWidth] = useState(
    isClient ? window.innerWidth : 0
  );
  const [windowHeight, setWindowHeight] = useState(
    isClient ? window.innerHeight : 0
  );

  const handleResize = () => {
    if (isClient) {
      setWindowWidth(window?.innerWidth || 0);
      setWindowHeight(window?.innerHeight || 0);
    }
  };

  useEffect(() => {
    if (isClient) {
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, [isClient]);

  return { windowWidth, windowHeight };
};

export default useWindowDimensions;
