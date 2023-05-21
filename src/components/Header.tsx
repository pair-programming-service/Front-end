import Login from "components/modal/Login";
import { useEffect, useRef, useState } from "react";
import SelectDropdown from "./selectDropdown/SelectDropdown";
import useOnclickOutside from "hooks/useOnclickOutside";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  // 로그인 분기 처리
  useEffect(() => {
    const token = localStorage.getItem("token");
    // const refreshToken = localStorage.getItem("refreshToken");

    token !== "undefined" && token !== null
      ? setIsLogin(true)
      : setIsLogin(false);
  }, []);

  // 로그아웃 처리
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");
    window.location.reload();
  };

  // 옵션창 외부 클릭시 close 처리
  const ref = useRef<HTMLDivElement>(null);
  useOnclickOutside(ref, () => {
    setShowDropdown(false);
  });

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
        {isLogin ? (
          <div ref={ref} className="relative">
            <div className="relative inline-block ">
              <button
                className="w-10 h-10 mt-2 bg-gray-300 rounded-full flex items-center justify-center"
                onClick={() => setShowDropdown((prev) => !prev)}
              >
                {/* 이미지 들어갈 예정 */}
              </button>
              {showDropdown && (
                <SelectDropdown
                  handleLogout={handleLogout}
                  options={["마이페이지", "로그아웃"]}
                  closeDropdown={() => setShowDropdown(false)}
                />
              )}
            </div>
          </div>
        ) : (
          <div className="absolute right-48">
            <button
              className="bg-cm-400 text-base text-white font-medium border rounded-lg px-1 py-0.5"
              onClick={() => setIsModalOpen(true)}
            >
              <p className="px-7 py-1.5 text-white">로그인</p>
            </button>
          </div>
        )}
        <Login isOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      </nav>
    </header>
  );
};

export default Header;
