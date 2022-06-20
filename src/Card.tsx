import clsx from 'clsx';
import { motion } from 'framer-motion';
import { ReactElement } from 'react';

interface CardProps {
  index: number;
  count: number;
  icon: ReactElement;
}

export const Card = ({ index, count, icon }: CardProps) => {
  const rotation = ((index - (count - 1) / 2) / count) * 2;
  const translationY = Math.cos(rotation) * 100;

  return (
    <motion.div
      className="absolute bottom-0"
      style={{
        rotate: rotation * 10,
        translateX: rotation * 350,
        translateY: -translationY + 110,
        originX: 0.5,
        originY: 1,
      }}
      whileHover={{
        scale: 1.1,
        rotate: 0,
        zIndex: 100,
        translateY: -10,
      }}
      drag
      dragSnapToOrigin
    >
      <div
        className={clsx(
          'absolute -translate-x-1/2 bottom-0',
          'h-60 w-44 border border-black bg-blue-200',
          'flex justify-center items-center text-7xl'
        )}
      >
        {icon}
      </div>
    </motion.div>
  );
};
