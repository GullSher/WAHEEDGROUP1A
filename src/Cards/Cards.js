// import Navbar from '../Navbar/Navbar.js';
import Navbar from '../Navbar/Navbar.js';
import Footer from '../Footer/Footer.js';
import Row1 from '../Rows/Row1.js';
import Row2 from '../Rows/Row2.js';
// import ReactDOM from 'react-dom/client';
// import Slider from '../Slider/Slider.js'

const Cards = () => {
    return (

        <div className="cards">
            {/* <div className="card-header">Header</div> */}
            {/* <div className="card-header1"><Header /></div> */}
            <div className="card-navbar"><Navbar /></div>
            {/* <div className="" ></div> */}
            {/* <div className="card-body">Content</div> */}
            {/* <div className="card-footer">Footer</div> */}
            {/* <div className='slider01'><Slider /></div> */}

            <div className='Rows'> <Row1 /></div>
            {/* <div className='Rows'> <Row1 /></div> */}
            {/* <div className='Rows'>            <Row1 /></div> */}
            <div className='Rows'> <Row2 /></div>
            {/* <div className='Rows'> <Row1 /></div> */}


            <div className="Footer"><Footer /></div>
        </div>
    )
}
export default Cards
