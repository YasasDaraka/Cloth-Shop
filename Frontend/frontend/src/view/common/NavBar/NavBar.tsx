import {LogButton} from "../Button/LogButton";
import React from "react";

export function NavBar() {
    return (
        <header id="header" style={{ boxShadow: '0px 1px 10px #C2C3C2' }}>
            <nav className="container mx-32 flex items-center h-[45px]">
                <div className="w-1/5">

                </div>
                <div className="ml-auto">
                    <LogButton id="signIn" content="Sign In" className="" navigate="/signin"/>
                    <LogButton id="signUp" content="Sign Up" className="ml-5" navigate="/signup"/>
                </div>
            </nav>
        </header>
    );

}