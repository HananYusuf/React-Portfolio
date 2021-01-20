
    import { Link, useLocation} from 'react-router-dom';

    const Navbar= () => {
        const location = useLocation();

        return (
                <>
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <div className="container">
        <div className="container-fluid">
            <Link to="/" className="navbar-brand text-white" aria-current="page" >HANAN</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                
                <li className="nav-item ">
                <Link to="/about" 
                className={location.pathname === "/about" ? "nav-link active" : "nav-link"}>ABOUT</Link>
                </li>
                <li className="nav-item">
                <Link to="/contact" className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}>CONTACT</Link>
                </li>
                <li className="nav-item">
                <Link to="/portfolio" className={location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}>PORTFOLIO</Link>
                </li>
                
            </ul>    
                
            </div>
        </div>
</div>
        </nav>
                </>
        )
    }

    export default Navbar;