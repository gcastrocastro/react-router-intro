import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

function Starship(props) {
    //extract the id url param using the useParams hook
    const {id} = useParams();
    //construct a url for fetching starship details
    const url = `https://swapi.dev/api/starships/${id}`
    //initialize starship state
    const [starship, setStarship] = useState(null);
    //fetch starship details and use the corresponding data to set state
    const fetchShip = async () => {
        try {
            const response = await fetch(url);
            const shipData = await response.json();
            setStarship(shipData);
        } catch (error) {
            
        }
    }
    // use useEffect hook to invoke our fetch function once when component loads
    useEffect(() => {
        fetchShip();
    }, []);
    //conditionally render a loaded or loading component depending on whether or not we have starship data 
    const loading = () => {
        return <h1>Loading</h1>
    };
    const loaded = () => {
        return(
        <div>
            <h2>{starship.name}</h2>
            <div>
                <h3>Features</h3>
                <ul>
                    <li>Starship Class: {starship.starship_class}</li>
                    <li>Capacity: {starship.starship_capacity}</li>
                    <li>Crew (size): {starship.crew}</li>
                    <li>Passengers: {starship.passengers}</li>
                    <li>Manufacturer: {starship.manufacturer}</li>
                    <li>HD Rating: {starship.hyperdrive_rating}</li>
                </ul>
            </div>
            <div>
                <h3>Star Wars Stats</h3>
                <ul>
                    <li>Appears in {starship.films?.length} film{starship.films?.length > 1 ? 's' : ''}</li>
                </ul>
            </div>
        </div>
        )
    };

    return <section>{starship ? loaded() : loading()}</section>;
}

export default Starship;