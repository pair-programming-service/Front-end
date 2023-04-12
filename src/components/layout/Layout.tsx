import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="max-w-[1180px] mx-auto">
      <div>헤더</div>
      <Outlet />
    </div>
  );
};

export default Layout;
