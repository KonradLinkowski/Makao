import clsx from 'clsx';
import { motion } from 'framer-motion';
import { ReactElement, RefObject, useMemo, useRef } from 'react';
import { useIntersectionObserver } from '@react-hookz/web';

interface CardProps {
  index: number;
  count: number;
  icon: ReactElement;
  handRef: RefObject<HTMLElement>;
  onPlay: (index: number) => void;
}

export const Card = ({ index, count, icon, handRef, onPlay }: CardProps) => {
  const rotation = ((index - (count - 1) / 2) / count) * 2;
  const translationY = Math.cos(rotation) * 100;

  const ref = useRef<HTMLDivElement>(null);

  const intersetion = useIntersectionObserver(ref, {
    root: handRef,
  });

  const hoverStyles = {
    scale: 1.1,
    rotate: 0,
    zIndex: 100,
    translateY: -10,
  };

  const isPlayable = useMemo(
    () => intersetion && !intersetion.isIntersecting,
    [intersetion]
  );

  console.log(isPlayable);

  return (
    <motion.div
      ref={ref}
      className="absolute bottom-0 left-1/2"
      style={{
        originX: 0.5,
        originY: 1,
      }}
      animate={{
        rotate: rotation * 10,
        translateX: rotation * 350,
        translateY: -translationY + 110,
      }}
      onDragEnd={() => {
        if (isPlayable) {
          onPlay(index);
        }
      }}
      onDrag={() => {
        intersetion;
      }}
      whileTap={hoverStyles}
      whileHover={hoverStyles}
      drag
      dragSnapToOrigin
    >
      <motion.div
        className={clsx(
          'absolute -translate-x-1/2 bottom-0',
          'h-60 w-44 border border-black bg-blue-200',
          'flex justify-center items-center text-7xl'
        )}
        variants={{
          playable: {
            boxShadow: '0px 0px 39px 17px rgba(66, 68, 255, 1)',
          },
          neutral: {
            boxShadow: '0px 0px 38px -22px rgba(66, 68, 90, 1)',
          },
        }}
        animate={isPlayable ? 'playable' : 'neutral'}
      >
        {icon}
      </motion.div>
    </motion.div>
  );
};
