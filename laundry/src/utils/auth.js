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
  console.log(email, password);
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
  /*
    return fetch("https://reqres.in/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  })
    .then((res) => {
      if (!res.ok) {
        console.log(res);
        console.error(
          `Network response not ok: ${res.status} - ${res.statusText}`
        );
        throw new Error("Network response was not ok");
      }
      return res.json();
    })
    .then((data) => {
      console.log(data);
      if (data.token) {
        localStorage.setItem("jwt", data.token);

        return data;
      } else {
        throw new Error("Token not found in response");
      }
    })
    .catch((err) => {
      console.error("Authorization error:", err);
      throw err; // Propagar el error para que el llamador pueda manejarlo
    });*/
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

/*

fetch("https://reqres.in/api/login", {
    method: "POST",
    body: JSON.stringify({eve.holt@reqres.in, cityslicka}),


  })
  
  corregido:
  fetch("https://reqres.in/api/login", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    email: email,
    password: password
  }),
})
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error("Error:", error);
  }); 
  
  
  */
