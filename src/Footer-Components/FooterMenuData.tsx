interface IfooterMenuData {
  [index: string]: Iitem;
  company: Iitem;
  partnership: Iitem;
  onlineCommunity: Iitem;
  recruit: Iitem;
}

interface Iitem {
  name: string;
  values: Ivalue[];
}
export interface Ivalue {
  title: string;
  links: string;
}

export const footerMenuData: IfooterMenuData = {
  company: {
    name: "COMPANY",
    values: [
      {
        title: "한눈에 보기",
        links: "",
      },
      {
        title: "스타벅스 사명",
        links: "",
      },
      {
        title: "스타벅스 소개",
        links: "",
      },
      {
        title: "국내 뉴스룸",
        links: "",
      },
      {
        title: "세계의 스타벅스",
        links: "",
      },
      {
        title: "글로벌 뉴스룸",
        links: "",
      },
    ],
  },
  corporateSales: {
    name: "CORPORATE SALES",
    values: [
      {
        title: "단체 및 기업 구매 안내",
        links: "",
      },
    ],
  },
  partnership: {
    name: "PARTNERSHIP",
    values: [
      {
        title: "신규 입점 제의",
        links: "",
      },
      {
        title: "협력 고객사 등록신청",
        links: "",
      },
    ],
  },
  onlineCommunity: {
    name: "ONLINE COMMUNITY",
    values: [
      {
        title: "페이스북",
        links: "",
      },
      {
        title: "트위터",
        links: "",
      },
      {
        title: "유튜브",
        links: "",
      },
      {
        title: "인스타그램",
        links: "",
      },
    ],
  },
  recruit: {
    name: "RECRUIT",
    values: [
      {
        title: "채용 소개",
        links: "",
      },
      {
        title: "채용 지원하기",
        links: "",
      },
    ],
  },
};
