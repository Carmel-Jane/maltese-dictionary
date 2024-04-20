import { useState, useContext } from "react";
import { InputContext } from "../App";
import { useNavigate } from 'react-router-dom';


const malteseCross = '/images/maltesecross.png';

const Header = () => {
    const [value, setValue] = useState("");
    const { inputValue, setInputValue } = useContext(InputContext);

    const navigate = useNavigate();

    const handleInputChange = (e) => {
        setValue(e.target.value);
    };

    const handleSubmit = () => {
        setInputValue(value);
        setValue("");
        navigate('/');
    };

    const handleInputKeyDown = (e) => {
        if (e.key === "Enter") {
            setInputValue(value);
            setValue("");
            navigate('/');
        }
    };
    return (
        <div className="bg-gray-700">
            <div className="container mx-auto py-8 relative">
                <div className="flex justify-center items-center position-relative">
                    <img
                        src={malteseCross}
                        alt="Maltese Cross"
                        className="h-16 w-16 absolute left-0 top-1/2 transform -translate-y-1/2"
                    />
                    <h1 className="text-3xl font-bold text-center text-white mx-4">English to Maltese Dictionary</h1>
                    <img
                        src={malteseCross}
                        alt="Maltese Cross"
                        className="h-16 w-16 absolute right-0 top-1/2 transform -translate-y-1/2"
                    />
                </div>
                <p className="text-center mt-1 mb-10 text-slate-300 text-lg">Find Maltese Words</p>
                <div className="flex item-center justify-center mt-5">
                    <div className="flex border-2 border-gray-200 rounded">
                        <input
                            className="px-4 py-2 md:w-80"
                            type="text"
                            placeholder="Search for a word"
                            onChange={handleInputChange}
                            value={value}
                            onKeyDown={handleInputKeyDown}
                        />
                        <button
                            className="bg-blue-400 border-l px-4 py-2"
                            onClick={handleSubmit}
                        >
                            Search
                        </button>
                    </div>
                </div>
                {inputValue && (
                    <h3 className="text-gray-50 text-center mt-4">
                        Result for: <span className="text-white font-bold">{inputValue}</span>
                    </h3>
                )}
            </div>
        </div>
    );
};

export default Header;