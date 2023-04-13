import "@toast-ui/editor/dist/toastui-editor-viewer.css";
import { Viewer } from "@toast-ui/react-editor";

const MarkdownView = ({ content }: { content: string }) => {
  return (
    <div className="text-base">
      <Viewer initialValue={content} />
    </div>
  );
};

export default MarkdownView;
