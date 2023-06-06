import React from "react";
import iconX from "../../assets/images/chat/iconX.svg";
import searchIcon from "../../assets/images/chat/search.svg";
import member from "../../assets/images/register/profile.svg";
import { ModalProps } from "types/modalPropsType";

// 임시 채팅 데이터
const chatData = [
  {
    id: 1,
    name: "유저",
    chat: "안녕하세요",
  },
  {
    id: 2,
    name: "유저",
    chat: "안녕하세요, 코딩하고싶어요",
  },
  {
    id: 3,
    name: "유저",
    chat: "알고리즘 문제풀이 언제까지 신청 받으시나요?",
  },
  {
    id: 4,
    name: "유저",
    chat: "오늘 코딩 같이 할래요? 시간 알려주세요 :)",
  },
  {
    id: 5,
    name: "유저",
    chat: "사용하시는 기술스택이 궁금합니다!",
  },
  {
    id: 6,
    name: "유저",
    chat: "기간은 어느정도 생각하시나요?",
  },
  {
    id: 7,
    name: "유저",
    chat: "글 테스트입니다. 장문 글 테스트입니다. 장문 글 테스트입니다.",
  },
];

const Chat = ({ isOpen, setIsModalOpen }: ModalProps) => {
  return (
    <>
      {isOpen ? (
        <div className="fixed inset-0 flex items-center justify-end z-50 mr-20 mb-40">
          <div className="rounded-xl overflow-hidden shadow-xl w-full sm:w-1/3 lg:w-80 mt-20">
            {/* 헤더 UI */}
            <div className="flex bg-blue-600 justify-between items-center h-14">
              <span className="font-semibold text-white text-base ml-6">
                채팅
              </span>
              <img
                src={iconX}
                onClick={() => setIsModalOpen(false)}
                className="mr-5 cursor-pointer"
              />
            </div>

            {/* 채팅 UI */}
            <div className="bg-chat-bg h-[500px] overflow-y-auto">
              <div className="ml-2 mr-2">
                {/* 검색창 */}
                <div className="flex justify-between items-center sticky">
                  <input className="w-full mt-5 h-10 rounded-xl pl-4 focus:outline-none" />
                  <img
                    src={searchIcon}
                    className="cursor-pointer mt-5 absolute right-4"
                  />
                </div>

                {/* 채팅 리스트 */}
                {chatData.map((data, index) => {
                  return (
                    <div
                      className="flex mt-9 mb-8 cursor-pointer"
                      key={data.id}
                    >
                      <img src={member} className="w-14 h-14 rounded-full" />
                      <div className="ml-3">
                        <div className="flex items-center justify-between w-[220px]">
                          <span className="font-semibold text-sm">
                            {data.name}
                            {index + 1}
                          </span>
                          <span className="font-thin text-xs">
                            오후 {index + 1}:00
                          </span>
                        </div>
                        <div className="mt-3 flex items-center">
                          <span className="text-xs text-ellipsis overflow-hidden inline-block w-[180px] whitespace-nowrap">
                            {data.chat}
                          </span>
                          <span className="bg-red-400 text-white font-thin text-[10px] rounded-full inline-flex items-center justify-center w-5 h-5 ml-2">
                            {index + 9}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Chat;
