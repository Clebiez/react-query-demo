import sendRequest from "./apiWrapper";

const updateCheeseVote = (id, vote) =>
  sendRequest(`/cheeses/${id}`, "PATCH", { vote: vote + 1 });

export default updateCheeseVote;
