import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Game() {
    const [btn1, setBtn1] = useState("#000");
    const [btn2, setBtn2] = useState("#000");
    const [btn3, setBtn3] = useState("#000");
    const [ans, setAns] = useState()
    const [count, setCount] = useState(0);

    useEffect(() => {
        randomizeColors();
    }, []);

    const randomizeColors = () => {
        // generate a random integer between 0 and 255
        const getRgb = () => Math.floor(Math.random() * 256);

        // convert an (r, g, b) value into a hex value
        const rgbToHex = (r, g, b) => {
            return ("#" + [r, g, b].map(x => {
                const hex = x.toString(16);
                return hex.length === 1 ? "0" + hex : hex;
            }).join(""));
        }

        // update the button text and change background color
        const handleGenerate = () => {
            // generate three (r, g, b) values
            const c1 = {
                r: getRgb(),
                g: getRgb(),
                b: getRgb()
            };
            const c2 = {
                r: getRgb(),
                g: getRgb(),
                b: getRgb()
            }
            const c3 = {
                r: getRgb(),
                g: getRgb(),
                b: getRgb()
            }

            // convert those (r, g, b) values to hex values
            const hex1 = rgbToHex(c1.r, c1.g, c1.b);
            const hex2 = rgbToHex(c2.r, c2.g, c2.b);
            const hex3 = rgbToHex(c3.r, c3.g, c3.b)

            // update the button text
            setBtn1(hex1);
            setBtn2(hex2);
            setBtn3(hex3);

            // choose the new background color and update ans accordingly
            const backgroundVal = Math.floor(Math.random() * 3);
            switch (backgroundVal) {
                case 0:
                    document.body.style.backgroundColor = hex1;
                    setAns(0);
                    break;
                case 1:
                    document.body.style.backgroundColor = hex2;
                    setAns(1);
                    break;
                case 2:
                    document.body.style.backgroundColor = hex3;
                    setAns(2);
                    break;
                default:
                    break;
            };
        }

        handleGenerate();
    }

    const handleClick = (i) => {
        // check if the correct button was clicked and update count accordingly
        if (ans === i) {
            setCount((prev) => prev + 1);
        }

        // get new button hex values
        randomizeColors();
    }

    return (
        <div>
            <div className="btnRow">
                <button className="btn" onClick={() => handleClick(0)}>
                    {btn1}
                </button>
                <button className="btn" onClick={() => handleClick(1)}>
                    {btn2}
                </button>
                <button className="btn" onClick={() => handleClick(2)}>
                    {btn3}
                </button>
            </div>
            <p className="count">correct guesses: {count}</p>
        </div>
    );
}

ReactDOM.render(<Game/>, document.getElementById("root"));