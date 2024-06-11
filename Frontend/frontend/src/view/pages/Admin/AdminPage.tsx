import {SideBar} from "../../common/NavBar/SideBar";
import {MainContent} from "../../common/Main/MainContent";
import {UsersNavBar} from "../../common/NavBar/UsersNavBar";
import {NavBar} from "../../common/NavBar/NavBar";
import React from "react";

export function AdminPage() {
    return (
        <>
            <NavBar signIn={false} signUp={true} date={true}/>
            <SideBar/>
        </>
    );
}