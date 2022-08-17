import { BrowserRouter, Route } from "react-router-dom";
import { Top } from "../components/pages/Top";
import { Users } from "../components/pages/Users";
import { DefaultLayout } from "../components/templates/DefaultLayout";
import { HeaderOnly } from "../components/templates/HeaderOnly";

export const Router = () => {
  return (
    // BrowserRouterの中でページ遷移を行う
    <BrowserRouter>
      {/* switchとか必要？とか思ってたら最新バージョンでは変わってるようだ */}
      <switch>
        <Route exact path="/">
          {/* DefaultLayoutで囲む */}
          <DefaultLayout>
            {/* TOPページの取得 */}
            <Top />
          </DefaultLayout>
        </Route>
        <Route path="/users">
          {/* HeaderOnlyで囲む */}
          <HeaderOnly>
            {/* Usersページの取得 */}
            <Users />
          </HeaderOnly>
        </Route>
      </switch>
    </BrowserRouter>
  );
};
