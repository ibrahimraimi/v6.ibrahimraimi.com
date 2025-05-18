import { TextAnimator } from "./text-animator";

// Declaration for TypeScript
declare global {
  interface Window {
    SplitType: any;
    gsap: any;
  }
}

// Make these available in this file's scope
declare const gsap: any;
declare const SplitType: any;

const init = () => {
  // Only run in browser environment
  if (typeof window === 'undefined' || typeof document === 'undefined') return;
  
  console.log('Animation init started - checking for GSAP:', typeof gsap !== 'undefined');
  console.log('SplitType available:', typeof SplitType !== 'undefined');
  
  document.querySelectorAll(".list__item").forEach((item) => {
    const cols = Array.from(item.querySelectorAll<HTMLElement>(".hover-effect"));
    const animators = cols.map((col) => new TextAnimator(col));

    item.addEventListener("mouseenter", () => {
      animators.forEach((animator) => animator.animate());
    });
    item.addEventListener("mouseleave", () => {
      animators.forEach((animator) => animator.animateBack());
    });
  });

  // Same for all links
  document.querySelectorAll<HTMLElement>("a.hover-effect").forEach((item) => {
    const animator = new TextAnimator(item);
    item.addEventListener("mouseenter", () => {
      animator.animate();
    });
    item.addEventListener("mouseleave", () => {
      animator.animateBack();
    });
  });
};

// Run initialization only when the document is ready
if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
}
