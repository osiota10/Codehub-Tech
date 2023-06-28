import { NavLink, Outlet } from "react-router-dom";

function RecentJobNav() {
    return (
        <>
            <nav className="mb-6">
                <div className="container">
                    <ul className="nav nav-pills">
                        <li className="nav-item">
                            <NavLink to="#" className='nav-link' aria-current="page">All</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="#" className='nav-link'>CAC Registration</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="#" className='nav-link'>Recent Jobs</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="#" className='nav-link'>Contact</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
            <Outlet />
        </>
    );
}

export default RecentJobNav;