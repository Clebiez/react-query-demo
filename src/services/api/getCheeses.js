import sendRequest from "./apiWrapper";

const getCheeses = () => sendRequest("/cheeses?_sort=vote&_order=desc", "GET");

export default getCheeses;
