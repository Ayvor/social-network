import { NavLink } from "react-router-dom";
//import Friends from './Friends/Friends';
import style from "./Navbar.module.css";

const Navbar = (props) => {
    // let friendElements = props.state.friends
    //     .map(f => <Friends src={f.avatar} name={f.name} />)

    return (
        <div className={style.app_nav}>
            <nav>
                <div className={style.item}>
                    <NavLink to="/profile">Profile</NavLink>
                </div>
                <div className={style.item}>
                    <NavLink to="/dialogs">Messages</NavLink>
                </div>
                <div className={style.item}>
                    <NavLink to="/news">News</NavLink>
                </div>
                <div className={style.item}>
                    <NavLink to="/music">Music</NavLink>
                </div>
                <div className={style.item}>
                    <NavLink to="/settings">Settings</NavLink>
                </div>
                <div className={style.item}>
                    <NavLink to="/users">Find user</NavLink>
                </div>
            </nav>
            <div className={style.friendsBlock}>
                <h2>Friends</h2>
                {/* {friendElements} */}
            </div>
        </div>
    );
};

export default Navbar;
