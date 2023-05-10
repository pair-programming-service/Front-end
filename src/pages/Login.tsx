import React from "react";
import kakaoSvg from "../assets/images/login/kakao.svg";
import iconX from "../assets/images/login/iconX.svg";

interface ModalProps {
  isOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Login = ({ isOpen, setIsModalOpen }: ModalProps) => {
  return (
    <>
      {isOpen ? (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg overflow-hidden shadow-xl w-full sm:w-1/2 lg:w-1/3">
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
                  src={require("../assets/images/logo/gothic.png")}
                  className="h-44 "
                />
              </div>
              <div className="flex justify-center items-center mb-6 -mt-8">
                <input
                  className="w-11/12 h-14 px-3 py-2 border rounded-lg outline-none font-medium"
                  type="email"
                  placeholder="이메일"
                />
              </div>
              <div className="flex justify-center items-center mb-6">
                <input
                  className="w-11/12 h-14 px-3 py-2 border rounded-lg outline-none font-medium"
                  type="password"
                  placeholder="비밀번호"
                />
              </div>
              <div className="flex justify-center">
                <button
                  className="bg-cm-400 h-14 mt-3 text-lg text-white font-bold w-11/12 px-3 py-2 border rounded-lg"
                  type="submit"
                >
                  로그인
                </button>
              </div>
              <div className="flex justify-center text-center mb-8">
                <button
                  type="submit"
                  className="bg-yellow-300 h-14 mt-7 text-lg text-black font-semibold w-11/12 px-3 py-2 border rounded-lg items-center"
                >
                  <img src={kakaoSvg} className="w-6 h-7 absolute ml-4" />
                  <span>카카오로 시작하기</span>
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
