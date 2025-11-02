import { Ending } from '@/types/game';

export const endings: Record<string, Ending> = {
  'joseon-success': {
    type: 'joseon-success',
    title: '조선 건국 성공',
    subtitle: '새로운 왕조의 탄생',
    description: '정몽주가 제거되자, 더 이상 아버지를 막을 사람은 없었습니다. 1392년, 아버지가 용상에 오르고, 새 나라 \'조선\'이 열립니다. 하지만 당신의 시선은 어린 동생 \'이방석\'을 향합니다. 싸움은... 아직 끝나지 않았습니다.',
    image: '/image/조선 성공 엔딩.png'
  },
  'joseon-failure': {
    type: 'joseon-failure',
    title: '조선 건국 실패',
    subtitle: '망설임의 대가',
    description: '당신의 망설임은 정몽주에게 시간을 주었습니다. 다음 날, 정몽주는 왕을 움직여 아버님과 당신을 \'역모죄\'로 체포합니다. 모든 것이... 끝났습니다.',
    image: '/image/조선 실패 엔딩.png'
  },
  'goryeo-success': {
    type: 'goryeo-success',
    title: '고려 수호 성공',
    subtitle: '500년 사직의 수호',
    description: '당신의 결단으로 이성계파의 핵심 인물들이 모두 체포되었습니다! 이성계는 유배를 떠나고, 당신은 공양왕을 도와 500년 고려 사직을 훌륭하게 개혁해냅니다. 역사는... 바뀌었습니다.',
    image: '/image/고려 성공 엔딩.png'
  },
  'goryeo-failure': {
    type: 'goryeo-failure',
    title: '고려 수호 실패',
    subtitle: '선죽교의 밤',
    description: '당신은 이방원을 너무 쉽게 생각했습니다. 그가 보낸 자객의 철퇴에 쓰러지며, 당신의 \'단심가\'는 미처 끝을 맺지 못합니다. 고려의 마지막 충신이 사라졌습니다.',
    image: '/image/고려 실패 엔딩.png'
  },
  'battle-defeat': {
    type: 'battle-defeat',
    title: '전투 패배',
    subtitle: '개경 시가전의 패배',
    description: '치열한 전투 끝에 당신의 군대는 패배했습니다. 역사의 흐름을 바꾸려던 시도는 실패로 돌아갔습니다.',
    image: '/image/개경 전투 패배.png'
  }
};

