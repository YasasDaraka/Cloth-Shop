import React, {useState} from "react";
import {customer,getCustomer} from "../Form/formDetail/customer";
import {InputItem} from "../../input/InputItem";
import {useForm} from "react-hook-form";
import level from "../../../images/first-icon.png";
import {Label} from "../../../ui/label";
interface FormPageProps {
    path:string
}
export function FormPage({path}: FormPageProps) {
    const [entityID, setEntityID] = useState("")
    const {register, handleSubmit, reset, watch, formState: {errors}, setValue} = useForm()
    const [resetForm, setResetForm] = useState(false);

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
    return (
        <>
            <div className="flex flex-wrap">
            {form.map((formData, index) => (
              <div key={index} className="flex justify-around mb-4 z-10 w-1/2 flex-wrap">
                {formData.map((section, divIndex) => (
                <div key={index} className="flex justify-between mb-2 z-10 w-[40vw]">
                    {section.map((data:any) => (
                        <div key={data.id} className={`z-50 ${(formData.length === 2) ? 'w-[18vw]' : 'w-[13.2vw]'} ${data.id === 'rating' ? 'w-[20vw]' : ''}`}>
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