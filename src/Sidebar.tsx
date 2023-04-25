import React, {useEffect, useState} from "react";
import "./Sidebar.css";

const Sidebar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(true);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
            <div className="hamburger" onClick={toggleSidebar}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <ul className="sidebar-menu">
                <li className="essential">
                    <svg className="icon" viewBox="0 0 24 24">
                        {/* SVG path for the Home icon */}
                    </svg>
                    <span className="label">Home</span>
                </li>
                <li>
                    <svg className="icon" viewBox="0 0 24 24">
                        {/* SVG path for the Shorts icon */}
                    </svg>
                    <span className="label">Shorts</span>
                </li>
                <li className="essential">
                    <svg className="icon" viewBox="0 0 24 24">
                        {/* SVG path for the Subscriptions icon */}
                    </svg>
                    <span className="label">Subscriptions</span>
                </li>
                <li className="essential">
                    <svg className="icon" viewBox="0 0 24 24">
                        {/* SVG path for the Library icon */}
                    </svg>
                    <span className="label">Library</span>
                </li>
                {/* Add more items with custom SVG icons here */}
                <li>
                    <svg className="icon" viewBox="0 0 24 24">
                        {/* Placeholder SVG path for the first custom icon */}
                    </svg>
                    <span className="label">Placeholder 1</span>
                </li>
                <li>
                    <svg className="icon" viewBox="0 0 24 24">
                        {/* Placeholder SVG path for the second custom icon */}
                    </svg>
                    <span className="label">Placeholder 2</span>
                </li>
                <li>
                    <svg className="icon" viewBox="0 0 24 24">
                        {/* Placeholder SVG path for the third custom icon */}
                    </svg>
                    <span className="label">Placeholder 3</span>
                </li>
            </ul>
            <div className="subscription-section">
                {/* Add subscription items here */}
            </div>
        </div>
    );
};

export default Sidebar;
