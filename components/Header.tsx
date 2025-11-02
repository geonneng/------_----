'use client';

import { Button } from '@/components/ui/button';

interface HeaderProps {
  onRestart: () => void;
}

export function Header({ onRestart }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-white/20 safe-top">
      <div className="container mx-auto px-3 sm:px-4 md:px-6 h-14 sm:h-16 flex items-center justify-between">
        <h1 className="text-base sm:text-lg md:text-xl font-bold text-white truncate">
          조선왕조실록: rewrite
        </h1>
        <Button 
          variant="ghost" 
          onClick={onRestart}
          className="text-white hover:text-white/80 text-xs sm:text-sm md:text-base touch-target"
        >
          다시 하기
        </Button>
      </div>
    </header>
  );
}

