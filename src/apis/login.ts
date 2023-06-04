import request from "./base";

type Token = string;

export const handleLogin = async (email: string, password: string) => {
  let returnValue;
  return await request
    .post("/member/login", {
      email: email,
      password: password,
    })
    .then((response) => {
      const token = response.headers.authorization as Token;
      const refreshToken = response.headers.refreshtoken as Token;

      localStorage.setItem("token", token);
      localStorage.setItem("refreshToken", refreshToken);

      returnValue = response.data.data;
      return returnValue;
    });
};
