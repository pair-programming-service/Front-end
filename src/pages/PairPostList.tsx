import { getPairPostList } from "apis/pairpost";
import SearchBar from "components/common/SearchBar";
import SquareButton from "components/common/SquareButton";
import OptionFilter from "components/pairPostList/OptionFilter";
import PostList from "components/pairPostList/PostList";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { PairPost } from "types/post.type";
import { ButtonStyle } from "types/styles.type";

const PairPostList = () => {
  const navigate = useNavigate();
  const buttonStyle: ButtonStyle = { isWhite: false };
  const [postList, setPostList] = useState([] as PairPost[]);
  const [page, setPage] = useState(1);
  const [pageList, setPageList] = useState([1]);

  const [searchParams] = useSearchParams();
  const [searchValue, setSearchValue] = useState(
    searchParams.get("search") || ""
  );

  useEffect(() => {
    getPairPostList(page, 20, searchValue).then((res) => {
      setPostList(res.data.data);
      // setPageList()
    });
  }, [searchParams.get("search")]);

  const handleSearch = () => {
    navigate(`/pairpostlist?search=${searchValue}`);
  };

  return (
    <div className="w-full px-4 py-20">
      <div className="text-2xl font-bold w-full mb-4">페어 모집 글 목록</div>
      <div className="flex w-full gap-4 mb-4">
        <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
        <SquareButton
          text="검색"
          handleClick={handleSearch}
          style={buttonStyle}
        />
      </div>
      <OptionFilter />
      <PostList postList={postList} />
    </div>
  );
};

export default PairPostList;
