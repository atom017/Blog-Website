import { createContext ,useState,useContext} from "react";


export const UserContext= createContext();

export const UserContextProvider = ({children}) =>{
    
    const [user,setUser] = useState({
        id:'',
        name:'',
        photoURL:'',
        
    });
    const [isAuth,setIsAuth] = useState(false);

    return (<UserContext.Provider
    value={{isAuth,setIsAuth,user,setUser}}>
        {children}
    </UserContext.Provider>)

}

export const useUserContext = () => {
    return useContext(UserContext);
  }
