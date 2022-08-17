import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { useRecoilState } from "recoil";

import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organisms/user/UserCard";
import { userState } from "../../store/userState";

// 同じデータを10個作成する
const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    name: `sakasaka${val}`,
    //https://unsplash.com/photos/WX4i1Jq_o0Y を
    // 以下のように修正photosを消してsourceを追加
    image: "https://source.unsplash.com/WX4i1Jq_o0Y",
    email: "test@gmail.com",
    phone: "090-0000-0000",
    company: {
      name: "test会社"
    },
    website: "https://google.com"
  };
});

export const Users = () => {
  // Recoilによるグローバルstate管理
  // const [userInfo, setUserInfo] = useRecoilState(userState);

  return (
    <SContainer>
      <h2>ユーザー一覧</h2>
      <SearchInput />
      <SUserArea>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </SUserArea>
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;

const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  /* レスポンシブにグリッド表記することができる */
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;
