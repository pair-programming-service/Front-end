import React, { ReactElement } from "react";
import { ButtonStyle } from "types/styles.type";

const SquareButton = ({
  text,
  handleClick,
  style,
  icon,
}: {
  text: string;
  handleClick: (e: React.MouseEvent<HTMLElement>) => void | (() => void);
  style: ButtonStyle;
  icon?: ReactElement;
}) => {
  const textColor = style.isWhite ? "text-[#6A6A6A]" : "text-white";
  const bgColor = style.isWhite ? "bg-white" : "bg-cm-400";
  const borderColor = style.isWhite ? "border-[#6A6A6A]" : "border-cm-400";

  return (
    <button
      className={`relative px-7 ${bgColor} border ${borderColor} h-12 rounded-lg ${textColor} font-bold text-base whitespace-nowrap`}
      onClick={handleClick}
    >
      <span>{icon !== undefined && icon}</span>
      {text}
    </button>
  );
};

export default SquareButton;
