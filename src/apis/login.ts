import request from "./base";

enum Token {
  ACCESS_TOKEN = "access",
  REFRESH_TOKEN = "refresh",
}

export const handleLogin = async (email: string, password: string) => {
  let returnValue;
  return await request
    .post("https://codingmate.shop/api/member/login", {
      email: email,
      password: password,
    })
    .then((response) => {
      const token: Token.ACCESS_TOKEN = response.headers.authorization;
      const refreshToken: Token.REFRESH_TOKEN = response.headers.refreshtoken;

      localStorage.setItem("token", token);
      localStorage.setItem("refreshToken", refreshToken);
      console.log("token:", token);
      console.log("refreshToken:", refreshToken);

      // 로그인 성공/실패 여부 판단
      returnValue = response.data.success;
      return returnValue;
    });
};
