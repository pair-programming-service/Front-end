import Header from "components/Header";
import { Outlet } from "react-router-dom";

const Layout = ({ path }: { path: string }) => {
  const maxWidth = path === "/" ? "" : "max-w-[1180px]";
  return (
    <div className="h-screen">
      <Header />
      <div className={`${maxWidth} mx-auto h-full`}>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
