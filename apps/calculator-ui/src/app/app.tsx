import "./app.css";
import { App as AntDApp } from "antd";

import { Calculator } from "./components/Calculator/Calculator";

export function App() {
    return (
        <AntDApp>
            <Calculator />
        </AntDApp>
    );
}

export default App;
