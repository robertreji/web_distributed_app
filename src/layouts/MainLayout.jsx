import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

const MainLayout = () => {
  return (
    <div className="w-screen h-screen flex flex-col">
      <Header />

      <div className="flex-1 overflow-auto">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default MainLayout;