import Figma from "./components/Figma";
import Food from "./components/Food";
import Engineering from "./components/Engineering";
import Cinema from "./components/Cinema";
import Journalism from "./components/Journalism";
import { Route, Routes } from "react-router-dom"
import Navbar from "./Navbar"
import Story from "./Story"
import NoCategory from "./components/NoCategory";

function App(){
  return (
    <div className="header">
      <Navbar/>

      <Routes>
        <Route path="/" element={<Story/>} />
        <Route path="/figma" element={<Figma/>} />
        <Route path="/food" element={<Food/>} />
        <Route path="/engineering" element={<Engineering/>} />
        <Route path="/cinema" element={<Cinema/>} />
        <Route path="/journalism" element={<Journalism/>} />
        <Route path="*" element={<NoCategory/>} />

      </Routes>
    </div>
  )
}

export default App



