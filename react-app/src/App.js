import React, { Component } from "react";
import Navbar from "./components/Navbar";

// This is obviously a very barebones example; in the real world
// we may have all kinds of things happening at the root level
// (i.e. StoreProvider, ThemeProvider, etc) as well as a Layout or
// View component

class App extends Component {
    render() {
        return (
            <div>
                <Navbar />
                {/* content here */}
            </div>
        );
    }
}

export default App;
