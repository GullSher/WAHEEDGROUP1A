// import { ReactComponent as Brand } from '../../Assets/icons/logo.svg'
// import { ReactComponent as Brand } from '../Assets/Icons/waheedgroup-logo1.jpg'
// import '../Navbar/Navbar.css'

// const Navbar = () => {
//    return (

//       <nav>
//          <div class="logo">
//             Waheed Group
//          </div>
//          <input type="checkbox" id="click" />
//          <label for="click" class="menu-btn">
//             <i class="fas fa-bars"></i>
//          </label>
//          <ul>
//             <NavLink to="/">Home</NavLink> – The route to the home page is http://localhost:3000
//             <NavLink to="/about">About</NavLink> – About page route that is, http://localhost:3000/about


// {/* <NavLink to="/services">Services</NavLink> – Services page route that is, http://localhost:3000/services */}
// {/* <NavLink to="/feedback">FeedBack</NavLink> – FeedBack page route that is, http://localhost:3000/feedback */}
// {/* <NavLink to="/contact">ContactUs</NavLink> – ContactUs to the contact page that is http://localhost:3000/contactus */}
// {/* <NavLink to="/blog">Blog</NavLink> – Route to the blog page that is http://localhost:3000/blog */}
// {/* <NavLink to="/Gallery">Gallery</NavLink> – Route to the Gallery page that is http://localhost:3000/gallery */}


// <li><a class="active" href="#">Home</a></li>
// <li><a href="#">About</a></li>
// <li><a href="#">Services</a></li>
// <li><a href="#">Gallery</a></li>
// <li><a href="#">Feedback</a></li>
// <li><a href="#">ContactUs</a></li> 


//          </ul>
//       </nav >

//    )
// }

// export default Navbar


//


import React from 'react';
import { Link } from "react-router-dom";
import '../Navbar/Navbar.css';
const Navbar = () => {
   return (
      <div style={{ backgroundColor: 'black' }}>
         <h1>This is NavBar ....</h1>
         <li>
            <Link to="/">Dogs</Link>
         </li>
         <li>
            <Link to="/cats">Cats</Link>
         </li>
         <li>
            <Link to="/sheeps">Sheeps</Link>
         </li>
         <li>
            <Link to="/goats">Goats</Link>
         </li>
      </div>
   );
}
export default Navbar;

