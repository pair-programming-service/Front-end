const CLIENT_ID = process.env.REACT_APP_KAKAO_API_KEY;
const REDIRECT_URI = process.env.REACT_APP_KAKAO_URL;
export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}`;
