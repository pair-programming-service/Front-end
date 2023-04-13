import DropdownOption from "components/common/DropdownOption";
import SquareButton from "components/common/SquareButton";
import { useEffect, useState } from "react";
import { GrPowerReset } from "react-icons/gr";
import { RiCheckboxCircleFill, RiCheckboxCircleLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { optionList } from "types/filter.type";

const OptionFilter = () => {
  const [openedOptionNum, setOpenedOptionNum] = useState(0);
  const [isRecruiting, setIsRecruiting] = useState(true);
  const navigate = useNavigate();
  const handleReset = () => {
    // TODO: 옵션 초기화
    // Recoil로 옵션 관리하기
  };
  const handleIsRecruiting = () => {
    setIsRecruiting(!isRecruiting);
  };
  const handleNavigateEdit = () => {
    navigate("/pairpostedit");
  };
  useEffect(() => {
    setOpenedOptionNum(0);
  }, []);
  return (
    <div className="mb-4">
      <div className="flex mb-4">
        {optionList.map((option) => (
          <DropdownOption
            key={option.optionNum}
            option={option}
            openedOptionNum={openedOptionNum}
            setOpenedOptionNum={setOpenedOptionNum}
          />
        ))}
        <div className="flex items-center mr-4">
          <div className="text-base font-bold mr-1">모집 중</div>
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
          <div className="text-base font-bold mr-1">초기화</div>
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
    </div>
  );
};

export default OptionFilter;
