const Nickname = ({ nickname }: { nickname: string }) => {
  return (
    <div className="flex">
      <span className="font-bold text-2xl">{nickname}</span>
      <span className="text-2xl">님</span>
    </div>
  );
};

export default Nickname;
