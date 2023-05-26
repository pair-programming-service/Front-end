const Tag = ({ text, status }: { text: string; status?: boolean }) => {
  let bgColor = "bg-cm-200";
  if (status === false) {
    bgColor = "bg-[#dddddd]";
  }
  return (
    <div
      className={`flex items-center whitespace-nowrap rounded-full text-xs h-6 ${bgColor} px-3`}
    >
      {text}
    </div>
  );
};

export default Tag;
