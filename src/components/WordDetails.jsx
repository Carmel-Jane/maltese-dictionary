import { useParams, Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { fetchWordDetails, fetchRelatedLexemes } from '../utils/api';

const WordDetails = () => {
    const { id } = useParams();
    const [wordDetails, setWordDetails] = useState(null);
    const [relatedLexemes, setRelatedLexemes] = useState(null);

    useEffect(() => {
        fetchWordDetails(id)
          .then(data => {
            setWordDetails(data);
          })
          .catch(error => {
            console.error("An error occurred while fetching word details:", error);
          });

        fetchRelatedLexemes(id)
            .then(words => {
                setRelatedLexemes(words);
                console.log(words);
            })
            .catch(error => {
                console.error("An error occurred while fetching related lexemes:", error);
            });
    }, [id]);

    return (
        <div className="container mx-auto p-4 max-w-2xl">
            <h1 className="text-2xl font-bold mt-4">Word Details</h1>
            {wordDetails && (
                <div className="p-4 border rounded mt-4 bg-gray-100">
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
                            <p>English Definition: {gloss.gloss}</p>
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
            {relatedLexemes && (
                <div>
                    <h3 className="text-2xl font-bold mt-4">Related Words</h3>
                    {relatedLexemes.map((lexeme, index) => (
                        <div key={index} className="p-4 border rounded mt-4 bg-gray-100">
                            <Link to={`/word/${lexeme._id}`}>Go to Word Details</Link>
                            <p>Maltese: {lexeme.lemma}</p>
                            {lexeme.glosses.map((gloss, index) => (
                                <p key={index}>English Translation: {gloss.gloss}</p>
                            ))}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default WordDetails;
