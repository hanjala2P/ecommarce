import React, {useContext } from 'react';
import { Link, NavLink,  } from 'react-router';
import ThemeToggle from './ThemeToggle';
import { ShoppingCart } from 'lucide-react';
import { CartContext } from '../Providers/CartContex';

const Nav = () => {
  // const navigate= useNavigate()
  const {cart} =useContext(CartContext)
    return (
        <div>
           <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><NavLink className={({isActive})=>isActive?'bg-primary text-white hover:bg-primary/80':""} to="/">Home</NavLink></li>
        <li><NavLink className={({isActive})=>isActive?'bg-primary text-white hover:bg-primary/80':""} to="/contact">Contact</NavLink></li>
        <li><NavLink className={({isActive})=>isActive?'bg-primary text-white hover:bg-primary/80':""} to="/about">About</NavLink></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
        <li><NavLink className={({isActive})=>isActive?'bg-primary text-white hover:bg-primary/80':""} to="/">Home</NavLink></li>
        <li><NavLink className={({isActive})=>isActive?'bg-primary text-white hover:bg-primary/80':""} to="/contact">Contact</NavLink></li>
        <li><NavLink className={({isActive})=>isActive?'bg-primary text-white hover:bg-primary/80':""} to="/about">About</NavLink></li>
        </ul>
   
  </div>
  <div className="navbar-end gap-10">
    <div>
      <Link to="/cart" className="">
        <div className='relative'>
          <ShoppingCart/>
          <p className='font-bold text-lg absolute bottom-4 left-5'>{cart.length}</p>
        </div>
      </Link>
    </div>
    <ThemeToggle></ThemeToggle>
  </div>
</div>
        </div>
    );
};

export default Nav;