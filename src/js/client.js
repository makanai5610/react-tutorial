import React from "react"
import ReactDOM from "react-dom";

class Layout extends React.Component {
    render() {
        let name = "Name";
        return (
            <h1>It's {name}!</h1>
        );
    }
}

const app = document.getElementById('app');
ReactDOM.render(<Layout />, app);
