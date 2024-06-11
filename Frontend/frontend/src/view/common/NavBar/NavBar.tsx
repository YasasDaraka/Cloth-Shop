import {LogButton} from "../Button/LogButton";
import React from "react";

export function NavBar() {
    return (
        <header id="header" style={{ boxShadow: '0px 1px 10px #C2C3C2' }}>
            <nav className="w-screen flex items-center h-[60px]">
                <div className="ml-auto mr-4">
                    <LogButton id="signIn" content="Sign In" className="" navigate="/signin"/>
                    <LogButton id="signUp" content="Sign Up" className="" navigate="/signup"/>
                </div>
            </nav>
        </header>
    );

}