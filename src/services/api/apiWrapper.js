export const ITEMS_PER_PAGE = 6; // Default option in jsonserver, we don't need to use another limit

const sendRequest = (path = "/", method = "GET", body) => {
  return fetch(`${process.env.REACT_APP_API_URL}${path}`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method,
    body: body ? JSON.stringify(body) : null,
  }).then(async (res) => {
    let totalItems = res.headers.get("X-total-count");
    if (!!totalItems) {
      totalItems = parseInt(totalItems);
      const currentPage = new URL(res.url).searchParams.get("_page");
      return {
        pagination: {
          totalItems,
          totalPages: Math.ceil(parseInt(totalItems) / ITEMS_PER_PAGE),
          currentPage: parseInt(currentPage) || 1,
        },
        data: await res.json(),
      };
    }

    return res.json();
  });
};

export default sendRequest;
