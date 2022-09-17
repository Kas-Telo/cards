import React from 'react';
import {Link} from "react-router-dom";
import {PATH} from "../../../../common/routing/route-paths";

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