import React, {useState, useEffect} from 'react'
import { useSelector } from 'react-redux'
import ResultList from '../components/ResultList'
import FilterableResultsList from '../components/ResultList'

const Results = () => {
    const [parks, setParks] = useState([]);
    const location = useSelector((state) => state.match.location);
    const key = 'iQrmXuDxZgzQL0R3OhL6xeROMVzq7BvWrMz2kWQs';
    const NPS_URL = 'https://developer.nps.gov';

    useEffect(()=>{
        getParks();
        console.log(parks);
    },[]);

    const getParks = () => {
        console.log({location});
        fetch(`${NPS_URL}/api/v1/parks?stateCode=${location}&api_key=${key}`)
        .then((response => response.json()))
        .then((results) =>{
            console.log("data:" + results.data);
            setParks(results.data);
        })
        .catch((err)=> {
            console.log("error", err);
        })
    }

    return(
        <div className="main-container">
            <div>
                <FilterableResultsList results = {parks} />
            </div>
        </div>
    )
}

export default Results;