export function SideBar() {
    return (
        <>
            <div className="flex h-full">
                <div className="bg-gray-900 text-white w-10/12 lg:w-1/4 flex flex-col items-center">
                    <div id="side-bar-icon"
                         className="relative flex justify-center items-center shadow-md bg-white z-10 w-8 h-8 rounded-lg mt-4 mb-4">
                        <img id="bar-icon" className="w-12 pr-2.5 z-5" src="assets/images/arrow.gif" alt="Icon"/>
                    </div>
                    <nav className="flex flex-col items-center justify-between h-full pt-36 lg:pt-24">
                        <a href="#" id="btnDashboard" className="relative flex items-center mb-6">
                            <img className="w-8 lg:w-9 z-10" src="assets/images/dashboard.gif" alt="Dashboard"/>
                            <label htmlFor="btnDashboard"
                                   className="form-label lb-hide absolute left-28 top-1/2 transform -translate-y-1/2">Admin
                                Panel</label>
                        </a>
                        <a href="#" id="btnCustomer" className="relative flex items-center mb-6">
                            <img className="w-10 z-10" src="assets/images/customer.gif" alt="Customer"/>
                            <label htmlFor="btnCustomer"
                                   className="form-label lb-hide absolute left-28 top-1/2 transform -translate-y-1/2">Customer</label>
                        </a>
                        <a href="#" id="btnInventory" className="relative flex items-center mb-6">
                            <img className="w-10 z-10" src="assets/images/inventory.gif" alt="Inventory"/>
                            <label htmlFor="btnInventory"
                                   className="form-label lb-hide absolute left-28 top-1/2 transform -translate-y-1/2">Inventory</label>
                        </a>
                        <a href="#" id="btnSupplier" className="relative flex items-center mb-6">
                            <img className="w-11 z-10" src="assets/images/supply.gif" alt="Supplier"/>
                            <label htmlFor="btnSupplier"
                                   className="form-label lb-hide absolute left-28 top-1/2 transform -translate-y-1/2">Supplier</label>
                        </a>
                        <a href="#" id="btnEmployee" className="relative flex items-center mb-6">
                            <img className="w-10 z-10" src="assets/images/employee.gif" alt="Employee"/>
                            <label htmlFor="btnEmployee"
                                   className="form-label lb-hide absolute left-28 top-1/2 transform -translate-y-1/2">Employee</label>
                        </a>
                        <a href="#" id="btnSales" className="relative flex items-center mb-6">
                            <img className="w-10 z-10" src="assets/images/payment.gif" alt="Payment"/>
                            <label htmlFor="btnSales"
                                   className="form-label lb-hide absolute left-28 top-1/2 transform -translate-y-1/2">Payment</label>
                        </a>
                        <a href="#" id="btnAdminPanel" className="relative flex items-center mb-6">
                            <img className="w-9 z-10" src="assets/images/admin.gif" alt="Admin"/>
                            <label htmlFor="btnAdminPanel"
                                   className="form-label lb-hide absolute left-28 top-1/2 transform -translate-y-1/2">Admin</label>
                        </a>
                        <a href="#" id="btnUsers" className="relative flex items-center mb-6">
                            <img className="w-10 z-10" src="assets/images/users.gif" alt="Users"/>
                            <label htmlFor="btnUsers"
                                   className="form-label lb-hide absolute left-28 top-1/2 transform -translate-y-1/2">Users</label>
                        </a>
                    </nav>
                </div>
            </div>

        </>
    );
}