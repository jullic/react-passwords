import { useRef, useState } from "react";

const GeneratorSlider = (props) => {

    const [passwordLength, setPasswordLength] = useState(10);

    const onChange = (e) => {
        setPasswordLength((passwordLength) => e.target.value);
        props.setPasswordLength(e.target.value);
    };


    return (
        <div className="generator__slider">
            <div className="generator__slider-text">Длина пароля:</div>
            <input className="generator__slider-input" id="fader" type="range" min="1" max="50" defaultValue={passwordLength} step="1" onChange={onChange}/>
            <output className="generator__slider-value">{passwordLength}</output>
        </div>
    );
};

export default GeneratorSlider;