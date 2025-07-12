import React, { useState, useEffect } from "react";
import { motion as motionAnimation } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import decode from "jwt-decode";

import { FiMenu, FiArrowRight } from "react-icons/fi";
import navLinks from "../../data/navLinks.json";
import { setCurrentUser } from "../../actions/currentUser";
import Avatar from "../Avatar/Avatar";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-gray-50 z-50 relative">
      <FlipNav isOpen={isOpen} setIsOpen={setIsOpen} />
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};

const FlipNav = ({ isOpen, setIsOpen }) => {
  return (
    <nav className="bg-white sm:p-4 p-2 border-b-[1px] border-gray-200 flex flex-col relative z-50">
      <div className="flex items-center justify-between">
        <NavLeft setIsOpen={setIsOpen} />
        <NavRight />
      </div>
      {isOpen && (
        <div className="lg:hidden mt-2">
          <NavMenu isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      )}
    </nav>
  );
};

const Logo = () => {
  return (
    <Link to="/">
      <img src="/logo192.png" width={50} height={50} alt="Logo" />
    </Link>
  );
};

const NavLeft = ({ setIsOpen }) => {
  return (
    <div className="flex items-center gap-6">
      <motionAnimation.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="block lg:hidden text-gray-950 text-2xl"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <FiMenu />
      </motionAnimation.button>
      <Logo />
      {navLinks.map((link) => (
        <NavLink key={link.href} text={link.label} links={link.href} />
      ))}
    </div>
  );
};

const NavLink = ({ text, links }) => {
  return (
    <Link
      to={links}
      rel="nofollow"
      className="hidden lg:block h-[30px] overflow-hidden font-medium"
    >
      <motionAnimation.div whileHover={{ y: -30 }}>
        <span className="flex items-center h-[30px] text-gray-500">{text}</span>
        <span className="flex items-center h-[30px] text-teal-600">{text}</span>
      </motionAnimation.div>
    </Link>
  );
};

const NavRight = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const User = useSelector((state) => state.currentUserReducer);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
    dispatch(setCurrentUser(null));
  };

  useEffect(() => {
    const token = User?.token;
    if (token) {
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) {
        handleLogout();
      }
    }
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))));
  }, [User?.token, dispatch]);

  return (
    <div className="flex items-center gap-4">
      {User === null ? (
        <Link
          to="/Auth"
          className="nav-item px-4 py-2 border border-blue-500 rounded bg-blue-100 hover:bg-blue-200"
        >
          Log in
        </Link>
      ) : (
        <>
          <Avatar
            backgroundColor="#009dff"
            px="14px"
            py="7px"
            borderRadius="50%"
            color="white"
          >
            <Link
              to={`/Users/${User?.result?._id}`}
              style={{ color: "white", textDecoration: "none" }}
            >
              {User.result.name.charAt(0).toUpperCase()}
            </Link>
          </Avatar>
          <button
            onClick={handleLogout}
            className="nav-item px-4 py-2 border border-red-500 rounded bg-red-100 hover:bg-red-200"
          >
            Log out
          </button>
        </>
      )}
    </div>
  );
};

const NavMenu = ({ isOpen, setIsOpen }) => {
  const handleClick = () => setIsOpen(false);

  return (
    <motionAnimation.div
      variants={menuVariants}
      initial="closed"
      animate={isOpen ? "open" : "closed"}
      className="bg-white shadow-lg flex flex-col gap-4 px-4 py-4 border-t rounded-b-md"
    >
      {navLinks.map((link) => (
        <MenuLink
          key={link.href}
          text={link.label}
          links={link.href}
          onClick={handleClick}
        />
      ))}
    </motionAnimation.div>
  );
};

const MenuLink = ({ text, links, onClick }) => {
  return (
    <motionAnimation.div
      onClick={onClick}
      className="h-[30px] overflow-hidden font-medium text-lg flex items-start gap-2"
    >
      <motionAnimation.span variants={menuLinkArrowVariants}>
        <FiArrowRight className="h-[30px] text-gray-950" />
      </motionAnimation.span>
      <motionAnimation.div whileHover={{ y: -30 }}>
        <span className="flex items-center h-[30px] text-gray-500">{text}</span>
        <span className="flex items-center h-[30px] text-teal-600">{text}</span>
      </motionAnimation.div>
    </motionAnimation.div>
  );
};

// Animation Variants
const menuVariants = {
  open: {
    scaleY: 1,
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  closed: {
    scaleY: 0,
    opacity: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.1,
    },
  },
};

const menuLinkArrowVariants = {
  open: {
    x: 0,
  },
  closed: {
    x: -4,
  },
};

export default Nav;
