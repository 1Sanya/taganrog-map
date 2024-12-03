import { Outlet, useLocation } from 'react-router-dom'
import { motion } from "motion/react"

const pageVariants = {
  initial: {
    opacity: 0
  },
  in: {
    opacity: 1
  },
  out: {
    opacity: 0
  }
};

const pageTransition = {
  type: 'tween',
  ease: 'linear',
  duration: 0.5,
};

export const AnimationLayout = () => {
  const { pathname } = useLocation();
  return (
    <motion.div
      key={pathname}
      initial="initial"
      animate="in"
      variants={pageVariants}
      transition={pageTransition}
      style={{ height: '100%' }}
    >
      <Outlet />
    </motion.div>
  );
};