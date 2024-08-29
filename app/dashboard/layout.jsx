import Navbar from "../components/dashboard/navbar/Navbar";
import Sidebar from "../components/dashboard/sidebar/Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="flex overflow-auto h-auto">
      <div className="w-1/5 bg-bgSoft text-textPrimary p-[20px] pr-0">
        <Sidebar />
      </div>
      <div className="w-4/5 p-[20px] bg-bgPrimary text-textPrimary">
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default Layout;
