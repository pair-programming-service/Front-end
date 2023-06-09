import { getPairPostList } from "apis/pairpost";
import SearchBar from "components/common/SearchBar";
import SquareButton from "components/common/SquareButton";
import OptionFilter from "components/pairPostList/OptionFilter";
import PostList from "components/pairPostList/PostList";
import { useEffect, useState } from "react";
import { BiFirstPage, BiLastPage } from "react-icons/bi";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import Pagination from "react-js-pagination";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import {
  languageFilter,
  programTypeFilter,
  statusFilter,
} from "state/atoms/filterOptionAtom";
import { languageList } from "types/language.type";
import { PairPost } from "types/post.type";
import { programmingList } from "types/programming.type";
import { ButtonStyle } from "types/styles.type";
import ChatIcon from "../assets/images/chat/chatIcon.svg";
import ChatList from "components/modal/ChatList";

const PairPostList = () => {
  const navigate = useNavigate();
  const buttonStyle: ButtonStyle = { isWhite: false };
  const [postList, setPostList] = useState([] as PairPost[]);
  const [totalPage, setTotalPage] = useState(1);
  const lanFilter = useRecoilValue(languageFilter);
  const programFilter = useRecoilValue(programTypeFilter);
  const status = useRecoilValue(statusFilter);

  const [searchParams] = useSearchParams();
  const [searchInput, setSearchInput] = useState("");
  const nowPage = Number(searchParams.get("page")) || 1;
  const searchValue = searchParams.get("search");

  useEffect(() => {
    const filterdLanNames: string[] = [];
    lanFilter.forEach((bool, idx) => {
      if (bool) {
        filterdLanNames.push(languageList[idx].name);
      }
    });
    setSearchInput(searchValue || "");
    getPairPostList(
      nowPage,
      20,
      searchValue || "",
      filterdLanNames,
      programmingList.find((prog) => prog.id === programFilter)?.name,
      status
    ).then((res) => {
      setPostList(res.data.data);
      setTotalPage(res.data.page);
    });
  }, [searchValue, nowPage, ...lanFilter, programFilter, status]);

  const handleSearch = () => {
    navigate(`/pairpostlist?search=${searchInput}&page=1`);
  };

  const handleChangePage = (num: number) => {
    navigate(`/pairpostlist?search=${searchInput}&page=${num}`);
  };

  const [isChatOpen, setIsChatOpen] = useState(true);

  return (
    <div className="w-full px-4 py-20">
      <div className="text-2xl font-bold w-full mb-4">페어 모집 글 목록</div>
      <div className="flex w-full gap-4 mb-4">
        <SearchBar searchInput={searchInput} setSearchInput={setSearchInput} />
        <SquareButton
          text="검색"
          handleClick={handleSearch}
          style={buttonStyle}
        />
      </div>
      <OptionFilter />
      <PostList postList={postList} />
      <div className="flex w-full justify-center">
        <Pagination
          totalItemsCount={totalPage * 20}
          onChange={handleChangePage}
          activePage={nowPage}
          itemsCountPerPage={20}
          hideDisabled={true}
          prevPageText={<GrFormPrevious size={22} />}
          firstPageText={<BiFirstPage size={24} color="black" />}
          nextPageText={<GrFormNext size={22} />}
          lastPageText={<BiLastPage size={24} color="black" />}
          innerClass="flex gap-2 mt-6"
          itemClass="flex justify-center items-center border rounded-full w-8 h-8 cursor-pointer"
          activeClass="bg-cm-400 text-white border-none"
          itemClassPrev="border-none"
          itemClassNext="border-none"
          itemClassFirst="border-none"
          itemClassLast="border-none"
        />
        <div
          onClick={() => setIsChatOpen((prev) => !prev)}
          className="fixed bottom-10 right-20 bg-blue-500 flex items-center justify-center w-16 h-16 rounded-full cursor-pointer"
        >
          <img src={ChatIcon} />
        </div>
        {/* 채팅 모달 */}
        <ChatList isOpen={isChatOpen} setIsModalOpen={setIsChatOpen} />
      </div>
    </div>
  );
};

export default PairPostList;
