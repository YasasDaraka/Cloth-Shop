const accessRoleList = ["ADMIN", "USER"]
export function getAdmin(customerCode:string) {

    return [
        [
            [
                {
                    id: "adminName",
                    title: "Admin Name",
                    type: "text",
                    placeholder: "User Name",
                    description: "User name required",
                    required: true,
                },
                {
                    id: "adminRole",
                    title: "Admin Role",
                    type: "select",
                    placeholder: "Role",
                    description: "",
                    selectList: accessRoleList,
                }
            ],
            [

            ]
        ],
        [
            [

            ],
            [

            ]
        ],
        [
            [
                {
                    id: "adminOldPassword",
                    title: "Password for update or delete",
                    type: "text",
                    placeholder: "Password",
                    description: "Password",
                },
            ],
            [
                {
                    id: "adminNewPass",
                    title: "New Password",
                    type: "text",
                    placeholder: "New Password",
                    description: "New Password",

                },
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
                   /* id: "rating"*/
                },
                {
                    /*id: "web"*/
                }
            ]
        ]
    ]

}