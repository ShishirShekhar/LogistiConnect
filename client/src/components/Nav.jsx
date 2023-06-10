import { AiFillMessage } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Nav = () => {
    const naviagte = useNavigate();

    const signOut = () => {
        localStorage.removeItem("login");
        naviagte("/");
    }

  return (
    <nav className="w-full flex justify-between items-center px-10 py-2">
      <AiFillMessage className="text-xl cursor-pointer" />
      <button type="submit" className="submit" onClick={signOut}>
        Sign Out
      </button>
    </nav>
  );
};

export default Nav;
