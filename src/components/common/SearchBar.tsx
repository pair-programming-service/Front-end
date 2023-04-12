import { AiOutlineSearch } from "react-icons/ai";

const SearchBar = () => {
  return (
    <div className="flex items-center border rounded w-full p-2">
      <AiOutlineSearch size="24" />
      <input className="w-full outline-0 ml-2" />
    </div>
  );
};

export default SearchBar;
