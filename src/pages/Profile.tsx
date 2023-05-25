import { getProfileInfo } from "apis/member";
import GithubLink from "components/mypage/GithubLink";
import Nickname from "components/mypage/Nickname";
import ProfileImage from "components/mypage/ProfileImage";
import PostList from "components/pairPostList/PostList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProfileInfo } from "types/profile.type";

const Profile = () => {
  // TODO: nickname이 본인과 같으면 MyPage로 navigate
  //    - 상태 관리로 로그인된 회원의 nickname 정보 가지고 있어야 함

  const nickname = useParams().nickname;

  const [profileInfo, setProfileInfo] = useState<ProfileInfo>({
    nickname: "",
    profileImage: null,
    githubLink: "",
    postList: [],
  });

  useEffect(() => {
    if (nickname)
      getProfileInfo(nickname).then((res) => {
        if (res.data.success) {
          setProfileInfo({
            nickname: res.data.data.nickname,
            githubLink: res.data.data.githubLink,
            profileImage: res.data.data.profileImage,
            postList: [], // TODO: 해당 회원이 쓴 글
          });
        }
      });
  }, [nickname]);

  return (
    <div className="flex flex-col pt-20 px-10">
      <div className="flex justify-between mb-6">
        <div className="flex">
          <div className="flex flex-col w-48">
            {<ProfileImage image={profileInfo.profileImage} />}
          </div>
          <div className="flex flex-col">
            {<Nickname nickname={profileInfo.nickname} />}
            {profileInfo?.githubLink && (
              <GithubLink link={profileInfo.githubLink} />
            )}
          </div>
        </div>
      </div>
      {
        <div>
          <div className="text-2xl font-bold mb-2">{`${nickname}님의 게시글`}</div>
          <PostList postList={profileInfo.postList} />
        </div>
      }
    </div>
  );
};

export default Profile;
