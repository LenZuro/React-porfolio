import React from "react";
import Grid from "@mui/material/Grid";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from "@mui/icons-material/Email";
import "./Footer.css";

const Footer = () => {
    return (
        <div style={{ paddingTop: "30px" , paddingBottom: "30px" }}>
            <Grid 
            style={{ display: "flex" , justifyContent: "center" }}
            container sx={{color: "text.primary"}} 
            >
                <Grid 
                style={{ display: "flex" , justifyContent: "space-evenly" }}
                item xs={4}
                >
                <LinkedInIcon
                id = "icon"
                className="pop-on-hover"
                sx={{fontSize: 50}}
                onClick = {(event) => 
                (window.location.href = "https://www.linkedin.com/in/leonard-zuro-481175214/")}
                />
                <GitHubIcon
                id = "icon"
                className="pop-on-hover"
                sx={{fontSize: 50}}
                onClick = {(event) =>
                (window.location.href = "https://github.com/LenZuro")}
                />
                <EmailIcon
                id = "icon"
                className="pop-on-hover"
                sx={{fontSize: 50}}
                onClick = {(event) =>
                (window.location.href = "mailto:leonardzuro@gmail.com")}
                />
                </Grid>
            </Grid>
        </div>
    );
};

export default Footer;