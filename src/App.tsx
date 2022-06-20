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
  return <Hand cards={cards} />;
};
