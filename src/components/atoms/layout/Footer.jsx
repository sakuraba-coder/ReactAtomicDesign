import styled from "styled-components";

export const Footer = () => {
  //  &copy;でコピーライトをつける
  return <SFooter>&copy; 2022 test Ink.</SFooter>;
};

const SFooter = styled.header`
  background-color: #11999e;
  color: #fff;
  text-align: center;
  padding: 8px;
  position: fixed;
  bottom: 0;
  width: 100%;
`;
