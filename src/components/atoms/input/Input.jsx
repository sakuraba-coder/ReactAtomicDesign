import styled from "styled-components";

export const Input = (props) => {
  // デフォルトを指定できる
  const { placeholder = "" } = props;
  return <SInput type="text" placeholder={placeholder} />;
};

const SInput = styled.input`
  padding: 8px 16px;
  border: solid #ddd 1px;
  border-radius: 1000px;
  outline: none;
`;
