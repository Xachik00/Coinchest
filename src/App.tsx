import Header from "./components/Header";
import Footer from "./components/Footer";

import {Routes, Route} from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";

const App = () => {
  return (
   <div className=" mx-auto max-w-[1440px]  ">
    <Header />
     <Routes>
          <Route path={'/'} element={<HomePage/>}/>
          <Route path={'/about'} element={<AboutPage/>}/>
      </Routes>
    
   </div>
  )
}

export default App