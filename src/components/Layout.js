import Header from "./Header";
import { Outlet } from "react-router-dom";
import ScrollToTop from "./UI_UX/ScrollToTop";

const Layout = () => {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Outlet />
    </>
  );
};

export default Layout;
