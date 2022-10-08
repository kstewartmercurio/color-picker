import React from "react";
import ReactDOM from "react-dom";

class Comp extends React.Component {
    render() {
        return <p>welcome to the color picker app</p>;
    }
}

ReactDOM.render(<Comp/>, document.getElementById("root"));