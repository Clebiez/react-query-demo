import sendRequest, { ITEMS_PER_PAGE } from "./apiWrapper";

const getCheeses = ({ page, milkType, q }) => {
  let url = `/cheeses?_sort=vote&_order=desc&&_page=${page}&_limit=${ITEMS_PER_PAGE}`;
  if (milkType) {
    url += `&milkType=${milkType}`;
  }

  if (q) {
    url += `&q=${q}`;
  }

  return sendRequest(url, "GET");
};

export default getCheeses;
