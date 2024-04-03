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
                    <p>Root: {wordDetails.root}</p>
                    <p>Phonetic: {wordDetails.phonetic}</p>
                    <p>Related: {wordDetails.related}</p>
                    {wordDetails.glosses.map((gloss, index) => (
                        <div key={index}>
                            <p>English: {gloss.gloss}</p>
                            {gloss.examples ? (
                                <ul>
                                    {gloss.examples.map((example, index) => (
                                        <li key={index}>{example.example}</li>
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