import "../styles/secondhomesection.css"
import '@fortawesome/fontawesome-free/css/all.css';
import { Link } from "react-router-dom"



export default function SecondHomeSection(){
    return (
        <div className="second-home-container">
            <div className="left-container">
        	    edit school
            </div>
            <div className="middle-container">
            <ul>
                <li>
                    <Link to="/home" className="footer-links">Home</Link>
                </li>
                    <li>
                        <Link to="/workshops" className="footer-links">Workshops</Link>
                    </li>
                    <li>
                        <Link to="/instructors" className="footer-links">Instructors</Link>
                    </li>

            </ul>
            </div>
            <div className="right-container">
            <i className="fab fa-facebook"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-github"></i>
            <i className="fab fa-linkedin"></i>


            </div>
        </div>
    )
}