import React from 'react';
import {Link} from "react-router-dom";
import {PATH} from "../../../common/routing/route-paths";

export const Header = () => {
    return (
        <div >
            <Link to={PATH.SIGN_IN} style={{marginRight: '15px'}}>Sign In</Link>
            <Link to={PATH.SIGN_UP} style={{marginRight: '15px'}}>Sign Up</Link>
            <Link to={PATH.PROFILE} style={{marginRight: '15px'}}>Profile</Link>
        </div>
    );
};