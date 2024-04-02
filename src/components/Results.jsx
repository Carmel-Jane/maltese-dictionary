import React, { useEffect, useState, useContext } from "react";
import { InputContext } from "../App";
import { fetchResults } from "../utils/api";

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
              <p>Maltese: {result.lexeme.lemma}</p>
              {result.lexeme.glosses.map((gloss, index) => (
                <p key={index}>English: {gloss.gloss}</p>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Results;