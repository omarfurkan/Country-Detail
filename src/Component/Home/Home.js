import React, { useContext } from 'react';
import { CountryContext } from '../../App';
import Country from '../Country/Country';

const Home = () => {

    const [countries] = useContext(CountryContext)

    return (
        <div>
            <h1 className='my-2 text-2xl'>Total Number of Countries: {countries.length}</h1>
            <div className='grid grid-cols-4 gap-4'>
                {countries.map((country) => <Country
                    key={country.ccn3}
                    country={country}
                />)}
            </div>
        </div>
    );
};

export default Home;