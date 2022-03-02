import sendRequest from "./apiWrapper";

const getMilkTypes = () => sendRequest("/milkTypes", "GET");

export default getMilkTypes;
