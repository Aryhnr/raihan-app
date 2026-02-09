import { motion, AnimatePresence } from "framer-motion";

const TransitionPortal = ({ isActive, onComplete }) => {
  return (
    <AnimatePresence mode="wait">
      {isActive && (
        <motion.div
          initial={{ clipPath: "circle(0% at 50% 50%)" }}
          animate={{ clipPath: "circle(100% at 50% 50%)" }}
          exit={{ clipPath: "circle(0% at 50% 50%)" }}
          transition={{
            duration: 0.4,
            ease: [0.76, 0, 0.24, 1],
          }}
          onAnimationComplete={() => {
            onComplete();
          }}
          className="fixed inset-0 bg-black z-[9999] pointer-events-none"
        />
      )}
    </AnimatePresence>
  );
};

export default TransitionPortal;
