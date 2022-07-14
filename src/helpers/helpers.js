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
