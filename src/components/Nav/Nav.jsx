import React from "react";
import "./Nav.css";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import useTab from "@mui/base/useTab";

const pages = ["About" , "Portfolio" , "Contact" , "Resume"];

function Navigation({ currentPage , setCurrentPage , HandleCloseNavMenu}) {
    return (
        <ul
        className="nav nav-tabs"
        style={{ paddingRight: "35px" , paddingTop: "22px"}}
        >
        <li className="nav-item">
            <a
            id = "nav-link"
            href = "#about"
            onClick={() => setCurrentPage("About")}
            className={currentPage === "About" ? "nav-link-active" : "nav-link"}
            >
                About 
            </a>
            </li>
            <li className="nav-item">
            <a
            id = "nav-link"
            href = "#resume"
            onClick={() => setCurrentPage("Resume")}
            className={currentPage === "Resume" ? "nav-link-active" : "nav-link"}
            >
                Resume 
            </a>
            </li>
            <li className="nav-item">
            <a
            id = "nav-link"
            href = "#portfolio"
            onClick={() => setCurrentPage("Portfolio")}
            className={currentPage === "Portfolio" ? "nav-link-active" : "nav-link"}
            >
                Portfolio 
            </a>
            </li>
            <li className="nav-item">
            <a
            id = "nav-link"
            href = "#contact"
            onClick={() => setCurrentPage("Contact")}
            className={currentPage === "Contact" ? "nav-link-active" : "nav-link"}
            >
                Contact Me
            </a>
            </li>
        </ul>
    );
};

export default Navigation;