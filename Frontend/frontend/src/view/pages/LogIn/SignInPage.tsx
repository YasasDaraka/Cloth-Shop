import {LogButton} from "../../common/Button/LogButton";
import {TextField} from "../../input/TextField";
import React from "react";

interface SignInPageProps {
    id:string,
    className: string
}
export function SignInPage({id,className}: SignInPageProps) {
    return (
        <>
            <div id={id}
                 className={className}>
                <LogButton id={"logInBackToHome"} content={"Back to Homepage"} navigate={"/"}
                           className={"mt-3 ms-3 p-0.5 font-medium text-[8px] hover:border-[#E9C54A] hover:border-[0.148px] hover: rounded"}/>
                <h1 className="mt-2 ms-5 " style={{fontSize: '25px', fontWeight: '900'}}>Sign In</h1>
                <h1 className="ms-5 text-yellow-600 text-[8px]">Sign In to Access the Portal</h1>

                <h1 id="txtLogID" className="hidden text-yellow-600 font-medium text-base">aaaa</h1>

                <div className="col-md-6 ms-5 mt-2">
                    <label className="font-bold  text-[10px] ml-1.5">Username</label>
                    <TextField id="log-in-Username" type="text" placeholder={""} className="w-60 ml-1.5 mt-1"/>
                    <p className="mt-1"><small className="text-red-500" id="log-in-UsernameError"></small></p>
                </div>

                <div className="col-md-6 ms-5 mt-1">
                    <label className="font-bold  text-[10px] ml-1.5">Password</label>
                    <TextField id="log-in-Password" type="password" placeholder={""} className="w-60 ml-1.5 mt-1"/>
                    <p className="mt-1"><small className="text-red-500" id="log-in-PasswordError"></small></p>
                </div>

                <h1 className="ms-7 text-yellow-600 text-[8px]">Forgot Password ?</h1>
                <button id="btnSignIn" type="button"
                        className="ms-5 mt-4 text-white rounded w-60 bg-[rgba(59,59,59,0.9)] ml-[3.08vw]">Sign In
                </button>

                <h1 className="mt-4 text-yellow-600 font-medium text-sm text-center ml-2">
                    <a href="#" className="text-black text-[9px] no-underline">Haven't Account ?</a>
                </h1>
            </div>
        </>
    );
}