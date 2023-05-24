import { getMyPageInfo, uploadMyPageInfo } from "apis/register";
import SquareButton from "components/common/SquareButton";
import GithubLink from "components/mypage/GithubLink";
import ImageUpload from "components/mypage/ImageUpload";
import Nickname from "components/mypage/Nickname";
import ProfileImage from "components/mypage/ProfileImage";
import { useEffect, useRef, useState } from "react";
import { MyPageInfo } from "types/mypage.type";

const MyPage = () => {
  const nicknameRef = useRef<HTMLInputElement>(null);
  const githubRef = useRef<HTMLInputElement>(null);

  const [myInfo, setMyInfo] = useState<MyPageInfo>({
    nickname: "",
    profileImage: null,
    githubLink: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const handleEdit = () => {
    if (isEditing) {
      uploadMyPageInfo(
        selectedImage,
        nicknameRef.current?.value || "",
        githubRef.current?.value || ""
      )
        .then((res) => {
          if (res.data.success === true) handleMyInfo();
        })
        .catch((err) => {
          console.error(err);
        });
    }
    setIsEditing(!isEditing);
  };

  const handleCancelEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleMyInfo = () => {
    getMyPageInfo().then((res) => {
      if (res.data.data) {
        setMyInfo({
          nickname: res.data.data.nickname,
          profileImage: res.data.data.profileImage,
          githubLink: res.data.data.githubLink,
        });
      }
    });
  };

  useEffect(() => {
    handleMyInfo();
  }, []);

  return (
    <div className="flex flex-col pt-20 px-10">
      <div className="flex justify-between">
        <div className="flex">
          <div className="flex flex-col w-48">
            {isEditing ? (
              <ImageUpload
                setSelectedImage={setSelectedImage}
                defaultImage={myInfo.profileImage}
              />
            ) : (
              <ProfileImage image={myInfo.profileImage} />
            )}
          </div>
          <div className="flex flex-col">
            {isEditing ? (
              <input
                defaultValue={myInfo.nickname}
                placeholder={"닉네임"}
                className="font-bold text-2xl border p-2 rounded"
                ref={nicknameRef}
              />
            ) : (
              <Nickname nickname={myInfo.nickname} />
            )}
            {myInfo?.githubLink && <GithubLink link={myInfo.githubLink} />}
            {isEditing && (
              <input
                defaultValue={myInfo.githubLink || ""}
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
    </div>
  );
};

export default MyPage;
