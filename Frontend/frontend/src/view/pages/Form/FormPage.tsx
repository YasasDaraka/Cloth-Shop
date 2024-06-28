import React, {useEffect, useState} from "react";
import {useForm} from "react-hook-form";

import {getCustomer} from "./formDetail/customer";
import {getSupplier} from "./formDetail/supplier";
import {getEmployee} from "./formDetail/employee";
import {getAdmin} from "./formDetail/admin";
import {getUser} from "./formDetail/user";

import {InputItem} from "../../input/InputItem";
import {Label} from "../../../ui/label";
import WebCamPic from "../Form/WebCamPic";
import Button from "@mui/material/Button";
import BackIcon from '@mui/icons-material/ArrowBack';

import level from "../../../images/first-icon.png";
import supImg from "../../../images/sup.gif";
import {getCustomerTable} from "./tableDetails/customer";
import {TableView} from "./TableView";
import {getSupplierTable} from "./tableDetails/supplier";
import {getEmployeeTable} from "./tableDetails/employee";
import {getAdminTable} from "./tableDetails/admin";
import {getUserTable} from "./tableDetails/user";
import {searchAllData} from "./fetchData";
import {getInventory} from "./formDetail/inventory";
import FilePicker from "../../../ui/filePicker";
import walk from "../../../images/walk.gif";

interface FormPageProps {
    path:string
}
export function FormPage({path}: FormPageProps) {
    const [entityID, setEntityID] = useState("")
    const {register, handleSubmit, reset, watch, formState: {errors}, setValue} = useForm()
    const [resetForm, setResetForm] = useState(false);
    const [resetWebForm, setResetWebForm] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);
    const [rating, setRating] = useState("");
    const [getAll, setGetAll] = useState("main");
    const [previewData, setPreviewData] = useState([]);
    const [file,setFile]=useState("")
    let form: any[][] = []
    let title = ""
    let url = ""
    let idName = ""
    const sizeRange = ["XS", "S", "M", "L", "XL"]
    let table: any[] = []

    if (path === "customer") {
        form = getCustomer(entityID);
        url = "http://localhost:8080/helloshoes/api/v1/customer";
        idName = "customerId"
        table = getCustomerTable();
    }
    if (path === "supplier") {
        form = getSupplier(entityID);
        url = "http://localhost:8080/helloshoes/api/v1/supplier";
        idName = "supplierCode"
        table = getSupplierTable();
    }
    if (path === "inventory") {
        form = getInventory();
        url = "http://localhost:8080/helloshoes/api/v1/supplier";
        idName = "itemCode"
        table = getSupplierTable();
    }
    if (path === "employee") {
        form = getEmployee(entityID);
        url = "http://localhost:8080/helloshoes/api/v1/employee";
        idName = "employeeId"
        table = getEmployeeTable();
    }
    if (path === "admin") {
        form = getAdmin(entityID);
        url = "http://localhost:8080/app/customer";
        idName = "adminId"
        table = getAdminTable();
    }
    if (path === "user") {
        form = getUser(entityID);
        url = "http://localhost:8080/app/customer";
        idName = "userId"
        table = getUserTable();
    }

    useEffect(() => {
        setPreviewData([]);
        searchAllData(url).then(data => {
            setPreviewData(data)
        })
    }, [url]);

    useEffect(() => {
        setResetWebForm(true);
        setGetAll("main")
        setFile(walk)
    }, [path]);

    const handleRatingChange = (event:any) => {
        setRating(event.target.value);
    };

    const handleReset = () => {
        setRating("");
    };

    const handleFileSelect = (file:any) => {
        console.log('Selected file:', file);
        setFile(URL.createObjectURL(file))
    };
    return (
        <>
            {(getAll === "get") ?
                <div className={"w-full h-full"}>
                    <div><Button onClick={()=>{setGetAll("main")}} sx={{marginLeft: 1,marginTop: 1, color: '#455A64',fontSize: '0.66rem', fontWeight: 'bold'}} startIcon={<BackIcon />} size="small" type="button">Back</Button></div>
                    <div className={"w-[89vw] relative"}>
                        <TableView table={table} rows={previewData} path={path}/>
                    </div>
                </div>
                : <div className="flex flex-wrap">
                    {form.map((formData, index) => (
                        <div key={index} className="flex justify-around z-10 w-1/2 flex-wrap">
                            {formData.map((section, divIndex) => (
                                <div key={index}
                                     className={`flex justify-between mb-2 ${(path === "employee" && divIndex === 1) ? "z-5" : "z-10"} w-[40vw]`}>
                                    {section.map((data: any) => (
                                        <div key={data.id}
                                             className={`z-50 ${(section.length === 1 || section.length === 1) ? 'w-[18vw]' : 'w-[13.2vw]'} ${data.id === 'rating' ? 'w-[20vw]' : ''} ${data.id === 'web' ? 'w-[20vw]' : ''}`}>
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
                                            {(data.id === 'file') &&
                                                (<FilePicker onFileSelect={handleFileSelect} />)}
                                            {(data.id === 'rating') && (
                                                <div className="">
                                                    <Label className="text-[18px] pl-[20%]">Customer Level</Label>
                                                    <div className="rating" id="rating">
                                                        <input checked={rating === "GOLD"} onChange={handleRatingChange}
                                                               type="radio" id="star4" name="rating" value="GOLD"/>
                                                        <label htmlFor="star4" className="star-label"><img
                                                            src={level} alt="Silver Medal"/><span>★</span></label>
                                                        <input checked={rating === "SILVER"}
                                                               onChange={handleRatingChange} type="radio" id="star3"
                                                               name="rating" value="SILVER"/>
                                                        <label htmlFor="star3" className="star-label"><img
                                                            src={level} alt="Bronze Medal"/><span>★</span></label>
                                                        <input checked={rating === "BRONZE"}
                                                               onChange={handleRatingChange} type="radio" id="star2"
                                                               name="rating" value="BRONZE"/>
                                                        <label htmlFor="star2" className="star-label"><img
                                                            src={level} alt="Bronze Medal"/><span>★</span></label>
                                                        <input checked={rating === "NEW"} onChange={handleRatingChange}
                                                               type="radio" id="star1" name="rating" value="NEW"/>
                                                        <label htmlFor="star1" className="star-label"><img
                                                            src={level} alt="Bronze Medal"/><span>★</span></label>
                                                    </div>
                                                </div>
                                            )
                                            }
                                            {
                                                (data.id === 'web') &&
                                                (<div className="absolute pl-[3%]">
                                                    <Label className="text-[1.3vw] pl-[18%]">Capture Image</Label>
                                                    <div className="flex justify-center mt-3">
                                                        <WebCamPic file={file} setImg={setSelectedFile} resetForm={resetWebForm}
                                                                   setResetWebForm={setResetWebForm}/>
                                                    </div>
                                                </div>)
                                            }
                                            {(data.id === 'button') && (
                                                <div className="w-[40vw]">
                                                    <Button sx={{marginRight: 1}} variant="contained" color="primary"
                                                            size="small" type="button">Save</Button>
                                                    <Button sx={{marginRight: 1}} variant="contained" color="success"
                                                            size="small" type="button">Update</Button>
                                                    {(path === "admin" || path === "user") ? '' :
                                                        <Button sx={{marginRight: 1}} variant="contained"
                                                                color="secondary" size="small"
                                                                type="button">Search</Button>}
                                                    <Button sx={{marginRight: 1}} variant="contained" color="error"
                                                            size="small" type="button">Delete</Button>
                                                    {(path === "admin" || path === "user") ? '' :
                                                    <Button sx={{marginRight: 1}} variant="contained" color="secondary"
                                                            size="small" type="button"
                                                            onClick={()=> {setGetAll("get") }}>Get All</Button>}
                                                    <Button sx={{marginRight: 1}} variant="contained" color="warning"
                                                            size="small" type="button" onClick={()=>{
                                                        setResetForm(true);
                                                        setResetWebForm(true);
                                                        handleReset()
                                                    }}>Clear</Button>
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
            }
        </>
    );
}