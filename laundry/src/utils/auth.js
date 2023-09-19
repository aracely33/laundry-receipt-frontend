export const BASE_URL = "https://reqres.in/api/";

export const register = (password, email) => {
  return fetch(`${BASE_URL}register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({password, email}),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const authorize = ({email, password}) => {
  return fetch(`${BASE_URL}login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      if (data.token) {
        localStorage.setItem("jwt", data.token);

        return data;
      } else {
        throw new Error("Token not found in response");
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

export const checkToken = (token) => {
  return fetch(`${BASE_URL}users/2`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => res.json());
};
