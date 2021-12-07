interface IinnerNavItems {
  [index: string]: Iitem;
}

interface Iitem {
  [index: string]: string;
  title: string;
}
export const innerNavItems: IinnerNavItems = {
  coffee: {
    title: "COFFEE",
  },
  menu: {
    title: "MENU",
  },
  store: {
    title: "STORE",
  },
  responsibility: {
    title: "RESPONSIBILITY",
  },
  rewards: {
    title: "STARBUCKS REWARDS",
  },
  new: {
    title: "WHAT'S NEW",
  },
};
