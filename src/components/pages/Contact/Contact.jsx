import React , { useState } from "react";
import { TextField , dividerClasses, MenuList ,MenuItem } from "@mui/material";
import  {Button}  from "@mui/base";
//import Stack from "@mui/material/Stack";
import "./Contact.css";

export default function Contact() {
    const [name , setName] = useState("");
    const [email , setEmail] = useState("");
    const [message , setMessage] = useState("");
    const [errorMessage , setErrorMessage] = useState("");

    const validateName = (e) => {
        console.log(e);
        const {name , value} = e.target;
        setName(value);
        if (name === "name") {
            if (value === ""){
                setName("");
                setErrorMessage(`Please enter your name, this is a required field`);
            }
        }
        if (value.length > 0) {
            setErrorMessage(``);
        }
    };

    const validateEmail = (e) => {
        e.preventDefault();
        console.log(e);
        const {name , value } = e.target;
        setEmail(value);
        if (name === "email"){
            if (value === ""){
                setEmail("");
                setErrorMessage(`Please enter a vaild email. this is a required field`);
            }
            const pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
            console.log(!pattern.test(value));
                if (!pattern.test(value)) {
                    setErrorMessage(`Please enter a vaild email`);
                 } else {
                    setErrorMessage("");
            }
        }
    };

    const validateMessage = (e) => {
        console.log(e);
        const {name , value} = e.target;
        setMessage(value);
        if (name === "message") {
            if (value === "") {
                setMessage("");
                setErrorMessage(`Please enter a message. this is a required field`);
            }
        }
        if (value.length > 0) {
            setErrorMessage(``);
        }
    };

    return(
        <>
        <div>
            <h1 style={{display: "flex" , justifyContent: "center"}}> Contact Me</h1>
        </div>
        <form style={{ display: "flex" , justifyContent: "center"}}>
            <MenuList spacing={2}>
                <MenuItem>
                <TextField
                defaultValue={name}
                onBlur = {validateName}
                id = "outlined-basic"
                fullWidth
                label="Name"
                name = "name"
                type="text"
                variant="outlined"
                />
                 </MenuItem>
                 <MenuItem>
                 {" "}
                 <TextField
                 defaultValue={email}
                 onBlur = {validateEmail}
                 id = "outlined-basic"
                 fullWidth
                 label = "Email Address"
                 name = "email"
                 type= "email"
                 variant = "outlined"
                 />
                 </MenuItem>
                 <MenuItem>
                 <textarea
                    defaultValue={message}
                    onBlur = {validateMessage}
                    rows = "15"
                    cols= "40"
                    id="outlined-basic"
                    label = "Message"
                    name="message"
                    type = "text"
                    variant = "outlined"
                    placeholder="Type Your message here!"
                 />
                 </MenuItem>
                 { errorMessage && (
                    <div style={{ display: "flex" , justifyContent: "center"}}>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                 )}
                 <MenuItem style={{ justifyContent: "center"}}>
                 <Button
                    id="contact-button"
                    className="pop-on-hover"
                    xs={{ width: "100%"}}
                    variant = "contained"
                 >
                    Submit
                 </Button>
                 </MenuItem>
            </MenuList>
        </form>
        </>
    );
};