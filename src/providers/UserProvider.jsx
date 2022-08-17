// Reactが絶対必要になるので忘れないように
// contextを使用する際にはcreateContextをインポート
import React, { createContext, useState } from "react";

// どのContextを呼び出しているか判別するために以下の一行が必要
export const UserContext = createContext({});
// UserContextを使うときのおきまり
// 何かを囲むときは以下のようにchildrenを使う
export const UserProvider = (props) => {
  const { children } = props;

  const [userInfo, setUserInfo] = useState(null);

  return (
    // 囲っている中でvalueの値が使える
    // 以下の描き方で、userInfoを使えるし、更新することも出来るようになる
    <UserContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </UserContext.Provider>
  );
};
