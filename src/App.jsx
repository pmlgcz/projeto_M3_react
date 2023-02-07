import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";

import "./global.css"
export default function App() {
    return(
        <div className="App">
          <Header/>
          <Outlet/>
          <Footer/>
        </div>
      )  
}

