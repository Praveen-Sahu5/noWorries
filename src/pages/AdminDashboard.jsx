import './AdminDashboard.css'


const AdminDashboard = () => {
    return (
        <div className="admin-container">
            <div className='admin-profile'>
                <div className='admin-img'>
                       
                </div>
                <div className='admin-name'>
                    <h3>ADMIN's NAME</h3>
                </div>
                <hr/>
                <div className='admin-outlet-option'>
                    <h2>Admin's Corner</h2>
                    <div>Home</div>
                    <div>Clinics</div>
                    <div>Create Clinic</div>
                </div>
            </div>
            {/* <hr /> */}
            <div>
                Outlets
            </div>
        </div>
    )
}

export default AdminDashboard