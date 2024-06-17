import {FormPage} from "./FormPage";

export function CommonForm() {
    return (
        <>
            <div className="bg-white m-0 w-[91vw] h-[82vh] relative top-7 left-[7.2vw]" style={{boxShadow:"0px 1px 10px #909090",borderRadius:"10px"}}>
                <FormPage path={"customer"}/>
            </div>
        </>
    );
}