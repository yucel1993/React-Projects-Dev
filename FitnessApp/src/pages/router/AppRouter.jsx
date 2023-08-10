import { Routes } from "react-router-dom";
import Navbar from "../../componets/Navbar";
import About from "../about/About";
import Contact from "../contact/Contact";
import Gallery from "../gallery/Gallery";
import Home from "../home/Home";
import NotFound from "../notFound/NotFound";
import Plans from "../plans/Plans";
import Trainers from "../trainers/Trainers";
import { Route } from "react-router-dom";
import Footer from "../../componets/Footer";

function AppRouter() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/trainers" element={<Trainers />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default AppRouter;
