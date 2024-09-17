import React, {useState} from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Logo from '../assets/small_logo.png'
import {Link} from 'react-scroll'
const Navbar = () => {
      const [nav, setNav] = useState(false)
      const handleClick = () => setNav(!nav)
  return (
    <div className='flex fixed flex-col w-[135px] h-full justify-between items-center px-4 bg-[#eae2b7] text-[#bf2222]'>
      <div className='w-full h-[100px]'>
            <img src={Logo} alt="Big Logo" style={{width: '300px'}}/>
      </div>

      {/* menu */}
      <ul className='text-2xl flex fixed top-[7%] left-0 flex-col md:flex'>
            <li className='py-2 border-2 border-black hover:bg-[#d62828] hover:text-black duration-300'>
            <Link to="home" smooth={true} duration={500}>
                  Home
            </Link>
            </li>
            <li className='py-2 border-2 border-black hover:bg-[#d62828] hover:text-black duration-300'>
            <Link to="about" smooth={true} duration={500}>
                  About
            </Link>
            </li>
            <li className='py-2 border-2 border-black hover:bg-[#d62828] hover:text-black duration-300'>
            <Link to="skills" smooth={true} duration={500}>
                  Skills
            </Link>
            </li>
            <li className='py-2 border-2 border-black hover:bg-[#d62828] hover:text-black duration-300'>
            <Link to="work" smooth={true} duration={500}>
                  Work
            </Link>
            </li>
            <li className='py-2 border-2 border-black hover:bg-[#d62828] hover:text-black duration-300'>
            <Link to="contact" smooth={true} duration={500}>
                  Contact
            </Link>
            </li>
      </ul>

      {/* hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars /> : <FaTimes/>}
      </div>

      {/* Mobile menu */}
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
            <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to="home" smooth={true} duration={500}>
                  Home
            </Link>
            </li>
            <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to="about" smooth={true} duration={500}>
                  About
            </Link>
            </li>
            <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
                  Skills
            </Link>
            </li>
            <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to="work" smooth={true} duration={500}>
                  Work
            </Link>
            </li>
            <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
                  Contact
            </Link>
            </li>
      </ul>

      {/* Social Icons */}
      <div className='hidden lg:flex fixed flex-col top-[50%] left-0'>
            <ul>
                  <li className='w-[160px] h-[60px] flex justify-between items-center  ml-[-100px] hover:ml-[-10px] duration-300 bg-[#eae2b7] border-2 border-black  text-[#bf2222] hover:bg-[#bf2222] hover:text-black'>
                        <a className='flex justify-between items-center w-full' href="https://www.linkedin.com/in/rylen-lanning/">
                              Linkedin <FaLinkedin />
                        </a>
                  </li>
                  <li className='w-[160px] h-[60px] flex justify-between items-center  ml-[-100px] hover:ml-[-10px] duration-300 bg-[#eae2b7] border-2 border-black  text-[#bf2222] hover:bg-[#bf2222] hover:text-black'>
                        <a className='flex justify-between items-center w-full' href="https://github.com/RyLanning">
                              Github <FaGithub />
                        </a>
                  </li>
                  <li className='w-[160px] h-[60px] flex justify-between items-center  ml-[-100px] hover:ml-[-10px] duration-300 bg-[#eae2b7] border-2 border-black  text-[#bf2222] hover:bg-[#bf2222] hover:text-black'>
                        <a className='flex justify-between items-center w-full' href="mailto:rylen.lanning@gmail.com">
                              Email <HiOutlineMail />
                        </a>
                  </li>
                  <li className='w-[160px] h-[60px] flex justify-between items-center  ml-[-100px] hover:ml-[-10px] duration-300 bg-[#eae2b7] border-2 border-black  text-[#bf2222] hover:bg-[#bf2222] hover:text-black'>
                        <a className='flex justify-between items-center w-full' href="https://acrobat.adobe.com/link/review?uri=urn:aaid:scds:US:c4f78aa3-c880-339e-8efa-98a0413ad225">
                              Resume <BsFillPersonLinesFill />
                        </a>
                  </li>
            </ul>
      </div>
    </div>
  )
}

export default Navbar