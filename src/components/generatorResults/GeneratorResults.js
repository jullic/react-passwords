import GeneratorResult from "../generatorResult/GeneratorResult";

const GeneratorResults = (props) => {
    
    return (
        <div className="generator__results">
            {props.results.map((result, i) => <GeneratorResult result={result} key={i}/>)}
        </div>
    );
}
export default GeneratorResults;