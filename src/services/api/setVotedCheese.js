import localStorageService from "../localStorage";

const setVotedCheeses = (cheese) => {
  const ls = localStorageService();
  const votedCheeses = ls.get("votedCheeses") || [];
  votedCheeses.push(cheese);
  ls.set("votedCheeses", votedCheeses);
  return Promise.resolve(votedCheeses);
};

export default setVotedCheeses;
