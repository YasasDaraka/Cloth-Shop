import {useState} from "react";
import {customer,getCustomer} from "../Form/formDetail/customer";
import {useParams} from "react-router-dom";
import {InputItem} from "../../input/InputItem";
import {useForm} from "react-hook-form";

interface FormPageProps {
    path:string
}
export function FormPage({path}: FormPageProps) {
    const [entityID, setEntityID] = useState("")
    const {register, handleSubmit, reset, watch, formState: {errors}, setValue} = useForm()
    const [resetForm, setResetForm] = useState(false);

    let form: any[] = []
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
            {form.map((formData, index) => (
                <div key={index} className="flex justify-around mb-4 z-10">
                    {formData.map((data:any) => (
                        <div key={data.id} className=" z-50 w-[20vw]">
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
                        </div>

                    ))}

                </div>
            ))}
        </>
    );
}