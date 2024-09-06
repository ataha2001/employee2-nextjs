import Footer from "../components/dashboard/footer/Footer";
import Navbar from "../components/dashboard/navbar/Navbar";
import Sidebar from "../components/dashboard/sidebar/Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="flex overflow-auto min-h-[100vh]">
      <div className="w-1/5 bg-bgSoft text-textPrimary p-[20px] pr-0">
        <Sidebar />
      </div>
      <div className="w-4/5 p-[20px] bg-bgPrimary text-textPrimary">
        <Navbar />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
