import React, { useEffect, useState, useContext } from "react";
import { InputContext } from "../App";
import { fetchResults } from "../utils/api";
import { Link } from "react-router-dom";


const Results = () => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { inputValue } = useContext(InputContext);

  useEffect(() => {
    const fetchData = async () => {
      if (inputValue.length) {
        try {
          setLoading(true);
          const data = await fetchResults(inputValue);
          setResponse(data);
          setError(null);
        } catch (error) {
          setError("An error occurred while fetching data.");
        } finally {
          setLoading(false);
        }
      }
    };

    fetchData();
  }, [inputValue]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return (
      <h3 className="text-center mt-10 font-semibold text-gray-500">
        Error - {error}
      </h3>
    );
  }

  return (
    <div className="container mx-auto p-4 max-w-2xl">
      {response && (
        <div>
          <h3>{response.results.length} results for {inputValue}</h3>
          <h3 className="text-2xl font-bold mt-4">Translations</h3>
          {response.results.map((result, index) => (
            <div key={index} className="p-4 border rounded mt-4 bg-gray-100">
  <Link to={`/word/${result.lexeme._id}`} className="text-blue-500 underline flex items-center">See more details about '{result.lexeme.lemma}'
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 ml-2">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
</Link>
<div className="text-lg font-sans">
    <p className="text-black">Maltese: <span className="text-red-800">{result.lexeme.lemma}</span></p>
    {result.lexeme.glosses.map((gloss, index) => (
        <p key={index}>English Translation: <span className="text-blue-900">{gloss.gloss}</span></p>
    ))}
</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Results;