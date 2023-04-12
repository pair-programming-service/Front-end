import "@toast-ui/editor/dist/toastui-editor-viewer.css";
import { Viewer } from "@toast-ui/react-editor";

const MarkdownView = ({ content }: { content: string }) => {
  return <Viewer initialValue={content} />;
};

export default MarkdownView;
