import { useEffect, useState } from "react";

export const useAnimationCD = (
  count: number,
  jump: number,
  dependencies: [any]
) => {
  const [animationCount, setAnimationCount] = useState(0);

  useEffect(() => {
    let interval = setInterval(() => {
      setAnimationCount((prev) => {
        if (prev > count) clearInterval(interval);
        return prev + 1;
      });
    }, jump);

    return () => clearInterval(interval);
  }, [...dependencies]);

  return animationCount;
};
