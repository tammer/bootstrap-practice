export function standardGet(apiPath, onComplete) {
  if (apiPath[0] != "/") {
    apiPath = "/" + apiPath;
  }
  if (apiPath[apiPath.length - 1] != "/") {
    apiPath = apiPath + "/";
  }
  return fetch(`${process.env.REACT_APP_API}${apiPath}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: `Token ${localStorage.getItem("token")}`,
    },
  })
    .then((res) => res.json())
    .then((j) => {
      onComplete(j);
    });
}

export function acceptAnchor(id) {
  return fetch(`${process.env.REACT_APP_API}/anchor/${id}/accept`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Token ${localStorage.getItem("token")}`,
    },
  });
}

export function declineAnchor(id) {
  return fetch(`${process.env.REACT_APP_API}/anchor/${id}/decline`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Token ${localStorage.getItem("token")}`,
    },
  });
}

export function destroyAnchor(id) {
  return fetch(`${process.env.REACT_APP_API}/anchor/${id}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Token ${localStorage.getItem("token")}`,
    },
  });
}

export function formFromServer(setFormState) {
  fetch(process.env.REACT_APP_API + "/profile/", {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Token ${localStorage.getItem("token")}`,
    },
  })
    .then((res) => (res.status == 200 ? res.json() : null))
    .then((data) => {
      if (data) setFormState(data);
    });
}
