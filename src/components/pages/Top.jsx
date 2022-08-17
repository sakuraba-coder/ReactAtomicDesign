import styled from "styled-components";
import { SecondaryButton } from "../atoms/button/SecondaryButton";

export const Top = () => {
  return (
    <SContainer>
      <h2>TOPページです</h2>
      <SecondaryButton>管理者ユーザー</SecondaryButton>
      <br />
      <br />
      <SecondaryButton>一般ユーザー</SecondaryButton>
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
`;
