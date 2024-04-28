export const sidebarVariants = {
  hidden: {
    x: "100vw",
    opacity: 0,
    transition: { type: "tween", duration: 0.2 },
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 250,
      damping: 25,
      mass: 0.4,
      when: "beforeChildren",
      staggerChildren: 0.05,
    },
  },
  exit: {
    x: "100vw",
    opacity: 0,
    transition: { type: "tween", duration: 2.5 },
  },
};
