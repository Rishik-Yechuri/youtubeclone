import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar">
        <ul className="sidebar-menu">
            <li>Home</li>
            <li>Shorts</li>
            <li>Subscriptions</li>
            <li>Library</li>
            <li>History</li>
            <li>Your Videos</li>
    <li>Watch Later</li>
    <li>Liked Videos</li>
    <li>Subscriptions</li>
    {/* Add more subscriptions here */}
    </ul>
    </div>
);
};

export default Sidebar;
