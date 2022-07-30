import React from 'react';
import { useNavigate } from "react-router-dom";

const Country = (props) => {
    const { name, area, coatOfArms, capital, ccn3 } = props.country
    // console.log(props.country.capital)
    let navigate = useNavigate();

    return (
        <>
            <div className=' border-2 grid grid-cols-2 items-center'>
                <img className='w-24' src={coatOfArms.png} alt="" />
                <div className='text-right'>
                    <p className='font-bold text-2xl'>Country: {name.common}</p>
                    <p>Area: {area}</p>
                    <p>Country Id: <span className='text-red-500 font-bold text-lg'>{ccn3}</span> </p>
                    <p>capital: {capital}</p>

                    <button onClick={() => navigate(`/country/${ccn3}`)} className='border-2 px-2 rounded-md border-red-500'>Detail</button>
                </div>
            </div>
        </ >
    );
};

export default Country;