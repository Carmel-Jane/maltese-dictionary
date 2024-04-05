import { useParams } from 'react-router-dom';
import React, {useEffect, useState} from 'react';
import { fetchWordDetails } from '../utils/api';


const WordDetails = () => {
    const { id } = useParams();
    const [wordDetails, setWordDetails] = useState(null);

    useEffect(() => {
        fetchWordDetails(id)
          .then(data => {
            setWordDetails(data);
            console.log(data)
          })
          .catch(error => {
            console.error("An error occurred while fetching word details:", error);
          });
      }, [id]);
      
    return (
        <div>
            <h1>Word Details</h1>
            {wordDetails && (
                <div>
                    <p>Maltese: {wordDetails.lemma}</p>
                    <p>Part of Speech: {wordDetails.pos}</p>
                    {wordDetails.root && <p>Root: {wordDetails.root.radicals}</p>}
                    {wordDetails.phonetic ? (
                        <p>Phonetic: {wordDetails.phonetic}</p>
                    ) : (
                        <p>No phonetic available</p>
                    )}
                    {wordDetails.glosses.map((gloss, index) => (
                        <div key={index}>
                            <p>English Translation: {gloss.gloss}</p>
                            {gloss.examples ? (
                                <ul>
                                    {gloss.examples.map((example, index) => (
                                        <li key={index}>Example: {example.example}</li>
                                    ))}
                                </ul>
                            ) : (
                                <p>No examples available</p>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
              }
    export default WordDetails