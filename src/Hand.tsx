import { Card } from './Card';
import { CardData } from './types';

interface HandProps {
  cards: CardData[];
}

export const Hand = ({ cards }: HandProps) => {
  return (
    <div className="flex fixed bottom-0 left-1/2">
      {cards.map((card) => (
        <Card {...card} key={card.index} count={cards.length} />
      ))}
    </div>
  );
};
