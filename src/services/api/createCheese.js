import sendRequest from "./apiWrapper";

const createCheese = (body) =>
  sendRequest(`/cheeses`, "POST", { ...body, vote: 0 });

export default createCheese;
