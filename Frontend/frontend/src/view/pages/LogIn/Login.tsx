import React from "react";
import image from "../../../images/shoe-dark.gif"

import {SignInPage} from "./SignInPage";

export function Login() {
    return (
        <section id="log-in-page">
            <img src={image} className={"absolute w-[47.5%] top-[12vh] left-[5.5vw]"}/>
            <SignInPage id={"log-in-container"} className={"w-[32vw] h-[35vw] bg-white absolute top-[6vh] right-0 left-1/2 m-auto"}/>
        </section>
    );
}