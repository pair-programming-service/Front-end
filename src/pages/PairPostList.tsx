import SearchBar from "components/common/SearchBar";
import SquareButton from "components/common/SquareButton";
// import OptionFilter from "components/pairPostList/OptionFilter";
// import PostList from "components/pairPostList/PostList";
import { ButtonStyle } from "types/styles.type";

const PairPostList = () => {
  const buttonStyle: ButtonStyle = { isWhite: false };
  return (
    <div className="w-screen">
      <div className="text-2xl font-bold w-full">페어 모집 글 목록</div>
      <div className="flex w-full gap-4">
        <SearchBar />
        <SquareButton text="검색" handleClick={() => {}} style={buttonStyle} />
      </div>
      {/* <OptionFilter />
      <PostList /> */}
    </div>
  );
};

export default PairPostList;
