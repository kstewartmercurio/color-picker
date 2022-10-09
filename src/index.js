import React, {useState} from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Game() {
    const color1 = ("#" + Math.floor(Math.random() * 16777215).toString(16));
    const [btn1, setBtn1] = useState(color1);
    const color2 = ("#" + Math.floor(Math.random() * 16777215).toString(16))
    const [btn2, setBtn2] = useState(color2);
    const color3 = ("#" + Math.floor(Math.random() * 16777215).toString(16))    
    const [btn3, setBtn3] = useState(color3);
    
    const [count, setCount] = useState(0);

    const backgroundVal = Math.floor(Math.random() * 3);
    let answer;
    switch (backgroundVal) {
        case 0:
            document.body.style.backgroundColor = color1;
            answer = 0;
            break;
        case 1:
            document.body.style.backgroundColor = color2;
            answer = 1;
            break;
        case 2:
            document.body.style.backgrounColor = color3;
            answer = 2;
            break;
        default:
            break;
    };
    const [ans, setAns] = useState(answer);
    console.log(ans);


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
                setAns(0);
                break;
            case 1:
                document.body.style.backgroundColor = color2;
                setAns(1);
                break;
            case 2:
                document.body.style.backgrounColor = color3;
                setAns(2);
                break;
            default:
                break;
        };
    }

    return (
        <div>
            <div className="btnRow">
                <button className="btn" onClick={() => {
                    if (ans === 0) {
                        setCount((prev) => prev + 1);
                    }
                    changeButtons();
                }}>
                    {btn1}
                </button>
                <button className="btn" onClick={() => {
                    if (ans === 1) {
                        setCount((prev) => prev + 1);
                    }
                    changeButtons();
                }}>
                    {btn2}
                </button>
                <button className="btn" onClick={() => {
                    if (ans === 2) {
                        setCount((prev) => prev + 1);
                    }
                    changeButtons();
                }}>
                    {btn3}
                </button>
            </div>
            <p className="count">correct guesses: {count}</p>
        </div>
    );
}

ReactDOM.render(<Game/>, document.getElementById("root"));