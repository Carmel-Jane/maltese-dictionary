import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { InputContext } from "../App";

axios.defaults.baseURL = 'https://mlrs.research.um.edu.mt/resources/gabra-api'

const Results =() =>{
const [response, setResponse] = useState(null)
const [error, setError] = useState("")
const [loading, setLoading] = useState(false)
const { inputValue } = useContext(InputContext)

const fetchResults = async (param) => {
    try{
        setLoading(true)
        const res = await axios.get(`/lexemes/search?s=${param}`)
        setResponse(res.data)
        setError(null)
        setLoading(false)
    } catch (error) {
        setError("An error occurred while fetching data.")
        setLoading(false)
    }
}

useEffect(() => {
if(inputValue.length){
    fetchResults(inputValue)
}
}, [inputValue])

if(loading){
    return <h1>Loading...</h1>
}

if(error)
{
return <h3 className ="text-center mt-10 font-semibold text-gray-500">Error - no definitions found</h3>
}
return(
    <div className="container mx-auto p-4 max-w-2xl">
<div>
<h3 className="text-2xl font-bold mt-4">Definitions</h3>
<h3 className="text-2xl font-bold mt-4">Root and root type</h3>
    </div>
    </div>
)
}

export default Results;