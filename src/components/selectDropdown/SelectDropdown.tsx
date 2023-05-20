import React from "react";

interface SelectDropdownProps {
  options: string[];
  onSelect: (option: string) => void;
  closeDropdown: () => void;
  handleLogout: () => void;
}

const SelectDropdown = ({
  options,
  onSelect,
  closeDropdown,
  handleLogout,
}: SelectDropdownProps) => {
  const handleOptionSelect = (option: string) => {
    onSelect(option);
    closeDropdown();

    if (option === "로그아웃") handleLogout();
    if (option === "마이페이지") console.log("마이페이지"); // 라우팅 구현 예정
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
