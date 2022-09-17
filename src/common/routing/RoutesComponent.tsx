import React from 'react';
import {Route, Routes, Navigate} from "react-router-dom";
import {PATH} from "./route-paths";
import {Profile} from "../../features/profile/p1-ui/Profile";
import {LoginPage} from "../../features/auth/a1-ui/u1-login/LoginPage";
import {RegistrationPage} from "../../features/auth/a1-ui/u2-registration/RegistrationPage";
import {PasswordRecoveryPage} from "../../features/auth/a1-ui/u3-password-recovery/PasswordRecoveryPage";
import {NewPasswordPage} from "../../features/auth/a1-ui/u4-new-password/NewPasswordPage";
import {NotFoundPage} from "../not-found/NotFoundPage";
import {Test} from "../../features/test/Test";

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