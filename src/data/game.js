export const games = [
  {
    id: 1,
    title: 'Heros Arena',
    description: 'Jump into the vast world commanding more than 100 individual heroes, each with their own unique skills and growth potential.',
    image: 'https://play-lh.googleusercontent.com/suEJmGLxvFtc-BpPGUXnkqOB4XFk9Ek97vTGw_ElKCwqQAJnoRHaAzg67mOVP0fpJROORckmJSL-xyM5q9f6cw=s96-rw', // 실제 플레이 스토어 이미지 URL (플레이스홀더)
    playStoreLink: 'https://play.google.com/store/apps/details?id=com.gwstudio.demonnight',
    category: 'Recommend, New',
    platform: ['Android'],
    genre: 'Action RPG',
    video: 'youtube-link' // 유튜브 링크 (옵션)
  },
  {
    id: 2,
    title: 'Survival in hell',
    description: 'Coming Soon.',
    image: '#',
    playStoreLink: '#',
    category: 'Recommend',
    platform: ['Android'],
    genre: 'Casual, Action'
  },
//   {
//     id: 3,
//     title: '카트라이더 러쉬플러스',
//     description: '스릴 넘치는 카트 레이싱. 다양한 트랙과 아이템으로 친구들과 경쟁하세요.',
//     image: 'https://play-lh.googleusercontent.com/kart-rider-image',
//     playStoreLink: 'https://play.google.com/store/apps/details?id=com.nexon.kart',
//     category: '추천',
//     platform: ['Android', 'iOS'],
//     genre: '캐주얼'
//   },
//   {
//     id: 4,
//     title: '마비노기 모바일',
//     description: '판타지 MMORPG. 에린의 이야기를 펼치며 팔라딘 변신 등 액션 즐기기.',
//     image: 'https://play-lh.googleusercontent.com/mabinogi-mobile-image',
//     playStoreLink: 'https://play.google.com/store/apps/details?id=com.nexon.devcat.mm',
//     category: '추천',
//     platform: ['Android'],
//     genre: 'MMORPG'
//   },
//   {
//     id: 5,
//     title: '메이플스토리M',
//     description: '판타지 MMORPG. 6차 직업 시대 업데이트로 무한 성장과 보스 레이드 도전.',
//     image: 'https://play-lh.googleusercontent.com/maple-m-image',
//     playStoreLink: 'https://play.google.com/store/apps/details?id=com.nexon.maplem.global',
//     category: '추천',
//     platform: ['Android'],
//     genre: 'RPG'
//   },
//   {
//     id: 6,
//     title: '서든어택',
//     description: 'FPS 액션. 실시간 PVP와 클랜 전쟁으로 긴장감 넘치는 전투.',
//     image: 'https://play-lh.googleusercontent.com/sudden-attack-image',
//     playStoreLink: 'https://play.google.com/store/apps/details?id=com.gamehi.suddenAttack', // 라디오 앱이지만, 모바일 버전으로 가정
//     category: '추천',
//     platform: ['Android'],
//     genre: 'FPS'
//   },
//   {
//     id: 7,
//     title: '블루 아카이브',
//     description: '애니메이션 RPG. 학교 소녀들의 모험과 가챠 시스템으로 전략 전투.',
//     image: 'https://play-lh.googleusercontent.com/blue-archive-image',
//     playStoreLink: 'https://play.google.com/store/apps/details?id=com.nexon.bluearchive',
//     category: '추천',
//     platform: ['Android', 'iOS'],
//     genre: 'RPG'
//   },
//   {
//     id: 8,
//     title: '엘소드',
//     description: '2D 액션 RPG. 궁수, 마법사, 전사 캐릭터로 빠른 콤보 액션.',
//     image: 'https://play-lh.googleusercontent.com/elsword-image',
//     playStoreLink: 'https://play.google.com/store/apps/details?id=com.kogg.elsword', // Uptodown 기반, 실제 플레이 스토어 검색 추천
//     category: '추천',
//     platform: ['Android'],
//     genre: '액션 RPG'
//   },
//   {
//     id: 9,
//     title: '바람의나라',
//     description: '클래식 MMORPG. 닌자 액션과 전투로 전설적인 모험.',
//     image: 'https://play-lh.googleusercontent.com/wind-legend-image',
//     playStoreLink: 'https://play.google.com/store/apps/details?id=com.ninjakingdom.gp',
//     category: '추천',
//     platform: ['Android'],
//     genre: 'RPG'
//   },
//   {
//     id: 10,
//     title: '던전앤파이터',
//     description: '벨트 스크롤 액션. 다양한 캐릭터와 콤보로 던전 공략.',
//     image: 'https://play-lh.googleusercontent.com/dnf-mobile-image',
//     playStoreLink: 'https://play.google.com/store/apps/details?id=com.nexon.mdnf',
//     category: '전체',
//     platform: ['Android'],
//     genre: '액션 RPG'
//   },
//   {
//     id: 11,
//     title: '메이플스토리',
//     description: '클래식 판타지 MMORPG. 무한 콘텐츠와 커스터마이징.',
//     image: 'https://play-lh.googleusercontent.com/maple-story-image',
//     playStoreLink: 'https://play.google.com/store/apps/details?id=com.nexon.maplem.global', // M 버전과 공유
//     category: '신규',
//     platform: ['Android'],
//     genre: 'RPG'
//   },
//   {
//     id: 12,
//     title: '퍼스트 디센던트',
//     description: '루트슈터 액션. 연구와 아이템 업그레이드로 생존 전투.',
//     image: 'https://play-lh.googleusercontent.com/first-descendant-image',
//     playStoreLink: 'https://play.google.com/store/apps/details?id=com.nexon.tfdc',
//     category: '신규',
//     platform: ['Android'],
//     genre: '루트슈터'
//   }
  // 더 추가 가능
];