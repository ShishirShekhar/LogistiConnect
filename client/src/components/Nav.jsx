import { AiFillMessage } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();

  const signOut = () => {
    localStorage.removeItem("login");
    navigate("/");
  };

  return (
    <>
      <nav className="w-full flex justify-between items-center px-10 py-2">
        <Link to='/messages'>
          <AiFillMessage className="text-4xl" />
        </Link>

        <button type="submit" className="submit" onClick={signOut}>
          Sign Out
        </button>
      </nav>
    </>
  );
};

export default Nav;
