const CLIENT_ID = "4d4ad6c516c1ce5ab75d5608fcfd8b03";
const REDIRECT_URI = "http://localhost:3000/oauth/callback/kakao";
export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;
