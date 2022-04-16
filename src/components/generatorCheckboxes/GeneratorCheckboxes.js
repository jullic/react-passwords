import { useEffect, useState } from "react";
import Checkbox from "../checkbox/Checkbox";

const GeneratorCheckboxes = (props) => {
    
    return (
        <ul className="generator__symbols-list">
            {props.symbolsSettings.map((settings, i) => <Checkbox key={i} index={i} settings={settings} setSymbolsSattings={props.setSymbolsSattings}/>)}
        </ul>
    );
};

export default GeneratorCheckboxes;