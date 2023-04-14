import React, { SetStateAction } from "react";
import { AiOutlineSearch } from "react-icons/ai";

const SearchBar = ({
  searchValue,
  setSearchValue,
}: {
  searchValue: string;
  setSearchValue: React.Dispatch<SetStateAction<string>>;
}) => {
  return (
    <div className="flex items-center border rounded w-full p-2">
      <AiOutlineSearch size="24" />
      <input
        className="w-full outline-0 ml-2"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
