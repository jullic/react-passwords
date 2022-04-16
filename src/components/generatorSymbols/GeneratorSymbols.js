import GeneratorCheckboxes from "../generatorCheckboxes/GeneratorCheckboxes"

const GeneratorSymbols = (props) => {

    return (
        <div className="generator__symbols">
            <div className="generator__symbols-title">Настройки символов</div>
            <GeneratorCheckboxes symbolsSettings={props.symbolsSettings} setSymbolsSattings={props.setSymbolsSattings}/>
        </div>
    );
};

export default GeneratorSymbols;