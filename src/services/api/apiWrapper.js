const sendRequest = (path = "/", method = "GET", body) => {
  return fetch(`${process.env.REACT_APP_API_URL}${path}`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method,
    body: body ? JSON.stringify(body) : null,
  }).then((res) => res.json());
};

export default sendRequest;
