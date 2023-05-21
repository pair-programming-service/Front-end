import React from "react";

interface SelectDropdownProps {
  options: string[];
  handleLogout: () => void;
  closeDropdown: () => void;
}

const SelectDropdown = ({
  options,
  handleLogout,
  closeDropdown,
}: SelectDropdownProps) => {
  const handleOptionSelect = (option: string) => {
    closeDropdown();

    if (option === "마이페이지") console.log("마이페이지"); // 마이페이지 라우팅 구현 예정
    if (option === "로그아웃") handleLogout();
  };

  return (
    <div className="absolute mt-2 bg-white rounded-md shadow-lg w-40 text-center -right-2">
      <ul className="py-1">
        {options.map((option) => (
          <li
            key={option}
            className="px-4 py-2 text-base font-semibold cursor-pointer"
            onClick={() => handleOptionSelect(option)}
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SelectDropdown;
