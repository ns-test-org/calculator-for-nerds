'use client';

import { useState } from 'react';

export default function Home() {
  const [mooVisible, setMooVisible] = useState(false);
  const [mooPosition, setMooPosition] = useState({ x: 0, y: 0 });

  const tickleCow = (event: React.MouseEvent) => {
    // Get click position relative to the viewport
    const rect = (event.target as HTMLElement).getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    
    setMooPosition({ x, y });
    setMooVisible(true);
    
    // Hide the "moo" after 2 seconds
    setTimeout(() => {
      setMooVisible(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-200 to-green-200 flex items-center justify-center p-8 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-10 left-10 text-6xl">☀️</div>
      <div className="absolute top-20 right-20 text-4xl">☁️</div>
      <div className="absolute top-32 right-40 text-3xl">☁️</div>
      <div className="absolute bottom-20 left-20 text-2xl">🌸</div>
      <div className="absolute bottom-32 right-32 text-2xl">🌼</div>
      
      <div className="text-center">
        <h1 className="text-4xl font-bold text-green-800 mb-8 drop-shadow-lg">
          🐄 Tickle the Cow! 🐄
        </h1>
        
        <div className="relative inline-block">
          {/* The cow */}
          <div 
            className="text-9xl cursor-pointer hover:scale-110 transition-transform duration-200 select-none relative"
            onClick={tickleCow}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                tickleCow(e as any);
              }
            }}
          >
            🐄
          </div>
          
          {/* Moo text that appears when cow is clicked */}
          {mooVisible && (
            <div 
              className="absolute text-4xl font-bold text-red-600 animate-bounce pointer-events-none z-10"
              style={{
                left: `${mooPosition.x}px`,
                top: `${mooPosition.y - 50}px`,
                transform: 'translate(-50%, -50%)',
                textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
              }}
            >
              MOO! 🗣️
            </div>
          )}
        </div>
        
        <p className="text-xl text-green-700 mt-6 font-medium">
          Click the cow to hear it moo! 🎵
        </p>
        
        <div className="mt-8 text-sm text-green-600">
          <p>🌱 Happy cows make the best moos! 🌱</p>
        </div>
      </div>
      
      {/* Floating grass elements */}
      <div className="absolute bottom-0 left-0 right-0 text-2xl opacity-60">
        🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾🌾
      </div>
    </div>
  );
}

