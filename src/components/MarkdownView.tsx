import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const MarkdownView = ({ content }: { content: string }) => {
  return <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>;
};

export default MarkdownView;
