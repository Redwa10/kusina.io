import { Link } from "react-router-dom";
import Button from "../components/Button";

function Login() {
  return (
    <main className="flex flex-col justify-center items-center bg-[url(background.jpg)]   bg-cover bg-center min-w-screen min-h-screen">
      <div className=" bg-[rgba(0,0,0,0.4)] fixed top-0 left-0  min-w-screen min-h-screen"></div>

      <div>
        <img src="logo-2.svg"></img>
        <input placeholder="username" type="text" />
        <input placeholder="password" type="password" />
        <Button >Login</Button>
        <Link to={"/signup"} />
      </div>
    </main>
  );
}

export default Login;
