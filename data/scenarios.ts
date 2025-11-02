import { Scenario, ScenarioResult, BattleData, MiniGameData } from '@/types/game';

// ========================================
// 조선 편 (이방원) 시나리오
// ========================================

export const joseonScenarios: Record<string, Scenario> = {
  'joseon-act1': {
    id: 'joseon-act1',
    act: 1,
    faction: 'joseon',
    title: '1막: 격동의 서막 (1388년, 위화도)',
    image: '/image/조선 편 1막 삽화.png',
    content: [
      { text: '밤은 깊었지만, 잠을 잘 수 없었다. 개경에 있는 우리 집, 내 방 창문 너머로 차가운 바람 소리만 들렸다. 그 바람 소리를 뚫고, 땀으로 젖은 하인이 넘어질 듯 뛰어 들어왔다. 그의 눈에는 두려움과 흥분이 가득했다.' },
      { speaker: '하인', text: '(숨을 헐떡이며) "도, 도련님! 이방원 도련님! 지금 밖이..."' },
      { speaker: '이방원', text: '(낮고 차분하게) "무슨 일이냐. 이 야밤에 이리 소란스러운 것이냐."' },
      { speaker: '하인', text: '"대장군께서... 아버님께서! 위화도에서 군대를 돌리셨습니다! 지금 군대가 개경을 향하고 있다는..."' },
      { text: '\'드디어 시작되었구나.\'\n머리를 맞은 것처럼 깜짝 놀랐다. 비를 맞으며 괴로워하던 아버님의 얼굴이 떠올랐다. 무리한 요동 전쟁. 끝내 결심하셨다.\n\'반역자\'가 되시거나, \'왕\'이 되시거나.\n역사가... 지금, 크게 바뀌기 시작했다.', isThought: true }
    ],
    choices: [
      { id: 'j1-a', text: '"우리 가족들은 모두 안전한가! 당장 우리 군사들을 모으고, 집을 지켜라!"', label: 'A' },
      { id: 'j1-b', text: '"아버님의 가장 큰 적은 최영 장군이다. 그가 군대를 모으기 전에, 우리가 먼저 개경의 군대 지휘권을 빼앗아야 한다!"', label: 'B' },
      { id: 'j1-c', text: '"정도전 대감을 모셔와라. 모든 계획은 그분과 의논해야 한다. 그분의 지혜가 필요하다."', label: 'C' }
    ]
  },

  'joseon-act2': {
    id: 'joseon-act2',
    act: 2,
    faction: 'joseon',
    title: '2막: 수도의 대치 (1388년, 개경 성문 앞)',
    image: '/image/조선 편 2막.png',
    content: [
      { text: '아버님의 군대가 마침내 개경에 도착했다. 우리가 확보한 문으로 들어왔거나, 혹은 백성들의 도움으로 성문을 열었다.\n하지만 고려의 마지막 명장, 최영 장군은 남은 군사를 이끌고 궁궐을 굳게 지키고 있었다.' },
      { speaker: '전령', text: '"도련님! 최영 장군이 끝까지 싸우고 있습니다! 아버님께서는... 차마 왕이 계신 궁을 공격하라 하지 못하고 망설이고 계십니다!"' },
      { text: '\'아버님은 아직도 \'충신\'의 굴레를 벗지 못하셨다. 하지만 저 완고한 최영 장군이 항복할 리 없다. 여기서 시간을 끌면 모든 것이 수포로 돌아간다. 아버지가 못하신다면... 내가, 이 아들이 해야 한다.\'', isThought: true }
    ],
      choices: [
      { id: 'j2-a', text: '"최영 장군에게 마지막 담판을 보낸다. 항복하지 않으면, 궁궐을 공격할 수밖에 없다고 전하라!"', label: 'A' },
      { id: 'j2-b', text: '"궁궐이 문제입니다. 궁을 지키는 군사들을 향해 불화살을 쏘아 혼란을 만드십시오! 기선을 제압해야 합니다!"', label: 'B' },
      { id: 'j2-c', text: '"이미 개경 백성들의 마음은 아버님께 향해있습니다. 백성들을 궁으로 보내 \'최영은 물러나라!\' 외치게 합시다."', label: 'C' }
    ]
  },

  'joseon-act3': {
    id: 'joseon-act3',
    act: 3,
    faction: 'joseon',
    title: '3막: 새로운 왕 (1388년 ~ 1389년)',
    image: '/image/조선 편 3막.png',
    content: [
      { text: '결국 최영 장군은 먼 곳으로 쫓겨났고, 우리는 개경을 차지했다. 하지만 아버지는 고민에 빠졌다. 우왕을 왕에서 내쫓았지만, 그 아들인 어린 창왕을 새 왕으로 세웠기 때문이다.' },
      { speaker: '정도전', text: '(나를 따로 불러내어) "도련님, 이래서는 안 됩니다. 우왕과 창왕은 진짜 왕씨가 아닌, 신돈의 자식들입니다! \'가짜 왕\'을 내쫓고 \'진짜 왕씨\'를 세워야 큰 일의 명분이 생깁니다!"' },
      { text: '\'...가짜 왕이라. 정말 무서운 말이다. 하지만... 맞는 말이다. 저들을 그대로 두면, 언젠가 우리에게 복수할 것이다. 나쁜 뿌리를 완전히 뽑아내야 한다.\'', isThought: true }
    ],
    choices: [
      { id: 'j3-a', text: '"맞는 말씀입니다. \'가짜 왕\'을 폐하고, 왕씨의 후손 중 새로운 왕(공양왕)을 세워야 합니다!"', label: 'A' },
      { id: 'j3-b', text: '"너무 급진적입니다. 어린 창왕을 그대로 두고, 우리가 뒤에서 정치를 바로잡으면 됩니다."', label: 'B' },
      { id: 'j3-c', text: '"아버님의 뜻이 중요합니다. 저는 아버님의 결정을 따르겠습니다."', label: 'C' }
    ]
  },

  'joseon-act4': {
    id: 'joseon-act4',
    act: 4,
    faction: 'joseon',
    title: '4막: 차가운 개혁 (1390년 ~ 1391년)',
    image: '/image/고려 및 조선 편 4막.png',
    content: [
      { text: '새 왕이 섰지만, 오래된 힘 있는 귀족들은 여전히 엄청난 땅을 차지하고 재산을 독차지하고 있었다. 이들의 돈줄을 끊지 않으면, 새 나라는 빈 껍데기에 불과했다.' },
      { speaker: '정도전', text: '(회의에서 목소리를 높인다) "전하! 썩은 귀족들의 땅을 빼앗아, 새 관리들에게 나누어 주어야 나라가 바로 섭니다!"' },
      { speaker: '정몽주', text: '(차가운 목소리로 반박한다) "삼봉! 그대의 개혁은 핑계일 뿐, 고려의 근본을 무너뜨리려는 속셈이 아니오!"' },
      { text: '\'정도전 숙부의 말이 맞다. 저들의 땅을 빼앗아야 새 나라의 기초를 만들 수 있다. 하지만... 정몽주 선생의 반대가 너무나도 거세다. 아버님조차 저 충신의 눈치를 보고 계신다.\'', isThought: true }
    ],
    choices: [
      { id: 'j4-a', text: '"아버님! 정몽주 선생도 개혁의 필요성은 알고 있습니다. 제가 직접 선생을 만나 설득해 보겠습니다."', label: 'A' },
      { id: 'j4-b', text: '"지금 망설이면 안 됩니다. 반대하는 늙은 신하들을 모두 쫓아내고, 땅 개혁을 밀어붙여야 합니다!"', label: 'B' },
      { id: 'j4-c', text: '"정도전 숙부의 개혁은 너무 급진적입니다. 우선 아버님의 군사력부터 튼튼히 하는 것이 먼저입니다."', label: 'C' }
    ]
  },

  'joseon-act5-intro': {
    id: 'joseon-act5-intro',
    act: 5,
    faction: 'joseon',
    title: '5막: 긴급 귀환 (1392년, 봄)',
    image: '/image/조선 편 5막 미니게임_긴급귀환.png',
    content: [
      { text: '1392년 봄. 아버지가 사냥 중 말에서 떨어져 죽을 뻔했다는 소식이 찬바람처럼 닥쳤다. \'이성계가 죽었다\'는 소문까지 돌았다. 기회는 지금이라 생각했는지, 정몽주 선생이 칼을 뽑았다.' },
      { speaker: '하인', text: '(다급하게) "도련님! 정몽주 대감이 왕께 글을 올려, 정도전 대감과 우리 편을 모두 쫓아냈습니다! 이제 칼끝이 우리를 향할 것입니다!"' },
      { text: '\'…내가 망설이는 사이, 저 늙은 충신이 먼저 칼을 뽑았다. 아버지는 누워계시고, 동지들은 흩어졌다. 최악이다. 내가... 내가 이 판을 뒤집어야 한다.\'', isThought: true },
      { text: '(나는 즉시 말을 달려 아버님이 계신 황해도 벽란도로 향했다. 아버지를 구출해 개경으로 돌아가야 한다. 정몽주가 나를 체포하기 전에!)' }
    ],
    choices: [
      { id: 'j5-start', text: '미니게임 시작', label: '' }
    ]
  },

  'joseon-act6': {
    id: 'joseon-act6',
    act: 6,
    faction: 'joseon',
    title: '6막: 선죽교의 밤 (1392년, 그날 밤)',
    image: '/image/조선 편 6막 삽화.png',
    content: [
      { text: '개경의 민심은 다시 우리에게로 향했다. 나는... 정몽주 선생을 잔치에 초대했다. 그의 속마음을, 마지막으로 확인하기 위해서. 술잔이 오가지만, 공기는 얼음장처럼 차가웠다. 나는 \'하여가(何如歌)\'를 읊조렸다.' },
      { speaker: '이방원', text: '"이런들 어떠하며 저런들 어떠하리. 만수산 드렁칡이 얽혀진들 그 어떠하리.\n우리도 이같이 얽혀져 백 년까지 누리리라."' },
      { speaker: '정몽주', text: '(그는 잠시 나를 바라보더니, 차갑게 웃으며 \'단심가(丹心歌)\'로 답했다.)\n"이 몸이 죽고 죽어 일백 번 고쳐 죽어, 백골이 진토 되어 넋이라도 있고 없고,\n임 향한 일편단심이야 가실 줄이 있으랴."' },
      { text: '\'...더 이상 설득은 통하지 않는다. 그는... 고려와 함께 죽기로 결심했다.\'', isThought: true }
    ],
    choices: [
      { id: 'j6-a', text: '"...선생님의 굳은 마음은 알겠습니다. (부하에게 눈짓한다) 오늘 밤, 선죽교에서... (없앤다)"', label: 'A' },
      { id: 'j6-b', text: '(무릎을 꿇는다) "선생님! 제발 저희와 함께... 이 나라 백성들을 구해주세요!"', label: 'B' },
      { id: 'j6-c', text: '"...오늘은 그만 돌아가시지요. (칼을 잡은 손에 힘을 푼다) 내일 다시 설득할 방법을 찾겠습니다."', label: 'C' }
    ]
  }
};

// ========================================
// 고려 편 (정몽주) 시나리오
// ========================================

export const goryeoScenarios: Record<string, Scenario> = {
  'goryeo-act1': {
    id: 'goryeo-act1',
    act: 1,
    faction: 'goryeo',
    title: '1막: 나라가 위험하다! (1388년, 위화도)',
    image: '/image/고려 편 1막 삽화.png',
    content: [
      { text: '늦은 밤, 서재의 촛불이 위태롭게 흔들렸다. 붓을 들고 상소문을 다듬던 그때였다. 500년 사직을 어지럽히는 간신들을 탄핵하는 글이었다. 그때, 문이 거칠게 열리고 내 심복이 낯빛이 하얗게 질려 뛰어 들어왔다.' },
      { speaker: '부하', text: '(다급하게) "대감! 포은 대감! 큰일 났습니다! 이성계 장군이... 왕의 명령을 어기고 군대를 돌렸습니다! 지금 개경을 향하고 있습니다!"' },
      { text: '\'쿵.\' 붓이 손에서 떨어져 흰 종이 위로 검은 먹물이 번졌다.\n\'이럴 수가... 북쪽 적을 막아내던 그 충신이... 결국 장군이 선을 넘었구나.\'\n\'500년 나라가... 나의 고려가 위험에 빠졌다.\'', isThought: true }
    ],
      choices: [
      { id: 'g1-a', text: '"이것은 반역이다! 당장 최영 장군께 알려 군대를 준비하고, 개경에 있는 이성계의 가족들을 붙잡아야 한다!"', label: 'A' },
      { id: 'g1-b', text: '"장군의 진짜 마음은 이게 아닐 것이다. 내가 직접 가서 장군을 만나 이야기하겠다. 군대를 돌리라고 설득하겠다."', label: 'B' },
      { id: 'g1-c', text: '"왕의 안전이 먼저다! 먼저 왕을 모시고 안전한 곳으로 피해야 한다! 다음을 준비하자."', label: 'C' }
    ]
  },

  'goryeo-act2': {
    id: 'goryeo-act2',
    act: 2,
    faction: 'goryeo',
    title: '2막: 무너지는 성문 (1388년, 개경)',
    image: '/image/고려 편 2막.png',
    content: [
      { text: '이성계의 군대가 개경을 포위했다. 나는 급히 궁으로 달려갔다. 백발의 최영 장군이 이미 갑옷을 입고 군사들을 독려하고 있었다. 그의 붉어진 눈은 분노로 불타고 있었다.' },
      { speaker: '최영', text: '"포은 대감! 저 역적의 무리들과 끝까지 싸워 사직을 지킵시다! 내 비록 늙었으나, 저들을 벨 힘은 남아있소!"' },
      { text: '\'장군의 충심은 하늘을 찌르나... 밖의 군대는 고려의 최정예 군사들이다. 게다가 이미 백성들의 마음도 이성계에게 가버렸다. ...이것은 이길 수 없는 싸움이다.\'', isThought: true }
    ],
    choices: [
      { id: 'g2-a', text: '"장군님! 저도 함께 싸우겠습니다! 고려의 신하로서 어찌 역적에게 항복하겠습니까!"', label: 'A' },
      { id: 'g2-b', text: '"장군님, 잠시만 기다리십시오! 제가 직접 성문 밖으로 나가 이성계 장군을 만나 담판을 짓겠습니다! 피를 흘려선 안 됩니다!"', label: 'B' },
      { id: 'g2-c', text: '"폐하를 모시고 궁을 빠져나가야 합니다! 이곳에서 싸우는 것은 개죽음일 뿐입니다!"', label: 'C' }
    ]
  },

  'goryeo-act3': {
    id: 'goryeo-act3',
    act: 3,
    faction: 'goryeo',
    title: '3막: 가짜 왕과 진짜 왕 (1388년 ~ 1389년)',
    image: '/image/고려 편 3막.png',
    content: [
      { text: '결국 최영 장군은 쫓겨났고, 이성계는 조정을 차지했다. 그는 우왕을 왕에서 내쫓고, 그 아들인 어린 창왕을 새 왕으로 세웠다. 나는... 패배했다. 하지만 아직 포기할 수 없었다.' },
      { text: '\'이성계는 아직 명분을 중시한다. 그도 아직은 고려의 신하임을 자처하고 있다. 내가 이 낡은 고려를 안에서부터 고쳐낸다면... 저들의 반역을 막을 수 있다.\'', isThought: true },
      { text: '(얼마 뒤, 이성계와 정도전이 "우왕과 창왕은 왕씨가 아닌 신돈의 자식들이다"라는 소문을 퍼트리기 시작했다.)' },
      { speaker: '정도전', text: '(나를 찾아와) "대감. 가짜 왕을 모시고 어찌 나라를 바로잡겠습니까. \'진짜 왕씨\'를 찾아 새 왕으로 모셔야 합니다."' },
      { text: '\'...참으로 교활한 자들이다. 자신들이 세운 왕을 이제 와 가짜라니. 하지만... 저들의 말에 일리가 있는 것도 사실이다. 이 혼란을 어찌해야 하는가.\'', isThought: true }
    ],
    choices: [
      { id: 'g3-a', text: '"말도 안 되는 소리! 그대들이 세운 왕을 이제 와 부정하는가! 나는 어린 창왕을 지킬 것이다!"', label: 'A' },
      { id: 'g3-b', text: '"…그 말이 사실이라면, 마땅히 왕씨의 후손(공양왕)을 찾아 왕으로 모셔야 고려가 바로 설 것이다."', label: 'B' },
      { id: 'g3-c', text: '"이성계 장군을 직접 만나겠다. 그의 속마음을 확인해야겠다."', label: 'C' }
    ]
  },

  'goryeo-act4': {
    id: 'goryeo-act4',
    act: 4,
    faction: 'goryeo',
    title: '4막: 개혁의 딜레마 (1390년 ~ 1391년)',
    image: '/image/고려 및 조선 편 4막.png',
    content: [
      { text: '공양왕이 왕위에 올랐지만, 세상은 여전히 혼란했다. 이성계파는 썩은 귀족들의 땅을 빼앗아 나누어주자고 주장했다.' },
      { speaker: '정도전', text: '"대감! 낡은 밭을 갈지 않고 어찌 새 곡식을 얻겠습니까!"' },
      { text: '\'...그의 말은 옳다. 고려는 썩었다. 개혁은 필요하다.\'\n나도 오랫동안 그리 생각해왔다.\n\'하지만... 나는 안다. 저들의 목적은 \'개혁\'이 아니라, 고려의 마지막 숨통을 끊고 \'새 나라\'를 여는 것임을. 저들의 손에 고려의 땅 문서를 넘길 수는 없다.\'', isThought: true }
    ],
    choices: [
      { id: 'g4-a', text: '"결사반대하오! 이는 고려의 근본을 뒤엎겠다는 속셈이오!"', label: 'A' },
      { id: 'g4-b', text: '"좋소. 허나 그 개혁, 내가 주도하겠소. 고려의 법도 안에서, 고려를 살리는 방향으로 고치겠소."', label: 'B' },
      { id: 'g4-c', text: '"지금은 토지 개혁보다 흉년으로 굶주리는 백성들을 돕는 것이 먼저입니다!"', label: 'C' }
    ]
  },

  'goryeo-act5-intro': {
    id: 'goryeo-act5-intro',
    act: 5,
    faction: 'goryeo',
    title: '5막: 하늘이 준 기회 (1392년, 봄)',
    image: '/image/고려 편 5막 미니게임_3일의 숙청.png',
    content: [
      { text: '1392년 봄. 이성계의 세력이 하늘을 찌르고, 고려의 운명은 촛불처럼 위태롭던 그때, 귀중한 소식이 들려왔다.' },
      { speaker: '심복', text: '(흥분한 목소리로) "대감! 이성계가 사냥 중 말에서 떨어져 아주 위독하다고 합니다! 일어나지도 못한다 합니다!"' },
      { text: '\'하늘이... 아직 500년 나라를 버리지 않으셨구나!\'\n심장이 거세게 뛰었다.\n\'지금이다! 이성계가 없는 지금, 저들의 \'머리(정도전)\'와 \'힘(이방원)\'을 꺾어버리면... 고려를 지킬 수 있다! 이방원이 아버지를 데리고 개경에 돌아오기 전, 단 3일 안에 모든 것을 끝내야 한다!\'', isThought: true }
    ],
    choices: [
      { id: 'g5-start', text: '미니게임 시작', label: '' }
    ]
  },

  'goryeo-act6': {
    id: 'goryeo-act6',
    act: 6,
    faction: 'goryeo',
    title: '6막: 엇갈린 마음 (1392년, 그날 밤)',
    image: '/image/고려 편 6막 삽화.png',
    content: [
      { text: '결국 이방원이 아픈 아버지를 업고 개경으로 돌아왔다. 그는 나를 잔치에 초대했다. 겉으로는 화해를 청하는 자리였지만, 나는 알 수 있었다. 이것이 마지막 담판임을.' },
      { speaker: '이방원', text: '(술잔을 건네며, \'하여가(何如歌)\'를 읊는다)\n"이런들 어떠하며 저런들 어떠하리..."' },
      { text: '\'…어린놈이 감히 나를 회유하는구나. 썩은 고려를 버리고 자기들 손을 잡으라. ...하지만 내 대답은 단 하나뿐이다. 이 나라를 배신할 수는 없다.\'', isThought: true }
    ],
      choices: [
      { id: 'g6-a', text: '(결연한 눈빛으로 답한다) "이 몸이 죽고 죽어 일백 번 고쳐 죽어..." (단심가)', label: 'A' },
      { id: 'g6-b', text: '(술잔을 내려놓는다) "…나는 취했소. 도련님의 뜻은... 잘 알겠소." (즉답 회피)', label: 'B' },
      { id: 'g6-c', text: '(이방원의 눈을 똑바로 본다) "나는 고려의 신하요. 그대들의 반역에 가담할 수 없소." (직설적 거절)', label: 'C' }
    ]
  }
};

// ========================================
// 시나리오 결과 (선택 후 표시되는 내용)
// ========================================

export const scenarioResults: Record<string, ScenarioResult> = {
  // 조선 편 1막 결과들
  'j1-a': {
    id: 'j1-a',
    content: [
      { text: '"한 명도 다쳐선 안 된다!"\n나의 명령에 집안은 일사불란하게 움직였다. 어린 동생들은 아내 민씨가 챙겼고, 나는 형님들과 함께 사병들을 무장시켰다.' },
      { text: '\'덕분에 가족들은 무사했지만, 밖의 상황을 알 수 없으니 답답했다. 그때, 척후병이 급하게 보고를 올렸다.\'', isThought: true },
      { speaker: '척후병', text: '"도련님! 최영 장군이 군사를 모아 4대문을 모두 닫고 잠갔습니다! 개경은 완전히 막혔습니다!"' },
      { text: '\'한발 늦었군. 이대로 집에 숨어만 있을 것인가, 아니면...\'', isThought: true }
    ],
    nextScenarioId: 'joseon-act2'
  },
  'j1-b': {
    id: 'j1-b',
    content: [
      { text: '"속도가 생명이다!"\n나는 즉시 무장한 사병 수십 명을 이끌고 밤의 개경으로 뛰쳐나갔다. 우리의 목표는 군기시(무기고)였다!' },
      { text: '\'밤안개를 뚫고 무기고에 도착했을 때, 이미 최영 장군이 보낸 군사들과 격돌했다. 몇 번의 칼이 오가고, 우리는 피를 흘린 끝에 무기고를 점령했다.\'', isThought: true },
      { speaker: '부하', text: '"도련님! 무기고는 점령했으나, 최영의 본대는 궁궐을 방어하고 있습니다!"' },
      { text: '\'우리가 선수를 쳤다. 하지만 아버님의 본대가 오기 전에 우리가 먼저 지칠 수도 있다.\'', isThought: true }
    ],
    nextScenarioId: 'joseon-act2'
  },
  'j1-c': {
    id: 'j1-c',
    content: [
      { text: '"지혜가 필요하다!"\n하인을 보낸 지 얼마 되지 않아, 정도전 숙부가 굳은 얼굴로 내 방에 들어섰다. 그의 눈은 촛불보다 더 뜨겁게 불타고 있었다.' },
      { speaker: '정도전', text: '"하늘의 뜻입니다, 도련님! 지금 백성들의 마음은 최영에게서 떠났습니다. 명분이 중요합니다!"' },
      { text: '\'그의 말은 언제나 사람의 마음을 움직이는 힘이 있다. 명분이라... \'', isThought: true }
    ],
    nextScenarioId: 'joseon-act2'
  },

  // 조선 편 2막 결과들
  'j2-a': {
    id: 'j2-a',
    content: [
      { text: '우리의 마지막 제안에 최영 장군은 "반역자와는 대화하지 않는다!"라며 사신을 내쫓았다. 협상은 실패했다. 하지만 우리는 공격할 명분을 얻었다.' },
      { text: '"전군, 공격하라!"\n결국 개경 시내에서 치열한 전투가 시작되었다.' }
    ],
    nextScreen: 'battle'
  },
  'j2-b': {
    id: 'j2-b',
    content: [
      { text: '"전군, 불화살을 발사하라!"\n나의 명령에 수백 개의 불화살이 밤하늘을 가르며 궁궐을 향해 날아갔다.\n"반역자 놈들!" 최영의 군대가 반격해오기 시작했다. 개경 시내가 불바다로 변했다.' }
    ],
    nextScreen: 'battle'
  },
  'j2-c': {
    id: 'j2-c',
    content: [
      { text: '우리는 백성들을 궁 앞으로 보냈다. 백성들이 "전쟁광 최영은 물러나라!" 외치자, 궁을 지키던 군사들의 사기가 급격히 떨어졌다. 결국 최영 장군은 스스로 궁을 나와 체포되었다.' }
    ],
    nextScenarioId: 'joseon-act3'
  },

  // 조선 편 3막 결과들
  'j3-a': {
    id: 'j3-a',
    content: [
      { text: '우리는 \'가짜 왕을 내쫓고 진짜 왕을 세운다\'는 명분으로 창왕을 몰아내고, 힘없는 공양왕을 왕위에 앉혔다. 고려 왕의 권위는 완전히 땅에 떨어졌고, 모든 힘은 아버님과 우리에게 넘어왔다.' }
    ],
    nextScenarioId: 'joseon-act4'
  },
  'j3-b': {
    id: 'j3-b',
    content: [
      { text: '우리는 어린 창왕을 그대로 두었다. 하지만 이는 실수였다. 창왕의 뒤에 숨은 고려의 늙은 신하들이 조용히 힘을 모으기 시작했다. 그들의 중심에는... 정몽주 선생이 있었다.' }
    ],
    nextScenarioId: 'joseon-act4'
  },
  'j3-c': {
    id: 'j3-c',
    content: [
      { text: '아버님은 망설이셨지만, 결국 정도전의 뜻을 따르셨다. 창왕은 폐위되고 공양왕이 왕위에 올랐다. 나는 한발 물러서 있었지만, 이 과정에서 정몽주 선생의 눈빛이 싸늘하게 식는 것을 보았다.' }
    ],
    nextScenarioId: 'joseon-act4'
  },

  // 조선 편 4막 결과들
  'j4-a': {
    id: 'j4-a',
    content: [
      { text: '나는 정몽주 선생을 찾아가 며칠 동안 설득했다.' },
      { speaker: '이방원', text: '"선생님, 백성을 위한 길입니다."' },
      { speaker: '정몽주', text: '"백성을 위한다면 고려의 법 안에서 하시오. 나라의 근본을 흔들지는 마시오."' },
      { text: '\'그는 나의 진심에 감동한 듯했으나, 끝내 "고려의 신하로서 할 수 없는 일이 있소."라며 고개를 저었다. 우리의 개혁은 늦춰졌다.\'', isThought: true }
    ],
    nextScenarioId: 'joseon-act5-intro'
  },
  'j4-b': {
    id: 'j4-b',
    content: [
      { text: '아버님은 나의 강한 주장에 마침내 결단을 내렸다. 정몽주를 따르던 늙은 신하들이 쫓겨나고, 개경 한복판에서 낡은 땅 문서들이 불태워졌다.' },
      { text: '\'우리는 새 나라의 기초를 닦았지만, 정몽주라는 무서운 적을 만들었다. 그는 불타는 문서를 보며 나를 돌아보았다. 그 눈빛을 잊을 수 없다.\'', isThought: true }
    ],
    nextScenarioId: 'joseon-act5-intro'
  },
  'j4-c': {
    id: 'j4-c',
    content: [
      { text: '우리는 개혁을 잠시 멈추고 군사력을 키우는 데 집중했다. 하지만 그사이, 정몽주 선생이 조용히 우리를 반대하는 세력들을 모으고 있었다. 폭풍 전의 고요함이었다.' }
    ],
    nextScenarioId: 'joseon-act5-intro'
  },

  // 조선 편 6막 결과들
  'j6-a': {
    id: 'j6-a',
    content: [
      { text: '그날 밤, 선죽교를 건너던 정몽주 선생이 쓰러졌다. 나의 부하들이 휘두른 철퇴에 맞은 것이다. 고려의 마지막 충신이... 사라졌다.' }
    ],
    endingType: 'joseon-success'
  },
  'j6-b': {
    id: 'j6-b',
    content: [
      { text: '나는 무릎을 꿇고 애원했다. 하지만 정몽주는 고개를 저었다. 다음 날, 그는 왕을 움직여 나와 아버님을 역적으로 몰았다. 우리는... 체포되었다.' }
    ],
    endingType: 'joseon-failure'
  },
  'j6-c': {
    id: 'j6-c',
    content: [
      { text: '나는 그를 보내주었다. 하지만 그것은 치명적인 실수였다. 다음 날 새벽, 정몽주가 먼저 움직였다. 왕의 조서가 내려왔고, 우리는 역적이 되었다.' }
    ],
    endingType: 'joseon-failure'
  },

  // 고려 편 1막 결과들
  'g1-a': {
    id: 'g1-a',
    content: [
      { text: '나의 전갈을 받은 최영 장군이 즉시 군사를 모으고, 이성계의 가족들을 잡아들였다. 이성계는 분노했지만, 우리는 도읍을 지킬 준비를 마칠 수 있었다.' },
      { text: '\'이성계의 아들 이방원이 가장 위험하다 들었는데, 그는 이미 도망친 뒤였다. ...불길한 예감이 들었다.\'', isThought: true }
    ],
    nextScenarioId: 'goryeo-act2'
  },
  'g1-b': {
    id: 'g1-b',
    content: [
      { text: '내가 이성계에게 사신으로 간 사이, 그는 시간을 벌었다. 그는 내 설득을 듣는 척하며, 이미 개경 근처까지 군대를 이동시켰다.' },
      { text: '\'내가 속았다. 그가 충신이라 믿었던 내가... 어리석었다.\'', isThought: true }
    ],
    nextScenarioId: 'goryeo-act2'
  },
  'g1-c': {
    id: 'g1-c',
    content: [
      { text: '우리가 왕을 모시고 피난길에 오르자, 개경은 혼란에 빠졌다. 백성들은 "왕이 우리를 버렸다!"며 울부짖었고, 이성계는 저항 없이 성문을 열었다.' },
      { text: '\'백성을 버린 왕조가... 어찌 백성의 마음을 다시 얻을 수 있단 말인가...\'', isThought: true }
    ],
    nextScenarioId: 'goryeo-act3'
  },

  // 고려 편 2막 결과들
  'g2-a': {
    id: 'g2-a',
    content: [
      { text: '"전군, 반격하라!"\n나와 최영 장군은 남은 군사들을 이끌고 성문을 열고 뛰쳐나갔다. 이성계의 군대는 잠시 당황했지만, 이내 엄청난 수로 우리를 덮쳐왔다.' }
    ],
    nextScreen: 'battle'
  },
  'g2-b': {
    id: 'g2-b',
    content: [
      { text: '내가 흰 깃발을 들고 성문 밖으로 나갔다. 이성계는 예를 갖추었으나, "이미 늦었소. 최영 장군이 물러나야 하오."라며 뜻을 굽히지 않았다. 협상은 실패했고, 우리 군의 사기만 꺾였다.' }
    ],
    nextScenarioId: 'goryeo-act3'
  },
  'g2-c': {
    id: 'g2-c',
    content: [
      { text: '왕이 궁을 버리고 도망쳤다는 소식에, 남은 군사들은 무기를 버리고 흩어졌다. 이성계는 피 한 방울 흘리지 않고 개경을 차지했다.' }
    ],
    nextScenarioId: 'goryeo-act3'
  },

  // 고려 편 3막 결과들
  'g3-a': {
    id: 'g3-a',
    content: [
      { text: '나는 창왕을 지키려 했으나, 이성계의 군사력 앞에 무릎 꿇었다. 창왕은 쫓겨났고, 나는 \'가짜 왕을 지킨 자\'로 몰려 잠시 권력에서 밀려나고 말았다.' }
    ],
    nextScenarioId: 'goryeo-act4'
  },
  'g3-b': {
    id: 'g3-b',
    content: [
      { text: '나 또한 \'가짜 왕을 내쫓고 진짜 왕을 세우자\'는 것에 동의했다. 우리는 함께 공양왕을 새 왕으로 세웠다. 비록 이성계파와 손을 잡았지만, 고려를 개혁할 수 있는 힘을 얻었다고 생각했다.' }
    ],
    nextScenarioId: 'goryeo-act4'
  },
  'g3-c': {
    id: 'g3-c',
    content: [
      { text: '이성계는 내게 "모든 것은 포은 대감의 뜻에 따르겠소."라며 나를 안심시켰다. 하지만 그의 뒤에서 정도전과 이방원이 모든 일을 꾸미고 있음을, 나는 애써 외면하고 있었다.' }
    ],
    nextScenarioId: 'goryeo-act4'
  },

  // 고려 편 4막 결과들
  'g4-a': {
    id: 'g4-a',
    content: [
      { text: '나의 격렬한 반대에 부딪힌 이성계파는 땅 개혁을 미룰 수밖에 없었다. 나는 고려를 지킬 시간을 벌었지만, 그들은 나를 \'없애야 할 적\'으로 확실히 생각하기 시작했다.' }
    ],
    nextScenarioId: 'goryeo-act5-intro'
  },
  'g4-b': {
    id: 'g4-b',
    content: [
      { text: '나는 정도전과 치열한 토론을 벌이며 개혁을 이끌려고 애썼다. 그 과정에서 일부 성과를 거두었지만, 결국 그들의 힘에 밀려 개혁의 방향은 그들이 원하는 대로 흘러가고 말았다.' }
    ],
    nextScenarioId: 'goryeo-act5-intro'
  },
  'g4-c': {
    id: 'g4-c',
    content: [
      { text: '나는 백성들을 돕는 정책을 펼쳐 큰 지지를 얻었다. 나의 인기가 높아지는 것을 본 이성계파는 나를 함부로 대하지 못했다. 하지만 정작 중요한 땅 개혁의 주도권은 그들에게 넘어가고 말았다.' }
    ],
    nextScenarioId: 'goryeo-act5-intro'
  },

  // 고려 편 6막 결과들
  'g6-a': {
    id: 'g6-a',
    content: [
      { text: '나는 결연하게 단심가를 읊었다. 이방원의 얼굴이 차갑게 굳었다. 그날 밤, 선죽교를 건너던 나는... 누군가의 철퇴에 쓰러졌다.' }
    ],
    endingType: 'goryeo-failure'
  },
  'g6-b': {
    id: 'g6-b',
    content: [
      { text: '나는 즉답을 피했다. 하지만 그것은 나의 패배를 인정하는 것과 다름없었다. 이방원은 나를 더 이상 위협으로 보지 않았고, 조선 건국의 길은 열렸다.' }
    ],
    endingType: 'goryeo-failure'
  },
  'g6-c': {
    id: 'g6-c',
    content: [
      { text: '나는 단호하게 거절했다. 이방원은 아무 말 없이 나를 보냈다. 하지만 그날 밤, 선죽교에서... 나는 쓰러졌다.' }
    ],
    endingType: 'goryeo-failure'
  }
};

// ========================================
// 전투 데이터 (3막 미니게임)
// ========================================

export const battleData: Record<string, BattleData> = {
  'joseon-battle': {
    id: 'joseon-battle',
    faction: 'joseon',
    playerName: '이방원의 군대',
    playerMaxHp: 100,
    playerAttack: 10,
    enemyName: '최영의 수비군',
    enemyMaxHp: 150,
    enemyAttack: 12,
    actions: [
      {
        id: 'charge',
        name: '돌격 명령',
        description: '강력한 공격으로 적에게 큰 피해를 줍니다',
        damageMultiplier: 2.0
      },
      {
        id: 'fire-arrow',
        name: '불화살',
        description: '불화살로 적을 공격합니다',
        damageMultiplier: 1.5
      },
      {
        id: 'defend',
        name: '방어 태세',
        description: '이번 턴의 피해를 50% 감소시킵니다',
        damageMultiplier: 0,
        defenseMultiplier: 0.5
      }
    ],
    enemyActions: [
      { name: '결사 항전', damage: 12, probability: 0.6 },
      { name: '검술 공격', damage: 10, probability: 0.3 },
      { name: '방패 막기', damage: 6, probability: 0.1 }
    ],
    onVictory: 'joseon-act3',
    onDefeat: 'battle-defeat',
    quizzes: [
      {
        question: '\'고려\'는 \'이 나라\'를 계승하였음을 분명히 하기 위해 나라 이름을 \'고려\'로 정하였다. \'이 나라\'의 이름은 무엇인가?',
        choices: [
          { id: '1', text: '고조선', isCorrect: false },
          { id: '2', text: '고구려', isCorrect: true },
          { id: '3', text: '대한민국', isCorrect: false },
          { id: '4', text: '미국', isCorrect: false }
        ]
      },
      {
        question: '\'고려\'를 세운 사람은 다음 중 누구인가?',
      choices: [
          { id: '1', text: '조건', isCorrect: false },
          { id: '2', text: '조건형', isCorrect: false },
          { id: '3', text: '단군왕검', isCorrect: false },
          { id: '4', text: '왕건', isCorrect: true }
        ]
      }
    ],
    onQuizSuccess: 'joseon-act3'
  },
  'goryeo-battle': {
    id: 'goryeo-battle',
    faction: 'goryeo',
    playerName: '정몽주/최영의 군대',
    playerMaxHp: 100,
    playerAttack: 10,
    enemyName: '이성계의 진압군',
    enemyMaxHp: 160,
    enemyAttack: 11,
    actions: [
      {
        id: 'choi-charge',
        name: '최영 장군 돌격',
        description: '최영 장군의 필사적인 돌격',
        damageMultiplier: 2.5
      },
      {
        id: 'gate-defense',
        name: '성문 수비',
        description: '이번 턴의 피해를 70% 감소시킵니다',
        damageMultiplier: 0,
        defenseMultiplier: 0.3
      },
      {
        id: 'encourage',
        name: '군사 독려',
        description: '군사를 독려하여 공격과 동시에 체력을 회복합니다',
        damageMultiplier: 1.0,
        heal: 10
      }
    ],
    enemyActions: [
      { name: '정규군 공격', damage: 11, probability: 0.5 },
      { name: '기마병 돌격', damage: 16, probability: 0.35 },
      { name: '궁수 사격', damage: 9, probability: 0.15 }
    ],
    onVictory: 'goryeo-act3',
    onDefeat: 'battle-defeat',
    quizzes: [
      {
        question: '\'고려\'는 \'이 나라\'를 계승하였음을 분명히 하기 위해 나라 이름을 \'고려\'로 정하였다. \'이 나라\'의 이름은 무엇인가?',
        choices: [
          { id: '1', text: '고조선', isCorrect: false },
          { id: '2', text: '고구려', isCorrect: true },
          { id: '3', text: '대한민국', isCorrect: false },
          { id: '4', text: '미국', isCorrect: false }
        ]
      },
      {
        question: '\'고려\'를 세운 사람은 다음 중 누구인가?',
        choices: [
          { id: '1', text: '조건', isCorrect: false },
          { id: '2', text: '조건형', isCorrect: false },
          { id: '3', text: '단군왕검', isCorrect: false },
          { id: '4', text: '왕건', isCorrect: true }
        ]
      }
    ],
    onQuizSuccess: 'goryeo-act3'
  }
};

// ========================================
// 미니게임 데이터 (5막)
// ========================================

export const miniGameData: Record<string, MiniGameData> = {
  'joseon-minigame': {
    id: 'joseon-minigame',
    faction: 'joseon',
    title: '긴급 귀환',
    description: '아버지와 함께 빠르고 당당하게 개경으로 돌아가라!',
    stages: [
      {
        stageNumber: 1,
        thought: '드디어 아버님을 찾았다. 하지만 정신이 흐릿하시다. 시간이 없다!\n\n\'아버님을 간신히 말에 태웠다. 빨리 가야 한다. 어떤 길로 가야 할까?\'',
        choices: [
          { id: 'j5-s1-a', text: '큰길로 빠르게 달린다! ⚡ (빠르게 갈 수 있다)', label: 'A' },
          { id: 'j5-s1-b', text: '산길로 숨어서 간다 (느리고 아버지가 더 힘들어하신다)', label: 'B' }
        ]
      },
      {
        stageNumber: 2,
        thought: '큰길을 달리다가 정몽주의 군사들을 만났다!\n\n\'어떻게 해야 하는가?\'',
        choices: [
          { id: 'j5-s2-a', text: '당당하게 앞으로 나아간다! 💪 "우리는 이성계 장군의 가족이다!"', label: 'A' },
          { id: 'j5-s2-b', text: '여기서 숨어서 기다린다 (시간이 너무 오래 걸린다)', label: 'B' }
        ]
      },
      {
        stageNumber: 3,
        thought: '밤낮없이 달려 겨우 개경 성문에 도착했다. 하지만 성문이 굳게 닫혀있다!\n\n\'어떻게 해야 하는가?\'',
      choices: [
          { id: 'j5-s3-a', text: '크게 외친다! 📢 "문을 열라! 이성계 장군이시다!" (당당하게 밝힌다)', label: 'A' },
          { id: 'j5-s3-b', text: '조용히 말한다 "죄송하지만, 급한 환자가 있습니다..." (숨긴다)', label: 'B' }
        ]
      }
    ],
    successPath: ['j5-s1-a', 'j5-s2-a', 'j5-s3-a'],
    onSuccess: 'joseon-act6',
    onFailure: 'joseon-failure'
  },
  'goryeo-minigame': {
    id: 'goryeo-minigame',
    faction: 'goryeo',
    title: '3일의 작전',
    description: '3일 안에 이성계 편의 중요한 사람들을 막아 고려를 지켜라!',
    stages: [
      {
        stageNumber: 1,
        thought: '첫째 날\n\n\'가장 먼저 누구를 막아야 할까? 계획을 세우는 사람? 돈을 관리하는 사람?\'',
        choices: [
          { id: 'g5-s1-a', text: '🎯 정도전과 남은을 막는다! (이들이 모든 계획을 세우는 사람들이다)', label: 'A' },
          { id: 'g5-s1-b', text: '조준과 윤소종을 막는다 (땅 개혁을 실제로 하는 사람들)', label: 'B' }
        ]
      },
      {
        stageNumber: 2,
        thought: '둘째 날\n\n\'이제 저들의 군사력을 막을 차례다. 누구를 막아야 할까?\'',
        choices: [
          { id: 'g5-s2-a', text: '💪 이방원과 이방과를 붙잡는다! (이들이 군대를 가지고 있다)', label: 'A' },
          { id: 'g5-s2-b', text: '궁궐 수비대를 먼저 장악한다 (개경을 닫아버린다)', label: 'B' }
        ]
      },
      {
        stageNumber: 3,
        thought: '셋째 날\n\n"대감! 이방원이 아버지를 업고 성문 앞에 도착했습니다!"\n\n\'...결국 그 호랑이가 돌아왔구나. 어떻게 해야 할까?\'',
        choices: [
          { id: 'g5-s3-a', text: '🚪 성문을 닫고, 군사들을 보내 막는다! (강하게 막는다)', label: 'A' },
          { id: 'g5-s3-b', text: '성문을 열어주는 척하고, 몰래 이방원만 잡는다 (위험하다)', label: 'B' },
          { id: 'g5-s3-c', text: '병문안을 핑계로 만나서 시간을 끈다 (효과가 없다)', label: 'C' }
        ]
      }
    ],
    successPath: ['g5-s1-a', 'g5-s2-a', 'g5-s3-a'],
    onSuccess: 'goryeo-success',
    onFailure: 'goryeo-act6'
  }
};

// 헬퍼 함수
export const getScenario = (id: string): Scenario | undefined => {
  return joseonScenarios[id] || goryeoScenarios[id];
};

export const getScenarioResult = (choiceId: string): ScenarioResult | undefined => {
  return scenarioResults[choiceId];
};

