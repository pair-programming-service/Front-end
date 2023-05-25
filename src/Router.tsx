import Layout from "components/layout/Layout";
import OAuth2RedirectHandler from "components/modal/OAuth2RedirectHandler";
import Main from "pages/Main";
import MyPage from "pages/MyPage";
import PairPostDetail from "pages/PairPostDetail";
import PairPostEdit from "pages/PairPostEdit";
import PairPostList from "pages/PairPostList";
import SignUp from "pages/SignUp";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

const Router = () => {
  const token = localStorage.getItem("token");
  const isAuth = token !== "undefined" && token !== null;

  const routerData = [
    {
      path: "/",
      element: <Main />,
      auth: "COMMON",
    },
    {
      path: "/pairpostlist",
      element: <PairPostList />,
      auth: "COMMON",
    },
    {
      path: "/pairpostedit",
      element: <PairPostEdit />,
      auth: "AUTH",
    },
    {
      path: "/pairpostedit/:id",
      element: <PairPostEdit />,
      auth: "AUTH",
    },
    {
      path: "/pairpostdetail/:id",
      element: <PairPostDetail />,
      auth: "COMMON",
    },
    {
      path: "/mypage",
      element: <MyPage />,
      auth: "AUTH",
    },
    {
      path: "/signup",
      element: <SignUp />,
      auth: "NO_AUTH",
    },
    {
      path: "/oauth/callback/kakao",
      element: <OAuth2RedirectHandler />,
      auth: "NO_AUTH",
    },
  ];

  return (
    <BrowserRouter>
      <Routes>
        {routerData.map((data) => (
          <Route key={data.path} path="/" element={<Layout path={data.path} />}>
            {data.auth === "NO_AUTH" ? (
              <Route
                path={data.path}
                element={isAuth ? <Navigate to="/" replace /> : data.element}
              />
            ) : data.auth === "AUTH" ? (
              <Route
                path={data.path}
                element={isAuth ? data.element : <Navigate to="/" replace />}
              />
            ) : (
              <Route path={data.path} element={data.element} />
            )}
          </Route>
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
