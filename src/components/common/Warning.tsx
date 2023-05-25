const Warning = ({ isValid, text }: { isValid: boolean; text: string }) => {
  return (
    <div className={`text-xs text-red-500 mt-1 ${isValid && "hidden"}`}>
      {text}
    </div>
  );
};

export default Warning;
