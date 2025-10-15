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
    <div className="min-h-screen bg-gradient-to-b from-sky-200 to-green-200 flex items-center justify-center p-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">
          🐄 Tickle the Cow! 🐄
        </h1>
        
        <div className="relative inline-block">
          {/* Cow */}
          <div
            onClick={tickleCow}
            className="text-9xl cursor-pointer hover:scale-110 transition-transform duration-200 select-none"
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
              className="absolute text-6xl font-bold text-pink-600 animate-bounce pointer-events-none z-10"
              style={{
                left: `${mooPosition.x}px`,
                top: `${mooPosition.y - 50}px`,
                transform: 'translate(-50%, -100%)',
                textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
              }}
            >
              MOO! 🗨️
            </div>
          )}
        </div>
        
        <p className="text-xl text-gray-700 mt-8 max-w-md mx-auto">
          Click on the cow to tickle it and hear it moo! 
          <br />
          <span className="text-sm text-gray-600 mt-2 block">
            (You can also use the keyboard - press Enter or Space when the cow is focused)
          </span>
        </p>
      </div>
    </div>
  );
}

