import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
const Navbar = () => {
    const navList = (
        <ul className="flex space-x-7 text-white font-medium text-md px-5 ">
            {/* Courses */}
            <li>
                <Link to={'/'}>Courses</Link>
            </li>

            {/* Dashboard */}
            <li>
                <Link to={'/dashboard'}>Dasboard</Link>
            </li>

            {/* Login */}
            <li>
                <Link to={'/Login'}>Login</Link>
            </li>

            {/* Signup */}
            <li>
                <Link to={'/signup'}>Signup</Link>
            </li>

            {/* logout */}
            {/* <li>
                logout
            </li> */}
        </ul>
    )
    return (
        <nav className="bg-blue-gray-900 sticky top-0">
            {/* main  */}
            <div className="lg:flex lg:justify-between items-center py-3 lg:px-3 ">
                {/* left  */}
                <div className="left py-3 lg:py-0">
                    <Link to={'/'}>
                    <h2 className=" font-bold text-white text-2xl text-center">Kudemy</h2>
                    </Link>
                </div>

                {/* right  */}
                <div className="right flex justify-center mb-4 lg:mb-0">
                    {navList}
                </div>

                {/* Search Bar  */}
                <SearchBar />
            </div>
        </nav>
    );
}

export default Navbar;