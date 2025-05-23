import { useInView } from "react-intersection-observer";

export const useSharedInView = () => {
  return useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
};
