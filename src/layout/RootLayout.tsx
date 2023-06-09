import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const RootLayout = () => {
  return (
    <div>
      <NavBar />

      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
