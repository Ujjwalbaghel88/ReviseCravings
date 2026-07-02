

import React, { useEffect, useState } from "react";


const UserDashboard = () => {

    return (
        <>
            <div className="flex h-[90vh] ">
                <div className="w-1/5 border border-red-500 h-full"><Sidebar/> </div>
                <div className="w-4/5 border border-green-500 h-full">Content</div>

            </div>
        </>
    );
};

export default UserDashboard;