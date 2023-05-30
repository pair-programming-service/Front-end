import request from "apis/base";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import { userState } from "state/atoms/userAtom";

const OAuth2RedirectHandler = () => {
  const [code, setCode] = useState<string | null>(null);

  type Token = string;

  const navigate = useNavigate();
  const setUserData = useSetRecoilState(userState);

  const kakaoLogin = async (code: string | null) => {
    try {
      const response = await request.get(`/oauth/token?code=${code}`);
      const token = response.headers.authorization as Token;
      const refreshToken = response.headers.refreshtoken as Token;

      // 백엔드에서 수정 가능하다면 삭제
      setUserData(response.data.data);

      localStorage.setItem("token", token);
      localStorage.setItem("refreshToken", refreshToken);

      navigate(-1); // 카카오로그인 성공시 사용자가 로그인 시도한 페이지로 navigate 설정
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
