import { useState } from "react";

import "./App.css";
import Posts from "./component/Posts";

function App() {
    const [showPost, setShowPost] = useState();
    return (
        <div className="App">
            <h1>React Redux - Redux saga app</h1>
            <button
                onClick={() => {
                    setShowPost(!showPost);
                }}
            >
                TOGGLE SHOW POST
            </button>
            {showPost ? <Posts /> : ""}
        </div>
    );
}

export default App;
