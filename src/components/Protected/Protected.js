import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import PageLoader from "../PageLoader/Loader";

function Protected() {
    const location = useLocation();
    const user = useSelector((state) => state.user);
    console.log(user);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    useEffect(() => {
        if (!user.isLoggedIn) {
            if (user.type === 'user') {
                navigate("/auth/userlogin");
            }
            if(user.type==='provider'){
                navigate("/auth/providerlogin")
            }
        }
        setLoading(false);
    }, [user]);

    return loading ? <PageLoader /> : <Outlet />;
}

export default Protected;
