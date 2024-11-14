import React, { useState, useEffect } from 'react';

const imagens = [
  { src: '/Img1.png', alt: 'Imagem 1' },
  { src: '/Img2.png', alt: 'Imagem 2' },
  { src: '/Img3.png', alt: 'Imagem 3' },
  { src: '/Img4.png', alt: 'Imagem 4' },
  { src: '/Img5.png', alt: 'Imagem 5' },
];

export function Carousel() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setSelectedIndex((prevIndex) => (prevIndex + 1) % imagens.length);
      }, 3000); // Troca de imagem a cada 3 segundos

      return () => clearInterval(interval);
    }
  }, [isPaused]);

  const getAdjacentIndexes = (index) => {
    const prevIndex = (index - 1 + imagens.length) % imagens.length;
    const nextIndex = (index + 1) % imagens.length;
    return [prevIndex, nextIndex];
  };

  const [prevIndex, nextIndex] = getAdjacentIndexes(selectedIndex);

  const handleClick = (index) => {
    setSelectedIndex(index);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 10000); // Pausar animação por 10 segundos após clique
  };

  return (
    <div className="flex justify-center items-end  space-x-2 h-44">
      <img
        src={imagens[prevIndex].src}
        alt={imagens[prevIndex].alt}
        onClick={() => handleClick(prevIndex)}
        className="w-24 md:w-32 lg:w-40 transition-transform duration-300 cursor-pointer opacity-75"
      />
      <img
        src={imagens[selectedIndex].src}
        alt={imagens[selectedIndex].alt}
        onClick={() => handleClick(selectedIndex)}
        className="w-24 md:w-32 lg:w-40 transition-transform duration-300 cursor-pointer transform -translate-y-7"
      />
      <img
        src={imagens[nextIndex].src}
        alt={imagens[nextIndex].alt}
        onClick={() => handleClick(nextIndex)}
        className="w-24 md:w-32 lg:w-40 transition-transform duration-300 cursor-pointer opacity-75"
      />
    </div>
  );
}