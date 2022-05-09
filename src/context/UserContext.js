import { createContext ,useState,useContext} from "react";


export const UserContext= createContext();

export const UserContextProvider = ({children}) =>{
    const user =JSON.parse(localStorage.getItem("currentUser"));
    let initialUser;
    if(user){
        initialUser = user;
    }
    else{
        initialUser={
            id:'',
            name:'',
            photoURL:'',
        }
    }
    const [currentUser,setCurrentUser] = useState(user);

    const [isAuth,setIsAuth] = useState(localStorage.getItem("isBlogAuth"));
    const [toggleMenu,setToggleMenu] = useState(false);
   //console.log('currentUser in context ',currentUser,'user:',initialUser);
    return (<UserContext.Provider
    value={{isAuth,setIsAuth,currentUser,setCurrentUser,toggleMenu,setToggleMenu}}>
        {children}
    </UserContext.Provider>)

}

export const useUserContext = () => {
    return useContext(UserContext);
  }
