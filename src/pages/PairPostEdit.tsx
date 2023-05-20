import { Editor } from "@toast-ui/react-editor";
import { editPairPost, getPairPost, postPairPost } from "apis/pairpost";
import SquareButton from "components/common/SquareButton";
import PostEditContent from "components/pairPostEdit/PostEditContent";
import PostEditOption from "components/pairPostEdit/PostEditOption";
import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import {
  durationSelect,
  ideSelect,
  languageSelect,
  onOffSelect,
  programTypeSelect,
  startDateSelect,
} from "state/atoms/editOptionAtom";
import { durationList, onOffList } from "types/editOption.type";
import { ideList } from "types/ide.type";
import { languageList } from "types/language.type";
import { PairPost } from "types/post.type";
import { programmingList } from "types/programming.type";
import { isValidPost } from "utils/isValidPost";

const PairPostEdit = () => {
  const token = localStorage.getItem("token");
  const [title, setTitle] = useState("");
  const [startDate, setStartDate] = useRecoilState(startDateSelect);
  const [programType, setProgramType] = useRecoilState(programTypeSelect);
  const [onOff, setOnOff] = useRecoilState(onOffSelect);
  const [duration, setDuration] = useRecoilState(durationSelect);
  const [ide, setIde] = useRecoilState(ideSelect);

  const [languageSelectArr, setLanguageSelectArr] =
    useRecoilState(languageSelect);

  const { id } = useParams();

  const navigate = useNavigate();
  const editorRef = useRef<Editor>(null);

  // 로그인하지 않은 유저가 /pairpostedit 라우터로 이동할시 '/'로 리다이렉션
  useEffect(() => {
    if (token === null) navigate("/");
  }, []);

  useEffect(() => {
    if (id) {
      getPairPost(Number(id)).then((res) => {
        setTitle(res.data.data.title);
        setStartDate(res.data.data.runningDate.padStart(10, "20"));
        setIde(ideList.filter((el) => el.name === res.data.data.ide)[0].id);
        setProgramType(
          programmingList.filter((el) => el.name === res.data.data.category)[0]
            .id
        );
        setOnOff(
          onOffList.filter((el) => el.name === res.data.data.proceed)[0].id
        );
        setDuration(
          durationList.filter((el) => el.name === res.data.data.runningTime)[0]
            .id
        );
        setLanguageSelectArr(
          languageList.filter((lan) =>
            res.data.data.language.includes(lan.name)
          )
        );
      });
    }
  }, [id]);

  const handlePost = () => {
    const post: PairPost = {
      title,
      content: editorRef.current?.getInstance().getMarkdown() || "",
      ide: ideList.filter((el) => ide === el.id).map((el) => el.name)[0], // find 함수로 바꿔도 될 듯
      runningTime: durationList.filter((el) => duration === el.id)[0].name,
      proceed: onOffList.filter((el) => onOff === el.id)[0].name,
      category: programmingList.filter((el) => programType === el.id)[0].name,
      runningDate: startDate,
      language: languageList
        .filter((lan) => languageSelectArr[lan.id])
        .map((el) => el.name),
    };

    if (isValidPost(post)) {
      if (id === undefined) {
        postPairPost(post)
          .then((res) => {
            if (res.status === 200)
              navigate(`/pairpostdetail/${res.data.data.id}`);
          })
          .catch((err) => console.error(err));
      } else {
        editPairPost(post, Number(id))
          .then((res) => {
            if (res.status === 200)
              navigate(`/pairpostdetail/${res.data.data.id}`);
          })
          .catch((err) => console.error(err));
      }
    } else {
      alert("정보를 모두 입력해주세요.");
    }
  };

  const handleCancel = () => {
    if (id === undefined) navigate("/pairpostlist");
    else navigate(`/pairpostdetail/${id}`);
  };

  return (
    <div className="py-20">
      <PostEditOption />
      <PostEditContent
        title={title}
        setTitle={setTitle}
        editorRef={editorRef}
      />
      <div className="flex justify-end gap-3 mt-3">
        <SquareButton
          text="취소하기"
          style={{ isWhite: true }}
          handleClick={handleCancel}
        />
        <SquareButton
          text="등록하기"
          style={{ isWhite: false }}
          handleClick={handlePost}
        />
      </div>
    </div>
  );
};

export default PairPostEdit;
