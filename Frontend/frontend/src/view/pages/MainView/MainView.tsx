import React from "react";
import shoeDark from "../../../images/shoe-dark.gif";
import {LogButton} from "../../common/Button/LogButton";

export function MainView() {
    return (
        <section className="w-full">
            <div className="background relative">
                <div id="particles-js"></div>
            </div>

            <div className="relative">
                <img
                    src={shoeDark}
                    className="w-1/2 absolute top-[10vh] left-[50vw]"
                    alt="Shoe Dark"
                />
                <h1 className="absolute top-[20vh] left-[7vw] font-fira-sans font-bold text-[60px]">
                    Step Up
                </h1>
                <h1 className="absolute top-[27vh] left-[6.8vw] font-fira-sans font-extrabold text-[80px] text-[#FFA633]">
                    Feel Sculpted
                </h1>
                <p className="absolute w-[32vw] top-[43vh] left-[7.3vw] font-fira-sans font-bold text-[22px] text-[#9FA0A0]">
                    Exclusive access, fresh fits, medium, high support for every move and every body.
                </p>
                <LogButton id="btn-log" content="Sign In" className="absolute top-[51vh] left-[7.3vw] btn" navigate="/signin" />
            </div>
        </section>
    );
}