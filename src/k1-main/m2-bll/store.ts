import {applyMiddleware, combineReducers, createStore} from "redux";
import {appReducer} from "./app-reducer";
import thunk from "redux-thunk";
import {authReducer} from "../../k2-features/f1-auth/a2-bll/auth-reducer";
import {profileReducer} from "../../k2-features/f2-profile/p2-bll/profile-reducer";

const rootReducer = combineReducers({
    app: appReducer,
    auth: authReducer,
    profile: profileReducer,
})

const store = createStore(rootReducer, applyMiddleware(thunk))

//types
export type RootStateType = ReturnType<typeof rootReducer>