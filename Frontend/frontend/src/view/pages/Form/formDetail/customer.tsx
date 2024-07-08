const genderList = ["MALE", "FEMALE"]

export function getCustomer(cusId:string) {

    return [
       [
         [
            {
            id: "customerId",
            title: "Customer ID",
            type: "text",
            placeholder: "Auto generated",
            description: "",
            /*isEdit:true*/
            },
            {
                id: "customerName",
                title: "Customer Name",
                type: "text",
                placeholder: "Name",
                description: "Full name required",
                required: true,
            }
        ],
        [
            {
            id: "gender",
            title: "Customer Gender",
            type: "select",
            placeholder: "Gender",
            description: "",
            selectList: genderList,
            },
            {
                id: "customerDob",
                title: "Customer DOB",
                type: "date",
                placeholder: "Date",
                description: "Date of birth",

            }
            ]
       ],
       [
           [
            {
                id: "email",
                title: "Email",
                type: "email",
                placeholder: "Email",
                description: "Email required",

            },
            {
                id: "contactNo",
                title: "Contact number",
                type: "number",
                placeholder: "Contact",
                description: "Mobile number",
                required: true
            }
        ],
        [
            {
                id: "loyaltyDate",
                title: "Loyalty Start Date",
                type: "date",
                placeholder: "Date",
                description: "Date of loyalty Start"
            },
            {
                id: "totalPoints",
                title: "Total Points",
                type: "number",
                placeholder: "",
                description: "",
            },
            {
                id: "lastPurchaseDate",
                title: "Last Purchase Date",
                type: "text",
                placeholder: "",
                description: "",
                isEdit:true
            }
        ]
        ],
        [
        [
            {
                id: "buildNo",
                title: "Building No or Name",
                type: "text",
                placeholder: "Address",
                description: "Building no or name",
            },
            {
                id: "lane",
                title: "Lane",
                type: "text",
                placeholder: "Address",
                description: "Lane",
            }
        ],
        [
            {
                id: "city",
                title: "City",
                type: "text",
                placeholder: "Address",
                description: "Main city",
            },
            {
            id: "state",
            title: "State",
            type: "text",
            placeholder: "Address",
            description: "Main state",
            },
            {
                id: "postalCode",
                title: "Postal Code",
                type: "number",
                placeholder: "Address",
                description: "Postal code",
            }
        ],
            [
                {
                    id: "button",
                }
            ]
        ],
        [
            [
                {
                    id: "rating"
                },
                {
                    id: "web"
                }
            ]
        ]
    ]

}