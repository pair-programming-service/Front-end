import DropdownOption from "components/common/DropdownOption";
import { useState } from "react";
import { editOptionList } from "types/editOption.type";

const PostEditOption = () => {
  const [openedOptionNum, setOpenedOptionNum] = useState(0);
  return (
    <div>
      <div className="text-2xl font-bold mb-4">모집 정보를 입력해주세요</div>
      {editOptionList.map((option) => (
        <div key={option.id} className="mb-4">
          <DropdownOption
            option={option}
            openedOptionNum={openedOptionNum}
            setOpenedOptionNum={setOpenedOptionNum}
          />
          <div className="mt-2">
            {openedOptionNum === option.id && option.selectComponent}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostEditOption;
