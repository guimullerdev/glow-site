module.exports = {
  theme: {
    extend: {
      spacing: {
        safe: 'env(safe-area-inset-bottom)',
      },
      height: {
        screen: '100vh',
        'screen-dynamic': 'calc(var(--vh, 1vh) * 100)',
      },
    },
  },
};
