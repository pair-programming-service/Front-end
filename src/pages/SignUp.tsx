import Input from "components/common/Input";
import SquareButton from "components/common/SquareButton";
import Warning from "components/signup/Warning";
import { useSignupValid } from "hooks/useSignupValid";
import { useState } from "react";
import googleSvg from "../assets/images/register/google.svg";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");

  const {
    isValidEmail,
    isValidNickname,
    isValidPassword,
    isValidPasswordCheck,
    isValidForm,
  } = useSignupValid(email, nickname, password, passwordCheck);

  const handleSignup = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    console.log("signup");
  };

  return (
    <div className="flex flex-col w-full h-full items-center justify-center">
      <div className="flex flex-col gap-10">
        <h1 className="flex justify-center text-2xl font-bold">회원가입</h1>
        <form className="flex flex-col w-80 h-full justify-center">
          <label className="mt-3">이메일</label>
          <Input
            value={email}
            setValue={setEmail}
            placeholder="example@codingmate.com"
            type="text"
          />
          <Warning
            isValid={isValidEmail}
            text="이메일 형식으로 입력해 주세요"
          />
          <label className="mt-3">닉네임</label>
          <Input
            value={nickname}
            setValue={setNickname}
            placeholder="영문, 한글, 숫자 가능 2~10자"
            type="text"
          />
          <Warning
            isValid={isValidNickname}
            text="영문, 한글, 숫자를 사용해 2자 이상 10자 이하로 입력해 주세요"
          />
          <label className="mt-3">비밀번호</label>
          <Input
            value={password}
            setValue={setPassword}
            placeholder="영문(대소문자 모두 포함) + 숫자 조합 8~16자"
            type="password"
          />
          <Warning
            isValid={isValidPassword}
            text="영문(대소문자 모두 포함) + 숫자 조합 8자 이상 16자 이하로 입력해 주세요"
          />
          <label className="mt-3">비밀번호 확인</label>
          <Input
            value={passwordCheck}
            setValue={setPasswordCheck}
            placeholder="비밀번호 재입력"
            type="password"
          />
          <Warning
            isValid={isValidPasswordCheck}
            text="비밀번호가 일치하지 않습니다"
          />
          <div className="flex flex-col gap-4 mt-4">
            <SquareButton
              text={"가입하기"}
              handleClick={handleSignup}
              style={{ isWhite: false }}
              disabled={!isValidForm}
            />
            <SquareButton
              text={"구글로 간편 로그인하기"}
              handleClick={(e) => {
                e.preventDefault();
                console.log("google");
              }}
              style={{ isWhite: true }}
              icon={<img className="w-6 h-6 absolute left-4" src={googleSvg} />}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
