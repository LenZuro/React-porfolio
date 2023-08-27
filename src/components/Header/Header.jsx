import React from "react";
import Navigation from "../Nav/Nav";
import "./Header.css";

export default function Header({ currentPage , setCurrentPage }) {
    return (
        <div className="headparent" style={{ padding: "0px 0px 10px 43px"}}>
            <p id="header-text">Leonard Zuro</p>
            <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </div>
    );
};