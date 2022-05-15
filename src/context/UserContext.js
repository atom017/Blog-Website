import { createContext ,useState,useContext,useEffect} from "react";
import { collection, onSnapshot, orderBy,query } from 'firebase/firestore';
import { db } from "../firebase/FirebaseConfig";

export const UserContext= createContext();

export const UserContextProvider = ({children}) =>{
    const [posts,setPosts] = useState([]);
    const [showPosts,setShowPosts] = useState([]);
    const user =JSON.parse(localStorage.getItem("currentUser"));
    
    const [currentUser,setCurrentUser] = useState(user);
    const [isAuth,setIsAuth] = useState(localStorage.getItem("isBlogAuth"));
    const [toggleMenu,setToggleMenu] = useState(false);
   
    const getAllPosts = () =>{
        const blogRef = collection(db,"Posts");
        const q = query(blogRef,orderBy("createdAt","desc"));
        onSnapshot(q,(snapshot) =>{
          const allposts = snapshot.docs.map((doc) =>({
            id:doc.id,
            ...doc.data()
          }))
          setPosts(allposts);
          setShowPosts(allposts);
        })
    }

    useEffect(() =>{
        getAllPosts();
        
    },[])


    return (<UserContext.Provider
    value={{isAuth,setIsAuth,
    currentUser,setCurrentUser,
    toggleMenu,setToggleMenu,
    posts,setPosts,
    showPosts,setShowPosts}}>
        {children}
    </UserContext.Provider>)

}

export const useUserContext = () => {
    return useContext(UserContext);
  }
