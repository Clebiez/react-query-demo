import sendRequest from "./apiWrapper";

const getCheese = (id) => sendRequest(`/cheeses/${id}`, "GET");

export default getCheese;
