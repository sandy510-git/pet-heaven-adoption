// import React ,{useState} from 'react';
// import { Link } from 'react-router-dom';
// import './Navbar.css';
// import Dropdown  from './Dropdown';
// import './SearchBar.css';
// import SearchBar from './SearchBar';

// function Navbar(){
//     const [click,setClick] = useState(false);
//     const handleClick = () => setClick(!click);

//     const closeMoblileMenu = () => setClick(false);
//     const [dropdown,setDropdown] = useState(false);

//     /*-----------------Search bar ------------------------- */
//     const [showSearchBar,setShowSearchBar] = useState(false);
//     const openSearchBar = () => {
//         setShowSearchBar(true);
//         closeMoblileMenu();// Close the mobile menu when the search bar is opened
//     };
//     const closeSearchBar = ()=>{
//         setShowSearchBar(false);
//     };
//     /*------------------------------------------ */

//     const onMouseEnter = ()=>{
//         if(window.innerWidth < 960){
//             setDropdown(false);
//         }else{
//             setDropdown(true);
//         }
//     }
//     const onMouseLeave = ()=>{
//         if(window.innerWidth < 960){
//             setDropdown(false);
//         }else{
//             setDropdown(false);
//         }
//     }
//     return(
//         <>
//         <nav className='navbar'>
//             <Link to = '/' className = 'navbar-logo'>PET HEAVEN </Link>
//             <div className = 'menu-icon' onClick = {handleClick}>
//                 <i className = {click ? 'fas fa-times' : 'fas fa-bars'}/> 
//             </div> {/* PET and three menu icon */}
        
//         <ul className = {click ? 'nav-menu active' : 'nav-menu'}>
//             <li className = 'nav-item' 
//             onMouseEnter = {onMouseEnter} 
//             onMouseLeave = {onMouseLeave} >
//                 <Link to ='/about' className = 'nav-links' onClick = {closeMoblileMenu}> About
//                 <i className = 'fas fa-caret-down'/> {/* drop down icon */}
//                 </Link>
//                 {dropdown && <Dropdown/>}
//             </li> {/* About */}

//             <li className = 'nav-item' >
//                 <Link to ='/pets' className = 'nav-links' onClick = {closeMoblileMenu}> Pets 
//                 <i className = 'fas fa-caret-down'/> {/* drop down icon */}
//                 </Link>
//                 {dropdown && <Dropdown/>}
//             </li> {/* Pets */}

//             <li className = 'nav-item' >
//                 <Link to ='/contact-us' className = 'nav-links' onClick = {closeMoblileMenu}>Services
//                 <i className='fas fa-caret-down'/>{/* drop down icon */}
//                 </Link>
//                 {dropdown && <Dropdown/>} 
//             </li> {/* Service */}

//             <li className = 'nav-item' >
//                 <Link to ='/Supporter' className = 'nav-links' onClick = {closeMoblileMenu}>Supporter
//                 <i className = 'fas fa-caret-down'/> {/* drop down icon */}
//                 </Link> 
//                 {dropdown && <Dropdown/>}
//             </li> {/* Supporter */}

//             <li className = 'nav-item' >
//                 <Link to ='/contact-us' className = 'nav-links' onClick = {closeMoblileMenu}>Contact us</Link>
//             </li> {/* Contact us*/}
           
//             <li className='nav-item'>
//                 <Link to='/search' className='nav-links' onClick= {openSearchBar}>
//                 <i className='fas fa-search fa-lg' /> {/* Search icon */}
//                 </Link>
//             </li> {/* Search icon */}
           
//         </ul>
//         <SearchBar showSearchBar={showSearchBar} closeSearchBar={closeSearchBar} />
//         </nav>
        
//         </>
//     );
// }
// export default Navbar;

import React, { useState } from 'react';
import './SearchBar.css';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown';
import SearchBar from './SearchBar';
import {PetCard} from './PetCard';


function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };
/*-----------------Search bar ------------------------- */
    const [showSearchBar,setShowSearchBar] = useState(false);
    const openSearchBar = () => {
        setShowSearchBar(true);
        closeMobileMenu();// Close the mobile menu when the search bar is opened
    };
     const closeSearchBar = ()=>{
        setShowSearchBar(false);
     };
/*------------------------------------------ */


  return(
    <>
    <nav className='navbar'>
        <Link to = '/' className = 'navbar-logo'>PET HEAVEN </Link>
        <div className = 'menu-icon' onClick = {handleClick}>
            <i className = {click ? 'fas fa-times' : 'fas fa-bars'}/> 
        </div> {/* PET and three menu icon */}
    
    <ul className = {click ? 'nav-menu active' : 'nav-menu'}>

    <li className = 'nav-item'  >
            <Link to ='/home' className = 'nav-links'>Home
            {/* <i className = 'fas fa-caret-down'/> drop down icon */}
            </Link>
            {/* {dropdown && <Dropdown/>} */}
        </li> {/* Home */}

        <li className = 'nav-item'  >
            <Link to ='/about' className = 'nav-links'> About
            {/* <i className = 'fas fa-caret-down'/> drop down icon */}
            </Link>
            {/* {dropdown && <Dropdown/>} */}
        </li> {/* About */}

        <li className = 'nav-item'>
            <Link to ='/pets' className = 'nav-links'> Pets 
            {/* <i className = 'fas fa-caret-down'/> drop down icon */}
            </Link>
            {/* {dropdown && <Dropdown/>}  */}
        </li> {/* Pets */}

        <li className = 'nav-item' >
            <Link to ='/services' className = 'nav-links'>Services
            {/* <i className='fas fa-caret-down'/>drop down icon */}
            </Link>
            {/* {dropdown && <Dropdown/>}  */}
        </li> {/* Service */}

        <li className = 'nav-item' >
            <Link to ='/supporter' className = 'nav-links'>Membership
            {/* <i className = 'fas fa-caret-down'/> drop down icon */}
            </Link> 
            {/* {dropdown && <Dropdown/>} */}
        </li> {/* Supporter */}

        <li className = 'nav-item' >
            <Link to ='/contact' className = 'nav-links'>Contact us</Link>
        </li> {/* Contact us*/}
       
        <li className='nav-item'>
            <Link to='/search' className='nav-links' onClick= {openSearchBar}>
            <i className='fas fa-search fa-lg' id="sear" /> {/* Search icon */}
            </Link>
        </li> {/* Search icon */}
       
    </ul>
    <SearchBar showSearchBar={showSearchBar} closeSearchBar={closeSearchBar} />
    {/*.......................................................................*/}
    {/* <PetCard/> */}


    </nav>
    

    
    </>
);
}
export default Navbar;
