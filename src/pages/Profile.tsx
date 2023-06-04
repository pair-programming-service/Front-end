import { getProfileInfo } from "apis/member";
import GithubLink from "components/mypage/GithubLink";
import Nickname from "components/mypage/Nickname";
import ProfileImage from "components/mypage/ProfileImage";
import PostList from "components/pairPostList/PostList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProfileInfo } from "types/profile.type";

const Profile = () => {
  const nickname = useParams().nickname;
  const [isExistUser, setIsExistUser] = useState<boolean | undefined>(
    undefined
  );

  const [profileInfo, setProfileInfo] = useState<ProfileInfo>({
    nickname: "",
    profileImage: null,
    githubLink: "",
    postList: [],
  });

  useEffect(() => {
    if (nickname)
      getProfileInfo(nickname.replaceAll("-", "%23"))
        .then((res) => {
          if (res.data.success) {
            setIsExistUser(true);
            setProfileInfo({
              nickname: res.data.data.nickname,
              githubLink: res.data.data.githubLink,
              profileImage: res.data.data.profileImage,
              postList: res.data.data.boardList,
            });
          }
        })
        .catch((err) => {
          console.error(err);
          setIsExistUser(false);
        });
  }, [nickname]);

  if (isExistUser === false)
    return (
      <div className="flex flex-col pt-20 px-10 font-bold text-2xl">
        존재하지 않는 회원입니다.
      </div>
    );
  else if (isExistUser)
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
            <div className="text-2xl font-bold mb-2">{`${profileInfo.nickname}님의 게시글`}</div>
            <PostList postList={profileInfo.postList} />
          </div>
        }
      </div>
    );
  else return <div></div>;
};

export default Profile;
