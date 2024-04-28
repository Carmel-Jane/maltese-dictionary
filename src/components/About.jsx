import React from 'react';

const About = () => {
    return (
        <div className="container mx-auto p-4 max-w-2xl">
            <h1 className="text-2xl font-bold mt-4">About</h1>
            <div className="p-4 border rounded mt-4 bg-gray-100 text-lg font-sans">
                <p>This is an English to Maltese dictionary. This dictionary utilises the Ġabra API. Ġabra is a free, open lexicon for Maltese. To see more information about the Ġabra project and the Ġabra API, visit <a href="https://mlrs.research.um.edu.mt/resources/gabra/" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">here</a>.</p>
            </div>
            <h2 className="text-2xl font-bold mt-4">How to Use</h2>
            <div className="p-4 border rounded mt-4 bg-gray-100 text-lg font-sans">
    <ul>
        <li><strong>Type in an English word</strong> on the search bar.</li>
        <li>The search results will show <strong>Maltese translations</strong> of the searched word, and their English translation underneath.</li>
        <li>For more information about each Maltese translation, <strong>click on the link</strong> above the word that says 'See more details'.</li>
        <li>This will take you to a page which shows the <strong>word root, phonetics, and example Maltese sentences</strong> using the word.</li>
        <li>Underneath this, the page will display <strong>related words</strong> to the current word.</li>
    </ul>
</div>
</div>
    );
};
export default About;