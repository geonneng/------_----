'use client';

import { useState } from 'react';
import { GameState, Faction, GameScreen, Scenario, ScenarioResult, EndingType } from '@/types/game';
import { Header } from '@/components/Header';
import { ScenarioView } from '@/components/ScenarioView';
import { BattleView } from '@/components/BattleView';
import { MiniGameView } from '@/components/MiniGameView';
import { EndingView } from '@/components/EndingView';
import { 
  joseonScenarios, 
  goryeoScenarios, 
  scenarioResults, 
  battleData, 
  miniGameData 
} from '@/data/scenarios';
import { endings } from '@/data/endings';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function Home() {
  const [gameState, setGameState] = useState<GameState>({
    screen: 'intro',
    choiceHistory: []
  });

  const [currentResult, setCurrentResult] = useState<ScenarioResult | null>(null);

  const restart = () => {
    setGameState({
      screen: 'intro',
      choiceHistory: []
    });
    setCurrentResult(null);
  };

  const selectFaction = (faction: Faction) => {
    const firstScenarioId = faction === 'joseon' ? 'joseon-act1' : 'goryeo-act1';
    setGameState({
      screen: 'scenario',
      faction,
      currentScenarioId: firstScenarioId,
      choiceHistory: []
    });
  };

  const handleChoice = (choiceId: string) => {
    const result = scenarioResults[choiceId];
    
    if (!result) {
      console.error('❌ 결과를 찾을 수 없습니다:', choiceId);
      alert(`결과 데이터가 없습니다: ${choiceId}\n개발자에게 문의해주세요.`);
      return;
    }

    console.log('✅ 선택지 결과 로드:', choiceId, result);
    const newHistory = [...gameState.choiceHistory, choiceId];
    
    // 결과 화면 표시
    setCurrentResult(result);
    setGameState(prev => ({
      ...prev,
      choiceHistory: newHistory
    }));
  };

  const proceedFromResult = () => {
    if (!currentResult) return;

    // 엔딩으로 이동
    if (currentResult.endingType) {
      setGameState(prev => ({
        ...prev,
        screen: 'ending',
        endingType: currentResult.endingType
      }));
      setCurrentResult(null);
      return;
    }

    // 전투로 이동
    if (currentResult.nextScreen === 'battle') {
      const battleId = gameState.faction === 'joseon' ? 'joseon-battle' : 'goryeo-battle';
      setGameState(prev => ({
        ...prev,
        screen: 'battle',
        battleData: battleData[battleId]
      }));
      setCurrentResult(null);
      return;
    }

    // 다음 시나리오로 이동
    if (currentResult.nextScenarioId) {
      setGameState(prev => ({
        ...prev,
        screen: 'scenario',
        currentScenarioId: currentResult.nextScenarioId
      }));
      setCurrentResult(null);
      return;
    }

    setCurrentResult(null);
  };

  const handleBattleVictory = () => {
    if (!gameState.battleData) return;
    
    // 퀴즈 정답 후 승리인 경우 onQuizSuccess 사용
    const nextScenarioId = gameState.battleData.onVictory;
    setGameState(prev => ({
      ...prev,
      screen: 'scenario',
      currentScenarioId: nextScenarioId,
      battleData: undefined
    }));
  };

  const handleBattleDefeat = () => {
    if (!gameState.battleData) return;
    
    const endingType = gameState.battleData.onDefeat;
    setGameState(prev => ({
      ...prev,
      screen: 'ending',
      endingType,
      battleData: undefined
    }));
  };

  const startMiniGame = () => {
    const miniGameId = gameState.faction === 'joseon' ? 'joseon-minigame' : 'goryeo-minigame';
    setGameState(prev => ({
      ...prev,
      screen: 'minigame',
      miniGameData: miniGameData[miniGameId],
      miniGameProgress: []
    }));
  };

  const handleMiniGameComplete = (success: boolean) => {
    if (!gameState.miniGameData) return;

    if (success) {
      // 성공 시
      const nextDestination = gameState.miniGameData.onSuccess;
      
      // 성공 엔딩으로 가는 경우
      if (nextDestination === 'goryeo-success' || nextDestination === 'joseon-success') {
        setGameState(prev => ({
          ...prev,
          screen: 'ending',
          endingType: nextDestination as EndingType,
          miniGameData: undefined
        }));
      } else {
        // 다음 시나리오로 가는 경우
        setGameState(prev => ({
          ...prev,
          screen: 'scenario',
          currentScenarioId: nextDestination,
          miniGameData: undefined
        }));
      }
    } else {
      // 실패 시
      const failureDestination = gameState.miniGameData.onFailure;
      
      // 실패 엔딩으로 가는 경우
      if (failureDestination === 'joseon-failure' || failureDestination === 'goryeo-failure') {
        setGameState(prev => ({
          ...prev,
          screen: 'ending',
          endingType: failureDestination as EndingType,
          miniGameData: undefined
        }));
      } else {
        // 다음 시나리오로 가는 경우
        setGameState(prev => ({
          ...prev,
          screen: 'scenario',
          currentScenarioId: failureDestination,
          miniGameData: undefined
        }));
      }
    }
  };

  // 현재 시나리오 가져오기
  const getCurrentScenario = (): Scenario | undefined => {
    if (!gameState.currentScenarioId) return undefined;
    return joseonScenarios[gameState.currentScenarioId] || goryeoScenarios[gameState.currentScenarioId];
  };

  const currentScenario = getCurrentScenario();

  // 5막 시나리오인 경우 자동으로 미니게임 시작
  if (gameState.screen === 'scenario' && currentScenario?.id.includes('act5-intro')) {
    return (
      <main className="min-h-screen bg-black safe-top safe-bottom">
        <Header onRestart={restart} />
        <div className="pt-14 sm:pt-16 min-h-screen flex items-center justify-center">
          <div className="w-full max-w-2xl mx-auto px-3 sm:px-4 md:px-6 py-4 sm:py-6 md:py-8 animate-fadeIn">
            <h2 className="text-responsive-2xl font-bold text-center mb-4 sm:mb-6 md:mb-8 text-white">
              {currentScenario.title}
            </h2>
            
            <div className="space-y-4 sm:space-y-5 md:space-y-6 mb-6 sm:mb-7 md:mb-8">
              {currentScenario.content.map((block, index) => (
                <p key={index} className="text-white/90 leading-relaxed whitespace-pre-line text-sm sm:text-base">
                  {block.speaker && <span className="font-bold">{block.speaker}: </span>}
                  {block.text}
                </p>
              ))}
            </div>

            <div className="text-center">
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-black px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg touch-target"
                onClick={startMiniGame}
              >
                미니게임 시작
              </Button>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black safe-top safe-bottom">
      <Header onRestart={restart} />
      
      <div className="pt-14 sm:pt-16 min-h-screen flex items-center justify-center">
        {/* 초기 화면 */}
        {gameState.screen === 'intro' && (
          <div className="w-full max-w-2xl mx-auto px-3 sm:px-4 md:px-6 py-4 sm:py-6 md:py-8 text-center animate-fadeIn">
            <div className="mb-4 sm:mb-6 md:mb-8 rounded-lg overflow-hidden border border-white/20">
              <Image
                src="/image/초기 화면 삽화.png"
                alt="조선왕조실록"
                width={800}
                height={450}
                className="w-full h-auto"
                priority
              />
            </div>
            
            <h1 className="text-responsive-4xl font-bold text-white mb-3 sm:mb-4">
              조선왕조실록: rewrite
            </h1>
            <h2 className="text-responsive-2xl text-white/80 mb-8 sm:mb-10 md:mb-12">
              1. 조선 건국전
            </h2>
            
            <div className="space-y-3 sm:space-y-4">
              <Button
                variant="outline"
                size="lg"
                className="w-full py-6 sm:py-7 md:py-8 text-base sm:text-lg md:text-xl border-white text-white hover:bg-white hover:text-black touch-target"
                onClick={() => selectFaction('joseon')}
              >
                조선 건국의 길 (이방원)
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="w-full py-6 sm:py-7 md:py-8 text-base sm:text-lg md:text-xl border-white text-white hover:bg-white hover:text-black touch-target"
                onClick={() => selectFaction('goryeo')}
              >
                고려 수호의 길 (정몽주)
              </Button>
            </div>
          </div>
        )}

        {/* 결과 화면 */}
        {currentResult && (
          <div className="w-full max-w-2xl mx-auto px-3 sm:px-4 md:px-6 py-4 sm:py-6 md:py-8 animate-fadeIn">
            <div className="space-y-4 sm:space-y-5 md:space-y-6 mb-6 sm:mb-7 md:mb-8">
              {currentResult.content.map((block, index) => (
                <div key={index}>
                  {block.speaker && (
                    <div className="font-bold text-base sm:text-lg text-white mb-2">{block.speaker}</div>
                  )}
                  <p className="text-white/90 leading-relaxed whitespace-pre-line text-sm sm:text-base">
                    {block.text}
                  </p>
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-black px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg touch-target"
                onClick={proceedFromResult}
              >
                계속하기
              </Button>
            </div>
          </div>
        )}

        {/* 시나리오 화면 */}
        {gameState.screen === 'scenario' && !currentResult && currentScenario && (
          <ScenarioView
            scenario={currentScenario}
            onChoice={handleChoice}
          />
        )}

        {/* 전투 화면 */}
        {gameState.screen === 'battle' && gameState.battleData && (
          <BattleView
            battle={gameState.battleData}
            onVictory={handleBattleVictory}
            onDefeat={handleBattleDefeat}
          />
        )}

        {/* 미니게임 화면 */}
        {gameState.screen === 'minigame' && gameState.miniGameData && (
          <MiniGameView
            miniGame={gameState.miniGameData}
            onComplete={handleMiniGameComplete}
          />
        )}

        {/* 엔딩 화면 */}
        {gameState.screen === 'ending' && gameState.endingType && (
          <EndingView
            ending={endings[gameState.endingType]}
            onRestart={restart}
          />
        )}
      </div>
    </main>
  );
}

