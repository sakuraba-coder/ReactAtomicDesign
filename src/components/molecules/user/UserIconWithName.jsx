// useContextを呼び出すとcontextの値を参照できる
import React, { useContext } from "react";
import styled from "styled-components";
import { UserContext } from "../../../providers/UserProvider";

// 値を参照するだけの時はuseRecoilValueを使用する
import { useRecoilValue } from "recoil";
import { userState } from "../../../store/userState";

export const UserIconWithName = (props) => {
  const { image, name } = props;
  // useContextでどのUserContextを使用するのか指定する
  // const { userInfo } = useContext(UserContext);
  // useRecoilValueを使えば値の取得は以下のように定数で行える
  const userInfo = useRecoilValue(userState);
  const isAdmin = userInfo ? userInfo.isAdmin : false;

  return (
    <SContainer>
      <SImg height={160} width={120} src={image} alt={name} />
      <SName>{name}</SName>
      {isAdmin && <SEdit>編集</SEdit>}
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
`;

const SImg = styled.img`
  border-radius: 50%;
`;

const SName = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
  color: #40514e;
`;

const SEdit = styled.span`
  text-decoration: underline;
  color: #aaa;
  cursor: pointer;
`;
