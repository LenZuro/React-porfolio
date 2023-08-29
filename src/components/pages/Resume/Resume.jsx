import React from "react";
import  Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import PdfFile from "../../../images/Resume.pdf";
import "./Resume.css";

export default function Resume () {
    return(

        <Box>
            <div>
                <a 
                href={PdfFile}
                download = "Leonard Zuro Resume"
                target="_blank"
                style = {{ display: "flex" , justifyContent: "center" , paddingTop: "25px"}}
                rel = "noreferrer"
                >
                <Button id="resume-button" className="pop-on-hover">
                    Click here to download my resume ! 
                </Button>    
                </a>
                <h2
                style={{
                    display: "flex",
                    justifyContent: "center",
                    textDecoration: "underline",
                }}
                >
                    Front-end Skills
                </h2>
                <p 
                style={{
                    display: "flex",
                    justifyContent: "center",
                    paddingRight: "100px",
                    }}
                >
                    - HTML
                    <br></br>- CSS
                    <br></br>- JavaScript
                    <br></br>- JQuery
                    <br></br>- React
                    <br></br>- Bootstrap
                    <br></br>- MUI
                </p>
                <h2 
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        textDecoration: "underline",
                    }}
                >
                Back-end Skills
                </h2>
                <p
                style={{
                     display: "flex",
                    justifyContent: "center",
                    paddingRight: "80px",
                    }}
                    >
                    -HTML 
                    <br></br>- Node
                    <br></br>- Express
                    <br></br>- MySQL , Sequelize
                    <br></br>- MongoDB , Mongoose
                    <br></br>- API's
                    <br></br>- REST
                </p>
            </div>
        </Box>

    );
};