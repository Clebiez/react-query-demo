import sendRequest from "./apiWrapper";

const deleteCheese = (id) => sendRequest(`/cheeses/${id}`, "DELETE");

export default deleteCheese;
