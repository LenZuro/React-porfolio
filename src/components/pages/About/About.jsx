import React from "react";
import "./About.css";
import headShot from "../../../images/headShot.jpeg";
import  CardMedia  from "@mui/material/CardMedia";

export default function About () {
    return (

        <>
        <div className="image-container">
            <CardMedia
            componet = "img"
            className = "color-img"
            style = {{
                height: "auto",
                width: "50%",
                margin: " 0 auto ",
                paddingTop: "20px",
            }}
            image = {headShot}
            alt = "About Me"
            />
        </div>

        <div style={{ width: "70%" , margin: "0 auto" }}>
            <h1 id="about-me-title">About Me</h1>
            <p id="p-about">
                Hi there! My name is Leonard "Len" Zuro I am a full stack web developer with a focus on the front-end.
             I have lots of work force expiernece since I have been working since 15 through all facets the world has to offer!
            </p>
            <p id="p-about">
                I am a California born and raised spend all the free time I can find either at the beach or in the water surfing or 
                finding new palces beaches or breaks ! I am used to a fast paced industry where I can really show my time management skills 
                and my ability so use crtical thinkings and problem solve on the fly! 
            </p>
            <p id="p-about">
                I am always happy to join in on new conversations about this new tech world that I am joining so please feel free to 
                contact me and talk , I am eagar to learn new things and add new tools to my belt ! I look forward to thse chats and wokring with 
                you all in this indusrty!
            </p>
        </div>
        </>
    );
};