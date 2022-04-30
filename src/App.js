import { BrowserRouter,Routes,Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import CreatePost from "./components/pages/CreatePost/CreatePost";
import Home from "./components/pages/Home/Home";
import SinglePost from "./components/pages/SinglePost/SinglePost";

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/singlePost" element={<SinglePost/>}/>
        <Route path="/createPost" element={<CreatePost/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
