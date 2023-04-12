const Tag = ({ text }: { text: string }) => {
  return (
    <div className="flex items-center whitespace-nowrap rounded-full text-xs h-6 bg-[#D6E6F2] px-3">
      {text}
    </div>
  );
};

export default Tag;
