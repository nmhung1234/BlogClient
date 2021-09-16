import React from "react";
import "./App.scss";
import Router from "./router";
import { createBrowserHistory } from "history";

function App() {
    const customHistory = createBrowserHistory();
    return (
        <div className="App">
            <Router history={customHistory} />
        </div>
    );
}

export default App;
