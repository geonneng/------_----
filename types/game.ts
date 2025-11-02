// 게임 진영
export type Faction = 'joseon' | 'goryeo';

// 게임 화면 상태
export type GameScreen = 
  | 'intro'           // 초기 화면
  | 'faction-select'  // 진영 선택
  | 'scenario'        // 시나리오 진행
  | 'battle'          // 전투 미니게임
  | 'minigame'        // 텍스트 미니게임
  | 'ending';         // 엔딩

// 선택지
export interface Choice {
  id: string;
  text: string;
  label?: string; // A, B, C 등
}

// 시나리오 텍스트 블록
export interface TextBlock {
  speaker?: string;  // 화자 (예: "이방원", "하인")
  text: string;
  isThought?: boolean; // 속마음 여부
}

// 시나리오 데이터
export interface Scenario {
  id: string;
  act: number;
  faction: Faction;
  title: string;
  image?: string;
  content: TextBlock[];
  choices: Choice[];
}

// 시나리오 결과 (선택 후 표시되는 내용)
export interface ScenarioResult {
  id: string;
  content: TextBlock[];
  nextScenarioId?: string;
  nextScreen?: GameScreen;
  endingType?: EndingType;
}

// 전투 액션
export interface BattleAction {
  id: string;
  name: string;
  description: string;
  damageMultiplier: number;
  defenseMultiplier?: number;
  heal?: number;
}

// 퀴즈 데이터
export interface BattleQuiz {
  question: string;
  choices: {
    id: string;
    text: string;
    isCorrect: boolean;
  }[];
}

// 전투 데이터
export interface BattleData {
  id: string;
  faction: Faction;
  playerName: string;
  playerMaxHp: number;
  playerAttack: number;
  enemyName: string;
  enemyMaxHp: number;
  enemyAttack: number;
  actions: BattleAction[];
  enemyActions: {
    name: string;
    damage: number;
    probability: number;
  }[];
  onVictory: string; // 다음 시나리오 ID
  onDefeat: EndingType;
  quizzes: BattleQuiz[]; // 패배 시 랜덤 퀴즈
  onQuizSuccess: string; // 퀴즈 정답 시 다음 시나리오 ID
}

// 미니게임 스테이지
export interface MiniGameStage {
  stageNumber: number;
  thought: string;
  choices: Choice[];
}

// 미니게임 데이터
export interface MiniGameData {
  id: string;
  faction: Faction;
  title: string;
  description: string;
  stages: MiniGameStage[];
  successPath: string[]; // 성공 선택지 ID 배열
  onSuccess: string; // 다음 시나리오 ID
  onFailure: EndingType;
}

// 엔딩 타입
export type EndingType = 
  | 'joseon-success'
  | 'joseon-failure'
  | 'goryeo-success'
  | 'goryeo-failure'
  | 'battle-defeat';

// 엔딩 데이터
export interface Ending {
  type: EndingType;
  title: string;
  subtitle: string;
  description: string;
  image: string;
}

// 게임 상태
export interface GameState {
  screen: GameScreen;
  faction?: Faction;
  currentScenarioId?: string;
  choiceHistory: string[]; // 선택한 choice ID들
  battleData?: BattleData;
  miniGameData?: MiniGameData;
  miniGameProgress?: string[]; // 미니게임에서 선택한 choice ID들
  endingType?: EndingType;
}

