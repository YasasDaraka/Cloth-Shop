import {InputItem} from "../../input/InputItem";
import React, {useEffect, useRef, useState} from "react";
import {useForm} from "react-hook-form";
import card from "../../../images/card.gif";
import cashImg from "../../../images/cash.gif";
import {Label} from "../../../ui/label";
import {Input} from "../../../ui/input";
import Button from "@mui/material/Button";

interface Props {
    formData: any
}

export function PaymentPage({formData}: Props) {
    const {register, handleSubmit, reset, watch, formState: {errors}, setValue} = useForm()
    const [resetForm, setResetForm] = useState(false);
    const initialValue = '';
    const [inputValue, setInputValue] = useState(initialValue);
    const prevInputValue = useRef(initialValue);
    const [cash, setCash] = useState()
    const [discount, setDiscount] = useState()
    const [balance, setBalance] = useState()


    const handleChange = (event: { target: { name: any, value: any; }; }) => {
        setResetForm(false);
        const target = event.target;
        let name = target.name;
        let value = target.value;
        if (name === 'cash') {
            setCash(value)
        } else if (name === 'discount') {
            setDiscount(value);
        } else if (name === 'balance') {
            setBalance(value)
        }

    };

    return (
        <>
            <div className="flex justify-center align-items-center h-full w-full">

                <div className="w-1/2 h-2/3 ">

                    {formData.map((section: any, index: any) => (
                        <div key={index}
                             className={`flex justify-between w-full px-3 h-[13vh]`}>
                            {section.map((data: any) => (
                                <div key={data.id}
                                     className={`z-50 ${(section.length === 1 || section.length === 1) ? 'w-[18vw]' : 'w-[13.2vw]'}`}>
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
                                        setResetForm={setResetForm}

                                    />
                                </div>
                            ))}
                        </div>
                    ))}

                </div>
                <div className="w-1/2 h-2/3">

                    <div className={"flex w-full px-3 h-[26vh]"}>
                        <div className={"flex w-1/2 h-full"}>
                            <div className="flex flex-col justify-center items-center w-1/2 h-full">
                                <Label className="mb-4 font-semibold">Cash Payment</Label>
                                <img className="w-[5.5vw]" src={cashImg}/>
                            </div>
                            <div className="flex flex-col justify-center items-center w-1/2 h-full">
                                <Label className="mb-4 font-semibold">Card Payment</Label>
                                <img className="w-[5.5vw]" src={card}/>
                            </div>
                        </div>
                        <div className={"flex flex-col w-1/2 h-full "}>
                            <div className={"flex flex-col justify-center w-1/2 h-1/2 ml-5"}>
                                <span className="text-[#3d98ef] text-sm font-semibold">Total : </span>
                                <div><span className="text-[#3d98ef] text-3xl">0</span> Rs/=</div>
                            </div>
                            <div className={"flex flex-col justify-center w-1/2 h-1/2 ml-5"}>
                                <span className="text-[#ef5350] text-sm font-semibold">SubTotal : </span>
                                <div><span className="text-[#ef5350] text-3xl">0</span> Rs/=</div>
                            </div>
                        </div>
                    </div>
                    <div className={"flex-row w-full px-3 h-[26vh] "}>
                        <div className={"flex items-center justify-evenly w-full h-2/5"}>
                            <div className={"flex flex-col"}>
                                <Label className="font-semibold">Cash Payment</Label>
                                <Input
                                    type="text"
                                    name="cash"
                                    className="mt-2 mb-1 w-[18vw]"
                                    value={cash}
                                    onChange={handleChange}
                                    defaultValue={initialValue}
                                />
                            </div>
                            <div className={"flex flex-col"}>
                                <Label className="font-semibold">Cash Payment</Label>
                            <Input
                                type="text"
                                name="discount"
                                className="mt-2 mb-1 w-[18vw]"
                                value={discount}
                                onChange={handleChange}
                                defaultValue={initialValue}
                            />
                            </div>
                        </div>
                        <div className={"flex items-center w-full h-2/5 "}>
                            <div className={"flex flex-col"}>
                                <Label className="font-semibold ml-9">Cash Payment</Label>
                                <Input
                                    type="text"
                                    name="cash"
                                    className="mt-2 mb-1  ml-9 w-[18vw]"
                                    value={balance}
                                    onChange={handleChange}
                                    defaultValue={initialValue}
                                />
                            </div>
                            <Button sx={{marginLeft: 4,marginTop: 2}} variant="contained" color="success"
                                    size="small" type="button"
                                    onClick={() => {
                                    }}>Purchase</Button>
                        </div>
                        <div className={"flex justify-start items-center w-full h-1/5 mt-2"}>

                            <Button sx={{marginLeft: 4}} variant="contained" color="primary"
                                    size="small" type="button"
                                    onClick={() => {
                                    }}>Add Item</Button>
                            <Button sx={{marginLeft: 4}} variant="contained" color="warning"
                                    size="small" type="button"
                                    onClick={() => {
                                    }}>Clear</Button>
                            <Button sx={{marginLeft: 4}} variant="contained" color="success"
                                    size="small" type="button"
                                    onClick={() => {
                                    }}>Update</Button>
                            <Button sx={{marginLeft: 4}} variant="contained" color="error"
                                    size="small" type="button"
                                    onClick={() => {
                                    }}>Delete</Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}