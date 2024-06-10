import {LogButton} from "../../common/Button/LogButton";
import React from "react";
import {Link} from "react-router-dom";
import {TextField} from "../../input/TextField";
import {Select} from "../../input/Select";

export function SignUp() {
    const roleOptions = [
        { value: 'ADMIN', label: 'Admin' },
        { value: 'USER', label: 'User' }
    ];
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
                        <div className="absolute top-0 left-[27vw]">
                            <h1 className="ms-4 mt-4 dark-h1 text-[25px] font-[700] text-black font-fira-sans">
                                Create Account
                            </h1>

                            <h1 className="ms-5 text-[#FFA633] text-[10px] font-[500] font-fira-sans">
                                Sign Up to Access the Portal
                            </h1>

                            <div className="col-md-6 ms-5 mt-1">
                                <label className="font-bold  text-[10px]">Email</label>
                                <TextField id="sign-up-Username" type="text" placeholder={""}
                                           className="w-58  mt-1"/>
                                <p className="mt-1"><small className="text-red-500" id="sign-up-UsernameError"></small>
                                </p>
                            </div>

                            <div className="col-md-6 ms-5">
                                <label className="font-bold  text-[10px]">Password</label>
                                <TextField id="sign-up-Password" type="password" placeholder={""}
                                           className="w-58 mt-1"/>
                                <p className="mt-1"><small className="text-red-500" id="sign-up-PasswordError"></small>
                                </p>
                            </div>

                            <div className="col-md-6 ms-5">
                                <label className="font-bold  text-[10px]">Confirm Password</label>
                                <TextField id="sign-up-rePassword" type="password" placeholder={""}
                                           className="w-58 mt-1"/>
                                <p className="mt-1"><small className="text-red-500"
                                                           id="sign-up-rePasswordError"></small>
                                </p>
                            </div>

                            <div className="col-md-6 ms-5 mt-1">
                                <label className="text-[10px] font-bold block">Role</label>
                                <Select id={"inputRole"} className={"w-[10vw] mt-1"} options={roleOptions}/>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}