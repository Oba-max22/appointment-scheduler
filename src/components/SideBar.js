import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import "../styles/SideBar.css";
import { useHistory } from "react-router-dom";

const SideBar = ({ quickActionItems, manageItems }) => {

    const history = useHistory()

    const goToHome = (e)=> {
        history.push('/')
    }

    return (
        <div className="sidebar-wrapper">
            <img src="./logo.png" alt="ankora-logo" className='logo-img' onClick={goToHome}/>
            
            <div className="menu-wrapper">
                <p className="heading">Quick Actions</p>
                {quickActionItems.map((quickActionItem, index) => (
                    <NavLink
                    className={`nav-link sidebar-links`}
                    to={quickActionItem.path}
                    key={index}
                    exact={quickActionItem.exact}
                    activeStyle={{
                        color: "#ffffff",
                        background: "#F97B5C",
                        borderRadius: "10px",
                        padding: "15px 55px 15px 15px",
                    }}
                    >
                    <i className={`${quickActionItem.icon} nav-link-icon`}></i>
                    <span className="nav-link-text">{quickActionItem.name}</span>
                    </NavLink>
                ))}

                <p className="heading">Manage</p>
                {manageItems.map((manageItem, index) => (
                    <NavLink
                    className={`nav-link sidebar-links`}
                    to={manageItem.path}
                    key={index}
                    exact={manageItem.exact}
                    activeStyle={{
                        color: "#ffffff",
                        background: "#F97B5C",
                        borderRadius: "10px",
                        padding: "15px 55px 15px 15px",
                    }}
                    >
                    <i className={`${manageItem.icon} nav-link-icon`}></i>
                    <span className="nav-link-text">{manageItem.name}</span>
                    </NavLink>
                ))}
                <div className="card">
                    <img src="./profile.png" alt="profile" className='profile-img' />
                    <div className="profile-info">
                        <p className="hospital-name">Acme Clinic, Inc.</p>
                        <p className="nurse-name">Marvin Tunji-ola</p>
                        <p className="view-profile">View Profile</p>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default withRouter(SideBar);