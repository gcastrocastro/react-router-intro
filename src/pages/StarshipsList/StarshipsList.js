import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

function StarshipsList(props) {
    const [ships, setShips] = useState([]);

    //helper function for performing AJAX
    const fetchShips = async () => {
        try{
            //1. use the fetch function to make an HTTP request to SWAPI
            const response = await fetch('https://swapi.dev/api/starships/'); //this can either be RESOLVED or REJECTED
            //2. take the response object that gets returned from the fetch function and parse its incoming json body
            const shipData = await response.json();
            //3. set the ships state with the returned JSON data
            setShips(shipData.results);
        }catch(error){

        }
    }

    // useEffect allows us to tap into affectal behavior: how and when this function is run
    useEffect(() => {
        fetchShips();
    }, []) //dependency array to ensure fetchShips is only run if a condition is met

    return (
        <div className="starships-list">
            {ships.map(ship => {
                const {name, url} = ship;
                const path = url.split('/');
                const id = path[path.length - 2];
                return (
                    <Link key={id} to={`/ships/${id}`}>
                        <h1>{name}</h1>
                    </Link>
                )
            })}
        </div>
    )
}

export default StarshipsList;