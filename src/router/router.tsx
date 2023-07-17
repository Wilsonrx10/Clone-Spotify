import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "../views";
import Playslist from "../views/playlist";
import Album from "../views/album";

function Routers() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/playlist/:id" element={<Playslist />} />
        <Route path="/album/:id" element={<Album/>} />
        <Route path="*" element={<Navigate to="/" />}/>
      </Routes>
  );
}

export default Routers;