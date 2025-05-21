import { jwtDecode } from "jwt-decode";
import { createContext, useContext, useEffect, useState } from "react";

const AuthProvider = createContext();

function AuthContext({ children }) {
  const [user, setUser] = useState(null);
  useEffect(function () {
    async function getUser() {
      const token = localStorage.getItem("user");
      if (token) {
        const user = jwtDecode(token);
        setUser(user);
      }
    }
    getUser();
  }, []);

  const value = {
    user,
  };
  return (
    <AuthProvider.Provider value={value}>{children}</AuthProvider.Provider>
  );
}
function useAuth() {
  const context = useContext(AuthProvider);
  return context;
}

export default { AuthContext, useAuth };
