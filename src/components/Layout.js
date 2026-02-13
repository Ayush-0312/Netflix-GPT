import Header from "./Header";
import { Outlet } from "react-router-dom";
import ScrollToTop from "./UI_UX/ScrollToTop";
import { Suspense } from "react";
import RouteLoader from "./UI_UX/RouteLoader";

const Layout = () => {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Suspense fallback={<RouteLoader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
