import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./component/navbar";
import Footer from "./component/footer";

// الصفحات الرئيسية
import Home from "./DropDown/home";                    // الصفحة الرئيسية كاملة
import AboutDrop from "./DropDown/aboutdrop";
import TeamDrop from "./DropDown/teamdrop";
import FaqDrop from "./DropDown/faqdrop";
import Booking from "./DropDown/bookdrop";
import ServicesDrop from "./DropDown/servicesdrop";
import ServicesDetailsDrop from "./DropDown/servicesdetialsdrop";
import Blogs from "./DropDown/blogs";
import BlogDetials from "./component/blogdetials";
import Contact from "./component/contact";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />

          <Route path="/about" element={<AboutDrop />} />
          <Route path="/team" element={<TeamDrop />} />
          <Route path="/faqs" element={<FaqDrop />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/services" element={<ServicesDrop />} />
          <Route path="/services/details/:id" element={<ServicesDetailsDrop />} />
          <Route path="/detials" element={<ServicesDetailsDrop />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogsdetilas" element={<BlogDetials />} />
          <Route path="/blogs/:id" element={<BlogDetials />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} /> {/* أو صفحة Not Found */}
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;