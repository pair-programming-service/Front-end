export const checkEmailValid = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const checkNicknameValid = (nickname: string) => {
  const nicknameRegex = /^[a-zA-Z0-9가-힣]{2,10}$/;
  return nicknameRegex.test(nickname);
};

export const checkPasswordValid = (password: string) => {
  const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d]{8,16}$/;
  return passwordRegex.test(password);
};

export const checkPasswordCheckValid = (
  password: string,
  passwordCheck: string
) => {
  return password === passwordCheck;
};
