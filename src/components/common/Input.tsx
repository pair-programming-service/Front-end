import React from "react";

const Input = ({
  value,
  setValue,
  placeholder,
  type,
}: {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  placeholder: string;
  type: string;
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <input
      className="flex justify-center items-center border rounded w-full p-2 outline-0 placeholder:text-sm"
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      type={type}
    />
  );
};

export default Input;
