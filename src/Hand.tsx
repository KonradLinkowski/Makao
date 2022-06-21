import { useRef } from 'react';
import { Card } from './Card';
import { CardData } from './types';

interface HandProps {
  cards: CardData[];
  onPlay: (index: number) => void;
}

export const Hand = ({ cards, onPlay }: HandProps) => {
  const ref = useRef(null);
  return (
    <div ref={ref} className="fixed -bottom-1/3 w-full h-2/3">
      <div className="absolute left-1/2 bottom-1/2 -translate-x-1/2">
        {cards.map((card, index) => (
          <Card
            {...card}
            index={index}
            handRef={ref}
            key={card.index}
            count={cards.length}
            onPlay={onPlay}
          />
        ))}
      </div>
    </div>
  );
};
