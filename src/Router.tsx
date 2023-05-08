import Layout from "components/layout/Layout";
import Main from "pages/Main";
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
