import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const animation = ({ name, delay }: AnimationArgs) => {
  return {
    animationName: name,
    animationDelay: delay,
    animationFillMode: "both",
    animationDuration: "700ms",
    animationDirection: "normal",
    animationTimingFunction: "ease",
  };
};

export const slideInDownAnimate = (delay: string) =>
  animation({ name: "slideInDown", delay });
