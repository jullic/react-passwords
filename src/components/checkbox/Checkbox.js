import { useEffect, useState } from "react";

const Checkbox = (props) => {
    const {settings} = props;
    
    const onChange = (e) => {

        props.setSymbolsSattings(props.index, e.target.checked);
    }
    return (
        <li className="generator__symbols-list-item">
            <label className="generator__symbols-list-item-label">
                <input className="generator__symbols-list-item-checkbox" type="checkbox" defaultChecked={settings.isUse} onChange={onChange}/>
                <span className="generator__symbols-list-item-custom-checkbox"></span>
                <div className="generator__symbols-list-item-name">{settings.title}</div>
            </label>
        </li>
    );
}

export default Checkbox;