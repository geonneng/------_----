'use client';

import { Scenario, TextBlock, Choice } from '@/types/game';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { useState, useMemo, useEffect } from 'react';

interface ScenarioViewProps {
  scenario: Scenario;
  onChoice: (choiceId: string) => void;
}

export function ScenarioView({ scenario, onChoice }: ScenarioViewProps) {
  const [currentPage, setCurrentPage] = useState(0);

  // 시나리오가 바뀌면 페이지를 0으로 리셋
  useEffect(() => {
    setCurrentPage(0);
  }, [scenario.id]);

  // content를 페이지로 분할 (2-3개의 TextBlock씩)
  const pages = useMemo(() => {
    const result: TextBlock[][] = [];
    const content = scenario.content;
    
    // 첫 페이지는 2개까지, 나머지는 3개씩
    let i = 0;
    if (content.length > 2) {
      result.push(content.slice(0, 2));
      i = 2;
    }
    
    while (i < content.length) {
      const pageSize = Math.min(3, content.length - i);
      result.push(content.slice(i, i + pageSize));
      i += pageSize;
    }
    
    // 페이지가 없으면 전체를 한 페이지로
    if (result.length === 0) {
      result.push(content);
    }
    
    return result;
  }, [scenario.content]);

  const isLastPage = currentPage === pages.length - 1;
  const currentContent = pages[currentPage] || [];

  return (
    <div className="w-full max-w-2xl mx-auto px-3 sm:px-4 md:px-6 py-4 sm:py-6 md:py-8 animate-fadeIn">
      {/* 막 제목 */}
      <h2 className="text-responsive-2xl font-bold text-center mb-4 sm:mb-6 md:mb-8 text-white leading-tight">
        {scenario.title}
      </h2>

      {/* 이미지 (첫 페이지에만) */}
      {scenario.image && currentPage === 0 && (
        <div className="mb-4 sm:mb-6 md:mb-8 rounded-lg overflow-hidden border border-white/20">
          <Image
            src={scenario.image}
            alt={scenario.title}
            width={800}
            height={450}
            className="w-full h-auto"
            priority
          />
        </div>
      )}

      {/* 페이지 인디케이터 */}
      {pages.length > 1 && (
        <div className="flex justify-center gap-2 mb-4">
          {pages.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full ${
                index === currentPage ? 'bg-white' : 'bg-white/30'
              }`}
            />
          ))}
        </div>
      )}

      {/* 시나리오 텍스트 (현재 페이지) */}
      <div className="space-y-4 sm:space-y-5 md:space-y-6 mb-6 sm:mb-7 md:mb-8">
        {currentContent.map((block, index) => (
          <TextBlockComponent key={index} block={block} />
        ))}
      </div>

      {/* 다음 버튼 또는 선택지 */}
      {!isLastPage ? (
        <div className="flex justify-center">
          <Button
            variant="outline"
            className="px-8 py-3 text-base border-white text-white hover:bg-white hover:text-black transition-colors"
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            다음 →
          </Button>
        </div>
      ) : (
        <div className="space-y-3 sm:space-y-4">
          {scenario.choices.map((choice) => (
            <Button
              key={choice.id}
              variant="outline"
              className="w-full text-left h-auto py-3 sm:py-4 px-4 sm:px-5 md:px-6 text-sm sm:text-base whitespace-normal border-white text-white hover:bg-white hover:text-black transition-colors touch-target"
              onClick={() => onChoice(choice.id)}
            >
              {choice.label && (
                <span className="font-bold mr-2">{choice.label})</span>
              )}
              {choice.text}
            </Button>
          ))}
        </div>
      )}
    </div>
  );
}

function TextBlockComponent({ block }: { block: TextBlock }) {
  if (block.isThought) {
    return (
      <div className="bg-white/5 border-l-4 border-white/40 pl-3 sm:pl-4 py-2 sm:py-3 italic text-white/90">
        <div className="text-xs sm:text-sm text-white/60 mb-1">[{block.speaker || '속마음'}]</div>
        <p className="whitespace-pre-line leading-relaxed text-sm sm:text-base">{block.text}</p>
      </div>
    );
  }

  if (block.speaker) {
    return (
      <div className="space-y-2">
        <div className="font-bold text-base sm:text-lg text-white">{block.speaker}</div>
        <p className="text-white/90 leading-relaxed whitespace-pre-line pl-3 sm:pl-4 text-sm sm:text-base">
          {block.text}
        </p>
      </div>
    );
  }

  return (
    <p className="text-white/90 leading-relaxed whitespace-pre-line text-sm sm:text-base">
      {block.text}
    </p>
  );
}

