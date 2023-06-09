import { deletePairPost, getPairPost } from "apis/pairpost";
import MarkdownView from "components/MarkdownView";
import LanguageIcon from "components/common/LanguageIcon";
import SquareButton from "components/common/SquareButton";
import Tag from "components/common/Tag";
import { useCallback, useEffect, useState } from "react";
import { HiArrowLeft } from "react-icons/hi2";
import { useNavigate, useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { userState } from "state/atoms/userAtom";
import { ideList } from "types/ide.type";
import { languageList } from "types/language.type";
import { DetailData } from "types/postDetail.type";

const PairPostDetail = () => {
  const navigate = useNavigate();
  const id = useParams().id || "";
  const userNickName = useRecoilValue(userState)?.nickname;

  const [detailData, setDetailData] = useState<DetailData>();

  const detailAPI = useCallback(async () => {
    const response = await getPairPost(+id);

    // 백엔드에서 수정 가능하다면 삭제
    setDetailData(response.data.data);
  }, [id]);

  useEffect(() => {
    detailAPI();
  }, [detailAPI]);

  const handleEditButton = () => {
    navigate(`/pairpostedit/${id}`);
  };

  const handleDeleteButton = () => {
    if (detailData) {
      deletePairPost(detailData.id)
        .then(() => navigate("/PairPostList"))
        .catch((err) => console.log(err));
    }
  };

  const handleProfileClick = () => {
    detailData?.nickname === userNickName
      ? navigate("/mypage")
      : navigate(`/profile/${detailData?.nickname.replaceAll("#", "-")}`);
  };

  return detailData ? (
    <main className="px-20 pt-20 flex flex-col justify-center w-full">
      <div className="relative -left-20 pl-4">
        <button
          className="w-10 h-10 rounded-lg border bg-white flex box-border justify-center items-center"
          onClick={() => navigate(-1)}
        >
          <HiArrowLeft className="w-6 h-6" />
        </button>
      </div>
      <div className="box-border w-full relative -top-9">
        <section className="w-full">
          <div className="flex justify-between">
            <div className="w-lg flex items-center">
              <h1 className="pr-2 inline font-bold text-2xl leading-normal">
                {detailData.title}
              </h1>
              <div className="m-1.5 px-2 py-1 inline-block">
                <Tag text={detailData.status ? "모집중" : "모집완료"} />
              </div>
            </div>
            {userNickName === detailData.nickname && (
              <div className="flex gap-4">
                <SquareButton
                  text="수정하기"
                  handleClick={handleEditButton}
                  style={{ isWhite: false }}
                />
                <SquareButton
                  text="삭제하기"
                  handleClick={handleDeleteButton}
                  style={{ isWhite: false }}
                />
              </div>
            )}
          </div>
          <div className="py-2 flex justify-between">
            <div>
              <span
                onClick={handleProfileClick}
                className="font-semibold cursor-pointer"
              >
                {detailData.nickname}
              </span>
              <span className=" pl-2">
                {detailData?.createdAt.split(" ")[0]}
              </span>
            </div>
            <span>조회수 {detailData?.viewCount}</span>
          </div>
          <hr />
        </section>
        <section>
          <div className="py-4 grid gap-6 grid-cols-2 grid-rows-3 text-sm">
            <div className="flex">
              <span className="inline-block pr-4 text-[#6A6A6A]">
                프로그래밍 유형
              </span>
              <p>{detailData.category}</p>
            </div>
            <div className="flex">
              <span className="inline-block pr-4 text-[#6A6A6A]">
                진행 방식
              </span>
              <p>{detailData.proceed}</p>
            </div>
            <div className="flex -space-y-4">
              <span className="inline-block pr-4 text-[#6A6A6A]">
                언어 및 프레임워크
              </span>
              <div className="flex">
                {detailData.language.map((name, idx) => {
                  const now = languageList.find((lan) => lan.name === name);
                  if (now)
                    return (
                      <LanguageIcon
                        key={now?.id}
                        language={now}
                        zIndex={`z-[${5 - idx}]`}
                      />
                    );
                })}
              </div>
            </div>
            <div className="flex">
              <span className="inline-block pr-4 text-[#6A6A6A]">
                진행 기간
              </span>
              <p>{detailData.runningTime}</p>
            </div>
            <div className="flex -space-y-4">
              <span className="inline-block pr-4 text-[#6A6A6A]">
                개발 도구
              </span>
              <span className="w-14 h-14 rounded-full overflow-hidden border">
                {ideList.find((ide) => ide.name === detailData.ide)?.icon}
              </span>
            </div>
            <div className="flex">
              <span className="inline-block pr-4 text-[#6A6A6A]">
                시작 예정일
              </span>
              <p>{detailData.runningDate}</p>
            </div>
          </div>
          <hr />
        </section>
        <section className="py-4">
          <span className="font-bold text-xl">모집 내용</span>
          <MarkdownView content={detailData.content} />
        </section>
      </div>
    </main>
  ) : (
    <></>
  );
};

export default PairPostDetail;

// const dummyData: any = {
//   title: "deep dive 자바스크립트 스터디(진행중 후반부)",
//   content: `성남 서현쪽에서 진행하고있는 자바스크립트 스터디입니다. 성남 서현쪽에서 진행하고있는 자바스크립트 스터디입니다. 성남 서현쪽에서 진행하고있는 자바스크립트 스터디입니다. \n
//   ### A paragraph with

//   *emphasis* and **strong importance**.

//   > A block quote with ~strikethrough~ and a URL: https://reactjs.org.

//   * Lists
//   * [ ] todo
//   * [x] done

//   A table:

//   | a | b |
//   | - | - |

//   \`\`\`text 코드 블록\`\`\`

//   \`\`\`js 코드 블록
//   // javascript code
//   let value = 0;
//   console.log(value);
//   \`\`\`
//   `,
//   ide: "VSCODE",
//   runningTime: "1주~1개월",
//   proceed: "온라인",
//   category: "알고리즘",
//   runningDate: "2023-04-10",
//   languages: ["JS", "TS"],
//   created_at: "2023-04-10 15:00",
//   updated_at: "2023-04-10 15:00",
//   status: true,
//   view_count: 0,
// };
