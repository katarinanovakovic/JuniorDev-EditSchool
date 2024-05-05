import { Link } from "react-router-dom"
export default function Navbar({admin}){
    return (
        <nav className="nav">
            < Link to="/" className="site-title">edit school</Link>
            <ul>
                <li>
                    <Link to="/home" className="nav-links">Home</Link>
                </li>
                    <li>
                        <Link to="/workshops" className="nav-links">Workshops</Link>
                    </li>
                    <li>
                        <Link to="/instructors" className="nav-links">Instructors</Link>
                    </li>
                    {admin && ( 
                    <li>
                        <Link to="/administration" className="nav-links">Administration</Link>
                    </li>
                    )}
            </ul>
        </nav>
    )
}