'use client';

import { useEffect } from 'react';

export function ViewportHeightProvider() {
  useEffect(() => {
    // Função para atualizar a altura do viewport
    const updateHeight = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    // Atualiza no carregamento inicial
    updateHeight();

    // Atualiza quando a orientação muda ou a janela é redimensionada
    window.addEventListener('resize', updateHeight);
    window.addEventListener('orientationchange', updateHeight);

    return () => {
      window.removeEventListener('resize', updateHeight);
      window.removeEventListener('orientationchange', updateHeight);
    };
  }, []);

  return null; // Este componente não renderiza nada
}
