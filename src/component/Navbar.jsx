import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="app-nav">
            <div className="item">
                <a href="www.google.com">Profile</a>
            </div>
            <div className="item">
                <a href="www.google.com">Messages</a>
            </div>
            <div className="item">
                <a href="www.google.com">News</a>
            </div>
            <div className="item">
                <a href="www.google.com">Music</a>
            </div>
            <div className="item">
                <a href="www.google.com">Settings</a>
            </div>
        </nav>
    );
}

export default Navbar;