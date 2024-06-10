import {LogButton} from "../../common/Button/LogButton";
import React from "react";
import {Link} from "react-router-dom";

export function SignUp() {
    return (
        <>
            <div id="sign-up-container" className="rounded-lg">
                <div className="container">
                    <div className="row">
                        <div
                            className="w-[26vw] col-5 h-[72vh] bg-[#f1f1f1] shadow-[0px_1px_10px_#FFA633] border-[2px] border-[#FFA633] text-center relative rounded-lg">

                            <LogButton id={"logInBackToHome"} content={"Back to Homepage"} navigate={"/"}
                                       className={"absolute left-0 mt-3 ms-3 p-0.5 font-medium text-[8px] hover:border-[#E9C54A] hover:border-[0.148px] hover: rounded"}/>
                            <h1 className="absolute top-[20vh] right-0 left-0 m-0 text-[25px] font-[700] text-[#ffa633] font-fira-sans">
                                Welcome
                            </h1>

                            <h1 className="absolute top-[28vh] right-[2vw] m-0 w-[21vw] text-[9px] font-[500] text-[#ffa633] font-fira-sans">
                                Hello Shoes company retail company of high end shoes and accessory!
                            </h1>

                            <h1 className="absolute top-[40vh] right-[4.9vw] m-0 w-[15vw] text-[9px] font-[500] text-[rgba(59,59,59,0.9)] dark-h1 font-fira-sans">
                                Have You an Account ?
                            </h1>

                            <Link to={"/signin"}>
                            <a>
                                <button
                                    id="log-in-btn"
                                    type="button"
                                    className="border-b-gray-800 border-[1px] rounded ms-5 mt-5 btn-white bg-white shadow-[0px_1px_10px_#C2C3C2] border-[#000000FF] font-[500] text-[9px] h-[2.4vw] text-black w-[15vw] absolute top-[40vh] right-[5vw] m-0"
                                >
                                    Log In
                                </button>
                            </a>
                            </Link>
                        </div>

                        <div className="col-7">
                        </div>

                    </div>
                </div>
            </div>

        </>
    );
}