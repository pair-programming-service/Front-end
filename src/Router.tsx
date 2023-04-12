import Layout from "components/layout/Layout";
import PairPostList from "pages/PairPostList";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Router = () => {
  const routerData = [
    {
      path: "/",
      element: <div>메인</div>,
    },
    {
      path: "/pairpostlist",
      element: <PairPostList />,
    },
    {
      path: "/pairpostedit",
      element: <div>수정</div>,
    },
    {
      path: "/pairpostdetail",
      element: <div>상세</div>,
    },
  ];

  return (
    <BrowserRouter>
      <Routes>
        {routerData.map((data) => (
          <Route key={data.path} path="/" element={<Layout />}>
            <Route path={data.path} element={data.element} />
          </Route>
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
