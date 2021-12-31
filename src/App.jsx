import React from "react";
import Router from "./router";
import { createBrowserHistory } from "history";
// import 'antd/dist/antd.css';
import "./App.scss";

function App() {
    const customHistory = createBrowserHistory();
    return (
        <div className="App">
            <Router history={customHistory} />
        </div>
    );
}

export default App;
