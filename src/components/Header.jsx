import React , {useContext , useState} from "react";
import header from "../../public/assets/header.png";
import muj from "../../public/assets/muj.png";
import { UserContext } from "../Context/UserProvider";
import footer from "../../public/assets/footer.png";
import { useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosClose } from "react-icons/io"; // Close icon

const Header = () => {
  const { isLoggedIn, setIsLoggedIn, currentUser } = useContext(UserContext);
  const navigate = useNavigate();

  const [isVisible, setIsVisible] = useState(false); // State to toggle menu visibility

  // Toggle the visibility of the mobile menu
  const toggleMenu = () => setIsVisible(!isVisible);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("docId");
    setIsLoggedIn(false);
    navigate("/");
    toast.success("User Logged Out");
  };

  return (
    <div className="h-24 w-full  bg-[#000000] shadow-lg z-30 flex justify-around py-3">
      {/* Div 1  */}
      <div className="flex gap-7 mx-7 ">
        {/* Logo */}
        <div className="h-5/6 bg-white my-auto rounded-full px-1 pr-3">
          <img
            src={header}
            alt=""
            className="h-full pl-3 cursor-pointer"
            onClick={() => navigate("./")}
          />
        </div>
        
      </div>
      {/* Div 2  */}
      <div className="h-5/6 px-14 mx-7 bg-white my-auto rounded-full hidden lg:flex">
        <div className="h-full flex items-center text-xl gap-12 ">
          <p className="font-bold cursor-pointer" onClick={() => navigate("/")}>
            Home
          </p>
          <p className="font-bold cursor-pointer">
            <a href="/#features" className="font-bold cursor-pointer">
              Features
            </a>
          </p>
          <p
            className="font-bold cursor-pointer"
            onClick={() => navigate("/plans")}
          >
            Future Plans
          </p>
          <p
            className="font-bold cursor-pointer"
            onClick={() => navigate("/team")}
          >
            Our Team
          </p>
        </div>
      </div>
      {/* Div 3  */}
      <div className="h-full hidden lg:flex  mx-7">
        <div className="text-black flex gap-10 h-full ">
          {isLoggedIn ? (
            <p
              onClick={() => handleLogout()}
              className="cursor-pointer bg-[#5CC2BC] hover:bg-[#66d9d1] px-7 py-3 my-auto text-xl font-[700] rounded-full text-white "
            >
              Logout
            </p>
          ) : (
            <p
              onClick={() => navigate("/login")}
              className="cursor-pointer bg-[#5CC2BC] hover:bg-[#66d9d1] px-7 py-3 my-auto text-xl font-[700] rounded-full text-white "
            >
              Login
            </p>
          )}
          {!isLoggedIn && (
            <p
              onClick={() => navigate("/register")}
              className="cursor-pointer bg-[#5CC2BC] hover:bg-[#66d9d1] px-7 py-3 my-auto text-xl font-[700] rounded-full text-white "
            >
              SignUp
            </p>
          )}
        </div>
      </div>

      {/* Hamburger Icon (Mobile) */}
      <div
        className="h-full cursor-pointer md:hidden flex justify-center items-center bg-white border-2 rounded-full w-[70px]"
        onClick={toggleMenu} // Toggle the mobile menu
      >
        <GiHamburgerMenu size={20} />
      </div>

        {/* Mobile Menu */}
      {isVisible && (
        <div className="fixed top-0 right-0 w-full bg-white  z-10 shadow-lg pb-5 rounded-bl-[150px]">
          {/* Close Button */}
          <div
            className="flex justify-end p-4 cursor-pointer"
            onClick={toggleMenu}
          >
            <IoIosClose size={30} className="text-[#EF3D5D]" />
          </div>

          {/* Menu Items */}
          <ul className="flex flex-col items-center py-4">
            <li
              className="cursor-pointer py-2 hover:scale-105 hover:text-[#EF3D5D]"
              onClick={() => {
                navigate("/");
                setIsVisible(false); // Close the menu after navigation
              }}
            >
              Home
            </li>
            <li
              className="cursor-pointer py-2 hover:scale-105 hover:text-[#EF3D5D]"
              onClick={() => {
                navigate("/#features");
                setIsVisible(false);
              }}
            >
              Features
            </li>
            <li
              className="cursor-pointer py-2 hover:scale-105 hover:text-[#EF3D5D]"
              onClick={() => {
                navigate("/plans");
                setIsVisible(false);
              }}
            >
              Future Plans
            </li>
            <li
              className="cursor-pointer py-2 hover:scale-105 hover:text-[#EF3D5D]"
              onClick={() => {
                navigate("/about");
                setIsVisible(false);
              }}
            >
              About Us
            </li>
            <li
              className="cursor-pointer py-2 hover:scale-105 hover:text-[#EF3D5D]"
              onClick={() => {
                navigate("/team");
                setIsVisible(false);
              }}
            >
              Our Team
            </li>
          </ul>

          {/* Buttons for mobile */}
          <div className="flex flex-col items-center gap-4 py-4">
            <div
              className="bg-white px-7 rounded-full flex justify-center items-center gap-5 cursor-pointer hover:scale-105 hover:text-[#EF3D5D] border-2 hover:border-[#EF3D5D]"
              onClick={() => setIsVisible(false)} 
            >
              <li className="list-none" onClick={()=> navigate("/login")}>Log in</li>
            </div>
            <div
              className="bg-white px-6 rounded-full flex justify-center items-center gap-5 cursor-pointer hover:scale-105 hover:text-[#EF3D5D] border-2 hover:border-[#EF3D5D]"
              onClick={() => setIsVisible(false)} 
            >
              <li className="list-none" onClick={()=> navigate("/register")}>Sign up</li>
            </div>
          </div>
        </div>
      )}
      
    </div>
  );
};

export default Header;
