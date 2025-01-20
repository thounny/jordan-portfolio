import { motion } from "framer-motion";

const transition = (OriginalComponent) => {
  return () => (
    <>
      <div className="bg"></div>
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.9,
          clipPath: "polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)",
          transition: { duration: 0.5, ease: [0.42, 0, 0.58, 1] },
        }}
        animate={{
          opacity: 1,
          scale: 1,
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          transition: { duration: 0.75, ease: [0.42, 0, 0.58, 1] },
        }}
        exit={{
          opacity: 0,
          scale: 1.1,
          clipPath: "polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)",
          transition: { duration: 0.5, ease: [0.42, 0, 0.58, 1] },
        }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 1000,
          background: `linear-gradient(135deg, var(--project), var(--bg))`,
        }}
      >
        <OriginalComponent />
      </motion.div>
    </>
  );
};

export default transition;
