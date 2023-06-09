import React from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { userState } from "state/atoms/userAtom";
import defaultUser from "../../assets/images/register/profile.svg";

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
  const navigate = useNavigate();

  const userData = useRecoilValue(userState);

  const handleOptionSelect = (option: string) => {
    closeDropdown();

    if (option === "마이페이지") navigate("/mypage");
    if (option === "로그아웃") handleLogout();
  };

  return (
    <div className="absolute mt-2 bg-white rounded-md shadow-lg w-40 text-left -right-2">
      <ul className="py-1">
        <div className="flex flex-row items-center px-3 mb-4">
          {userData?.profileImage ? (
            <img
              src={userData.profileImage}
              className="w-10 h-10 rounded-full mr-3"
            />
          ) : (
            <img
              src={defaultUser}
              className="w-10 h-10 rounded-full bg-gray-300 mr-3"
            />
          )}
          <span>{userData?.nickname}</span>
        </div>
        {options.map((option) => (
          <li
            key={option}
            className="px-6 py-2 text-base font-semibold cursor-pointer"
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
