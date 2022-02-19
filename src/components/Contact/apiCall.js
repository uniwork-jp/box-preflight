const apiCall = (url, obj) =>
  fetch(url, {
    mode: "cors",
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  }).then(response => {
    if (response.status === 200) {
      return response.json();
    }
    return false;
  });

export default apiCall;
