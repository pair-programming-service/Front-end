import Login from "components/modal/Login";
import { useState } from "react";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <header className="block w-full fixed z-10 h-16 text-base font-bold shadow-md bg-white">
      <nav className="max-w-[1180px] mx-auto flex justify-between items-center leading-6">
        <div className="box-border flex items-center">
          <div className="box-border flex items-center">
            <a href="/" className="flex  text-[#000000] hover:text-[#769FCD]">
              <img
                alt=""
                src={require("../assets/images/logo/gothic.png")}
                className="px-1 py-1 object-cover h-16 w-32"
              />
            </a>
          </div>
          <div>
            <a
              href="/pairpostlist"
              className="flex px-4 py-4 text-[#000000] hover:text-[#769FCD]"
            >
              <span>게시글</span>
            </a>
          </div>
          {/* <div>
            <a
              href="/pairpostdetail"
              className="flex px-4 py-4 text-[#000000] hover:text-[#769FCD]"
            >
              <span>준비중</span>
            </a>
          </div> */}
        </div>
        {/* <div className="flex px-4 py-4">오른쪽</div> */}
        <div className="absolute right-48">
          <button
            className="bg-cm-400 text-base text-white font-medium border rounded-lg px-1 py-0.5"
            onClick={() => setIsModalOpen(true)}
          >
            <p className="px-7 py-1.5 text-white">로그인</p>
          </button>
        </div>
        <Login isOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      </nav>
    </header>
  );
};

export default Header;
