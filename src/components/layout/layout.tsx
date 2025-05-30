import { Outlet } from "react-router";
import Header from "./header";
import Footer from "./footer";

function Layout() {
  return (
    <div>
      <Header displayNav={true} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
