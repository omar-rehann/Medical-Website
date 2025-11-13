import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./component/navbar";
import Footer from "./component/footer";
import BackGround from "./component/background";
import About from "./component/about";
import Work from "./component/work";
import Book from "./component/appointemtn"; 
import SwiperComponent from "./component/swiper";
import News from "./component/news";
import Contact from "./component/contact";
import Home from "./DropDown/home";
import AboutDrop from "./DropDown/aboutdrop";
import BlogDetials from "./component/blogdetials"
import Blogs from "./DropDown/blogs";
import Booking from "./DropDown/bookdrop";
import FaqDrop from "./DropDown/faqdrop";
import ServicesDetailsDrop from "./DropDown/servicesdetialsdrop";
import ServicesDrop from "./DropDown/servicesdrop";
import TeamDrop from "./DropDown/teamdrop";
function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <BackGround />
              <About />
              <Work />
              <Book />
              <SwiperComponent />
              <News />
            </>
          }
        />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<AboutDrop />} />
        <Route path="/team" element={<TeamDrop />} />
        <Route path="/faqs" element={<FaqDrop />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/services" element={<ServicesDrop />} />
        <Route path="/detials" element={<ServicesDetailsDrop />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogsdetilas" element={<BlogDetials />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
