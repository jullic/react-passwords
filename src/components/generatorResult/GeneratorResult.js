import { useEffect, useRef } from 'react';
import copy from './../../resourses/copy.svg';
const GeneratorResult = (props) => {
    
    const {result} = props;
    const inputRef = useRef();
    useEffect(() => {
        inputRef.current.value = result;
    });

    const copyPassword = () => {
        navigator.clipboard.writeText(props.result)
    }

    return (
        <div className="generator__result">
            <input ref={inputRef} type="text" className="generator__result-value" readOnly={true} />
            <button onClick={copyPassword} className="generator__result-btn"><img src={copy} alt="copy" /></button>
        </div>
    );
}

export default GeneratorResult;