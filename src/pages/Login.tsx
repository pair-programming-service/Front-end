import React from "react";

interface ModalProps {
  isOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Login = ({ isOpen, setIsModalOpen }: ModalProps) => {
  return (
    <>
      {isOpen ? (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg overflow-hidden shadow-xl w-full sm:w-1/2 lg:w-1/3">
            <div className="px-6 py-4">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6 mt-8 text-center">
                코딩메이트 (임시 Title)
              </h2>
              <form>
                <div className="mb-6">
                  <input
                    className="w-full h-14 px-3 py-2 border rounded-lg outline-none font-medium"
                    type="email"
                    placeholder="이메일"
                  />
                </div>
                <div className="mb-6">
                  <input
                    className="w-full h-14 px-3 py-2 border rounded-lg outline-none font-medium"
                    type="password"
                    placeholder="비밀번호"
                  />
                </div>
                <div className="flex justify-center">
                  <button
                    className="bg-cm-400 h-14 mt-1 text-lg text-white font-bold w-full px-3 py-2 border rounded-lg"
                    type="submit"
                  >
                    로그인
                  </button>
                </div>
              </form>
            </div>
            <div className="bg-gray-100 px-6 py-4">
              <button
                className="text-gray-600 font-semibold hover:text-gray-800 focus:outline-none"
                type="button"
                onClick={() => setIsModalOpen(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Login;
