'use client';

import { useState, useEffect } from 'react';
import { BattleData, BattleAction } from '@/types/game';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

interface BattleViewProps {
  battle: BattleData;
  onVictory: () => void;
  onDefeat: () => void;
}

export function BattleView({ battle, onVictory, onDefeat }: BattleViewProps) {
  const [playerHp, setPlayerHp] = useState(battle.playerMaxHp);
  const [enemyHp, setEnemyHp] = useState(battle.enemyMaxHp);
  const [battleLog, setBattleLog] = useState<string[]>(['전투가 시작되었습니다!']);
  const [isPlayerTurn, setIsPlayerTurn] = useState(true);
  const [gameOver, setGameOver] = useState(false);
  const [nextDefenseMultiplier, setNextDefenseMultiplier] = useState(1);

  useEffect(() => {
    if (enemyHp <= 0 && !gameOver) {
      setGameOver(true);
      setBattleLog(prev => [...prev, '승리했습니다!']);
      setTimeout(() => onVictory(), 2000);
    } else if (playerHp <= 0 && !gameOver) {
      setGameOver(true);
      setBattleLog(prev => [...prev, '패배했습니다...']);
      setTimeout(() => onDefeat(), 2000);
    }
  }, [playerHp, enemyHp, gameOver, onVictory, onDefeat]);

  const handleAction = (action: BattleAction) => {
    if (!isPlayerTurn || gameOver) return;

    let newLog = [...battleLog];

    // 플레이어 공격
    const damage = Math.floor(battle.playerAttack * action.damageMultiplier);
    if (damage > 0) {
      const newEnemyHp = Math.max(0, enemyHp - damage);
      setEnemyHp(newEnemyHp);
      newLog.push(`${action.name}! ${damage}의 피해를 입혔습니다!`);
    } else {
      newLog.push(`${action.name}!`);
    }

    // 회복
    if (action.heal) {
      const newPlayerHp = Math.min(battle.playerMaxHp, playerHp + action.heal);
      setPlayerHp(newPlayerHp);
      newLog.push(`체력을 ${action.heal} 회복했습니다!`);
    }

    // 방어 설정
    if (action.defenseMultiplier !== undefined) {
      setNextDefenseMultiplier(action.defenseMultiplier);
    } else {
      setNextDefenseMultiplier(1);
    }

    setBattleLog(newLog);

    // 적이 죽지 않았다면 적 턴
    if (enemyHp - damage > 0) {
      setIsPlayerTurn(false);
      setTimeout(() => enemyTurn(newLog), 1500);
    }
  };

  const enemyTurn = (currentLog: string[]) => {
    // 랜덤 적 행동 선택
    const rand = Math.random();
    let cumulative = 0;
    let selectedAction = battle.enemyActions[0];

    for (const action of battle.enemyActions) {
      cumulative += action.probability;
      if (rand <= cumulative) {
        selectedAction = action;
        break;
      }
    }

    const damage = Math.floor(selectedAction.damage * nextDefenseMultiplier);
    const newPlayerHp = Math.max(0, playerHp - damage);
    setPlayerHp(newPlayerHp);

    const newLog = [
      ...currentLog,
      `${battle.enemyName}의 ${selectedAction.name}! ${damage}의 피해를 받았습니다!`
    ];
    setBattleLog(newLog);

    setNextDefenseMultiplier(1);
    setIsPlayerTurn(true);
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-3 sm:px-4 md:px-6 py-4 sm:py-6 md:py-8 animate-fadeIn">
      {/* 전투 제목 */}
      <div className="text-center mb-4 sm:mb-6 md:mb-8">
        <h2 className="text-responsive-2xl font-bold mb-1 text-red-800" style={{ textShadow: '0 0 10px rgba(153, 27, 27, 0.5)' }}>
          개경 시가전
        </h2>
        <p className="text-xs sm:text-sm text-red-400/80 italic">血戰 (혈전)</p>
      </div>

      {/* 전투 이미지 */}
      <div className="mb-4 sm:mb-6 md:mb-8 rounded-lg overflow-hidden border-2 border-red-900/50 shadow-lg shadow-red-900/20">
        <Image
          src="/image/미니게임_개경 시가전.png"
          alt="개경 시가전"
          width={800}
          height={450}
          className="w-full h-auto"
          priority
        />
      </div>

      {/* HP 바 */}
      <div className="space-y-4 sm:space-y-5 md:space-y-6 mb-6 sm:mb-7 md:mb-8">
        {/* 적 HP */}
        <div className="bg-red-950/20 border border-red-900/30 rounded-lg p-3 sm:p-4">
          <div className="flex justify-between mb-2">
            <span className="text-red-300 font-bold text-sm sm:text-base tracking-wide">{battle.enemyName}</span>
            <span className="text-red-400 text-xs sm:text-sm font-mono">{enemyHp} / {battle.enemyMaxHp}</span>
          </div>
          <div className="w-full h-6 sm:h-7 md:h-8 bg-black/40 rounded-sm overflow-hidden border border-red-900/50">
            <div
              className="h-full bg-gradient-to-r from-red-900 to-red-700 transition-all duration-500 shadow-inner"
              style={{ 
                width: `${(enemyHp / battle.enemyMaxHp) * 100}%`,
                boxShadow: 'inset 0 0 10px rgba(127, 29, 29, 0.8)'
              }}
            />
          </div>
        </div>

        {/* 플레이어 HP */}
        <div className="bg-slate-950/20 border border-slate-800/30 rounded-lg p-3 sm:p-4">
          <div className="flex justify-between mb-2">
            <span className="text-slate-200 font-bold text-sm sm:text-base tracking-wide">{battle.playerName}</span>
            <span className="text-slate-300 text-xs sm:text-sm font-mono">{playerHp} / {battle.playerMaxHp}</span>
          </div>
          <div className="w-full h-6 sm:h-7 md:h-8 bg-black/40 rounded-sm overflow-hidden border border-slate-700/50">
            <div
              className="h-full bg-gradient-to-r from-slate-700 to-slate-500 transition-all duration-500 shadow-inner"
              style={{ 
                width: `${(playerHp / battle.playerMaxHp) * 100}%`,
                boxShadow: 'inset 0 0 10px rgba(51, 65, 85, 0.8)'
              }}
            />
          </div>
        </div>
      </div>

      {/* 전투 로그 */}
      <div className="bg-black/40 border-2 border-red-950/50 rounded-lg p-3 sm:p-4 mb-4 sm:mb-5 md:mb-6 h-36 sm:h-40 md:h-48 overflow-y-auto scrollbar-thin backdrop-blur-sm">
        {battleLog.map((log, index) => (
          <div 
            key={index} 
            className={`mb-1 text-xs sm:text-sm font-medium ${
              log.includes('피해를 입혔습니다') ? 'text-red-400' :
              log.includes('피해를 받았습니다') ? 'text-orange-400' :
              log.includes('회복') ? 'text-emerald-400' :
              log.includes('승리') ? 'text-yellow-300 font-bold' :
              log.includes('패배') ? 'text-red-600 font-bold' :
              'text-slate-400'
            }`}
          >
            › {log}
          </div>
        ))}
      </div>

      {/* 행동 버튼 */}
      <div className="space-y-2 sm:space-y-3">
        {battle.actions.map((action) => (
          <Button
            key={action.id}
            variant="outline"
            className={`w-full text-left h-auto py-3 sm:py-4 px-4 sm:px-5 md:px-6 
              border-2 transition-all duration-200 touch-target
              ${!isPlayerTurn || gameOver 
                ? 'border-gray-700 text-gray-600 opacity-50 cursor-not-allowed' 
                : 'border-red-900/60 text-red-100 hover:bg-red-950/60 hover:border-red-700 hover:shadow-lg hover:shadow-red-900/30'
              }`}
            onClick={() => handleAction(action)}
            disabled={!isPlayerTurn || gameOver}
          >
            <div>
              <div className="font-bold text-base sm:text-lg tracking-wide">{action.name}</div>
              <div className="text-xs sm:text-sm opacity-70 mt-1">{action.description}</div>
            </div>
          </Button>
        ))}
      </div>

      {!isPlayerTurn && !gameOver && (
        <div className="text-center mt-4 sm:mt-5">
          <div className="inline-block bg-red-950/30 border border-red-900/50 rounded-full px-4 sm:px-6 py-2">
            <span className="text-red-300 text-sm sm:text-base font-medium animate-pulse">
              ⚔ 적의 턴...
            </span>
          </div>
        </div>
      )}

      {gameOver && (
        <div className="text-center mt-4 sm:mt-5">
          <div className={`inline-block border-2 rounded-lg px-6 sm:px-8 py-3 ${
            playerHp <= 0 
              ? 'bg-red-950/40 border-red-800' 
              : 'bg-yellow-950/40 border-yellow-700'
          }`}>
            <span className={`text-lg sm:text-xl font-bold ${
              playerHp <= 0 ? 'text-red-400' : 'text-yellow-300'
            }`}>
              {playerHp <= 0 ? '패배...' : '승리!'}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

