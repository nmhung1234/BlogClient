import React from "react";
import Router from "./router";
import { createBrowserHistory } from "history";
import { NotificationsProvider } from "@mantine/notifications";
import "./App.scss";

function App() {
    const customHistory = createBrowserHistory();
    return (
        <NotificationsProvider position="top-right" zIndex={2077} limit={5}>
            <div className="App">
                <Router history={customHistory} />
            </div>
        </NotificationsProvider>
    );
}

export default App;
