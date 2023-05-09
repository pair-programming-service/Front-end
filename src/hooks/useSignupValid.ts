import { useEffect, useState } from "react";
import {
  checkEmailValid,
  checkNicknameValid,
  checkPasswordCheckValid,
  checkPasswordValid,
} from "utils/checkSignupValid";

export const useSignupValid = (
  email: string,
  nickname: string,
  password: string,
  passwordCheck: string
) => {
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidNickname, setIsValidNickname] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);
  const [isValidPasswordCheck, setIsValidPasswordCheck] = useState(true);
  const isValidForm =
    isValidEmail && isValidNickname && isValidPassword && isValidPasswordCheck;

  useEffect(() => {
    setIsValidEmail(checkEmailValid(email));
  }, [email]);

  useEffect(() => {
    setIsValidNickname(checkNicknameValid(nickname));
  }, [nickname]);

  useEffect(() => {
    setIsValidPassword(checkPasswordValid(password));
  }, [password]);

  useEffect(() => {
    setIsValidPasswordCheck(checkPasswordCheckValid(password, passwordCheck));
  }, [password, passwordCheck]);

  return {
    isValidEmail,
    isValidNickname,
    isValidPassword,
    isValidPasswordCheck,
    isValidForm,
  };
};
