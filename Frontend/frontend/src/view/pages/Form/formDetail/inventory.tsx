const statusList = ["Available", "Not Available","Low"]

export function getInventory() {

    return [
        [
            [
                {
                    id: "Code",
                    title: "Item Code",
                    type: "text",
                    placeholder: "Item Code",
                    description: "",
                },
                {
                    id: "Description",
                    title: "Item Description",
                    type: "text",
                    placeholder: "Description",
                    description: "",
                }
            ],
            [

                {
                    id: "Category",
                    title: "Item Category",
                    type: "text",
                    placeholder: "Category",
                    description: "",
                    /*isEdit:true*/
                },
                {
                    id: "Size",
                    title: "Size",
                    type: "number",
                    placeholder: "Size",
                    description: "",
                    /*isEdit:true*/
                },
                {
                    id: "Qty",
                    title: "Qty",
                    type: "number",
                    placeholder: "Qty",
                    description: "",
                    /*isEdit:true*/
                },
            ]
        ],
        [
            [
                {
                    id: "Margin",
                    title: "Profit Margin",
                    type: "text",
                    placeholder: "Profit Margin",
                    description: "",

                },
                {
                    id: "Status",
                    title: "Status",
                    type: "select",
                    placeholder: "Status",
                    description: "",
                    selectList: statusList,
                },
            ],
            [

            ]
        ],
        [
            [
                {
                    id: "cusBuildNo",
                    title: "Supplier ID",
                    type: "text",
                    placeholder: "Supplier ID",
                    description: "",
                },
                {
                    id: "cusLane",
                    title: "Supplier Name",
                    type: "text",
                    placeholder: "Supplier Name",
                    description: "",
                }
            ],
            [
                {
                    id: "cusCity",
                    title: "Buy Price",
                    type: "number",
                    placeholder: "Buy Price",
                    description: "",
                },
                {
                    id: "cusState",
                    title: "Sale Price",
                    type: "number",
                    placeholder: "Sale Price",
                    description: "",
                },
                {
                    id: "cusPostalCode",
                    title: "Expected Profit",
                    type: "text",
                    placeholder: "Expected Profit",
                    description: "",
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
                    id: "file"
                },
                {
                    id: "web"
                }
            ]
        ]
    ]

}