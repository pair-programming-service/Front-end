import { getMyPageInfo, uploadMyPageInfo } from "apis/register";
import SquareButton from "components/common/SquareButton";
import Warning from "components/common/Warning";
import GithubLink from "components/mypage/GithubLink";
import ImageUpload from "components/mypage/ImageUpload";
import Nickname from "components/mypage/Nickname";
import ProfileImage from "components/mypage/ProfileImage";
import PostList from "components/pairPostList/PostList";
import { useEffect, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { userState } from "state/atoms/userAtom";
import { PairPost } from "types/post.type";

const MyPage = () => {
  const nicknameRef = useRef<HTMLInputElement>(null);
  const githubRef = useRef<HTMLInputElement>(null);

  const [myInfo, setMyInfo] = useRecoilState(userState);

  const [isEditing, setIsEditing] = useState(false);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [isValidNickname, setIsValidNickname] = useState(true);

  const handleEdit = () => {
    if (isEditing) {
      const nickname = nicknameRef.current?.value || "";
      const githubLink = githubRef.current?.value || "";
      uploadMyPageInfo(selectedImage, nickname, githubLink)
        .then((res) => {
          if (res.data.success === true) {
            setMyInfo({
              ...myInfo,
              nickname: res.data.data.nickname,
              githubLink: res.data.data.githubLink,
              profileImage: res.data.data.profileImage,
              createdAt: res.data.data.createdAt,
              id: res.data.data.id,
            });
            setIsEditing(!isEditing);
          } else {
            if (res.data.error.code === "DUPLICATED_NICKNAME") {
              setIsValidNickname(false);
            }
          }
        })
        .catch((err) => {
          console.error(err);
          setIsEditing(!isEditing);
        });
    } else {
      setIsEditing(!isEditing);
    }
  };

  const handleCancelEdit = () => {
    setIsEditing(!isEditing);
  };

  useEffect(() => {
    getMyPageInfo().then((res) => {
      if (res.data.data) {
        if (myInfo)
          setMyInfo({
            ...myInfo,
            boardList: res.data.data as PairPost[],
          });
      }
    });
  }, []);

  return (
    <div className="flex flex-col pt-20 px-10">
      <div className="flex justify-between mb-6">
        <div className="flex">
          <div className="flex flex-col w-48">
            {isEditing ? (
              <ImageUpload
                setSelectedImage={setSelectedImage}
                defaultImage={myInfo?.profileImage || null}
              />
            ) : (
              <ProfileImage image={myInfo?.profileImage || null} />
            )}
          </div>
          <div className="flex flex-col">
            {isEditing ? (
              <div>
                <input
                  defaultValue={myInfo?.nickname}
                  placeholder={"닉네임"}
                  className="font-bold text-2xl border p-2 rounded"
                  ref={nicknameRef}
                />
                <Warning
                  isValid={isValidNickname}
                  text={"이미 존재하는 닉네임입니다."}
                />
              </div>
            ) : (
              <Nickname nickname={myInfo?.nickname || ""} />
            )}
            {myInfo?.githubLink && !isEditing && (
              <GithubLink link={myInfo.githubLink} />
            )}
            {isEditing && (
              <input
                defaultValue={myInfo?.githubLink || ""}
                placeholder="Github Link"
                className="border rounded p-1"
                ref={githubRef}
              />
            )}
          </div>
        </div>
        {isEditing ? (
          <div className="flex gap-2">
            <SquareButton
              text="취소"
              handleClick={handleCancelEdit}
              style={{ isWhite: true }}
            />
            <SquareButton
              text="수정 완료"
              handleClick={handleEdit}
              style={{ isWhite: false }}
            />
          </div>
        ) : (
          <SquareButton
            text="내 정보 수정"
            handleClick={handleEdit}
            style={{ isWhite: false }}
          />
        )}
      </div>
      {isEditing || (
        <div>
          <div className="text-2xl font-bold mb-2">내가 쓴 글</div>
          <PostList postList={myInfo?.boardList} />
        </div>
      )}
    </div>
  );
};

export default MyPage;
