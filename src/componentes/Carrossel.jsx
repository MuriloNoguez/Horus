import React, { useState, useEffect } from 'react';

const imagens = [
  { src: '/testes/Img1.png', alt: 'Imagem 1' },
  { src: '/testes/Img2.png', alt: 'Imagem 2' },
  { src: '/testes/Img3.png', alt: 'Imagem 3' },
  { src: '/testes/Img4.png', alt: 'Imagem 4' },
  { src: '/testes/Img5.png', alt: 'Imagem 5' },
];

export function Carousel({ visibleImagesCount = 3 }) {
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
    const indexes = [];
    const half = Math.floor(visibleImagesCount / 2);
    for (let i = -half; i <= half; i++) {
      indexes.push((index + i + imagens.length) % imagens.length);
    }
    return indexes;
  };

  const adjacentIndexes = getAdjacentIndexes(selectedIndex);

  const handleClick = (index) => {
    setSelectedIndex(index);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 10000); // Pausar animação por 10 segundos após clique
  };

  return (
    <div className="flex justify-center items-end space-x-2 h-44">
      {adjacentIndexes.map((index, idx) => (
        <img
          key={index}
          src={imagens[index].src}
          alt={imagens[index].alt}
          onClick={() => handleClick(index)}
          className={`w-24 md:w-32 lg:w-40 transition-transform duration-300 cursor-pointer ${idx === Math.floor(visibleImagesCount / 2) ? 'transform -translate-y-7' : 'opacity-75'}`}
        />
      ))}
    </div>
  );
}
