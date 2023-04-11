// import LanguageIcon from "components/common/LanguageIcon";
import { HiArrowLeft } from "react-icons/hi2";

const PairPostDetail = () => {
  return (
    <main className="pt-10 w-screen flex justify-center">
      <div>
        <button className="ml-80 flex box-border fixed">
          <HiArrowLeft className="w-6 h-6" />
        </button>
      </div>
      <div className="max-w-screen-lg mx-auto block  box-border">
        <section>
          <div className="flex">
            <h1 className="pr-2 inline font-bold text-2xl leading-normal">
              제목 페어 구해요. 제목 페어 구해요. 제목 페어 구해요. 제목 페어
              구해요.
            </h1>
            <p className="m-1.5 px-2 py-1 inline-block rounded-xl text-xs bg-[#D6E6F2]">
              모집중
            </p>
          </div>
          <div className="py-2 flex justify-between">
            <div>
              <span className="font-semibold">작성자</span>
              <span className=" pl-2">작성시간</span>
            </div>
            <span>조회수</span>
          </div>
          <hr />
        </section>
        <section>
          <div className="py-4 grid gap-4 grid-cols-2 grid-rows-3 text-sm ">
            <div className="flex">
              <span className="inline-block pr-4 text-[#6A6A6A]">
                프로그래밍 유형
              </span>
              <p>알고리즘</p>
            </div>
            <div className="flex">
              <span className="inline-block pr-4 text-[#6A6A6A]">
                진행 방식
              </span>
              <p>온라인</p>
            </div>
            <div className="flex">
              <span className="inline-block pr-4 text-[#6A6A6A]">
                언어 및 프레임워크
              </span>
              <span>
                아이콘
                {/* <LanguageIcon language={"javascript"} /> */}
              </span>
            </div>
            <div className="flex">
              <span className="inline-block pr-4 text-[#6A6A6A]">
                진행 기간
              </span>
              <p>1주~1개월</p>
            </div>
            <div className="flex">
              <span className="inline-block pr-4 text-[#6A6A6A]">
                개발 도구
              </span>
              <p>아이콘</p>
            </div>
            <div className="flex">
              <span className="inline-block pr-4 text-[#6A6A6A]">
                시작 예정일
              </span>
              <p>2023.04.11</p>
            </div>
          </div>
          <hr />
        </section>
        <section className="py-4">
          <span className="font-bold text-xl">모집 내용</span>
          <p className=" leading-normal">마크다운</p>
        </section>
      </div>
    </main>
  );
};

export default PairPostDetail;
