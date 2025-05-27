import { Link } from "react-router-dom"

function Signup() {
    return (
        <main className="flex flex-col justify-center items-center bg-[url(background.jpg)]   bg-cover bg-center min-w-screen min-h-screen">
        <div className=" bg-[rgba(0,0,0,0.4)] fixed top-0 left-0  min-w-screen min-h-screen"></div>
  
        <div className="relative z-1 bg-white flex flex-col px-[55px] py-[36px] rounded-[21px] ">
          <img width={310} height={198} src="logo-2.svg"></img>
          <form className="flex flex-col justify-center items-center">
            <input
            autoComplete="name"
              className="w-[111%] bg-[#F1F1F1] p-[12px] text-[17px] rounded-[15px] outline-0 border-1 border-[#b4b4b4ee] mt-5"
              placeholder="Full Name"
              type="text"
            />
            <input
            autoComplete="email"
              className="w-[111%] bg-[#F1F1F1] p-[12px] text-[17px] rounded-[15px] outline-0 border-1 border-[#b4b4b4ee] mt-5"
              placeholder="email"
              type="email"
            />
            <input
            autoComplete="username"
              className="w-[111%] bg-[#F1F1F1] p-[12px] text-[17px] rounded-[15px] outline-0 border-1 border-[#b4b4b4ee] mt-5"
              placeholder="username"
              type="text"
            />
            <input
            autoComplete="currunt-password"
              className="w-[110%] bg-[#F1F1F1] p-[12px] text-[17px] rounded-[15px] outline-0 border-1 border-[#b4b4b4ee] mt-5"
              placeholder="password"
              type="password"
            />
            <div className="w-[100%] mt-3 mr-6">
              <label className="font-semibold" htmlFor="role">role:</label>
            <select className="w-[110%] bg-[#F1F1F1] p-[12px]  text-[17px] rounded-[15px] outline-0 border-1 border-[#b4b4b4ee] ">
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
            </div>
            
            <button
              className="w-[80%] border-1  text-center transition ease-in font-light text-xl  text-white bg-primary mt-8 px-7 py-3 rounded-[10px] hover:bg-white cursor-pointer hover:text-primary hover:border-primary drop-shadow-md">
              Sign up
            </button>
            <Link className="text-center font-lex text-[#464646] hover:underline mt-3.5" to={"/login"}>have an account?</Link>
          </form>
        </div>
      </main>
    )
}

export default Signup
