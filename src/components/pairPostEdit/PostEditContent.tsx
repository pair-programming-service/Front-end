import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";
import { MutableRefObject } from "react";

const PostEditContent = ({
  title,
  setTitle,
  editorRef,
}: {
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  editorRef: MutableRefObject<Editor | null>;
}) => {
  return (
    <div>
      <div className="text-2xl font-bold mb-2">제목을 입력해주세요</div>
      <input
        className="flex items-center border rounded w-full p-2 outline-0 mb-4"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <div className="text-2xl font-bold mb-2">내용을 입력해주세요</div>
      <Editor initialValue={""} ref={editorRef} />
    </div>
  );
};

export default PostEditContent;
