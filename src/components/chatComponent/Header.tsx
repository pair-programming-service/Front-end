import React from "react";

// 나중에 type 폴더로
interface HeaderProps {
  svg: string;
  onClick: () => void;
}

const Header = ({ svg, onClick }: HeaderProps) => {
  return (
    <div className="flex bg-blue-600 justify-between items-center h-14">
      <span className="font-semibold text-white text-base ml-6">채팅</span>
      <img src={svg} onClick={onClick} className="mr-5 cursor-pointer" />
    </div>
  );
};

export default Header;
