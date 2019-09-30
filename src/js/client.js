import React from "react"
import ReactDOM from "react-dom";

class Layout extends React.Component {
    render() {
        return (
            <h1>It's {this.get_result(114514)}!</h1>
        );
    }

    get_result(num) {
        return 1 + num;
    }
}

const app = document.getElementById('app');
ReactDOM.render(<Layout />, app);
