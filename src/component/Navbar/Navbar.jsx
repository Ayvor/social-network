import style from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={style.app_nav}>
            <div className={`${style.item} ${style.active}`}>
                <a href="https://google.com/">Profile</a>
            </div>
            <div className={style.item}>
                <a href="https://google.com/">Messages</a>
            </div>
            <div className={style.item}>
                <a href="https://google.com/">News</a>
            </div>
            <div className={style.item}>
                <a href="https://google.com/">Music</a>
            </div>
            <div className={`${style.item} ${style.active}`}>
                <a href="https://google.com/">Settings</a>
            </div>
        </nav>
    );
}

export default Navbar;