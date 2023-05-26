export const getPrettyDateAgo = (dateStr: string | undefined) => {
  if (dateStr === undefined) return "";
  const dateObj = new Date(dateStr);
  const nowTime = new Date().getTime();
  const postedTime = dateObj.getTime();

  const secDiff = Math.floor((nowTime - postedTime) / 1000);
  const minDiff = Math.floor(secDiff / 60);
  const hourDiff = Math.floor(minDiff / 60);
  const dayDiff = Math.floor(hourDiff / 24);

  if (dayDiff < 1) {
    return `오늘`;
  } else if (dayDiff === 1) {
    return `어제`;
  } else if (dayDiff > 1 && dayDiff < 30) {
    return `${dayDiff}일 전`;
  }

  const monthDiff = Math.floor(dayDiff / 30);
  if (monthDiff < 12) {
    return `${monthDiff}개월 전`;
  }

  const year = dateObj.getFullYear();
  const month = dateObj.getMonth() + 1;
  const date = dateObj.getDate();
  return `${year}년 ${month}월 ${date}일`;
};
