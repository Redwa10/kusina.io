import { jwtDecode } from "jwt-decode";
import { createContext, useContext, useEffect, useState } from "react";

const authProvider = createContext();

function AuthContext({ children }) {
  const [user, setUser] = useState(null);
  useEffect(function () {
    async function getUser() {
      const token =  localStorage.getItem("user") ;
      if (token) {
        const user = jwtDecode(token);
        console.log( user)
        setUser(user);
      }
    }
    getUser();
  }, []);

  return (
    <authProvider.Provider value={{ user }}>{children}</authProvider.Provider>
  );
}
function useAuth() {
  const context = useContext(authProvider);
  return context;
}

export  { AuthContext, useAuth };
