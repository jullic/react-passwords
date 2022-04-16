import { useEffect, useState } from "react";
import GeneratorResults from "../generatorResults/GeneratorResults";
import GeneratorSettings from "../generatorSettings/GeneratorSettings";

const Generator = () => {
    const [passwordLength, setPasswordLength] = useState(10);
    const [symbols, setSymbols] = useState([]);
    const [symbolsSettings, setSymbolsSattings] = useState([
        {title: 'Цифры', isUse: true, symbols: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]},
        {title: 'Латинские строчные', isUse: true, symbols: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']},
        {title: 'Латинские заглавные', isUse: false, symbols: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']},
        {title: 'Спецаильные символы', isUse: false, symbols: ['!', '@', '#', '$', '%', '-']},
        {title: 'Дополнительные символы', isUse: false, symbols: ['^', '&', '*', '(', ')', '_', '+', '~', '"', '№', ';', '%', ':', '?', '=', '[', ']', '{', '}']},
    ]);
    const [results, setResults] = useState(['', '', '', '', '']);


    
    const handleSetSymbolsSattings = (index, isUse) => {
        let bufer = JSON.parse(JSON.stringify(symbolsSettings));
        bufer[index].isUse = isUse;
        setSymbolsSattings(bufer);
    }
    
    const changeSymbols = () => {
        
        setSymbols([]);
        symbolsSettings.forEach(setting => {
            if (setting.isUse) {
                setSymbols((symbols) => [...symbols, setting.symbols]);
            }
        });
    }
    
    useEffect(() => {
        changeSymbols();
        
    }, [symbolsSettings]);
    
    
    const handleSetPasswordLength = (passwordLength) => {
        setPasswordLength(passwordLength);
    };


    const getRandomResult = (passwordLength = null, symbols = null) => {
        if (passwordLength === null || symbols === null) {
            return ['', '', '', '', ''];
        }
        let passwords = [];
        if (symbols.length === 0) {
            return ['', '', '', '', ''];
        }
        for (let i = 0; i < 5; i++) {
            let password = '';
            for (let i = 0; i < passwordLength; i++) {
                let randGroupSymb = Math.round(Math.random() * (symbols.length - 1));
                let randSymb = Math.round((symbols[randGroupSymb].length - 1) * Math.random());
                
                password += symbols[randGroupSymb][randSymb];
            }
            passwords.push(password);
        }
        setResults(passwords);
        
        return passwords;
    }
    

    return (
        <div className="generator">
            <h1 className="generator__title">Генератор паролей</h1>
            <div className="generator__wrapper">
                <GeneratorSettings symbolsSettings={symbolsSettings} setPasswordLength={handleSetPasswordLength} setSymbolsSattings={handleSetSymbolsSattings}/>
                <GeneratorResults passwordLength={passwordLength} symbols={symbols} results={results}/>
            </div>
            <button onClick={() => getRandomResult(passwordLength, symbols)} className="generator__btn">Сгенерировать</button>
        </div>
    );
}

export default Generator;