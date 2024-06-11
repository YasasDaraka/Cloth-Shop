import {SideBar} from "../../common/NavBar/SideBar";
import React from "react";
import {NavBar} from "../../common/NavBar/NavBar";
import {MainForm} from "../Form/MainForm";

export function AdminPage() {
    return (
        <>
            <NavBar signIn={false} signUp={false} date={false} logOut={true}/>
            <SideBar/>
            <MainForm/>
        </>
    );
}