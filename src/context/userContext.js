import { useContext,useState ,createContext} from "react";



const initalState ={isLoggedIn:false ,email:""}

export const  UserContext = createContext()


const UserProvider = (props)=>{
 
const [user,setUser]=useState(initalState);

    return(
        <UserContext.Provider value={{user,setUser}}>
        {props.children}
      </UserContext.Provider>
    )
}

export default UserProvider