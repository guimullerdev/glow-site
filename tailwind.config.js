module.exports = {
  theme: {
    extend: {
      spacing: {
        safe: 'env(safe-area-inset-bottom)',
      },
      height: {
        screen: '100vh', // Padrão
        'screen-dynamic': 'calc(var(--vh, 1vh) * 100)', // Dinâmico
      },
    },
  },
};
