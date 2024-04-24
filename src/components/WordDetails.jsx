import { useParams, Link, useNavigate} from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { fetchWordDetails, fetchRelatedLexemes } from '../utils/api';

const WordDetails = () => {
    const { id } = useParams();
    const [wordDetails, setWordDetails] = useState(null);
    const [relatedLexemes, setRelatedLexemes] = useState(null);
    const navigate = useNavigate()
 
    
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
            })
            .catch(error => {
                console.error("An error occurred while fetching related lexemes:", error);
            });
    }, [id]);

    return (
        <div className="container mx-auto p-4 max-w-2xl">
   <button onClick={() => navigate(-1)} className="text-blue-500 underline text-lg px-4 py-2 flex items-center">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 mr-2">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
    </svg>
    Go Back To Results 
</button>
            <h1 className="text-2xl font-bold mt-4">Word Details</h1>
            {wordDetails && (
                <div className="p-4 border rounded mt-4 bg-gray-100 text-lg font-sans">
                <p className="text-center text-2xl font-bold"><span className="text-red-800">{wordDetails.lemma}</span></p>
                <p>Part of Speech: <span className="text-gray-600">{wordDetails.pos}</span></p>
{wordDetails.root && <p>Root: <span className="text-gray-600">{wordDetails.root.radicals}</span></p>}
{wordDetails.phonetic ? (
    <p>Phonetic: <span className="text-gray-600">{wordDetails.phonetic}</span></p>
) : (
    <p>No phonetic available</p>
)}
                    {wordDetails.glosses.map((gloss, index) => (
                        <div key={index}>
                            <p>English Translation: <span className="text-blue-900">{gloss.gloss}</span></p>
                            {gloss.examples ? (
                                <ul>
                                   {gloss.examples.map((example, index) => (
    <li key={index}>Example: <span className="text-red-800">{example.example}</span></li>
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
                        <div key={index} className="p-4 border rounded mt-4 bg-gray-100 text-lg font-sans">
                            <Link to={`/word/${lexeme._id}`} className="text-blue-500 underline flex items-center">Go to Word Details
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 ml-2">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
</Link>
                            <p className="text-black">Maltese: <span className="text-red-800">{lexeme.lemma}</span></p>
                            {lexeme.glosses.map((gloss, index) => (
                                <p key={index}>English Translation: <span className="text-blue-900">{gloss.gloss}</span></p>
                            ))}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );}
export default WordDetails;
