import Header from "./components/Header";
import Footer from "./components/Footer";

import {Routes, Route} from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";

const App = () => {
  return (
   <div className="container mx-auto w-[100%]  ">
    <Header />
     <Routes>
          <Route path={'/'} element={<HomePage/>}/>
          <Route path={'/about'} element={<AboutPage/>}/>
      </Routes>
    <Footer/>
    
   </div>
  )
}

export default App