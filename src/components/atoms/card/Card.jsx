import styled from "styled-components";

// いろいろなところに使うため、大きさの概念を入れない
// レイアウトの責務は呼ぶ側にある
export const Card = (props) => {
  const { children } = props;
  return <SCard>{children}</SCard>;
};

const SCard = styled.div`
  background-color: #fff;
  /* 色　x軸の距離 y軸の距離 ぼかし どれだけ広げるか*/
  box-shadow: #ddd 0px 0px 4px 2px;
  border-radius: 8px;
  padding: 16px;
`;
