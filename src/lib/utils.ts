import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Apple-style "fluid" spring-like bezier
// Starts fast, brakes smoothly. Good for page transitions and large movements.
export const TRANSITION_EASE = [0.32, 0.72, 0, 1];

// Slightly bouncier for interactions (hover, tap)
export const INTERACTION_EASE = [0.19, 1, 0.22, 1];

export const PAGE_TRANSITION = {
  duration: 0.8,
  ease: TRANSITION_EASE
};

export const STAGGER_DELAY = 0.05;
