// import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { HiArrowLeft } from "react-icons/hi2";
import MarkdownView from "components/MarkdownView";
import Tag from "components/common/Tag";
import LanguageIcon from "components/common/LanguageIcon";

type DetailData = {
  title: string;
  content: string;
  ide: string;
  runningTime: string;
  proceed: string;
  category: string;
  runningDate: string;
  languages: string[];
  created_at: string;
  updated_at: string;
  status: false;
  view_count: number;
};

const dummyData: any = {
  title: "deep dive 자바스크립트 스터디(진행중 후반부)",
  content: `성남 서현쪽에서 진행하고있는 자바스크립트 스터디입니다. 성남 서현쪽에서 진행하고있는 자바스크립트 스터디입니다. 성남 서현쪽에서 진행하고있는 자바스크립트 스터디입니다. \n
  ### A paragraph with 

  *emphasis* and **strong importance**.

  > A block quote with ~strikethrough~ and a URL: https://reactjs.org.
  
  * Lists
  * [ ] todo
  * [x] done
  
  A table:
  
  | a | b |
  | - | - |

  \`\`\`text 코드 블록\`\`\`

  \`\`\`js 코드 블록
  // javascript code
  let value = 0;
  console.log(value);
  \`\`\` 
  `,
  ide: "VSCODE",
  runningTime: "1주~1개월",
  proceed: "온라인",
  category: "알고리즘",
  runningDate: "2023-04-10",
  languages: ["JS", "TS"],
  created_at: "2023-04-10 15:00",
  updated_at: "2023-04-10 15:00",
  status: true,
  view_count: 0,
};
const PairPostDetail = () => {
  // const navigate = useNavigate();
  const [detailData, setDetailData] = useState<DetailData>(dummyData);

  const handleBackButton = () => {
    console.log("cliked");
    // navigate("/");
  };

  return (
    <main className="pt-10 flex justify-center">
      <div>
        <button
          className="w-10 h-10 rounded-lg border bg-white flex box-border fixed justify-center items-center"
          onClick={handleBackButton}
        >
          <HiArrowLeft className="w-6 h-6" />
        </button>
      </div>
      <div className="mx-auto block  box-border">
        <section>
          <div className="w-lg flex">
            <h1 className="pr-2 inline font-bold text-2xl leading-normal">
              {detailData.title}
            </h1>
            <div className="m-1.5 px-2 py-1 inline-block">
              <Tag text={detailData.status ? "모집중" : "모집완료"} />
            </div>
          </div>
          <div className="py-2 flex justify-between">
            <div>
              <span className="font-semibold">작성자</span>
              <span className=" pl-2">{detailData?.created_at}</span>
            </div>
            <span>조회수 {detailData?.view_count}</span>
          </div>
          <hr />
        </section>
        <section>
          <div className="py-4 grid gap-4 grid-cols-2 grid-rows-3 text-sm ">
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
            <div className="flex">
              <span className="inline-block pr-4 text-[#6A6A6A]">
                언어 및 프레임워크
              </span>
              <span>
                {detailData.languages[0]}
                {/* <LanguageIcon zIndex={"0"} language={detailData.languages[0]} /> */}
              </span>
            </div>
            <div className="flex">
              <span className="inline-block pr-4 text-[#6A6A6A]">
                진행 기간
              </span>
              <p>{detailData.runningTime}</p>
            </div>
            <div className="flex">
              <span className="inline-block pr-4 text-[#6A6A6A]">
                개발 도구
              </span>
              <p>{detailData.ide}</p>
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
  );
};

export default PairPostDetail;
