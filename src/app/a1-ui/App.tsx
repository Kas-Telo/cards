import React from 'react';
import './App.css';
import {Header} from "./header/Header";
import {RoutesComponent} from "../../common/routing/RoutesComponent";

function App() {
    return (
        <div className="App">
            <Header/>
            <RoutesComponent/>
        </div>
    );
}

export default App;
