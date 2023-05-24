import { AiFillGithub } from "react-icons/ai";

const GithubLink = ({ link }: { link: string }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="flex items-center gap-1"
    >
      <AiFillGithub />
      <span>github</span>
    </a>
  );
};

export default GithubLink;
