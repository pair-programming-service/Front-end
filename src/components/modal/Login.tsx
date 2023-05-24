import React, { useEffect, useRef, useState } from "react";
import kakaoSvg from "../../assets/images/login/kakao.svg";
import iconX from "../../assets/images/login/iconX.svg";
import { handleLogin } from "apis/login";
import { KAKAO_AUTH_URL } from "utils/OAuth";
import { useNavigate } from "react-router-dom";
import useOnclickOutside from "hooks/useOnclickOutside";

interface ModalProps {
  isOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Login = ({ isOpen, setIsModalOpen }: ModalProps) => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    // 모달이 닫힐 때마다 state값을 초기화해주는 useEffect 실행
    return () => {
      setEmail("");
      setPassword("");
      setError("");
    };
  }, [isOpen]);

  // email 처리
  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  // password 처리
  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  // Enter키 눌렸을 때 event 처리
  const handleEnterPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  // 로그인 모달에서 회원가입 버튼 클릭시 회원가입 페이지로 이동
  const handleSignup = () => {
    setIsModalOpen(false);
    navigate("/signup");
  };

  // 로그인 기능 구현
  const handleSubmit = () => {
    handleLogin(email, password).then((res) => {
      res === true
        ? (setIsModalOpen(false), window.location.reload())
        : setError("이메일 또는 비밀번호를 잘못 입력했습니다.");
    });
  };

  // 모달창 외부 클릭시 모달 close 처리
  const ref = useRef<HTMLDivElement>(null);
  useOnclickOutside(ref, () => {
    setIsModalOpen(false);
  });

  return (
    <>
      {isOpen ? (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
          <div
            ref={ref}
            className="bg-white rounded-lg overflow-hidden shadow-xl w-full sm:w-1/2 lg:w-1/3"
          >
            <div className="flex justify-end">
              <button
                className="mt-5 mr-5"
                type="button"
                onClick={() => setIsModalOpen(false)}
              >
                <img src={iconX} className="w-8" />
              </button>
            </div>
            <div className="px-8 py-4">
              <div className="flex justify-center -mt-11">
                <img
                  src={require("../../assets/images/logo/gothic.png")}
                  className="h-44 "
                />
              </div>
              <div className="flex justify-center items-center mb-6 -mt-8">
                <input
                  className="w-11/12 h-14 px-3 py-2 border rounded-lg outline-none font-medium"
                  type="email"
                  placeholder="이메일"
                  value={email}
                  onChange={handleChangeEmail}
                  onKeyDown={handleEnterPress}
                />
              </div>
              <div className="flex justify-center items-center mb-6">
                <input
                  className="w-11/12 h-14 px-3 py-2 border rounded-lg outline-none font-medium"
                  type="password"
                  placeholder="비밀번호"
                  value={password}
                  onChange={handleChangePassword}
                  onKeyDown={handleEnterPress}
                />
              </div>
              {error && (
                <div className="flex justify-start text-red-500 font-extralight text-sm ml-4 mb-1 -mt-1">
                  {error}
                </div>
              )}
              <div className="flex justify-center">
                <button
                  className="bg-cm-400 h-14 mt-3 text-lg text-white font-extralight w-11/12 px-3 py-2 border rounded-lg"
                  type="submit"
                  onClick={handleSubmit}
                >
                  로그인
                </button>
              </div>
              <div className="flex justify-center">
                <button
                  className="h-14 mt-3 text-lg text-gray-500 font-extralight w-11/12 px-3 py-2 border-2 rounded-lg"
                  type="submit"
                  onClick={handleSignup}
                >
                  회원가입
                </button>
              </div>
              <div className="flex justify-center text-center mb-8">
                <button
                  type="submit"
                  className="bg-yellow-300 h-14 mt-3 text-lg text-black font-extralight w-11/12 px-3 py-2 border rounded-lg items-center"
                >
                  <img src={kakaoSvg} className="w-6 h-7 absolute ml-4" />
                  <a href={KAKAO_AUTH_URL}>카카오로 시작하기</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Login;
