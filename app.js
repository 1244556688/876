const { motion } = window['framer-motion'];

function App() {
  const games = [
    { id: 1, title: "Neon Drift", hours: 12, cover: "https://picsum.photos/seed/neon1/400/600" },
    { id: 2, title: "Void Runner", hours: 46, cover: "https://picsum.photos/seed/void2/400/600" },
    { id: 3, title: "Orbit Crash", hours: 5, cover: "https://picsum.photos/seed/orbit3/400/600" }
  ];

  return React.createElement(
    'div',
    { className: 'max-w-5xl mx-auto p-6' },
    React.createElement(Header),
    React.createElement('div', { className: 'mt-6' },
      React.createElement('h2', { className: 'text-xl mb-3' }, '最近玩過'),
      React.createElement('div', { className: 'flex gap-4 overflow-x-auto' },
        games.map(g =>
          React.createElement(motion.div, {
            key: g.id,
            whileHover: { scale: 1.05 },
            className: 'relative w-40 rounded-xl overflow-hidden border border-slate-800/50 flex-shrink-0'
          },
            React.createElement('img', { src: g.cover, className: 'w-full h-56 object-cover' }),
            React.createElement('div', { className: 'absolute bottom-0 left-0 right-0 bg-black/60 p-2 text-sm' },
              g.title, ' - ', g.hours, ' 小時')
          )
        )
      )
    )
  );
}

function Header() {
  return React.createElement(
    'header',
    { className: 'flex justify-between items-center' },
    React.createElement('h1', { className: 'text-2xl font-bold text-[#00bfff]' }, 'Nexus Play'),
    React.createElement('input', {
      placeholder: '搜尋遊戲...',
      className: 'bg-[#0b0b0d] border border-slate-800 rounded-full px-4 py-2 text-sm text-slate-300'
    })
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(App));
