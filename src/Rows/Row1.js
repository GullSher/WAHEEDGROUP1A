// import Navbar1 from '../Navbar/Navbar1.js'
// import Footer from '../Footer/Footer.js'
import '../Rows/Row1.css'

const Row1 = () => {
    return (

        <div className="Row1">
            {/* <div> */}
            <div className="wrapper">
                <div className={"card"}>
                    {/* <div className="card-navbar"><Navbar1 /></div> */}
                    <h3 className="card-title">CARD TITLE 1</h3>
                    <p className="card-content">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
                    <button className="card-btn">READ MORE</button>
                </div>
                <div className={"card"}>
                    <h3 className="card-title">CARD TITLE 2</h3>
                    <p className="card-content">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
                    <button className="card-btn">READ MORE</button>
                </div>
                <div className={"card"}>
                    <h3 className="card-title">CARD TITLE 3</h3>
                    <p className="card-content">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
                    <button className="card-btn">READ MORE</button>
                </div>

            </div>

            {/* </div> */}


        </div>
    )
}
export default Row1
