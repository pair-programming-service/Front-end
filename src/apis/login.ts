import request from "./base";

export const handleLogin = async (email: string, password: string) => {
  let returnValue;
  return await request
    .post("https://codingmate.shop/api/member/login", {
      email: email,
      password: password,
    })
    .then((response) => {
      // localStorage에 토큰 저장
      const token = response.headers.authorization;
      // refresh token 예정*
      // const refreshToken = response.headers.refresh - token;
      localStorage.setItem("token", token);
      console.log("token:", token);
      // 로그인 성공/실패 여부 판단
      returnValue = response.data.success;
      return returnValue;
    });
};
