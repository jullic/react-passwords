import GeneratorSlider from "../generatorSlider/GeneratorSlider";
import GeneratorSymbols from "../generatorSymbols/GeneratorSymbols";

const GeneratorSettings = (props) => {

    return (
        <div className="generator__settings">
            <GeneratorSlider setPasswordLength={props.setPasswordLength}/>
            <GeneratorSymbols symbolsSettings={props.symbolsSettings} setSymbolsSattings={props.setSymbolsSattings}/>
        </div>
    );
}

export default GeneratorSettings;