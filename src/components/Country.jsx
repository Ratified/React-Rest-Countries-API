import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Country = () => {
    const { name } = useParams();
    const [country, setCountry] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://restcountries.com/v3.1/name/${name}`)
            .then(res => res.json())
            .then(data => {
                setCountry(data[0]); // Assuming you're expecting only one country
                setLoading(false);
            })
            .catch(err => console.log(err));
    }, [name]); // Fetch data when the name changes

    if (loading) return <h1>Loading...</h1>;

    return (
        <div className='country-page'>
            <h1>{country.name ? country.name.common : 'Country Name'}</h1>
            <div>
                <img src={country.flags ? country.flags.png : ''} alt={country.name ? country.name.common : 'Country Name'} />
                <div className='country-details'>
                    <p><strong>Population:</strong> {country.population ? country.population : 'Unknown'}</p>
                    <p><strong>Region:</strong> {country.region ? country.region : 'Unknown'}</p>
                    <p><strong>Capital:</strong> {country.capital ? country.capital : 'Unknown'}</p>
                </div>
            </div>
        </div>
    );
}

export default Country;