import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import AboutUs from "./pages/AboutUs";
import Who from "./pages/Who";
import OurPeoplePage from "./pages/OurPeoplePage";


export default function App() {
  return (
    <>
      <Navbar/>
      <Routes>
       <Route path="/" element={<Home/>} />
       <Route path= "/about-us" element ={<AboutUs/>}/>
       <Route path= "/about-us/who-we-are" element ={<Who/>}/>
       <Route path= "/about-us/our-people" element ={<OurPeoplePage/>}/>

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer/>
    </>
  );
}

function NotFound() {
  return (
    <div className="px-6 py-20 text-center">
      <h1 className="text-3xl font-bold">Page not found</h1>
    </div>
  );
}