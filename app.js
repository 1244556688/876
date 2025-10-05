const { motion } = window['framer-motion'];

function App() {
  const games = [
    { id: 1, title: "Neon Drift", hours: 12, cover: "https://picsum.photos/seed/neon1/400/600" },
    { id: 2, title: "Void Runner", hours: 46, cover: "https://picsum.photos/seed/void2/400/600" },
    { id: 3, title: "Orbit Crash", hours: 5, cover: "https://picsum.photos/seed/orbit3/400/600" }
  ];

  return React.createElement(
    'div',
    { className: 'min-h-screen bg-gradient-to-b from-[#050507] to-[#0a0a0d] flex flex-col items-center text-slate-200' },
    React.createElement(Header),
    React.createElement('div', { className: 'mt-8 w-full max-w-5xl px-4' },
      React.createElement(motion.h2, { 
        className: 'text-2xl mb-4 text-[#00bfff]', 
        initial: { opacity: 0, y: -20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.8 }
      }, '最近玩過的遊戲'),
      React.createElement('div', { className: 'flex gap-4 overflow-x-auto pb-4' },
        games.map(g =>
          React.createElement(motion.div, {
            key: g.id,
            whileHover: { scale: 1.05 },
            className: 'relative w-44 rounded-xl overflow-hidden border border-slate-800/50 flex-shrink-0 shadow-lg shadow-[#00bfff]/10'
          },
            React.createElement('img', { src: g.cover, className: 'w-full h-56 object-cover' }),
            React.createElement('div', { className: 'absolute bottom-0 left-0 right-0 bg-black/60 p-2 text-sm' },
              React.createElement('span', { className: 'text-[#00bfff] font-semibold' }, g.title),
              React.createElement('span', null, ` • ${g.hours} 小時`)
            )
          )
        )
      )
    )
  );
}

function Header() {
  return React.createElement(
    'header',
    { className: 'w-full bg-[#0b0b0d]/80 backdrop-blur-sm border-b border-slate-800 flex justify-between items-center px-6 py-4' },
    React.createElement('h1', { className: 'text-2xl font-bold text-[#00bfff] tracking-wider' }, 'Nexus Play'),
    React.createElement('input', {
      placeholder: '🔍 搜尋遊戲...',
      className: 'bg-[#050507] border border-slate-800 rounded-full px-4 py-2 text-sm text-slate-300 focus:outline-none focus:ring-2 focus:ring-[#00bfff]/50'
    })
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(App));
