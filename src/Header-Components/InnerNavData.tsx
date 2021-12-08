interface IinnerNavItems {
  [index: string]: Iitem;
}

interface Iitem {
  [index: string]: string | Idropdown[] | Ibottom[];
  title: string;
  dropdown: Idropdown[];
  bottom: Ibottom[];
}
export interface Idropdown {
  title: string;
  subTitle: IsubTitle[] | [];
}
export interface IsubTitle {
  value: string;
  path: string;
}
interface Ibottom {
  title: string;
  subTitle: string;
}
export const innerNavItems: IinnerNavItems = {
  coffee: {
    title: "COFFEE",
    dropdown: [
      {
        title: "커피",
        subTitle: [
          {
            value: "스타벅스 원두",
            path: "",
          },
          {
            value: "스타벅스 비아",
            path: "",
          },
          {
            value: "스타벅스앳홈 by 캡슐",
            path: "",
          },
        ],
      },
      {
        title: "나와 어울리는 커피",
        subTitle: [],
      },

      {
        title: "스타벅스 리저브",
        subTitle: [
          {
            value: "RESERVE MAGAZINE",
            path: "",
          },
        ],
      },
      {
        title: "에스프레소 음료",
        subTitle: [
          {
            value: "도피오",
            path: "",
          },
          {
            value: "에스프레소 마키아또",
            path: "",
          },
          {
            value: "아메리카노",
            path: "",
          },
          {
            value: "마키아또",
            path: "",
          },
          {
            value: "카푸치노",
            path: "",
          },
          {
            value: "라떼",
            path: "",
          },
          {
            value: "모카",
            path: "",
          },
        ],
      },
      {
        title: "최상의 커피를 즐기는 법",
        subTitle: [
          {
            value: "커피 프레스",
            path: "",
          },
          {
            value: "푸어 오버",
            path: "",
          },
          {
            value: "아이스 푸어 오버",
            path: "",
          },
          {
            value: "커피 메이커",
            path: "",
          },
          {
            value: "리저브를 매장에서 다양하게 즐기는 법",
            path: "",
          },
        ],
      },
      {
        title: "커피 이야기",
        subTitle: [
          {
            value: "농장에서 우리의 손으로",
            path: "",
          },
          {
            value: "최상의 아라비카 원두",
            path: "",
          },
          {
            value: "스타벅스 로스트 스펙트럼",
            path: "",
          },

          {
            value: "스타벅스 디카페인",
            path: "",
          },
          {
            value: "클로버R 커피추출 시스템",
            path: "",
          },
        ],
      },
    ],
    bottom: [
      {
        title: "나와 어울리는 커피 찾기",
        subTitle: "스타벅스가 여러분에게 어울리는 커피를 찾아드립니다.",
      },
      {
        title: "최상의 커피를 즐기는 법",
        subTitle: "여러가지 방법을 통해 다양한 풍미의 커피를 즐겨보세요.",
      },
    ],
  },
  menu: {
    title: "MENU",
    dropdown: [
      {
        title: "음료",
        subTitle: [
          {
            value: "콜드 브루",
            path: "",
          },
          {
            value: "브루드 커피",
            path: "",
          },
          {
            value: "에스프레소",
            path: "",
          },
          {
            value: "프라푸치노",
            path: "",
          },
          {
            value: "블레닏드",
            path: "",
          },
          {
            value: "스타벅스 피지오",
            path: "",
          },
          {
            value: "티(티바나)",
            path: "",
          },
          {
            value: "기타 제조 음료",
            path: "",
          },
          {
            value: "스타벅스 주스(병음료)",
            path: "",
          },
        ],
      },
      {
        title: "푸드",
        subTitle: [
          {
            value: "브레드",
            path: "",
          },
          {
            value: "케이크",
            path: "",
          },
          {
            value: "샌드위치 & 샐러드",
            path: "",
          },
          {
            value: "따뜻한 푸드",
            path: "",
          },
          {
            value: "과일 & 요거트",
            path: "",
          },
          {
            value: "스낵 & 미니 디저트",
            path: "",
          },
          {
            value: "아이스크림",
            path: "",
          },
        ],
      },

      {
        title: "상품",
        subTitle: [
          {
            value: "머그",
            path: "",
          },
          {
            value: "글라스",
            path: "",
          },
          {
            value: "플라스틱 텀블러",
            path: "",
          },
          {
            value: "스테인리스 텀블러",
            path: "",
          },
          {
            value: "보온병",
            path: "",
          },
          {
            value: "액세서리",
            path: "",
          },
          {
            value: "커피 용품",
            path: "",
          },
          {
            value: "패키지 티(티바나)",
            path: "",
          },
        ],
      },
      {
        title: "카드",
        subTitle: [
          {
            value: "실물카드",
            path: "",
          },
          {
            value: "e-Gift 카드",
            path: "",
          },
        ],
      },
      {
        title: "메뉴 이야기",
        subTitle: [
          {
            value: "나이트로 콜드브루",
            path: "",
          },
          {
            value: "콜드 브루",
            path: "",
          },
          {
            value: "스타벅스 티바나",
            path: "",
          },
        ],
      },
    ],
    bottom: [
      {
        title: "나이트로 콜드 브루",
        subTitle: "나이트로 커피 정통의 물결치듯 흘러내리는 캐스케이딩과 부드러운 크림을 경험하세요.",
      },
    ],
  },
  store: {
    title: "STORE",
    dropdown: [
      {
        title: "매장 찾기",
        subTitle: [
          {
            value: "퀵 검색",
            path: "",
          },
          {
            value: "지역 검색",
            path: "",
          },
        ],
      },
      {
        title: "드라이브 스루 매장",
        subTitle: [],
      },
      {
        title: "스타벅스 리저브 매장",
        subTitle: [],
      },
      {
        title: "커뮤니티 스토어 매장",
        subTitle: [],
      },
      {
        title: "매장 이야기",
        subTitle: [
          {
            value: "티바나 바 매장",
            path: "",
          },
        ],
      },
    ],
    bottom: [
      {
        title: "매장 찾기",
        subTitle: "보다 빠르게 매장을 찾아보세요.",
      },
    ],
  },
  responsibility: {
    title: "RESPONSIBILITY",
    dropdown: [
      {
        title: "사회공헌 캠페인 소개",
        subTitle: [],
      },
      {
        title: "지역 사회 참여 활동",
        subTitle: [
          {
            value: "희망배달 켐페인",
            path: "",
          },
          {
            value: "재능기부 카페 소식",
            path: "",
          },
          {
            value: "커뮤니티 스토어",
            path: "",
          },
          {
            value: "청년 지원 프로그램",
            path: "",
          },
          {
            value: "우리 농산물 사랑 캠페인",
            path: "",
          },
          {
            value: "우리 문화 지키기",
            path: "",
          },
        ],
      },
      {
        title: "환경 보호 활동",
        subTitle: [
          {
            value: "친환경 활동",
            path: "",
          },
          {
            value: "일회용 컵 없는 매장",
            path: "",
          },
          {
            value: "커피 원두 재활용",
            path: "",
          },
        ],
      },
      {
        title: "윤리 구매",
        subTitle: [
          {
            value: "윤리적 원두 구매",
            path: "",
          },
          {
            value: "공정무역 인증",
            path: "",
          },
          {
            value: "커피 농가 지원 활동",
            path: "",
          },
        ],
      },
      {
        title: "글로벌 사회 공헌",
        subTitle: [
          {
            value: "윤리경영 보고서",
            path: "",
          },
          {
            value: "스타벅스 재단",
            path: "",
          },
          {
            value: "지구촌 봉사의 달",
            path: "",
          },
        ],
      },
    ],
    bottom: [
    ],
  },
  rewards: {
    title: "STARBUCKS REWARDS",
    dropdown: [
      {
        title: "스타벅스 리워드",
        subTitle: [
          {
            value: "스타벅스 리워드 소개",
            path: "",
          },
          {
            value: "등급 및 혜택",
            path: "",
          },
          {
            value: "스타벅스 별",
            path: "",
          },
          {
            value: "자주 하는 질문",
            path: "",
          },
        ],
      },
      {
        title: "스타벅스 카드",
        subTitle: [
          {
            value: "스타벅스 카드 소개",
            path: "",
          },
          {
            value: "스타벅스 카드 갤러리",
            path: "",
          },
          {
            value: "등록 및 조회",
            path: "",
          },
          {
            value: "충전 및 이용안내",
            path: "",
          },
          {
            value: "분실신고/환불신청",
            path: "",
          },
          {
            value: "자주 하는 질문",
            path: "",
          },
        ],
      },
      {
        title: "스타벅스 e-Gift Card",
        subTitle: [
          {
            value: "스타벅스 e-Gift Card 소개",
            path: "",
          },
          {
            value: "이용안내",
            path: "",
          },
          {
            value: "선물하기",
            path: "",
          },
          {
            value: "자주 하는 질문",
            path: "",
          },
        ],
      },
    ],
    bottom: [
      {
        title: "스타벅스 카드 등록하기",
        subTitle: "카드 등록 후 리워드 서비스를 누리고 사용내역도 조회해보세요.",
      },
    ],
  },
  new: {
    title: "WHAT'S NEW",
    dropdown: [
      {
        title: "이벤트",
        subTitle: [
          {
            value: "전체",
            path: "",
          },
          {
            value: "스타벅스 카드",
            path: "",
          },
          {
            value: "스타벅스 리워드",
            path: "",
          },
          {
            value: "온라인",
            path: "",
          },
          {
            value: "e-프리퀀시 증정품",
            path: "",
          },
        ],
      },
      {
        title: "뉴스",
        subTitle: [
          {
            value: "전체",
            path: "",
          },
          {
            value: "상품 출시",
            path: "",
          },
          {
            value: "스타벅스와 문화",
            path: "",
          },
          {
            value: "스타벅스 사회공헌",
            path: "",
          },
          {
            value: "스타벅스 카드출시",
            path: "",
          },
        ],
      },
      {
        title: "매장별 이벤트",
        subTitle: [
          {
            value: "일반 매장",
            path: "",
          },
          {
            value: "신규 매장",
            path: "",
          },
        ],
      },
      {
        title: "e-프리퀀시",
        subTitle: [
          {
            value: "이용안내",
            path: "",
          },
          {
            value: "이용현황",
            path: "",
          },
        ],
      },
      {
        title: "공지사항",
        subTitle: [],
      },
      {
        title: "월페이퍼",
        subTitle: [],
      },
    ],
    bottom: [
      {
        title: "매장별 이벤트",
        subTitle: "스타벅스의 매장 이벤트 정보를 확인 하실 수 있습니다.",
      },
      {
        title: "월페이퍼",
        subTitle: "매월 업데이트 되는 월페이퍼(PC,Mobile)로 스타벅스를 더욱 가깝게 즐겨보세요.",
      },
    ],
  },
};
