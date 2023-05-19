import Layout from "components/layout/Layout";
import OAuth2RedirectHandler from "components/modal/OAuth2RedirectHandler";
import Main from "pages/Main";
import MyPage from "pages/MyPage";
import PairPostDetail from "pages/PairPostDetail";
import PairPostEdit from "pages/PairPostEdit";
import PairPostList from "pages/PairPostList";
import SignUp from "pages/SignUp";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Router = () => {
  const routerData = [
    {
      path: "/",
      element: <Main />,
    },
    {
      path: "/pairpostlist",
      element: <PairPostList />,
    },
    {
      path: "/pairpostedit",
      element: <PairPostEdit />,
    },
    {
      path: "/pairpostedit/:id",
      element: <PairPostEdit />,
    },
    {
      path: "/pairpostdetail/:id",
      element: <PairPostDetail />,
    },
    {
      path: "/signup",
      element: <SignUp />,
    },
    {
      path: "/mypage",
      element: <MyPage />,
    },
    {
      path: "/oauth/callback/kakao",
      element: <OAuth2RedirectHandler />,
    },
  ];

  return (
    <BrowserRouter>
      <Routes>
        {routerData.map((data) => (
          <Route key={data.path} path="/" element={<Layout path={data.path} />}>
            <Route path={data.path} element={data.element} />
          </Route>
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
