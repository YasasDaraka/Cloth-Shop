import React, {useEffect, useState} from "react";
import {getCustomer} from "../Form/formDetail/customer";
import {InputItem} from "../../input/InputItem";
import {useForm} from "react-hook-form";
import level from "../../../images/first-icon.png";
import supImg from "../../../images/sup.gif";
import {Label} from "../../../ui/label";
import WebCamPic from "../Form/WebCamPic";
import {getSupplier} from "./formDetail/supplier";
import Button from "@mui/material/Button";
interface FormPageProps {
    path:string
}
export function FormPage({path}: FormPageProps) {
    const [entityID, setEntityID] = useState("")
    const {register, handleSubmit, reset, watch, formState: {errors}, setValue} = useForm()
    const [resetForm, setResetForm] = useState(false);
    const [resetWebForm, setResetWebForm] = useState('');
    const [selectedFile, setSelectedFile] = useState(null);

    let form: any[][] = []
    let title = ""
    let url = ""
    let idName = ""
    const sizeRange = ["XS", "S", "M", "L", "XL"]

    if (path === "customer") {
        form = getCustomer(entityID);
        title = "Customer Form";
        url = "http://localhost:8080/app/customer";
        idName = "customerCode"

    }
    if (path === "supplier") {
        form = getSupplier(entityID);
        title = "Customer Form";
        url = "http://localhost:8080/app/customer";
        idName = "SupplierCode"

    }
    useEffect(() => {
        setResetWebForm(path);
    }, [path]);
    return (
        <>
            <div className="flex flex-wrap">
            {form.map((formData, index) => (
              <div key={index} className="flex justify-around z-10 w-1/2 flex-wrap">
                {formData.map((section, divIndex) => (
                <div key={index} className="flex justify-between mb-2 z-10 w-[40vw]">
                    {section.map((data:any) => (
                        <div key={data.id} className={`z-50 ${(section.length === 2 || section.length === 1) ? 'w-[18vw]' : 'w-[13.2vw]'} ${data.id === 'rating' ? 'w-[20vw]' : ''} ${data.id === 'web' ? 'w-[20vw]' : ''}`}>
                            <InputItem
                                key={data.id}
                                id={data.id}
                                title={data.title}
                                placeholder={data.placeholder}
                                type={data.type}
                                description={data.description}
                                selectList={data.selectList}
                                register={register}
                                watch={watch}
                                value={data.value}
                                isEdit={data.isEdit}
                                setValue={setValue}
                                onChange={data.onChange}
                                errors={errors}
                                isRequired={data.required}
                                resetForm={resetForm}

                            />
                            {(data.id === 'rating') && (
                                <div className="">
                                    <Label className="text-[18px] pl-[20%]">Customer Level</Label>
                                    <div className="rating" id="rating">
                                        <input type="radio" id="star4" name="rating" value="GOLD"/>
                                        <label htmlFor="star4" className="star-label"><img
                                            src={level} alt="Silver Medal"/><span>★</span></label>
                                        <input type="radio" id="star3" name="rating" value="SILVER"/>
                                        <label htmlFor="star3" className="star-label"><img
                                            src={level} alt="Bronze Medal"/><span>★</span></label>
                                        <input type="radio" id="star2" name="rating" value="BRONZE"/>
                                        <label htmlFor="star2" className="star-label"><img
                                            src={level} alt="Bronze Medal"/><span>★</span></label>
                                        <input type="radio" id="star1" name="rating" value="NEW"/>
                                        <label htmlFor="star1" className="star-label"><img
                                            src={level} alt="Bronze Medal"/><span>★</span></label>
                                    </div>
                                </div>
                            )
                            }
                            {
                                (data.id === 'web') &&
                                (<div className="">
                                    <Label className="text-[18px] pl-[27%]">Capture Image</Label>
                                    <div className="flex justify-center mt-3">
                                        <WebCamPic setImg={setSelectedFile}  resetForm={resetWebForm}/>
                                    </div>
                                </div>)
                            }
                            {(data.id === 'button') && (
                                <div className="w-[40vw]">
                                    <Button sx={{ marginLeft: 1 }} variant="contained" color="primary" size="small" type="button" >Save</Button>
                                    <Button sx={{ marginLeft: 1 }} variant="contained" color="success" size="small" type="button" >Update</Button>
                                    <Button sx={{ marginLeft: 1 }} variant="contained" color="secondary" size="small" type="button" >Search</Button>
                                    <Button sx={{ marginLeft: 1 }} variant="contained" color="error" size="small" type="button" >Delete</Button>
                                    <Button sx={{ marginLeft: 1 }} variant="contained" color="warning" size="small" type="button" >Clear</Button>
                                </div>
                            )}
                            {(data.id === 'supImg') && (
                                <div className=" h-100 w-100 ">

                                    <img src={supImg} width="220" className={"pl-[3%]"}/>

                                </div>
                            )}
                        </div>

                    ))}

                </div>
                ))}
              </div>
            ))}
            </div>
        </>
    );
}