import React, { useEffect, useState } from "react";


const UserDashboard = () => {
    const { user } = useAuth();
    return (
        <>
            <div className="flex">
                <div>Sidebar </div>
                <div>Content</div>

            </div>
        </>
    );
};

export default UserDashboard;