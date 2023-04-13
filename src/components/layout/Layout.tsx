import { Outlet } from "react-router-dom";
import Header from "components/Header";

const Layout = () => {
  return (
    <div>
      <Header />
      <div className="max-w-[1180px] mx-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
