'use client';

import { Ending } from '@/types/game';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

interface EndingViewProps {
  ending: Ending;
  onRestart: () => void;
}

export function EndingView({ ending, onRestart }: EndingViewProps) {
  return (
    <div className="w-full max-w-2xl mx-auto px-3 sm:px-4 md:px-6 py-4 sm:py-6 md:py-8 animate-fadeIn">
      {/* 엔딩 이미지 */}
      <div className="mb-4 sm:mb-6 md:mb-8 rounded-lg overflow-hidden border border-white/20">
        <Image
          src={ending.image}
          alt={ending.title}
          width={800}
          height={450}
          className="w-full h-auto"
          priority
        />
      </div>

      {/* 엔딩 제목 */}
      <div className="text-center mb-4 sm:mb-5 md:mb-6">
        <h2 className="text-responsive-3xl font-bold text-white mb-2">
          {ending.title}
        </h2>
        <p className="text-responsive-xl text-white/70">
          {ending.subtitle}
        </p>
      </div>

      {/* 엔딩 설명 */}
      <div className="bg-white/5 border border-white/20 rounded-lg p-4 sm:p-5 md:p-6 mb-6 sm:mb-7 md:mb-8">
        <p className="text-white/90 leading-relaxed whitespace-pre-line text-sm sm:text-base">
          {ending.description}
        </p>
      </div>

      {/* 다시 하기 버튼 */}
      <div className="text-center">
        <Button
          variant="outline"
          size="lg"
          className="border-white text-white hover:bg-white hover:text-black px-6 sm:px-8 py-4 sm:py-5 md:py-6 text-base sm:text-lg touch-target"
          onClick={onRestart}
        >
          처음부터 다시 하기
        </Button>
      </div>
    </div>
  );
}

