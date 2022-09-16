import React from 'react';
import {Link} from "react-router-dom";
import {PATH} from "../../../../k1-main/m1-ui/routes/route-paths";

export const LoginPage = () => {
    return (
        <div>
            Login
            <div>
                <Link to={PATH.PASSWORD_RECOVERY}>Forgot password</Link>
            </div>
        </div>
    );
};