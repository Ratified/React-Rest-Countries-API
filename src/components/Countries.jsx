import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const Countries = () => {

    const [countries, setCountries] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => {
            setCountries(data)
            setLoading(false)
        })
        .catch(err => console.log(err))
        }, [])

    if(loading) return <h1>Loading...</h1>

  return (
    <div className='countries'>        
                {
                    countries.map(country => {
                        const {name, flags, capital, population, region} = country
                        return (
                            <Link to={`/country/${country.name.common}`} key={country.name.common}>
                                    <div className='country' key={name.common}>
                                        <img src={flags.png} alt={name.common} />
                                        <div className='country-details'>
                                            <h2>{name.common}</h2>
                                            <p><strong>Population:</strong> {population}</p>
                                            <p><strong>Region:</strong> {region}</p>
                                            <p><strong>Capital:</strong> {capital}</p>
                                        </div>
                                    </div>
                            </Link>
                        )
                    })
                }
    </div>
  )
}

export default Countries
