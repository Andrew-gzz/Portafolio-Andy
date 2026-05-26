import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div style={{ backgroundColor: "#07070e", minHeight: "100vh" }}>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
