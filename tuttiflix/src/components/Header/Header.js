import React from "react";
import './styles.css';
import { FaUser } from "react-icons/fa";


export default ({black}) => {
    return (
        <header className={black ? 'black'  : ''}>
            <div className="header--title">
                <h1>TUTTiFLIX</h1>
            </div>
            <div className="header--user">
                <FaUser />
            </div>
        </header>
    );
}