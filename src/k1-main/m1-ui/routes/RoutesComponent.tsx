import React from 'react';
import {Route, Routes, Navigate} from "react-router-dom";
import {PATH} from "./route-paths";
import {Profile} from "../../../k2-features/f2-profile/p1-ui/Profile";
import {LoginPage} from "../../../k2-features/f1-auth/a1-ui/u1-login/LoginPage";
import {RegistrationPage} from "../../../k2-features/f1-auth/a1-ui/u2-registration/RegistrationPage";
import {PasswordRecoveryPage} from "../../../k2-features/f1-auth/a1-ui/u3-password-recovery/PasswordRecoveryPage";
import {NewPasswordPage} from "../../../k2-features/f1-auth/a1-ui/u4-new-password/NewPasswordPage";
import {NotFoundPage} from "../not-found/NotFoundPage";
import {Test} from "../../../k2-features/f0-test/Test";

export const RoutesComponent = () => {
    return (

            <Routes>
                <Route path={'/*'} element={<NotFoundPage/>}/>
                <Route path={'/'} element={<Navigate to={PATH.PROFILE}/>}/>
                <Route path={PATH.SIGN_IN} element={<LoginPage/>}/>
                <Route path={PATH.SIGN_UP} element={<RegistrationPage/>}/>
                <Route path={PATH.PASSWORD_RECOVERY} element={<PasswordRecoveryPage/>}/>
                <Route path={PATH.NEW_PASSWORD} element={<NewPasswordPage/>}/>
                <Route path={PATH.PROFILE} element={<Profile/>}/>
                <Route path={PATH.TEST} element={<Test/>}/>
            </Routes>

    );
}