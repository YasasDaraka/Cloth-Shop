import {LogButton} from "../../common/Button/LogButton";
import React from "react";

export function SignUp() {
    return (
        <>
            <div id="sign-up-container" className="rounded-lg">
                <div className="container">
                    <div className="row">
                        <div className="w-[26vw] col-5 h-[72vh] bg-[#f1f1f1] shadow-[0px_1px_10px_#FFA633] border-[2px] border-[#FFA633] text-center relative rounded-lg">

                            <LogButton id={"logInBackToHome"} content={"Back to Homepage"} navigate={"/"}
                                       className={"absolute left-0 mt-3 ms-3 p-0.5 font-medium text-[8px] hover:border-[#E9C54A] hover:border-[0.148px] hover: rounded"}/>

                        </div>

                        <div className="col-7">
                        </div>

                    </div>
                </div>
            </div>

        </>
    );
}