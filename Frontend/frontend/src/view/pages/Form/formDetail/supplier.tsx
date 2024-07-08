const categoryList = ["INTERNATIONAL", "LOCAL"]
export function getSupplier(supId:string) {

    return [
        [
            [
                {
                    id: "supplierCode",
                    title: "Supplier Code",
                    type: "text",
                    placeholder: "Auto generated",
                    description: "",
                    required: true,
                    /*isEdit:true*/
                },
                {
                    id: "supplierName",
                    title: "Supplier Name",
                    type: "text",
                    placeholder: "Name",
                    description: "Full name required",
                    required: true,
                }
            ],
            [
                {
                    id: "category",
                    title: "Category",
                    type: "select",
                    placeholder: "Category",
                    description: "",
                    selectList: categoryList,
                },
                {
                    id: "buildNo",
                    title: "Building No or Name",
                    type: "text",
                    placeholder: "Address",
                    description: "Building no or name"
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

            ],
            [
                {
                    id: "mobileNo",
                    title: "Mobile No",
                    type: "number",
                    placeholder: "Mobile No",
                    description: "Mobile number",
                    required: true
                },
                {
                    id: "landNo",
                    title: "Landline No",
                    type: "number",
                    placeholder: "Landline No",
                    description: "Landline number",
                    required: true
                }

            ]
        ],
        [
            [
                {
                    id: "lane",
                    title: "Lane",
                    type: "text",
                    placeholder: "Address",
                    description: "Lane",
                },
                {
                    id: "city",
                    title: "City",
                    type: "text",
                    placeholder: "Address",
                    description: "Main city",
                }
            ],
            [

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
                },
                {
                    id: "supCountry",
                    title: "Origin Country",
                    type: "text",
                    placeholder: "Address",
                    description: "Origin Country",
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
                    id: "supImg"
                },
                {
                    /*id: "web"*/
                }
            ]
        ]
    ]

}