import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import ReactMarkdown from "react-markdown";

export const ArticleDescription = ({ description }) => {
  return (
    <ReactMarkdown
      rehypePlugins={[rehypeRaw]}
      remarkPlugins={[remarkGfm]}
      className="description"
    >
      {description}
    </ReactMarkdown>
  );
};
