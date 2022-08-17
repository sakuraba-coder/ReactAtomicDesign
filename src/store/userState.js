import { atom } from "recoil";

export const userState = atom({
  // keyは一意。ファイル名とそろえるとベネ
  key: "userState",
  default: { isAdmin: false }
});
