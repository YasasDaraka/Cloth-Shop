const genderList = ["MALE", "FEMALE", "OTHER"]
export let customer = {
    customerCode:"",
    customerName:"",
    gender:"",
    loyaltyJoinedDate:"",
    totalPoints:"",
    level:"",
    dob:"",
    addressLine01:"",
    addressLine02:"",
    addressLine03:"",
    addressLine04:"",
    addressLine05:"",
    contactNo:"",
    email:""
}

export function getCustomer(customerCode:string) {

    return [
        [{
            id: "customerCode",
            title: "Customer Code",
            type: "text",
            placeholder: "",
            description: "Auto generated",
            isEdit:true
        },
            {
                id: "customerName",
                title: "Customer Name",
                type: "text",
                placeholder: "Name",
                description: "Full name required",
                required: true,
            },
        {
            id: "gender",
            title: "Customer Gender",
            type: "select",
            placeholder: "Gender",
            description: "",
            selectList: genderList,
        },
            {
                id: "loyaltyJoinedDate",
                title: "Loyalty Join Date",
                type: "date",
                placeholder: "Date",
                description: "Date of the entitlement as a loyalty customer",
            }],
        [
            {
                id: "dob",
                title: "Customer DOB",
                type: "date",
                placeholder: "Date",
                description: "Date of birth",
            },
            {
                id: "addressLine01",
                title: "Address Line 01",
                type: "text",
                placeholder: "Address",
                description: "Building no or name",
            },
            {
                id: "addressLine02",
                title: "Address Line 02",
                type: "text",
                placeholder: "Address",
                description: "Lane",
            },
            {
                id: "addressLine03",
                title: "Address Line 03",
                type: "text",
                placeholder: "Address",
                description: "Main city",
                required: true
            }],
        [{
            id: "addressLine04",
            title: "Address Line 04",
            type: "text",
            placeholder: "Address",
            description: "Main state",
        },
            {
                id: "addressLine05",
                title: "Address Line 05",
                type: "number",
                placeholder: "Address",
                description: "Postal code",
                required: true
            },
            {
                id: "contactNo",
                title: "Contact number",
                type: "number",
                placeholder: "Contact",
                description: "Mobile number",
                required: true
            },
            {
                id: "email",
                title: "Customer Email",
                type: "email",
                placeholder: "Email",
                description: "Email required",

            }]
    ]

}