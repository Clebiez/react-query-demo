import localStorageService from "../localStorage";

const getVotedCheese = (id) => {
  const cheeses = localStorageService().get("votedCheeses") || [];
  return Promise.resolve(cheeses.find((cheese) => cheese.id === parseInt(id)));
};

export default getVotedCheese;
