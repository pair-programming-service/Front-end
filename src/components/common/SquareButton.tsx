import { ButtonStyle } from "types/styles.type";

const SquareButton = ({
  text,
  handleClick,
  style,
}: {
  text: string;
  handleClick: () => void;
  style: ButtonStyle;
}) => {
  const textColor = style.isWhite ? "text-[#6A6A6A]" : "text-white";
  const bgColor = style.isWhite ? "bg-white" : "bg-[#769FCD]";
  const borderColor = style.isWhite ? "border-[#6A6A6A]" : "border-[#769FCD]";

  return (
    <button
      className={`px-7 ${bgColor} border ${borderColor} h-12 rounded-lg ${textColor} font-bold text-base whitespace-nowrap`}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default SquareButton;
