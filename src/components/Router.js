import Header from "./Header";
import Home from "./Home";
import Contact from "./Contact";
import Projects from "./Projects";
import Footer from "./Footer";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
export default function Router() {
  const Layout = () => {
    return (
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
    );
  };
  const BrowserRoutes = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />}></Route>
            <Route path="projects" element={<Projects />}></Route>
            <Route path="contact" element={<Contact />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    );
  };
  return <BrowserRoutes />;
}
