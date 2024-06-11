import {SideBar} from "../../common/NavBar/SideBar";
import React from "react";
import {NavBar} from "../../common/NavBar/NavBar";

export function AdminPage() {
    return (
        <>
            <NavBar signIn={false} signUp={false} date={false} logOut={true}/>
            <SideBar/>
        </>
    );
}