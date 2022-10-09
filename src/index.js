import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Game() {
    const color1 = ("#" + Math.floor(Math.random() * 16777215).toString(16));
    const [btn1, setBtn1] = useState(color1);
    const color2 = ("#" + Math.floor(Math.random() * 16777215).toString(16))
    const [btn2, setBtn2] = useState(color2);
    const color3 = ("#" + Math.floor(Math.random() * 16777215).toString(16))    
    const [btn3, setBtn3] = useState(color3);

    const backgroundVal = Math.floor(Math.random() * 3);
        switch (backgroundVal) {
            case 0:
                document.body.style.backgroundColor = color1;
                break;
            case 1:
                document.body.style.backgroundColor = color2;
                break;
            case 2:
                document.body.style.backgrounColor = color3;
                break;
        };


    const changeButtons = () => {
        const color1 = ("#" + Math.floor(Math.random() * 16777215).toString(16));
        setBtn1(color1);
        const color2 = ("#" + Math.floor(Math.random() * 16777215).toString(16));
        setBtn2(color2);
        const color3 = ("#" + Math.floor(Math.random() * 16777215).toString(16));
        setBtn3(color3);

        const backgroundVal = Math.floor(Math.random() * 3);
        switch (backgroundVal) {
            case 0:
                document.body.style.backgroundColor = color1;
                break;
            case 1:
                document.body.style.backgroundColor = color2;
                break;
            case 2:
                document.body.style.backgrounColor = color3;
                break;
        };
    }

    return (
        <div className="btnRow">
            <button className="btn" onClick={changeButtons}>
                {btn1}
            </button>
            <button className="btn" onClick={changeButtons}>
                {btn2}
            </button>
            <button className="btn" onClick={changeButtons}>
                {btn3}
            </button>
        </div>
    );
}

ReactDOM.render(<Game/>, document.getElementById("root"));