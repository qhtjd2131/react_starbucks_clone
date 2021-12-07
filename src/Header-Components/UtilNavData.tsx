interface IutilNavData {
  [index: string]: Iitem;
}

interface Iitem {
  [index: string]: string;
  title: string;
}
export const utilNavData: IutilNavData = {
  signIn: {
    title: "Sign In",
  },
  myStarbucks: {
    title: "My Starbucks",
  },
  serviceAndIdeas: {
    title: "Customer Service & Ideas",
  },
  findStore: {
    title: "Find a Store",
  },
};
