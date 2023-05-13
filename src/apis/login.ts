import request from "./base";

export const handleLogin = async (email: string, password: string) => {
  return await request
    .post("https://codingmate.shop/api/member/login", {
      email: email,
      password: password,
    })
    .then((response) => {
      console.log(response);
      return response.data;
    })
    .catch(function (error) {
      console.log(error.response.data);
    });
};
