import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  const onClickBtn = () => {
    navigate("/");
  };

  return (
    <div>
      <h2>아래 버튼을 누르면 Home으로 돌아갑니다.</h2>
      <button onClick={onClickBtn}>Home으로 가기</button>
    </div>
  );
};

export default About;
