interface IinnerNavItems {
  [index: string]: Iitem;
}

interface Iitem {
  [index: string]: string;
  title: string;
}
export const innerNavItems: IinnerNavItems = {
  item1: {
    title: "COFFEE",
  },
  item2: {
    title: "MENU",
  },
  item3: {
    title: "STORE",
  },
  item4: {
    title: "RESPONSIBILITY",
  },
  item5: {
    title: "STARBUCKS REWARDS",
  },
  item6: {
    title: "WHAT'S NEW",
  },
};
