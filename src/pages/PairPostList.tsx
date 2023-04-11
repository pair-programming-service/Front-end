import LanguageIcon from "components/common/LanguageIcon";
import SearchBar from "components/common/SearchBar";
import SquareButton from "components/common/SquareButton";
import { ButtonStyle } from "types/styles.type";

const PairPostList = () => {
  const buttonStyle1: ButtonStyle = { isWhite: true };
  const buttonStyle2: ButtonStyle = { isWhite: false };
  return (
    <div className="w-screen">
      <SquareButton
        text="테스트"
        handleClick={() => {
          console.log("hi");
        }}
        style={buttonStyle1}
      />
      <SquareButton text="파랑" handleClick={() => {}} style={buttonStyle2} />
      <SearchBar />
      <LanguageIcon language={"javascript"} />
    </div>
  );
};

export default PairPostList;
