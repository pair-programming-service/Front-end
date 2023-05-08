import { getPairPostList } from "apis/pairpost";
import PostList from "components/pairPostList/PostList";
import { useEffect, useState } from "react";
import { PairPost } from "types/post.type";

const Main = () => {
  const [postList, setPostList] = useState([] as PairPost[]);

  useEffect(() => {
    getPairPostList(1, 4, "" || "", []).then((res) => {
      setPostList(res.data.data);
    });
  }, []);

  return (
    <main className="w-screen">
      <section className="h-screen bg-[#D6E6F2]">
        <div className="max-w-[1180px] mx-[170px] my-auto flex justify-between items-center">
          <div className="mx-8 block relative">
            <h1 className="pt-40 text-[48px] font-semibold">
              페어랑 코딩하자!
            </h1>
            <p>
              페어 프로그래밍이란, 하나의 모니터로 두 사람이
              <br />
              대화를 통해 서로의 생각을 공유하며 프로그래밍하는 개발 방법이에요.
              <br /># 실시간 코드 리뷰 # 지식 공유 # 소프트 스킬 향상
            </p>
          </div>
          <div className="mt-32 block relative">
            <img
              alt=""
              src={require("../assets/images/main-1.png")}
              className="m-20 object-cover h-64 w-64"
            />
          </div>
        </div>
      </section>
      <section className="h-screen bg-[#F7FBFC]">
        <div className="max-w-[1180px] mx-[170px] my-auto flex justify-between items-center">
          <div className="mx-8 block relative">
            <h1 className="pt-40 text-[48px] font-semibold">
              누구랑 페어하지?
            </h1>
            <p>
              페어 프로그래밍을 경험해보고 싶은 당신, 그런데 마땅한 상대가
              없다면?
              <br />
              코딩메이트에서 페어를 찾아보세요.
              <br /># 원하는 시간 # 온라인 # 오프라인
            </p>
          </div>
          <div className="mt-32 block relative">
            <img
              alt=""
              src={require("../assets/images/main-2.png")}
              className="m-20 object-cover h-64 w-64"
            />
          </div>
        </div>
      </section>
      <section className="h-screen bg-[#B9D7EA]">
        <div className="max-w-[1180px] mx-[170px] my-auto flex justify-between items-center">
          <div className="mx-8 block relative">
            <h1 className="pt-40 text-[48px] font-semibold">
              내가 원하는대로!
            </h1>
            <p>
              내가 가진 기술 스택으로 검색할 수 있어요.
              <br />
              문제 풀이부터 구현까지 진행 내용을 선택할 수 있어요.
              <br />
              온라인, 오프라인 조건으로 검색할 수 있어요.
            </p>
          </div>
          <div className="mt-32 block relative">
            <img
              alt=""
              src={require("../assets/images/main-3.png")}
              className="m-20 object-cover h-64 w-64"
            />
          </div>
        </div>
      </section>
      {/* // TODO: 추후 채팅기능 소개 부분 */}
      <section className="max-w-[1180px] mx-[170px]">
        <div className="w-full pt-24 flex justify-center items-center text-2xl font-bold  mb-4">
          페어 모집 글 목록
        </div>
        <div className="flex w-full gap-4 mb-4">
          <PostList postList={postList} />
        </div>
      </section>
    </main>
  );
};

export default Main;
