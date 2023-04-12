// import LanguageIcon from "components/common/LanguageIcon";
import { HiArrowLeft } from "react-icons/hi2";
import { useState } from "react";
import { runInNewContext } from "vm";
// import { useNavigate } from "react-router-dom";

type DetailData = {
  title: string;
  content: string;
  ide: string;
  runningTime: string;
  proceed: string;
  category: string;
  runningDate: string;
  languege: string[];
  created_at: string;
  updated_at: string;
  status: false;
  view_count: number;
};

const dummyData: any = {
  title: "deep dive 자바스크립트 스터디(진행중 후반부)",
  content: `성남 서현쪽에서 진행하고있는 자바스크립트 스터디입니다. 온라인과 오프라인 둘다 한주마다 돌아가면서 진행중이고, 25장 클래스까지 진행중입니다. 스터디 진행방식은 한사람마다 발표를 한단원씩 진행중에 있습니다. 딥다이브 스터디중간에오셔서 바로 후반부(25장이후부터) 하셔도되고 초반부부터 발표를 하시고 저희는 복습차원으로 확인해도될것같습니다.
 1.시간대는 매주 월요일 오후 7시 30분입니다. 2분만 구합니다(현재 4분이계십니다.)서현쪽스터디룸(오프라인), 온라인은 구글밋으로 진행하고있습니다.
문의는 https://open.kakao.com/o/ssXOZPef 여기로주세요.`,
  ide: "VSCODE",
  runningTime: "1주~1개월",
  proceed: "온라인",
  category: "알고리즘",
  runningDate: "2023-04-10",
  languege: ["JS", "TS"],
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
    <main className="pt-10 w-screen flex justify-center">
      <div>
        <button
          className="ml-60 w-10 h-10 rounded-lg border flex box-border fixed justify-center items-center"
          onClick={handleBackButton}
        >
          <HiArrowLeft className="w-6 h-6" />
        </button>
      </div>
      <div className="max-w-screen-md mx-auto block  box-border">
        <section>
          <div className="w-lg flex">
            <h1 className="pr-2 inline font-bold text-2xl leading-normal">
              {detailData.title}
            </h1>
            <p className="m-1.5 px-2 py-1 inline-block rounded-xl text-xs bg-[#D6E6F2]">
              {detailData.status ? "모집중" : "모집완료"}
            </p>
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
                {detailData.languege[0]}
                {/* <LanguageIcon language={"javascript"} /> */}
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
          <p className=" leading-normal">{detailData.content}</p>
        </section>
      </div>
    </main>
  );
};

export default PairPostDetail;
