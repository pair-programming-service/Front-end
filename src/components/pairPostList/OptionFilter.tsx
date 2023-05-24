import DropdownOption from "components/common/DropdownOption";
import SquareButton from "components/common/SquareButton";
import Login from "components/modal/Login";
import { useEffect, useState } from "react";
import { GrPowerReset } from "react-icons/gr";
import { RiCheckboxCircleFill, RiCheckboxCircleLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import {
  languageFilter,
  programTypeFilter,
} from "state/atoms/filterOptionAtom";
import { optionList } from "types/filter.type";
import { languageList } from "types/language.type";

const OptionFilter = () => {
  const token = localStorage.getItem("token");

  const setLanFilteredArr = useSetRecoilState(languageFilter);
  const setProgramFilteredId = useSetRecoilState(programTypeFilter);

  const [openedOptionNum, setOpenedOptionNum] = useState(0);
  const [isRecruiting, setIsRecruiting] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navigate = useNavigate();

  const handleReset = () => {
    setLanFilteredArr(new Array(languageList.length).fill(false));
    setProgramFilteredId(-1);
  };

  const handleIsRecruiting = () => {
    setIsRecruiting(!isRecruiting);
  };

  // 로그인하지 않은 유저가 글 작성하기 클릭시 login modal open
  const handleNavigateEdit = () => {
    token === "undefined" || token === null
      ? setIsModalOpen(true)
      : navigate("/pairpostedit");
  };

  useEffect(() => {
    setOpenedOptionNum(0);
  }, []);

  return (
    <div className="mb-4">
      <div className="flex flex-wrap mb-4">
        {optionList.map((option) => (
          <DropdownOption
            key={option.id}
            option={option}
            openedOptionNum={openedOptionNum}
            setOpenedOptionNum={setOpenedOptionNum}
          />
        ))}
        <div className="flex items-center mr-4">
          <div className="text-base font-bold mr-1 whitespace-nowrap">
            모집 중
          </div>
          {isRecruiting ? (
            <RiCheckboxCircleFill
              size={20}
              cursor={"pointer"}
              onClick={handleIsRecruiting}
              color="#769FCD"
            />
          ) : (
            <RiCheckboxCircleLine
              size={20}
              cursor={"pointer"}
              onClick={handleIsRecruiting}
              color="#769FCD"
            />
          )}
        </div>
        <div className="flex items-center">
          <div className="text-base font-bold mr-1 whitespace-nowrap">
            초기화
          </div>
          <GrPowerReset size={16} cursor={"pointer"} onClick={handleReset} />
        </div>
      </div>
      <div className="flex justify-between">
        {openedOptionNum >= 0 ? (
          optionList[openedOptionNum].selectComponent
        ) : (
          <div />
        )}
        <SquareButton
          text="글 작성하기"
          handleClick={handleNavigateEdit}
          style={{ isWhite: false }}
        />
      </div>
      <Login isOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </div>
  );
};

export default OptionFilter;
