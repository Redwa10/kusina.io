import { jwtDecode } from "jwt-decode";
import { createContext, useContext, useEffect, useState } from "react";

const authProvider = createContext();

function AuthContext({ children }) {
  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);
  //   get user
  useEffect(function () {
    async function getUser() {
      const token = localStorage.getItem("user");
      if (token) {
        const user = jwtDecode(token);
        console.log(user);
        setUser(user);
      }
      setAuthLoading(false);
    }
    getUser();
  }, []);

  //   logout

  function logout() {
    localStorage.removeItem("user");
   
  }

  //login

  async function login(username,password){
    setAuthLoading(true)
    const res = await fetch("http://127.0.0.1:8000/auth/jwt/create/",{
      method:"POST",
      body: JSON.stringify({
        username,password
      }),
      headers:{
        "Content-Type":"application/json"
      }
    })

    if(!res.ok){
      console.log("loginfailed")
      setAuthLoading(false)
      return
    }
    const data = await res.json()
    setUser(data.access)
    localStorage.setItem("user",data.access)
    setAuthLoading(false)
    return true
  }


  return (
    <authProvider.Provider value={{ user, authLoading, logout,login }}>
      {children}
    </authProvider.Provider>
  );
}
function useAuth() {
  const context = useContext(authProvider);
  return context;
}

export { AuthContext, useAuth };
