import { useState } from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/pages/About/About";
import CreatePost from "./components/pages/CreatePost/CreatePost";
import EditPost from "./components/pages/EditPost/EditPost";
import Home from "./components/pages/Home/Home";
import Login from "./components/pages/Login/Login";
import SinglePost from "./components/pages/SinglePost/SinglePost";


function App() {
  
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/singlePost/:id" element={<SinglePost/>}/>
        <Route path="/singlePost/:id/edit" element={<EditPost/>}/>
        <Route path="/createPost" element={<CreatePost/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
