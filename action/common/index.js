export const countryLists = () => {
  return fetch(`${process.env.SERVER_API}/country`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const stateLists = (id) => {
  return fetch(`${process.env.SERVER_API}/country/${id}`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
