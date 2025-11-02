'use client';

import { useState } from 'react';
import { MiniGameData, MiniGameStage, Choice } from '@/types/game';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

interface MiniGameViewProps {
  miniGame: MiniGameData;
  onComplete: (success: boolean) => void;
}

export function MiniGameView({ miniGame, onComplete }: MiniGameViewProps) {
  const [currentStageIndex, setCurrentStageIndex] = useState(0);
  const [selectedChoices, setSelectedChoices] = useState<string[]>([]);

  const currentStage = miniGame.stages[currentStageIndex];
  const isLastStage = currentStageIndex === miniGame.stages.length - 1;

  // 미니게임에 맞는 이미지 선택
  const getMiniGameImage = () => {
    if (miniGame.id === 'joseon-minigame') {
      return '/image/조선 편 5막 미니게임_긴급귀환.png';
    } else if (miniGame.id === 'goryeo-minigame') {
      return '/image/고려 편 5막 미니게임_3일의 숙청.png';
    }
    return '';
  };

  const handleChoice = (choiceId: string) => {
    const newChoices = [...selectedChoices, choiceId];
    setSelectedChoices(newChoices);

    if (isLastStage) {
      // 마지막 스테이지 - 성공/실패 판정
      const isSuccess = newChoices.every((choice, index) => 
        choice === miniGame.successPath[index]
      );
      setTimeout(() => onComplete(isSuccess), 1000);
    } else {
      // 다음 스테이지로
      setTimeout(() => {
        setCurrentStageIndex(prev => prev + 1);
      }, 1000);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto px-3 sm:px-4 md:px-6 py-4 sm:py-6 md:py-8 animate-fadeIn">
      <h2 className="text-responsive-2xl font-bold text-center mb-3 sm:mb-4 text-white">
        {miniGame.title}
      </h2>

      {/* 미니게임 이미지 */}
      <div className="mb-4 sm:mb-6 rounded-lg overflow-hidden border border-white/20">
        <Image
          src={getMiniGameImage()}
          alt={miniGame.title}
          width={800}
          height={450}
          className="w-full h-auto"
          priority
        />
      </div>
      
      <p className="text-center text-white/80 mb-6 sm:mb-7 md:mb-8 text-sm sm:text-base px-2">
        {miniGame.description}
      </p>

      {/* 진행 표시 */}
      <div className="flex justify-center gap-2 mb-6 sm:mb-7 md:mb-8">
        {miniGame.stages.map((_, index) => (
          <div
            key={index}
            className={`w-8 sm:w-10 md:w-12 h-2 rounded-full ${
              index < currentStageIndex
                ? 'bg-green-500'
                : index === currentStageIndex
                ? 'bg-white'
                : 'bg-white/20'
            }`}
          />
        ))}
      </div>

      {/* 현재 스테이지 */}
      <div className="bg-white/5 border border-white/20 rounded-lg p-4 sm:p-5 md:p-6 mb-6 sm:mb-7 md:mb-8">
        <h3 className="text-base sm:text-lg font-bold text-white mb-3 sm:mb-4">
          STAGE {currentStage.stageNumber}
        </h3>
        <p className="text-white/90 whitespace-pre-line leading-relaxed text-sm sm:text-base">
          {currentStage.thought}
        </p>
      </div>

      {/* 선택지 */}
      <div className="space-y-3 sm:space-y-4">
        {currentStage.choices.map((choice) => (
          <Button
            key={choice.id}
            variant="outline"
            className="w-full text-left h-auto py-3 sm:py-4 px-4 sm:px-5 md:px-6 text-sm sm:text-base whitespace-normal border-white text-white hover:bg-white hover:text-black transition-colors touch-target"
            onClick={() => handleChoice(choice.id)}
          >
            {choice.label && (
              <span className="font-bold mr-2">{choice.label})</span>
            )}
            {choice.text}
          </Button>
        ))}
      </div>
    </div>
  );
}

