import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import "./Menu.css";

export default function Menu() {
    const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

    const handleProfileClick = () => {
        setIsProfileDropdownOpen(!isProfileDropdownOpen);
    };

    const menuClass = "menu";
    const activeMenuClass = "menu selected";

    return (
        <div className="menu-container">
            <Link to="/">
                <img src="logo.png" style={{ width: "30px" }} />
            </Link>
            <div className="menus">
                <ul>
                    <li>
                        <NavLink to="/" style={{ textDecoration: "none" }} className={({ isActive }) => isActive ? activeMenuClass : menuClass}>
                            <p>Dashboard</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/orders" style={{ textDecoration: "none" }} className={({ isActive }) => isActive ? activeMenuClass : menuClass}>
                            <p>Orders</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/holdings" style={{ textDecoration: "none" }} className={({ isActive }) => isActive ? activeMenuClass : menuClass}>
                            <p>Holdings</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/positions" style={{ textDecoration: "none" }} className={({ isActive }) => isActive ? activeMenuClass : menuClass}>
                            <p>Positions</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/funds" style={{ textDecoration: "none" }} className={({ isActive }) => isActive ? activeMenuClass : menuClass}>
                            <p>Funds</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/otherApps" style={{ textDecoration: "none" }} className={({ isActive }) => isActive ? activeMenuClass : menuClass}>
                            <p>Apps</p>
                        </NavLink>
                    </li>
                </ul>
                <hr />
                <div className="profile" onClick={handleProfileClick}>
                    <div className="avatar">ZU</div>
                    <p className="username">USERID</p>
                    <div class="dropdown">
                        <p>Option 1</p>
                        <p>Option 2</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
