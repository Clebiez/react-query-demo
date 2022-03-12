import sendRequest from "./apiWrapper";

const getMilkType = (id) => sendRequest(`/milkTypes/${id}`, "GET");

export default getMilkType;
