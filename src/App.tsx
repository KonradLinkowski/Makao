import { useState } from 'react';
import { Hand } from './Hand';
import { CardData } from './types';

export const App = () => {
  const [cards, setCards] = useState<CardData[]>(
    [
      {
        icon: <>🐉</>,
      },
      {
        icon: <>⚡</>,
      },
      {
        icon: <>💖</>,
      },
      {
        icon: <>🗡️</>,
      },
      {
        icon: <>🛡️</>,
      },
    ].map((item, index) => ({ ...item, index }))
  );

  const [played, setPlayed] = useState<CardData[]>([]);

  const handleCardPlay = (index: number) => {
    setPlayed([cards[index], ...played]);
    setCards(cards.filter((_, i) => i !== index));
  };

  return (
    <div>
      <Hand cards={cards} onPlay={handleCardPlay} />
    </div>
  );
};
