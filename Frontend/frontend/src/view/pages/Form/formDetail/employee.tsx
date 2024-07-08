const genderList = ["MALE", "FEMALE"]
const statusList = ["MARRIED", "UNMARRIED"]
const accessRoleList = ["ADMIN", "USER"]
export function getEmployee(empId:string) {

    return [
        [
            [
                {
                    id: "employeeId",
                    title: "Employee ID",
                    type: "text",
                    placeholder: "Auto generated",
                    description: "",
                    /*isEdit:true*/
                },
                {
                    id: "employeeName",
                    title: "Employee Name",
                    type: "text",
                    placeholder: "Name",
                    description: "Full name required",
                    required: true,
                }
            ],
            [
                {
                    id: "gender",
                    title: "Employee Gender",
                    type: "select",
                    placeholder: "Gender",
                    description: "",
                    selectList: genderList,
                },
                {
                    id: "employeeStatus",
                    title: "Status",
                    type: "select",
                    placeholder: "Status",
                    description: "",
                    selectList: statusList,
                },
                {
                    id: "designation",
                    title: "Designation",
                    type: "text",
                    placeholder: "Designation",
                    description: "Designation",
                },
            ]
        ],
        [
            [
                {
                    id: "employeeDob",
                    title: "Employee DOB",
                    type: "date",
                    placeholder: "Date",
                    description: "Date of birth",

                },
                {
                    id: "joinDate",
                    title: "Date of Join",
                    type: "date",
                    placeholder: "Date",
                    description: "Date of Join",

                }
            ],
            [

                {
                    id: "role",
                    title: "Access Role",
                    type: "select",
                    placeholder: "Role",
                    description: "",
                    selectList: accessRoleList,
                },
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
            ]
        ],
        [
            [
                {
                    id: "branch",
                    title: "Branch",
                    type: "text",
                    placeholder: "Branch",
                    description: "Branch",
                },
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
                    id: "guardianName",
                    title: "Name of Guardian",
                    type: "text",
                    placeholder: "Guardian Name",
                    description: "Name required",

                },
                {
                    id: "web"
                }
            ],
            [
                {
                    id: "emergencyContact",
                    title: "Contact number",
                    type: "number",
                    placeholder: "Emergency Contact",
                    description: "Mobile number",

                }
            ]
        ]
    ]

}