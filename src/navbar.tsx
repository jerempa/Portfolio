import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function NavBar() {
    return (
    <nav className="navbar navbar-expand-lg fixed-top navbarScroll">
    <div className="container">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="#home">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#cv">CV</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#showcase">Showcase</a>
                </li>
            </ul>
            
        </div>
    </div>
</nav>
);
}

export default NavBar;