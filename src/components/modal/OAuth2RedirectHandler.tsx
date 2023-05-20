import request from "apis/base";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";

const OAuth2RedirectHandler = () => {
  const [code, setCode] = useState<string | null>(null);

  const navigate = useNavigate();

  const kakaoLogin = async (code: string | null) => {
    try {
      const response = await request.get(`/oauth/token?code=${code}`);
      const token = response.headers.authorization;
      const refreshToken = response.headers.refreshtoken;

      localStorage.setItem("token", token);
      localStorage.setItem("refreshToken", refreshToken);
      console.log("token", token);
      console.log("refreshToken", refreshToken);

      navigate("/");
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  // 서버에서 Redirect URI로 리다이렉트를 하면서 컴포넌트가 2번 렌더링 되는거 막기 위해서 state가 변경될 때만 kakaoLogin 함수를 실행
  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get("code");
    setCode(code);
  });

  useEffect(() => {
    if (code) kakaoLogin(code);
  }, [code]);

  return <></>;
};

export default OAuth2RedirectHandler;
